import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Target, BookOpen, Trophy } from 'lucide-react';
import SEOHead from '../seo/SEOHead';
import {
  SITE_URL, AUTHOR_KEYWORDS,
  personSchema, aboutPageSchema, breadcrumbSchema,
} from '../seo/schemas';

const FADE = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const tips = [
  {
    icon: <Target size={18} />,
    title: 'Stop Studying Theory — Start Building',
    body: 'The biggest shift was moving from watching tutorials to shipping projects. Even broken ones. Employers and professors both care more about what you have built than what you have watched.',
  },
  {
    icon: <BookOpen size={18} />,
    title: 'Understand the Why, Not Just the How',
    body: 'I started scoring higher when I understood why a data structure worked the way it did, not just how to use it. Go one level deeper every time.',
  },
  {
    icon: <TrendingUp size={18} />,
    title: 'Compound Small Daily Wins',
    body: 'One hour of consistent coding a day beats 8-hour cramming sessions. The skill compounds. In 6 months you will barely recognise yourself.',
  },
  {
    icon: <Trophy size={18} />,
    title: 'Teach What You Learn',
    body: 'Explaining concepts to classmates or writing about them forces deeper understanding. I started writing about code and my own comprehension improved dramatically.',
  },
];

const FromFailureToClassTopper: React.FC = () => {
  return (
    <main className="pt-24 pb-20 min-h-screen">
      <SEOHead
        title="From Failure to Class Topper — Mohamed Mydeen's FXEC Journey"
        description="How Mohamed Mydeen Shahabudeen went from failing internals as a first-year CSBS student at Francis Xavier Engineering College (FXEC) to winning Best Student of the Year 2022-2023. A real story for engineering college students in Tamil Nadu and India."
        canonical={`${SITE_URL}/from-failure-to-class-topper`}
        keywords={[
          ...AUTHOR_KEYWORDS,
          'Mohamed Mydeen FXEC topper',
          'best student of the year Francis Xavier',
          'FXEC CSBS topper story',
          'how to become class topper engineering',
          'engineering student success story Tamil Nadu',
          'Mohamed Mydeen best student',
        ].join(', ')}
        schema={[
          personSchema(),
          aboutPageSchema(
            `${SITE_URL}/from-failure-to-class-topper`,
            'From Failure to Class Topper — Mohamed Mydeen',
            'Mohamed Mydeen Shahabudeen tells the story of going from failing internals at FXEC to winning Best Student of the Year 2022-2023 and building Mydeen AI.',
          ),
          breadcrumbSchema([
            { name: 'Home', url: SITE_URL },
            { name: 'My Story', url: `${SITE_URL}/my-story` },
            { name: 'From Failure to Class Topper', url: `${SITE_URL}/from-failure-to-class-topper` },
          ]),
        ]}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div variants={FADE} initial="hidden" animate="show" transition={{ duration: 0.6 }} className="mb-14">
          <p className="text-[11px] font-bold text-amber-500 uppercase tracking-widest mb-3">Student Journey</p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 dark:text-white tracking-tight mb-5 leading-tight">
            From Failure to<br />Class Topper
          </h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed">
            How I went from failing internals in Year 1 to winning <strong className="text-slate-700 dark:text-slate-200">Best Student of the Year 2022-2023</strong> at Francis Xavier Engineering College — and what actually changed.
          </p>
          <div className="mt-6 flex items-center gap-3 text-[13px] text-slate-500 dark:text-slate-400">
            <img src="/my-photo.png" alt="Mohamed Mydeen" className="w-8 h-8 rounded-full object-cover" />
            <span>Mohamed Mydeen · FXEC CSBS · Tirunelveli</span>
          </div>
        </motion.div>

        {/* Story */}
        <motion.div variants={FADE} initial="hidden" animate="show" transition={{ duration: 0.5, delay: 0.1 }}
          className="prose prose-slate dark:prose-invert max-w-none mb-14">
          <h2>Year 1: The Honest Disaster</h2>
          <p>
            I joined <strong>Francis Xavier Engineering College</strong> in 2021 with no coding background. My first semester was humbling. I failed two internal assessments. I sat in the back of the lab and pretended to understand things I had never seen before.
          </p>
          <p>
            Everyone else seemed to have a headstart. Some had done courses. Some had older siblings who taught them. I had nothing but curiosity and access to YouTube.
          </p>

          <h2>The Turning Point: Building Something Ugly</h2>
          <p>
            In my second year I built a website. It was terrible — ugly design, broken on mobile, confusing navigation. But I deployed it. I sent the link to my friends. It was live on the internet. <em>I made something real.</em>
          </p>
          <p>
            That experience reframed everything. I stopped trying to understand everything before touching code, and started building first, understanding second. My pace of learning tripled.
          </p>

          <h2>What Actually Changed (The 4 Real Reasons)</h2>
        </motion.div>

        {/* Tips */}
        <motion.div variants={FADE} initial="hidden" animate="show" transition={{ duration: 0.5, delay: 0.15 }}
          className="grid sm:grid-cols-2 gap-4 mb-14">
          {tips.map((tip, i) => (
            <motion.div key={tip.title} variants={FADE} initial="hidden" animate="show"
              transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
              className="p-6 rounded-2xl border border-slate-200/60 dark:border-white/10 bg-white dark:bg-ink-900">
              <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-500/10 flex items-center justify-center text-amber-500 mb-4">
                {tip.icon}
              </div>
              <h3 className="font-bold text-[15px] text-slate-800 dark:text-white mb-2">{tip.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-[13px] leading-relaxed">{tip.body}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Award section */}
        <motion.div variants={FADE} initial="hidden" animate="show" transition={{ duration: 0.5, delay: 0.3 }}
          className="p-8 rounded-3xl bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-500/10 dark:to-orange-500/10 border border-amber-200/50 dark:border-amber-500/20 mb-14">
          <div className="text-4xl mb-3">🏆</div>
          <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white mb-3">
            Best Student of the Year — 2022-2023
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-[15px] leading-relaxed mb-4">
            In my third year, Francis Xavier Engineering College awarded me the <strong>Best Student of the Year</strong> prize for the academic year 2022-2023. It was not just for marks — it was for overall contribution: projects, initiative, and helping peers.
          </p>
          <p className="text-slate-500 dark:text-slate-400 text-[14px]">
            If you had told me this in Year 1, I would not have believed you. The only difference between that confused first-year and me is <em>consistent building</em>.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div variants={FADE} initial="hidden" animate="show" transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-wrap gap-3">
          <Link to="/building-mydeen-ai"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-[13px] font-semibold transition-colors shadow-lg shadow-indigo-500/20">
            How I Built Mydeen AI <ArrowRight size={14} />
          </Link>
          <Link to="/my-story"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 text-[13px] font-medium hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
            Full Story <ArrowRight size={14} />
          </Link>
          <Link to="/blog"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 text-[13px] font-medium hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
            Read My Blog <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </main>
  );
};

export default FromFailureToClassTopper;
