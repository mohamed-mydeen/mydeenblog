import type { Article } from '../data/articles';

export const SITE_URL = 'https://mydeenblog.vercel.app';
export const SITE_NAME = 'Mydeen Dev';

// Brand Identity
export const AUTHOR_NAME       = 'Mohamed Mydeen Shahabudeen';
export const AUTHOR_DISPLAY    = 'Mohamed Mydeen';
export const AUTHOR_ALTERNATE_NAMES = [
  'Mohamed Mydeen',
  'Mohamed Mydeen Shahabudeen',
  'Mohamed Ukasha',
  'Mydeen',
  'Mydeen AI',
  'Mohamed Mydeen Developer',
  'Mohamed Mydeen Software Engineer',
  'Mohamed Mydeen Portfolio',
  'Mohamed Mydeen Blog',
  'Mohamed Mydeen FXEC',
  'Mohamed Mydeen Francis Xavier',
];
export const AUTHOR_GITHUB     = 'https://github.com/mohamed-mydeen';
export const AUTHOR_LINKEDIN   = 'https://linkedin.com/in/mohamed-mydeen4262';
export const AUTHOR_TWITTER    = 'https://twitter.com/mohamedmydeen';
export const AUTHOR_WEBSITE    = SITE_URL;
export const AUTHOR_AI_PROJECT = 'https://mydeenai.vercel.app/';

// SEO Keyword List
export const AUTHOR_KEYWORDS = [
  'Mohamed Mydeen', 'Mohamed Mydeen Shahabudeen', 'Mohamed Ukasha',
  'Mydeen portfolio', 'Mydeen AI', 'Mohamed Mydeen Blog', 'Mohamed Mydeen Portfolio',
  'Mohamed Mydeen Developer', 'Mohamed Mydeen Software Engineer',
  'Mohamed Mydeen Francis Xavier Engineering College', 'Mohamed Mydeen FXEC',
  'Mydeen FX College', 'Mohamed Mydeen CSBS', 'Francis Xavier Engineering College Student',
  'FXEC Student Mohamed Mydeen',
  'Who is Mohamed Mydeen', 'Who is Mohamed Mydeen Shahabudeen', 'Who is Mohamed Ukasha',
  'About Mohamed Mydeen', 'Mohamed Mydeen Biography', 'Mohamed Mydeen Story',
  'Mohamed Mydeen Projects', 'Mohamed Mydeen AI', 'Mohamed Mydeen Full Stack Developer',
  'Mohamed Mydeen Tirunelveli',
  'React.js developer Tamil Nadu', 'FastAPI developer India',
  'AI developer student India', 'full stack developer college student',
  'best student of the year FXEC',
];

