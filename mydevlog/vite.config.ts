import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';

import type { UserConfig } from 'vite';
import type { ViteReactSSGOptions } from 'vite-react-ssg';
import sitemap from 'vite-plugin-sitemap';
// Article slugs for sitemap pre-render list
import { articles, getAllCategories, getAllTags } from './src/data/articles';

const slugify = (s: string) =>
  s.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

const dynamicRoutes = [
  '/about',
  '/blog',
  '/contact',
  '/newsletter',
  ...articles.map(a => `/article/${a.slug}`),
  ...getAllCategories().map(c => `/category/${slugify(c)}`),
  ...getAllTags().map(t => `/tag/${slugify(t)}`),
  '/author/mohamed-mydeen',
  // Personal brand pages
  '/who-is-mohamed-mydeen',
  '/my-story',
  '/building-mydeen-ai',
  '/from-failure-to-class-topper',
];

interface ViteUserConfig extends UserConfig {
  ssgOptions?: ViteReactSSGOptions;
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Auto-generate sitemap.xml with all static + dynamic routes
    sitemap({
      hostname: 'https://mydeenblog.vercel.app',
      dynamicRoutes,
      exclude: ['/404', '/news'],
      changefreq: 'weekly',
      priority: 0.8,
    }),
    // Gzip compression for production builds
    compression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 4096, // Only compress files > 4KB
    }),
    // Brotli compression (better than gzip, supported by modern browsers)
    compression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 4096,
    }),
  ],

  build: {
    rollupOptions: {
      output: {
        // Smart code-splitting: vendor libs into separate chunks for better caching
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor';
            }
            if (id.includes('react-router-dom')) {
              return 'router';
            }
            if (id.includes('framer-motion')) {
              return 'motion';
            }
            if (id.includes('lucide-react')) {
              return 'icons';
            }
            if (id.includes('react-syntax-highlighter')) {
              return 'syntax-highlighter';
            }
          }
        },
      },
    },
    // Generate source maps for debugging (disable in final prod if needed)
    sourcemap: false,
    // Target modern browsers for smaller bundles
    target: 'es2020',
    // Increase chunk size warning limit for syntax highlighter
    chunkSizeWarningLimit: 700,
  },

  // SSG: vite-ssg looks for this to understand routes
  ssgOptions: {
    script: 'async',
    includedRoutes() {
      // Define the base static routes + all dynamic routes
      return [
        '/',
        '/blog',
        '/about',
        '/contact',
        '/newsletter',
        '/news',
        ...dynamicRoutes
      ];
    },
    crittersOptions: {
      // Inline critical CSS for faster LCP
      preload: 'swap',
    },
    onPageRendered(_route, renderedHTML) {
      // Hoist Helmet SEO tags (title, meta, canonical link, ld+json scripts) from #root into <head>
      const rootStartTagMatch = renderedHTML.match(/<div id="root"[^>]*>/);
      if (!rootStartTagMatch || rootStartTagMatch.index === undefined) return renderedHTML;

      const rootStartIndex = rootStartTagMatch.index + rootStartTagMatch[0].length;
      const rootEndIndex = renderedHTML.lastIndexOf('</div>');
      if (rootEndIndex === -1 || rootEndIndex <= rootStartIndex) return renderedHTML;

      let rootContent = renderedHTML.slice(rootStartIndex, rootEndIndex);
      const headTags: string[] = [];

      // Extract title
      rootContent = rootContent.replace(/<title>[\s\S]*?<\/title>/g, (match) => {
        headTags.push(match);
        return '';
      });

      // Extract SEO meta tags
      rootContent = rootContent.replace(/<meta\s+[^>]*?>/g, (match) => {
        headTags.push(match);
        return '';
      });

      // Extract canonical and preload links rendered by Helmet
      rootContent = rootContent.replace(/<link\s+(?:[^>]*?rel=["'](?:canonical|preload)["'][^>]*?)>/g, (match) => {
        headTags.push(match);
        return '';
      });

      // Extract json-ld scripts
      rootContent = rootContent.replace(/<script\s+type=["']application\/ld\+json["']>[\s\S]*?<\/script>/g, (match) => {
        headTags.push(match);
        return '';
      });

      if (headTags.length === 0) return renderedHTML;

      const beforeRoot = renderedHTML.slice(0, rootStartIndex);
      const afterRoot = renderedHTML.slice(rootEndIndex);

      let newHTML = beforeRoot + rootContent + afterRoot;
      newHTML = newHTML.replace('</head>', `    ${headTags.join('\n    ')}\n  </head>`);

      return newHTML;
    },
  },
} as ViteUserConfig);
