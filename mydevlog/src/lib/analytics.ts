// Google Analytics 4 Integration
// TODO: Replace G-XXXXXXXXXX with your actual GA4 Measurement ID from Google Analytics

export const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // TODO: replace

// ── Initialize GA4 ───────────────────────────────────────────────────────────
export const initGA = () => {
  if (typeof window === 'undefined') return;
  if (!GA_MEASUREMENT_ID || GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') {
    console.info('[Analytics] GA4 not configured. Set GA_MEASUREMENT_ID in src/lib/analytics.ts');
    return;
  }

  // Load gtag script
  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  script.async = true;
  document.head.appendChild(script);

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  }
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID, {
    page_path: window.location.pathname,
    anonymize_ip: true,
    cookie_flags: 'SameSite=None;Secure',
  });
};

// ── Track Page Views (call on every route change) ────────────────────────────
export const trackPageView = (url: string, title?: string) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', 'page_view', {
    page_location: url,
    page_title: title || document.title,
  });
};

// ── Custom Event Tracking ─────────────────────────────────────────────────────
export const trackEvent = (
  eventName: string,
  params?: Record<string, string | number | boolean>
) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', eventName, params);
};

// ── Predefined Events ─────────────────────────────────────────────────────────
export const trackArticleRead = (articleSlug: string, articleTitle: string) =>
  trackEvent('article_read', { article_slug: articleSlug, article_title: articleTitle });

export const trackClap = (articleSlug: string, clapCount: number) =>
  trackEvent('article_clap', { article_slug: articleSlug, clap_count: clapCount });

export const trackShare = (articleSlug: string, method: 'copy_link' | 'twitter' | 'linkedin') =>
  trackEvent('share', { content_type: 'article', item_id: articleSlug, method });

export const trackNewsletterSubscribe = () =>
  trackEvent('newsletter_subscribe');

export const trackSearch = (query: string) =>
  trackEvent('search', { search_term: query });

// ── TypeScript augmentation for window.gtag / dataLayer ──────────────────────
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}
