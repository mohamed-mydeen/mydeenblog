import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SEOHead from '../seo/SEOHead';
import { SITE_URL } from '../seo/schemas';

const NotFound: React.FC = () => {
  return (
    <main className="min-h-screen flex items-center justify-center pt-20 pb-20 px-4">
      <SEOHead
        title="Page Not Found"
        description="The page you are looking for does not exist."
        canonical={`${SITE_URL}/404`}
      />
      <div className="text-center max-w-md mx-auto">
        <h1 className="font-display font-bold text-8xl text-slate-200 dark:text-white/5 mb-4">404</h1>
        <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white mb-3">Page not found</h2>
        <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved. Check the URL or navigate back to the homepage.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[13px] font-semibold hover:bg-slate-700 dark:hover:bg-slate-100 transition-colors"
        >
          <ArrowLeft size={16} /> Return Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
