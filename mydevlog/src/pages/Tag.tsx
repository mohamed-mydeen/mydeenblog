import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { articles, getAllTags } from '../data/articles';
import ArticleCard from '../components/ui/ArticleCard';
import SEOHead from '../seo/SEOHead';
import { collectionPageSchema, breadcrumbSchema, SITE_URL } from '../seo/schemas';

const Tag: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) return <Navigate to="/blog" replace />;

  const allTags = getAllTags();
  // Find original tag name matching the slugified version
  const tagName = allTags.find(t => t.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') === slug);

  if (!tagName) {
    return <Navigate to="/blog" replace />;
  }

  const filtered = articles.filter(a => a.tags.includes(tagName));

  return (
    <main className="pt-24 pb-20 min-h-screen">
      <SEOHead
        title={`Articles tagged with #${tagName} — Mohamed Mydeen`}
        description={`Explore all articles tagged with ${tagName} by Mohamed Mydeen. Deep technical insights and tutorials.`}
        canonical={`${SITE_URL}/tag/${slug}`}
        schema={[
          collectionPageSchema(
            `Articles tagged with ${tagName}`,
            `${SITE_URL}/tag/${slug}`,
            `Explore all articles tagged with ${tagName} by Mohamed Mydeen.`
          ),
          breadcrumbSchema([
            { name: 'Home', url: SITE_URL },
            { name: 'Blog', url: `${SITE_URL}/blog` },
            { name: `#${tagName}`, url: `${SITE_URL}/tag/${slug}` },
          ]),
        ]}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-10">
          <p className="text-[11px] font-bold text-indigo-500 uppercase tracking-widest mb-2">Tag</p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 dark:text-white tracking-tight mb-3">
            #{tagName}
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-xl">
            {filtered.length} article{filtered.length !== 1 ? 's' : ''} tagged with {tagName}.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((article, i) => (
            <ArticleCard key={article.id} article={article} index={i} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Tag;
