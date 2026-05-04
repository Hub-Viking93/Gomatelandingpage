import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  MessageSquare,
  CheckSquare,
  LayoutDashboard,
  FileText,
  Shield,
  Clock,
  Brain,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import WaitlistSignup from '@/components/WaitlistSignup';

const AppScreenshot = ({ src, alt, caption }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="flex flex-col items-center"
  >
    {/* Laptop mockup frame */}
    <div className="relative w-full max-w-3xl mx-auto">
      {/* Laptop top bar */}
      <div className="bg-stone-800 rounded-t-xl px-4 py-2 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-stone-600" />
          <div className="w-2.5 h-2.5 rounded-full bg-stone-600" />
          <div className="w-2.5 h-2.5 rounded-full bg-stone-600" />
        </div>
        <div className="flex-1 mx-8">
          <div className="bg-stone-700 rounded-md h-5 max-w-xs mx-auto" />
        </div>
      </div>
      {/* Screenshot with overflow hidden to crop browser chrome */}
      <div className="bg-stone-900 overflow-hidden rounded-b-xl border-2 border-t-0 border-stone-700 shadow-2xl">
        <img
          src={src}
          alt={alt}
          className="w-full h-auto object-cover object-left-bottom"
          loading="lazy"
          style={{ marginTop: '-68px' }}
          width={1200}
          height={700}
        />
      </div>
    </div>
    {caption && (
      <p className="text-sm text-stone-500 mt-4 text-center font-medium">{caption}</p>
    )}
  </motion.div>
);

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white rounded-xl p-6 border border-stone-200 shadow-sm">
    <div className="w-10 h-10 bg-sage-100 rounded-lg flex items-center justify-center mb-4">
      <Icon className="text-sage-700" size={20} />
    </div>
    <h3 className="text-lg font-serif font-bold text-stone-900 mb-2">{title}</h3>
    <p className="text-stone-600 text-sm leading-relaxed">{description}</p>
  </div>
);

