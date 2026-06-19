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
    crittersOptions: {
      // Inline critical CSS for faster LCP
      preload: 'swap',
    },
  },
} as ViteUserConfig);
