import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Code2, Heart, Star } from 'lucide-react';
import SEOHead from '../seo/SEOHead';
import {
  SITE_URL, AUTHOR_KEYWORDS,
  personSchema, aboutPageSchema, breadcrumbSchema,
} from '../seo/schemas';

const FADE = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const timeline = [
  {
    year: '2021',
    icon: <Star size={16} />,
    title: 'Started FXEC',
    body: 'Joined B.Tech CSBS at Francis Xavier Engineering College, Tirunelveli — with zero coding experience and a lot of self-doubt.',
  },
  {
    year: '2022',
    icon: <Code2 size={16} />,
    title: 'First Real Code',
    body: 'Built my first web project. It was ugly. It broke. But it worked — and that moment changed everything. Started learning React.',
  },
  {
    year: '2023',
    icon: <Zap size={16} />,
    title: 'Class Topper & Best Student Award',
    body: 'Won the Best Student of the Year award at FXEC. From struggling to top of class. The journey is documented in detail on this blog.',
  },
  {
    year: '2024',
    icon: <Heart size={16} />,
    title: 'Built Mydeen AI',
    body: 'Launched Mydeen AI — an intelligent assistant built on FastAPI + Groq. Shipped SafeCheck (ML-powered fraud detection) and Feast At Night.',
  },
  {
    year: '2025',
    icon: <ArrowRight size={16} />,
    title: 'Writing & Building in Public',
    body: 'Started this blog to share real engineering knowledge. Currently exploring AI product development, TypeScript patterns, and developer tools.',
  },
];

const MyStory: React.FC = () => {
  return (
    <main className="pt-24 pb-20 min-h-screen">
      <SEOHead
        title="My Story — Mohamed Mydeen | From Zero to Full Stack AI Engineer"
        description="The personal story of Mohamed Mydeen Shahabudeen (Mohamed Ukasha) — from a struggling FXEC student to Best Student of the Year, and from a first broken website to building Mydeen AI. A story of persistence and building in Tamil Nadu."
        canonical={`${SITE_URL}/my-story`}
        keywords={[...AUTHOR_KEYWORDS, 'Mohamed Mydeen story', 'Mohamed Mydeen journey', 'FXEC student story', 'Tamil Nadu developer story'].join(', ')}
        schema={[
          personSchema(),
          aboutPageSchema(`${SITE_URL}/my-story`, "Mohamed Mydeen's Story", "The personal journey of Mohamed Mydeen Shahabudeen from a first-year FXEC student to Full Stack & AI Engineer and Best Student of the Year."),
          breadcrumbSchema([
            { name: 'Home', url: SITE_URL },
            { name: 'My Story', url: `${SITE_URL}/my-story` },
          ]),
        ]}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div variants={FADE} initial="hidden" animate="show" transition={{ duration: 0.6 }} className="mb-14">
          <p className="text-[11px] font-bold text-indigo-500 uppercase tracking-widest mb-3">Personal Story</p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 dark:text-white tracking-tight mb-5">
            My Story
          </h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed">
            How <strong className="text-slate-700 dark:text-slate-200">Mohamed Mydeen Shahabudeen</strong> went from
            a confused first-year student at FXEC to winning Best Student of the Year and building AI products
            used by real people.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div variants={FADE} initial="hidden" animate="show" transition={{ duration: 0.5, delay: 0.1 }}
          className="relative mb-16">
          <div className="absolute left-[22px] top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/40 via-indigo-500/20 to-transparent" />
          <div className="space-y-8">
            {timeline.map((item, i) => (
              <motion.div key={item.year} variants={FADE} initial="hidden" animate="show"
                transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
                className="flex gap-6">
                <div className="flex-shrink-0 w-11 h-11 rounded-full border-2 border-indigo-400 bg-white dark:bg-ink-900 flex items-center justify-center text-indigo-500 shadow-sm z-10">
                  {item.icon}
                </div>
                <div className="pb-2">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[11px] font-bold text-indigo-500 tracking-wider">{item.year}</span>
                    <h2 className="font-bold text-[16px] text-slate-800 dark:text-white">{item.title}</h2>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 text-[14px] leading-relaxed">{item.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Long-form story */}
        <motion.div variants={FADE} initial="hidden" animate="show" transition={{ duration: 0.5, delay: 0.3 }}
          className="prose prose-slate dark:prose-invert max-w-none mb-14">
          <h2>The Honest Version</h2>
          <p>
            I started college in 2021 at <strong>Francis Xavier Engineering College (FXEC)</strong>, Tirunelveli, studying Computer Science and Business Systems (CSBS). I had no idea what a variable was. Most of my classmates seemed to already know things I had never heard of.
          </p>
          <p>
            For the first year, I struggled. I failed internals. I stayed up late watching tutorials that made no sense. I almost believed I was in the wrong field.
          </p>
          <p>
            Then something clicked — I stopped trying to learn everything and started building. My first project was terrible. It barely worked. But I deployed it. And seeing something I built run on the internet was like a drug. I was hooked.
          </p>
          <p>
            By my third year, I was building production-quality applications. I went from barely passing to consistently topping my batch. In 2023, I was awarded <strong>Best Student of the Year</strong> at FXEC — something I would have laughed at as a possibility in year one.
          </p>
          <p>
            I built <a href="https://mydeenai.vercel.app" target="_blank" rel="noopener noreferrer">Mydeen AI</a> to prove to myself that I could ship something people actually use. I built SafeCheck to solve a real problem with ML. I started this blog because I wish someone had written this content when I was starting out.
          </p>
          <p>
            If you are a college student somewhere in India, reading this at 2am wondering if you will ever figure this out — you will. Start building. Ship ugly things. The skill compounds.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div variants={FADE} initial="hidden" animate="show" transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-wrap gap-3">
          <Link to="/from-failure-to-class-topper"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-[13px] font-semibold transition-colors shadow-lg shadow-indigo-500/20">
            From Failure to Class Topper <ArrowRight size={14} />
          </Link>
          <Link to="/building-mydeen-ai"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 text-[13px] font-medium hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
            Building Mydeen AI <ArrowRight size={14} />
          </Link>
          <Link to="/blog"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 text-[13px] font-medium hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
            Read My Articles <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </main>
  );
};

export default MyStory;