const GoMateAppPage = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Interview',
      description: 'A 15-minute conversation builds your profile — 65+ data points including citizenship, destination, purpose, family, budget, and more. No forms, no dropdowns. Because your situation is never the same as someone else\'s.'
    },
    {
      icon: FileText,
      title: 'Personalized Guide',
      description: 'An AI-driven research pipeline searches official sources and builds a tailored guide with 15+ sections — visas, budget, housing, healthcare, documents, and timeline. Because generic advice skips the parts that matter for you.'
    },
    {
      icon: CheckSquare,
      title: 'Task Graph with Dependencies',
      description: 'Post-arrival tasks are organized in a dependency graph — because a bank account can\'t be opened until you\'ve registered your residency, and most people find that out the hard way. GoMate knows the order and tracks your progress.'
    },
    {
      icon: Clock,
      title: 'Deadline Tracking',
      description: 'Deadlines are tied to your arrival date — "register with the tax authority within 7 days." Compliance alerts warn you when something is overdue, urgent, or approaching, so you don\'t miss anything critical.'
    },
    {
      icon: MessageSquare,
      title: 'Context-Aware Chat',
      description: 'Ask anything about your destination. The AI assistant answers based on your profile, your plan, and your specific situation — not generic advice from a forum post written three years ago.'
    },
    {
      icon: Shield,
      title: 'Source Attribution',
      description: 'All recommendations are based on official information from embassies, immigration authorities, and government agencies — so you know what you\'re acting on.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>GoMate App — AI-Powered Relocation Planning | GoMate Relocate</title>
        <meta name="description" content="The GoMate App builds a personalized relocation plan from a 15-minute AI interview. Task dependencies, deadline tracking, compliance alerts, and context-aware chat — currently in development." />
        <meta property="og:title" content="GoMate App — AI-Powered Relocation Planning" />
        <meta property="og:description" content="A personalized relocation plan from a 15-minute AI interview. Task dependencies, deadline tracking, and compliance alerts." />
        <meta property="og:image" content="https://raw.githubusercontent.com/Hub-Viking93/gomatelogo/626b0079bd23e19b026f898fdd9353dfe7aae4d9/GoMateLogo.png" />
        <meta property="og:locale" content="en_US" />
      </Helmet>

      <main className="min-h-screen bg-stone-50">
        {/* Hero */}
        <section className="bg-gradient-to-br from-stone-900 to-stone-800 text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <span className="inline-block px-4 py-1.5 bg-sage-600/20 border border-sage-500/30 rounded-full text-sage-300 text-sm font-medium mb-6">
                Currently in Development
              </span>
              <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
                Know exactly what to do —<br />
                <span className="text-sage-400">and in what order — before you land</span>
              </h1>
              <p className="text-xl text-stone-300 max-w-2xl mx-auto leading-relaxed mb-10">
                Instead of piecing this together across forums, conflicting advice, and scattered sources — GoMate builds a complete, personalized relocation plan from a 15-minute AI interview. Task dependencies, deadlines, and compliance tracking, specific to your situation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#waitlist">
                  <Button className="bg-sage-600 hover:bg-sage-500 text-white px-10 py-7 text-lg rounded-full transition-all hover:shadow-[0_0_30px_rgba(110,138,113,0.4)] hover:-translate-y-1">
                    Join the Beta Waitlist <ArrowRight className="ml-2" size={20} />
                  </Button>
                </a>
                <Link to="/pricing">
                  <Button variant="outline" className="border-2 border-white/40 text-white hover:bg-white/10 hover:text-white hover:border-white px-10 py-7 text-lg rounded-full bg-transparent">
                    See Pricing
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* The Problem */}
        <section className="py-20 bg-white border-b border-stone-200">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">The Problem</h2>
              <div className="space-y-4 text-stone-700 leading-relaxed text-lg">
                <p>
                  Moving abroad isn't an information problem. Anyone can google a visa in five minutes.
                </p>
                <p>
                  The real problem is <strong className="text-stone-900">execution</strong>. Where to register your residency. How to open a bank account before you have an address. What deadlines you have — and in what order things need to happen. That mess is unique to every country, every situation, every person.
                </p>
                <p>
                  Relocation agencies cost $2,000–5,000 and focus on corporations. Expat forums have anecdotes, not structured plans. Information is easy to find. Execution — with the right order, deadlines, and dependencies — is what actually makes a move succeed.
                </p>
                <p className="font-semibold text-stone-900">
                  GoMate gives individuals access to the same structured intelligence — at a fraction of the cost.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-stone-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-serif font-bold text-stone-900 mb-4">How It Works</h2>
              <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                Four steps from "I'm thinking about moving" to "I know exactly what to do."
              </p>
            </motion.div>

            {/* Step 1 — Dashboard */}
            <div className="space-y-20">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <span className="text-sage-600 font-bold text-sm uppercase tracking-wider">Step 1</span>
                  <h3 className="text-2xl font-serif font-bold text-stone-900 mt-2 mb-4">Describe Your Situation</h3>
                  <p className="text-stone-600 leading-relaxed mb-4">
                    An AI assistant asks questions in a natural conversation — no forms, no dropdowns. Under the surface, GoMate builds a profile with 65+ data points: citizenship, destination, purpose, family situation, budget, work experience, language skills, and more.
                  </p>
                  <p className="text-stone-600 leading-relaxed">
                    Your dashboard shows everything at a glance — destination, visa route, profile completeness, and timeline.
                  </p>
                </motion.div>
                <AppScreenshot
                  src="/app-screenshots/dashboard.png"
                  alt="GoMate App dashboard showing relocation overview with destination, purpose, profile completeness, and timeline"
                  caption="Dashboard — Your move at a glance"
                />
              </div>

              {/* Step 2 — Guide */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <AppScreenshot
                    src="/app-screenshots/guide.png"
                    alt="GoMate App personalized relocation guide for Sweden with visa, budget, housing, and culture sections"
                    caption="Personalized guide — AI-researched, source-attributed"
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="order-1 lg:order-2"
                >
                  <span className="text-sage-600 font-bold text-sm uppercase tracking-wider">Step 2</span>
                  <h3 className="text-2xl font-serif font-bold text-stone-900 mt-2 mb-4">Get Your Personalized Guide</h3>
                  <p className="text-stone-600 leading-relaxed mb-4">
                    An AI-driven research pipeline searches official sources — embassies, immigration websites, government agencies — and synthesizes everything into a tailored guide with 15+ sections.
                  </p>
                  <p className="text-stone-600 leading-relaxed">
                    Visa recommendations ranked by your profile. Real-time cost of living data. Document checklists prioritized by urgency. Everything specific to your situation — downloadable as PDF.
                  </p>
                </motion.div>
              </div>

              {/* Step 3 — Settling In */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <span className="text-sage-600 font-bold text-sm uppercase tracking-wider">Step 3</span>
                  <h3 className="text-2xl font-serif font-bold text-stone-900 mt-2 mb-4">Land and Get Established</h3>
                  <p className="text-stone-600 leading-relaxed mb-4">
                    When you arrive, you activate post-arrival mode. GoMate generates a task graph with real dependencies — a bank account can't be opened until you've registered your residency, and GoMate knows that.
                  </p>
                  <p className="text-stone-600 leading-relaxed">
                    Deadlines tied to your arrival date. Compliance alerts for overdue and urgent tasks. Progress tracking across legal, financial, and administrative categories.
                  </p>
                </motion.div>
                <AppScreenshot
                  src="/app-screenshots/settling-in.png"
                  alt="GoMate App settling-in checklist showing task dependencies, deadlines, and compliance tracking"
                  caption="Settling-in checklist — Dependencies, deadlines, progress"
                />
              </div>

              {/* Step 4 — Chat */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <AppScreenshot
                    src="/app-screenshots/chat.png"
                    alt="GoMate App AI chat assistant answering context-aware questions about Stockholm housing costs"
                    caption="AI assistant — Context-aware answers based on your profile"
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="order-1 lg:order-2"
                >
                  <span className="text-sage-600 font-bold text-sm uppercase tracking-wider">Step 4</span>
                  <h3 className="text-2xl font-serif font-bold text-stone-900 mt-2 mb-4">Ask Anything</h3>
                  <p className="text-stone-600 leading-relaxed mb-4">
                    A context-aware AI assistant that knows your profile, your plan, and your destination. Ask about housing costs, local customs, tax obligations — and get answers tailored to your specific situation.
                  </p>
                  <p className="text-stone-600 leading-relaxed">
                    Follow-up suggestions. Quick links to relevant sections. Disclaimer when legal or financial advice should come from a professional.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-white border-t border-stone-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-serif font-bold text-stone-900 mb-4">What's Under the Hood</h2>
              <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                Not a chatbot with a database. A compliance engine built across 11 engineering phases.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <FeatureCard {...feature} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Waitlist CTA */}
        <section id="waitlist" className="py-20 bg-stone-900 text-white scroll-mt-10">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif font-bold mb-4">
                Get Early Access
              </h2>
              <p className="text-lg text-stone-300 mb-8 max-w-xl mx-auto leading-relaxed">
                The GoMate App is currently in active development. Join the waitlist and be among the first to get a personalized relocation plan — built around your citizenship, destination, and timeline.
              </p>
              <div className="max-w-md mx-auto">
                <WaitlistSignup />
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default GoMateAppPage;
