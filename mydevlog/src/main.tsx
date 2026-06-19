import { ViteReactSSG } from 'vite-react-ssg';
import App from './App';
import './index.css';
import { articles, getAllCategories, getAllTags } from './data/articles';

// vite-react-ssg entry — defines ALL routes that get pre-rendered to static HTML
export const createRoot = ViteReactSSG({
  routes: [
    { path: '/', element: <App /> },
    { path: '/blog', element: <App /> },
    { path: '/about', element: <App /> },
    { path: '/contact', element: <App /> },
    { path: '/newsletter', element: <App /> },
    { path: '/news', element: <App /> },
    { path: '/author/mohamed-mydeen', element: <App /> },
    // Personal brand pages
    { path: '/who-is-mohamed-mydeen', element: <App /> },
    { path: '/my-story', element: <App /> },
    { path: '/building-mydeen-ai', element: <App /> },
    { path: '/from-failure-to-class-topper', element: <App /> },
    // Pre-render every article
    ...articles.map(a => ({ path: `/article/${a.slug}`, element: <App /> })),
    // Pre-render every category page
    ...getAllCategories().map(cat => ({
      path: `/category/${cat.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`, element: <App />
    })),
    // Pre-render every tag page
    ...getAllTags().map(tag => ({
      path: `/tag/${tag.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`, element: <App />
    })),
  ],
});