// Knowledge Panel FAQ
export const KNOWLEDGE_PANEL_FAQS: { q: string; a: string }[] = [
  {
    q: 'Who is Mohamed Mydeen?',
    a: 'Mohamed Mydeen (full name: Mohamed Mydeen Shahabudeen, also known as Mohamed Ukasha) is a Full Stack & AI Engineer and B.Tech CSBS student at Francis Xavier Engineering College (FXEC), Tirunelveli, Tamil Nadu, India. He is known for building Mydeen AI and winning the Best Student of the Year award (2022-2023).',
  },
  {
    q: 'Who is Mohamed Mydeen Shahabudeen?',
    a: 'Mohamed Mydeen Shahabudeen is the full legal name of Mohamed Mydeen, a software developer and AI enthusiast from Tirunelveli, Tamil Nadu. He studies CSBS at Francis Xavier Engineering College and builds products like Mydeen AI, SafeCheck, and Feast At Night.',
  },
  {
    q: 'Who is Mohamed Ukasha?',
    a: 'Mohamed Ukasha is another name for Mohamed Mydeen Shahabudeen, a Full Stack Developer and AI Engineer from Tirunelveli, India. He is a B.Tech student at FXEC and the creator of Mydeen AI.',
  },
  {
    q: 'What does Mohamed Mydeen do?',
    a: 'Mohamed Mydeen is a Full Stack Developer and AI Engineer. He builds web applications using React.js, TypeScript, FastAPI, and Python. He also creates AI-powered tools and writes technical articles about software engineering, AI, and product development.',
  },
  {
    q: 'Where does Mohamed Mydeen study?',
    a: 'Mohamed Mydeen studies B.Tech in Computer Science and Business Systems (CSBS) at Francis Xavier Engineering College (FXEC), Tirunelveli, Tamil Nadu, India.',
  },
  {
    q: 'What is Mydeen AI?',
    a: 'Mydeen AI is an intelligent assistant project built by Mohamed Mydeen Shahabudeen. It is available at mydeenai.vercel.app and showcases AI integration with modern web technologies.',
  },
  {
    q: 'What projects has Mohamed Mydeen built?',
    a: 'Mohamed Mydeen has built: Mydeen AI (intelligent assistant), SafeCheck (URL security & fraud detection using machine learning), Feast At Night (food delivery concept app), and his premium engineering blog.',
  },
  {
    q: 'What is Mohamed Mydeen educational background?',
    a: 'Mohamed Mydeen is pursuing B.Tech in CSBS at Francis Xavier Engineering College (FXEC), Tirunelveli, Tamil Nadu. He won the Best Student of the Year award in 2022-2023.',
  },
  {
    q: 'Mohamed Mydeen FXEC who is this?',
    a: 'Mohamed Mydeen FXEC refers to Mohamed Mydeen Shahabudeen, a student at Francis Xavier Engineering College (FXEC) in Tirunelveli, Tamil Nadu. He is a Full Stack & AI Developer known for building Mydeen AI.',
  },
  {
    q: 'What awards has Mohamed Mydeen won?',
    a: 'Mohamed Mydeen won the Best Student of the Year award for the academic year 2022-2023 at Francis Xavier Engineering College (FXEC), Tirunelveli.',
  },
];

// Person Schema
export const personSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE_URL}/#person`,
  name: AUTHOR_NAME,
  alternateName: AUTHOR_ALTERNATE_NAMES,
  givenName: 'Mohamed',
  familyName: 'Mydeen Shahabudeen',
  additionalName: 'Ukasha',
  jobTitle: 'Full Stack & AI Engineer',
  description:
    'Mohamed Mydeen Shahabudeen (also known as Mohamed Ukasha) is a Full Stack & AI Engineer and B.Tech CSBS student at Francis Xavier Engineering College, Tirunelveli, Tamil Nadu. Creator of Mydeen AI, SafeCheck, Feast At Night. Winner of Best Student of the Year 2022-2023.',
  url: `${SITE_URL}/about`,
  mainEntityOfPage: `${SITE_URL}/who-is-mohamed-mydeen`,
  image: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/my-photo.png`,
    width: 400,
    height: 400,
  },
  sameAs: [
    AUTHOR_GITHUB,
    AUTHOR_LINKEDIN,
    AUTHOR_AI_PROJECT,
    'https://mydeen.vercel.app',          // portfolio
    `${SITE_URL}/about`,
    `${SITE_URL}/author/mohamed-mydeen`,
    `${SITE_URL}/who-is-mohamed-mydeen`,
  ],
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'Francis Xavier Engineering College',
    alternateName: 'FXEC',
    url: 'https://francisxavier.ac.in',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Tirunelveli',
      addressRegion: 'Tamil Nadu',
      addressCountry: 'IN',
    },
  },
  knowsAbout: [
    'React.js', 'JavaScript', 'TypeScript', 'Full Stack Development',
    'Artificial Intelligence', 'Machine Learning', 'FastAPI', 'Python',
    'Software Engineering', 'Product Development', 'Supabase', 'PostgreSQL',
    'Progressive Web Apps', 'Cybersecurity', 'Fraud Detection',
  ],
  hasOccupation: {
    '@type': 'Occupation',
    name: 'Full Stack & AI Engineer',
    skills: 'React, TypeScript, Python, FastAPI, AI/ML, PostgreSQL, Supabase',
  },
  award: 'Best Student of the Year 2022-2023, Francis Xavier Engineering College',
  nationality: { '@type': 'Country', name: 'India' },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Tirunelveli',
    addressRegion: 'Tamil Nadu',
    addressCountry: 'IN',
  },
});

// WebSite Schema
export const websiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: SITE_NAME,
  alternateName: ['Mohamed Mydeen Blog', 'Mydeen Dev Blog', 'Mohamed Mydeen Portfolio'],
  url: SITE_URL,
  description:
    'Premium personal tech blog by Mohamed Mydeen Shahabudeen — in-depth articles on React, JavaScript, AI engineering, full stack development, and software career growth.',
  publisher: { '@id': `${SITE_URL}/#person` },
  inLanguage: 'en-US',
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: `${SITE_URL}/blog?q={search_term_string}` },
    'query-input': 'required name=search_term_string',
  },
});

