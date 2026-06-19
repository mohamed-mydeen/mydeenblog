import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Layers, Lock, ExternalLink } from 'lucide-react';
import SEOHead from '../seo/SEOHead';
import {
  SITE_URL, AUTHOR_KEYWORDS,
  personSchema, aboutPageSchema, breadcrumbSchema,
} from '../seo/schemas';

const FADE = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const stack = [
  { label: 'Frontend', items: ['React.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
  { label: 'Backend', items: ['FastAPI (Python)', 'Groq API', 'Streaming responses'] },
  { label: 'Deployment', items: ['Vercel (frontend)', 'Railway (backend)', 'GitHub CI'] },
  { label: 'Architecture', items: ['Server-Sent Events (SSE)', 'Async queue', 'Rate limiting'] },
];

const challenges = [
  { icon: <Zap size={16} />, title: 'Latency', body: 'Getting AI responses to feel instant. Solved with streaming (SSE) so the UI renders each token as it arrives, not after the full response.' },
  { icon: <Layers size={16} />, title: 'Context Management', body: 'Maintaining conversation context across requests without blowing up cost or latency. Built a sliding window context strategy.' },
  { icon: <Lock size={16} />, title: 'Rate Limiting', body: 'Preventing abuse without a login wall. Used IP-based rate limiting with a generous per-minute threshold for genuine users.' },
];

const BuildingMydeenAI: React.FC = () => {
  return (
    <main className="pt-24 pb-20 min-h-screen">
      <SEOHead
        title="Building Mydeen AI — Mohamed Mydeen's AI Project | FastAPI + Groq"
        description="How Mohamed Mydeen Shahabudeen built Mydeen AI — an intelligent assistant using FastAPI, Groq API, React.js, and server-sent event streaming. A full technical breakdown of the architecture, challenges, and decisions behind the project."
        canonical={`${SITE_URL}/building-mydeen-ai`}
        keywords={[
          ...AUTHOR_KEYWORDS,
          'Mydeen AI project', 'Mohamed Mydeen AI', 'building AI chatbot FastAPI Groq',
          'Mydeen AI architecture', 'React FastAPI chatbot tutorial',
          'student AI project India',
        ].join(', ')}
        schema={[
          personSchema(),
          aboutPageSchema(
            `${SITE_URL}/building-mydeen-ai`,
            'Building Mydeen AI — Mohamed Mydeen',
            'A full technical breakdown of how Mohamed Mydeen Shahabudeen built Mydeen AI using FastAPI, Groq, React.js, and streaming.',
          ),
          breadcrumbSchema([
            { name: 'Home', url: SITE_URL },
            { name: 'My Story', url: `${SITE_URL}/my-story` },
            { name: 'Building Mydeen AI', url: `${SITE_URL}/building-mydeen-ai` },
          ]),
        ]}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div variants={FADE} initial="hidden" animate="show" transition={{ duration: 0.6 }} className="mb-12">
          <p className="text-[11px] font-bold text-violet-500 uppercase tracking-widest mb-3">Project Story</p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 dark:text-white tracking-tight mb-5 leading-tight">
            Building Mydeen AI
          </h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed">
            How I designed and shipped <strong className="text-slate-700 dark:text-slate-200">Mydeen AI</strong> — a production-ready intelligent assistant built with FastAPI, Groq, and React — as a college student in Tamil Nadu.
          </p>
          <a href="https://mydeenai.vercel.app" target="_blank" rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-[13px] font-semibold transition-colors shadow-lg shadow-violet-500/20">
            Try Mydeen AI <ExternalLink size={14} />
          </a>
        </motion.div>

        {/* Why */}
        <motion.div variants={FADE} initial="hidden" animate="show" transition={{ duration: 0.5, delay: 0.1 }}
          className="prose prose-slate dark:prose-invert max-w-none mb-12">
          <h2>Why I Built It</h2>
          <p>
            In 2024, every developer was talking about building with LLMs but most demos were toy chatbots — one input, one output, no streaming, no production thinking. I wanted to prove to myself (and show others) that a college student can ship something genuinely good.
          </p>
          <p>
            The goal: an AI assistant that feels fast, handles multi-turn conversations, and does not cost me $200/month to run. The answer was <strong>Groq</strong> — the fastest inference platform I had ever seen — and <strong>FastAPI</strong> for async streaming.
          </p>

          <h2>The Architecture</h2>
          <p>
            Mydeen AI uses a simple but effective architecture. The React frontend sends messages to a FastAPI backend. The backend maintains a sliding context window and streams tokens back via <strong>Server-Sent Events (SSE)</strong>. Each token renders in the UI as it arrives, making responses feel instantaneous even when the model is still generating.
          </p>
        </motion.div>

        {/* Tech Stack */}
        <motion.div variants={FADE} initial="hidden" animate="show" transition={{ duration: 0.5, delay: 0.15 }}
          className="grid sm:grid-cols-2 gap-4 mb-12">
          {stack.map(group => (
            <div key={group.label} className="p-5 rounded-2xl border border-slate-200/60 dark:border-white/10 bg-white dark:bg-ink-900">
              <p className="text-[11px] font-bold text-violet-500 uppercase tracking-wider mb-3">{group.label}</p>
              <ul className="space-y-1.5">
                {group.items.map(item => (
                  <li key={item} className="text-[14px] text-slate-700 dark:text-slate-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Challenges */}
        <motion.div variants={FADE} initial="hidden" animate="show" transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12">
          <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white mb-5">The Hard Parts</h2>
          <div className="space-y-4">
            {challenges.map(c => (
              <div key={c.title} className="flex gap-4 p-5 rounded-2xl border border-slate-200/60 dark:border-white/10 bg-white dark:bg-ink-900">
                <div className="w-9 h-9 rounded-xl bg-violet-50 dark:bg-violet-500/10 flex items-center justify-center text-violet-500 flex-shrink-0">{c.icon}</div>
                <div>
                  <p className="font-bold text-[15px] text-slate-800 dark:text-white mb-1">{c.title}</p>
                  <p className="text-slate-500 dark:text-slate-400 text-[13px] leading-relaxed">{c.body}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Code snippet */}
        <motion.div variants={FADE} initial="hidden" animate="show" transition={{ duration: 0.5, delay: 0.25 }}
          className="mb-12">
          <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white mb-4">Core Streaming Pattern</h2>
          <pre className="bg-slate-900 text-slate-100 p-5 rounded-2xl text-[13px] overflow-x-auto leading-relaxed">
{`# FastAPI streaming endpoint
@app.post("/chat/stream")
async def chat_stream(req: ChatRequest):
    async def event_generator():
        async for chunk in groq_client.chat.completions.create(
            model="llama3-70b-8192",
            messages=build_context(req.messages),
            stream=True,
        ):
            token = chunk.choices[0].delta.content or ""
            yield f"data: {json.dumps({'token': token})}\\n\\n"

    return StreamingResponse(event_generator(),
        media_type="text/event-stream")`}
          </pre>
        </motion.div>

        {/* What I learned */}
        <motion.div variants={FADE} initial="hidden" animate="show" transition={{ duration: 0.5, delay: 0.3 }}
          className="prose prose-slate dark:prose-invert max-w-none mb-12">
          <h2>What I Learned</h2>
          <p>
            Building Mydeen AI taught me more in two months than a full semester of coursework. Real constraints force real engineering decisions. How do you handle a model that sometimes stalls? How do you give users feedback when the stream delays? How do you manage API costs at scale?
          </p>
          <p>
            Shipping this project gave me the confidence to write about production engineering — because I had been in production. If you are a student, <strong>build something real and deploy it</strong>. Even if nobody uses it, you will learn faster than any tutorial.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div variants={FADE} initial="hidden" animate="show" transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-wrap gap-3">
          <a href="https://mydeenai.vercel.app" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-[13px] font-semibold transition-colors shadow-lg shadow-violet-500/20">
            Try Mydeen AI Live <ExternalLink size={14} />
          </a>
          <Link to="/article/building-scalable-ai-with-fastapi-groq"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 text-[13px] font-medium hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
            Read the Technical Article <ArrowRight size={14} />
          </Link>
          <Link to="/my-story"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 text-[13px] font-medium hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
            My Full Story <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </main>
  );
};

export default BuildingMydeenAI;
