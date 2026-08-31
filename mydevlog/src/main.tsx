import { ViteReactSSG } from 'vite-react-ssg';
import App from './App';
import './index.css';

// vite-react-ssg entry
export const createRoot = ViteReactSSG({
  routes: [
    {
      path: '/*',
      element: <App />,
    },
  ],
});
