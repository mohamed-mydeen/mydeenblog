import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SITE_URL, SITE_NAME, AUTHOR_NAME } from './schemas';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: 'website' | 'article' | 'profile';
  ogImage?: string;
  ogImageAlt?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  noIndex?: boolean;
  // Article-specific OG
  articlePublishedTime?: string;
  articleModifiedTime?: string;
  articleAuthor?: string;
  articleSection?: string;
  articleTags?: string[];
  // JSON-LD
  schema?: object | object[];
  // Extra keywords
  keywords?: string;
}

const DEFAULT_OG_IMAGE = `${SITE_URL}/og/og-default.png`;
const TWITTER_HANDLE = '@mohamedmydeen'; // TODO: update with real handle

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonical,
  ogType = 'website',
  ogImage = DEFAULT_OG_IMAGE,
  ogImageAlt,
  twitterCard = 'summary_large_image',
  noIndex = false,
  articlePublishedTime,
  articleModifiedTime,
  articleAuthor = AUTHOR_NAME,
  articleSection,
  articleTags = [],
  schema,
  keywords,
}) => {
  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} — Mohamed Mydeen | Full Stack & AI Engineer`;

  const metaDescription =
    description ||
    'In-depth technical articles on React.js, JavaScript, AI engineering, full stack development, and software career growth by Mohamed Mydeen Shahabudeen.';

  const canonicalUrl = canonical
    ? canonical.startsWith('http') ? canonical : `${SITE_URL}${canonical}`
    : SITE_URL;

  // Normalize schema to always render as array of <script> tags
  const schemas = schema
    ? Array.isArray(schema) ? schema : [schema]
    : [];

  return (
    <Helmet>
      {/* ── Primary Meta ───────────────────────────────────────── */}
      <html lang="en" />
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={AUTHOR_NAME} />
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'} />
      <link rel="canonical" href={canonicalUrl} />

      {/* ── Open Graph ─────────────────────────────────────────── */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={ogImageAlt || fullTitle} />
      <meta property="og:locale" content="en_US" />

      {/* ── Article OG ─────────────────────────────────────────── */}
      {ogType === 'article' && articlePublishedTime && (
        <meta property="article:published_time" content={articlePublishedTime} />
      )}
      {ogType === 'article' && articleModifiedTime && (
        <meta property="article:modified_time" content={articleModifiedTime} />
      )}
      {ogType === 'article' && (
        <meta property="article:author" content={articleAuthor} />
      )}
      {ogType === 'article' && articleSection && (
        <meta property="article:section" content={articleSection} />
      )}
      {ogType === 'article' && articleTags.map(tag => (
        <meta key={tag} property="article:tag" content={tag} />
      ))}

      {/* ── Twitter Card ───────────────────────────────────────── */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={TWITTER_HANDLE} />
      <meta name="twitter:creator" content={TWITTER_HANDLE} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={ogImageAlt || fullTitle} />

      {/* ── JSON-LD Structured Data ─────────────────────────────── */}
      {schemas.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s, null, 0) }}
        />
      ))}
    </Helmet>
  );
};

export default SEOHead;
