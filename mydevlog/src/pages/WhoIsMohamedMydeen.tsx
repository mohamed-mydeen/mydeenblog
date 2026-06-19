import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Code2, Cpu, GraduationCap, Award, ArrowRight, Github, Linkedin, ExternalLink } from 'lucide-react';
import SEOHead from '../seo/SEOHead';
import {
  SITE_URL, AUTHOR_KEYWORDS, KNOWLEDGE_PANEL_FAQS,
  personSchema, profilePageSchema, faqSchema, breadcrumbSchema,
} from '../seo/schemas';

const FADE = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };

const WhoIsMohamedMydeen: React.FC = () => {
  return (
    <main className="pt-24 pb-20 min-h-screen">
      <SEOHead
        title="Who is Mohamed Mydeen? — Full Stack & AI Engineer from Tirunelveli"
        description="Mohamed Mydeen Shahabudeen (also known as Mohamed Ukasha) is a Full Stack & AI Engineer, B.Tech CSBS student at Francis Xavier Engineering College (FXEC), Tirunelveli, Tamil Nadu. Creator of Mydeen AI and Best Student of the Year 2022-2023."
        canonical={`${SITE_URL}/who-is-mohamed-mydeen`}
        keywords={AUTHOR_KEYWORDS.join(', ')}
        schema={[
          personSchema(),
          profilePageSchema('who-is-mohamed-mydeen'),
          faqSchema(KNOWLEDGE_PANEL_FAQS),
          breadcrumbSchema([
            { name: 'Home', url: SITE_URL },
            { name: 'Who is Mohamed Mydeen?', url: `${SITE_URL}/who-is-mohamed-mydeen` },
          ]),
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Hero */}
        <motion.div variants={FADE} initial="hidden" animate="show" transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-8 items-center sm:items-start mb-16">
          <div className="w-28 h-28 rounded-2xl overflow-hidden border-2 border-indigo-200 dark:border-indigo-500/30 shadow-xl flex-shrink-0">
            <img src="/my-photo.png" alt="Mohamed Mydeen Shahabudeen" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-[11px] font-bold text-indigo-500 uppercase tracking-widest mb-2">Who is</p>
            <h1 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 dark:text-white tracking-tight mb-3">
              Mohamed Mydeen
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed max-w-xl">
              Full name: <strong className="text-slate-700 dark:text-slate-200">Mohamed Mydeen Shahabudeen</strong>.
              Also known as <strong className="text-slate-700 dark:text-slate-200">Mohamed Ukasha</strong>.
              Full Stack & AI Engineer · B.Tech CSBS · FXEC, Tirunelveli.
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              <a href="https://github.com/mohamed-mydeen" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 text-[13px] font-medium hover:bg-slate-200 dark:hover:bg-white/10 transition-colors">
                <Github size={14} /> GitHub
              </a>
              <a href="https://linkedin.com/in/mohamed-mydeen4262" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 text-[13px] font-medium hover:bg-slate-200 dark:hover:bg-white/10 transition-colors">
                <Linkedin size={14} /> LinkedIn
              </a>
              <a href="https://mydeenai.vercel.app" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-[13px] font-medium hover:bg-indigo-100 dark:hover:bg-indigo-500/20 transition-colors">
                <ExternalLink size={14} /> Mydeen AI
              </a>
            </div>
          </div>
        </motion.div>

        {/* Quick facts */}
        <motion.div variants={FADE} initial="hidden" animate="show" transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
          {[
            { icon: <User size={18} />, label: 'Full Name', value: 'Mohamed Mydeen Shahabudeen' },
            { icon: <User size={18} />, label: 'Also Known As', value: 'Mohamed Ukasha · Mydeen' },
            { icon: <GraduationCap size={18} />, label: 'College', value: 'Francis Xavier Engineering College (FXEC)' },
            { icon: <Code2 size={18} />, label: 'Degree', value: 'B.Tech CSBS — Tirunelveli, Tamil Nadu' },
            { icon: <Cpu size={18} />, label: 'Role', value: 'Full Stack & AI Engineer' },
            { icon: <Award size={18} />, label: 'Award', value: 'Best Student of the Year 2022-2023' },
          ].map(fact => (
            <div key={fact.label} className="flex items-start gap-3 p-5 rounded-2xl border border-slate-200/60 dark:border-white/10 bg-white dark:bg-ink-900">
              <span className="text-indigo-500 mt-0.5">{fact.icon}</span>
              <div>
                <p className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-0.5">{fact.label}</p>
                <p className="text-[14px] font-semibold text-slate-800 dark:text-slate-100">{fact.value}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Bio */}
        <motion.div variants={FADE} initial="hidden" animate="show" transition={{ duration: 0.5, delay: 0.15 }}
          className="prose prose-slate dark:prose-invert max-w-none mb-14">
          <h2>About Mohamed Mydeen Shahabudeen</h2>
          <p>
            <strong>Mohamed Mydeen Shahabudeen</strong> — commonly known as <strong>Mohamed Mydeen</strong> or <strong>Mohamed Ukasha</strong> — is a passionate software developer and AI enthusiast based in <strong>Tirunelveli, Tamil Nadu, India</strong>. He is currently pursuing a B.Tech in <strong>Computer Science and Business Systems (CSBS)</strong> at <strong>Francis Xavier Engineering College (FXEC)</strong>.
          </p>
          <p>
            Mohamed Mydeen is best known for building <a href="https://mydeenai.vercel.app" target="_blank" rel="noopener noreferrer">Mydeen AI</a>, an intelligent assistant that showcases how modern AI models can be integrated into web applications with sub-second response times. His other projects include <strong>SafeCheck</strong> (a URL security and fraud detection system using machine learning) and <strong>Feast At Night</strong> (a food delivery concept app).
          </p>
          <p>
            He was honoured with the <strong>Best Student of the Year 2022-2023</strong> award at FXEC — a recognition of both academic excellence and leadership. This journey from a failing student to class topper is one he documents openly in <Link to="/from-failure-to-class-topper">his personal story</Link>.
          </p>
          <p>
            On this blog, Mohamed Mydeen writes in-depth technical articles about React.js, FastAPI, AI engineering, TypeScript, and building software products. His goal: share real engineering knowledge that helps other developers — especially college students — build things that matter.
          </p>
        </motion.div>

        {/* FAQs */}
        <motion.div variants={FADE} initial="hidden" animate="show" transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-14">
          <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {KNOWLEDGE_PANEL_FAQS.slice(0, 6).map(faq => (
              <details key={faq.q} className="group p-5 rounded-2xl border border-slate-200/60 dark:border-white/10 bg-white dark:bg-ink-900">
                <summary className="font-semibold text-[15px] text-slate-800 dark:text-white cursor-pointer list-none flex justify-between items-center gap-3">
                  {faq.q}
                  <ArrowRight size={15} className="text-slate-400 flex-shrink-0 group-open:rotate-90 transition-transform" />
                </summary>
                <p className="mt-3 text-slate-500 dark:text-slate-400 text-[14px] leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div variants={FADE} initial="hidden" animate="show" transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-wrap gap-3">
          <Link to="/about" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-[13px] font-semibold transition-colors shadow-lg shadow-indigo-500/20">
            Full About Page <ArrowRight size={14} />
          </Link>
          <Link to="/my-story" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 text-[13px] font-medium hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
            My Story <ArrowRight size={14} />
          </Link>
          <Link to="/blog" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 text-[13px] font-medium hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
            Read My Articles <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </main>
  );
};

export default WhoIsMohamedMydeen;
