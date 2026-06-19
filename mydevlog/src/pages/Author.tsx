import React from 'react';

import { articles } from '../data/articles';
import ArticleCard from '../components/ui/ArticleCard';
import SEOHead from '../seo/SEOHead';
import { profilePageSchema, breadcrumbSchema, SITE_URL } from '../seo/schemas';

// Note: In a multi-author blog, this would take a slug.
// For this personal blog, we hardcode to Mohamed Mydeen.
const Author: React.FC = () => {
  return (
    <main className="pt-24 pb-20 min-h-screen">
      <SEOHead
        title="Articles by Mohamed Mydeen"
        description="Read all articles written by Mohamed Mydeen, covering full-stack development, AI, and software engineering."
        canonical={`${SITE_URL}/author/mohamed-mydeen`}
        schema={[
          profilePageSchema(),
          breadcrumbSchema([
            { name: 'Home', url: SITE_URL },
            { name: 'Author', url: `${SITE_URL}/author/mohamed-mydeen` },
          ]),
        ]}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-10 flex items-center gap-6">
          <div className="w-20 h-20 rounded-full overflow-hidden border border-slate-200 dark:border-white/10 shadow-sm flex-shrink-0">
            <img src="/my-photo.png" alt="Mohamed Mydeen" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-[11px] font-bold text-indigo-500 uppercase tracking-widest mb-1">Author</p>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight mb-2">
              Mohamed Mydeen
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              Full Stack & AI Engineer. {articles.length} articles published.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {articles.map((article, i) => (
            <ArticleCard key={article.id} article={article} index={i} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Author;
