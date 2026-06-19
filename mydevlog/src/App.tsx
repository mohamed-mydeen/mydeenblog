import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import { useLenis } from './hooks/useLenis';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CommandPalette from './components/ui/CommandPalette';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Article from './pages/Article';
import About from './pages/About';
import Contact from './pages/Contact';
import Newsletter from './pages/Newsletter';
import News from './pages/News';
import Category from './pages/Category';
import Tag from './pages/Tag';
import Author from './pages/Author';
import WhoIsMohamedMydeen from './pages/WhoIsMohamedMydeen';
import MyStory from './pages/MyStory';
import BuildingMydeenAI from './pages/BuildingMydeenAI';
import FromFailureToClassTopper from './pages/FromFailureToClassTopper';
import NotFound from './pages/NotFound';
import { initGA, trackPageView } from './lib/analytics';

// ── Page Transition Wrapper ───────────────────────────────────────────────────
const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -8 }}
    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
  >
    {children}
  </motion.div>
);

// ── Inner App (needs Router context for hooks) ────────────────────────────────
const AppInner: React.FC = () => {
  const [cmdOpen, setCmdOpen] = useState(false);
  const location = useLocation();

  useLenis();

  // GA4 page view tracking on every route change
  useEffect(() => {
    trackPageView(window.location.href, document.title);
  }, [location.pathname]);

  // Ctrl+K command palette
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setCmdOpen(v => !v);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-ink-950 transition-colors duration-300 flex flex-col">
      <Navbar onOpenCommand={() => setCmdOpen(true)} />
      <CommandPalette open={cmdOpen} onClose={() => setCmdOpen(false)} />

      <div className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/blog" element={<PageWrapper><Blog /></PageWrapper>} />
            <Route path="/article/:slug" element={<PageWrapper><Article /></PageWrapper>} />
            <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
            <Route path="/newsletter" element={<PageWrapper><Newsletter /></PageWrapper>} />
            <Route path="/news" element={<PageWrapper><News /></PageWrapper>} />
            {/* New SEO pages */}
            <Route path="/category/:slug" element={<PageWrapper><Category /></PageWrapper>} />
            <Route path="/tag/:slug" element={<PageWrapper><Tag /></PageWrapper>} />
            <Route path="/author/mohamed-mydeen" element={<PageWrapper><Author /></PageWrapper>} />
            {/* Personal brand / story pages */}
            <Route path="/who-is-mohamed-mydeen" element={<PageWrapper><WhoIsMohamedMydeen /></PageWrapper>} />
            <Route path="/my-story" element={<PageWrapper><MyStory /></PageWrapper>} />
            <Route path="/building-mydeen-ai" element={<PageWrapper><BuildingMydeenAI /></PageWrapper>} />
            <Route path="/from-failure-to-class-topper" element={<PageWrapper><FromFailureToClassTopper /></PageWrapper>} />
            {/* 404 */}
            <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </div>

      <Footer />
    </div>
  );
};

// ── Root App ──────────────────────────────────────────────────────────────────
const App: React.FC = () => {
  // Initialize Google Analytics once on app mount
  useEffect(() => {
    initGA();
  }, []);

  return (
    <HelmetProvider>
      <ThemeProvider>
        <AppInner />
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