// Blog Schema
export const blogSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Blog',
  '@id': `${SITE_URL}/blog#blog`,
  name: `${SITE_NAME} — Writing`,
  description:
    'All articles by Mohamed Mydeen Shahabudeen on React.js, JavaScript, AI engineering, full stack development, TypeScript, career growth, and tech tutorials.',
  url: `${SITE_URL}/blog`,
  author: { '@id': `${SITE_URL}/#person` },
  publisher: { '@id': `${SITE_URL}/#person` },
  inLanguage: 'en-US',
});

// Article Schema
export const articleSchema = (article: Article) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  '@id': `${SITE_URL}/article/${article.slug}#article`,
  headline: article.seoTitle || article.title,
  description: article.seoDescription || article.excerpt,
  url: `${SITE_URL}/article/${article.slug}`,
  datePublished: article.publishedAt,
  dateModified: article.lastModified || article.publishedAt,
  author: {
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: AUTHOR_NAME,
    url: `${SITE_URL}/about`,
  },
  publisher: {
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: AUTHOR_NAME,
  },
  image: article.coverImage
    ? { '@type': 'ImageObject', url: article.coverImage, width: 1200, height: 630 }
    : `${SITE_URL}/og/og-default.png`,
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `${SITE_URL}/article/${article.slug}`,
  },
  articleSection: article.category,
  keywords: [...(article.keywords || []), ...article.tags].join(', '),
  wordCount: Math.round(article.content.split(/\s+/).length),
  timeRequired: `PT${article.readingTime}M`,
  inLanguage: 'en-US',
  isPartOf: { '@id': `${SITE_URL}/blog#blog` },
});

// Breadcrumb Schema
export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

// FAQ Schema
export const faqSchema = (faqs: { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
});

// Collection Page Schema
export const collectionPageSchema = (name: string, url: string, description: string) => ({
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name,
  description,
  url,
  author: { '@id': `${SITE_URL}/#person` },
  inLanguage: 'en-US',
  isPartOf: { '@id': `${SITE_URL}/blog#blog` },
});

// Profile Page Schema
export const profilePageSchema = (slug = 'author/mohamed-mydeen') => ({
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': `${SITE_URL}/${slug}#profilepage`,
  name: 'Mohamed Mydeen Shahabudeen — Full Stack & AI Engineer',
  description:
    'Profile of Mohamed Mydeen Shahabudeen (Mohamed Ukasha), Full Stack & AI Engineer, B.Tech CSBS student at FXEC Tirunelveli, creator of Mydeen AI.',
  url: `${SITE_URL}/${slug}`,
  mainEntity: { '@id': `${SITE_URL}/#person` },
  about: { '@id': `${SITE_URL}/#person` },
});

// About / Story Page Schema
export const aboutPageSchema = (url: string, name: string, description: string) => ({
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': `${url}#aboutpage`,
  name,
  description,
  url,
  mainEntity: { '@id': `${SITE_URL}/#person` },
  author: { '@id': `${SITE_URL}/#person` },
  inLanguage: 'en-US',
});
