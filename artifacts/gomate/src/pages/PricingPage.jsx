import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { APP_URL } from '@/lib/config';

const tiers = [
  {
    name: 'Free',
    price: '$0',
    period: '',
    description: 'Explore before you commit',
    highlight: false,
    features: [
      'Build your profile and tell us about your move',
      'Browse 125+ country guides',
      'See a preview of your relocation plan',
      'Read the Field Guide',
    ],
    limits: 'For exploring. The full move plan stays locked.',
    cta: 'Start free',
    ctaLink: APP_URL,
    ctaExternal: true,
  },
  {
    name: 'Move Pass',
    price: '$29',
    period: ' one-time',
    description: 'Everything you need for one real move',
    highlight: true,
    features: [
      'A full plan for your move, from now to landing in your new country',
      'Step-by-step next actions, with sources you can check yourself',
      'A list of every document you still need to get',
      'Warnings when something could delay or block your move',
      'One place to track your plan, documents, and timeline',
    ],
    limits: 'Covers one move. If you ever move again, that’s a separate Move Pass.',
    cta: 'Unlock Move Pass',
    ctaLink: APP_URL,
    ctaExternal: true,
  },
];

const whatYouGet = [
  {
    title: 'You always know what to do next',
    body: 'GoMate tells you what to do this week — not just what’s possible in theory.',
  },
  {
    title: 'Every step is backed by a real source',
    body: 'Visa and tax steps link to the actual government website, so you can double-check anything yourself.',
  },
  {
    title: 'You see which documents you’re still missing',
    body: 'A live list of every document you still need to gather, in the order you’ll need them.',
  },
  {
    title: 'You catch problems before they cost you',
    body: 'If something could delay your visa or block your move, you see it early — not after you’ve booked the flight.',
  },
  {
    title: 'You know how ready you actually are',
    body: 'See how close you are to actually moving — not just to having a plan on paper.',
  },
  {
    title: 'Everything for your move in one place',
    body: 'Your profile, plan, documents, and timeline all live in one workspace for your move.',
  },
];

const builtFor = [
  'You’re moving on your own (not a corporate relocation)',
  'You know where you’re going, or you’re close to deciding',
  'You’re planning to actually move in the next few months',
];

const notForNow = [
  'You’re casually browsing many different countries',
  'Your company is handling your relocation',
  'You haven’t decided where you want to go yet',
];

const pricingFaq = [
  {
    q: 'Is Move Pass a subscription?',
    a: 'No. You pay $29 once. There’s no monthly fee and nothing to cancel.',
  },
  {
    q: 'What do I actually get for $29?',
    a: 'Your full plan for one move: what to do next, which documents you still need, what could go wrong, and one place to track everything from now until you arrive.',
  },
  {
    q: 'What if I end up moving again later?',
    a: 'Move Pass covers one move. If you decide to move again, you’d buy a separate Move Pass for that move.',
  },
  {
    q: 'What if I haven’t picked a country yet?',
    a: 'Start with Free. Build your profile, browse country guides, and see a preview of a plan. Buy Move Pass when you know where you’re going.',
  },
  {
    q: 'Does GoMate replace an immigration lawyer?',
    a: 'No. GoMate gives you structure, official sources, and a clear plan. For tricky legal questions, talk to a real immigration lawyer. Each country guide includes a directory of professionals you can contact.',
  },
];

const PricingPage = () => {
  return (
    <>
      <Helmet>
        <title>Pricing — GoMate</title>
        <meta name="description" content="GoMate pricing: start free to explore. Buy Move Pass for $29 to get a full plan for one move — what to do next, which documents you need, and what could go wrong." />
        <meta property="og:title" content="Pricing — GoMate" />
        <meta property="og:description" content="Free to explore. $29 Move Pass for one real move." />
        <meta property="og:image" content="https://raw.githubusercontent.com/Hub-Viking93/gomatelogo/626b0079bd23e19b026f898fdd9353dfe7aae4d9/GoMateLogo.png" />
        <meta property="og:locale" content="en_US" />
      </Helmet>

      <main className="min-h-screen bg-stone-50 pb-20">
        {/* Hero */}
        <section className="bg-gradient-to-br from-sage-50 to-stone-100 border-b border-stone-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-stone-900 mb-4">
                Pricing
              </h1>
              <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
                Moving to another country is complicated. GoMate tells you what to do next, which documents you still need, and what could go wrong — before it costs you time or money.
              </p>
            </motion.div>

            {/* Beta Notice */}
            <div className="mt-10 bg-amber-50 border border-amber-200 rounded-xl p-5 flex items-start gap-4 text-left">
              <span className="relative flex h-3 w-3 mt-1.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
              </span>
              <div>
                <p className="font-semibold text-amber-900 mb-1">The GoMate App is currently in development</p>
                <p className="text-sm text-amber-800 leading-relaxed">
                  The prices below reflect our planned pricing at launch. Beta testers will get <strong>free early access</strong> and exclusive discounts when the app goes live. The website — including all 125+ country guides and the Field Guide — is completely free to use today.
                </p>
                <Link to="/app" className="inline-flex items-center mt-3 text-sm font-semibold text-amber-900 hover:text-amber-700 hover:underline">
                  Join the beta waitlist <ArrowRight size={14} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Short framing block */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-2 text-center">
          <p className="text-stone-500 text-base">
            Free is for figuring out if you can move. Move Pass is for actually doing it.
          </p>
        </section>

        {/* Tier Cards */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-6">
            {tiers.map((tier, idx) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`bg-white rounded-xl p-8 shadow-sm flex flex-col ${
                  tier.highlight
                    ? 'border-2 border-sage-500 shadow-lg relative'
                    : 'border border-stone-200'
                }`}
              >
                <h3 className="text-lg font-bold text-stone-900">{tier.name}</h3>
                <div className="mt-2 mb-1">
                  <span className="text-4xl font-serif font-bold text-stone-900">{tier.price}</span>
                  {tier.period && (
                    <span className="text-stone-500 ml-1">{tier.period}</span>
                  )}
                </div>
                <p className="text-sm text-stone-500 mb-6">{tier.description}</p>

                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-stone-700">
                      <Check size={16} className="text-sage-600 mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-xs text-stone-400 mb-4">{tier.limits}</p>

                {tier.ctaExternal ? (
                  <a href={tier.ctaLink} target="_blank" rel="noopener noreferrer">
                    <Button
                      className={`w-full ${
                        tier.highlight
                          ? 'bg-sage-600 hover:bg-sage-700 text-white'
                          : 'bg-stone-100 hover:bg-stone-200 text-stone-800'
                      }`}
                    >
                      {tier.cta} <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </a>
                ) : (
                  <Link to={tier.ctaLink}>
                    <Button
                      className={`w-full ${
                        tier.highlight
                          ? 'bg-sage-600 hover:bg-sage-700 text-white'
                          : 'bg-stone-100 hover:bg-stone-200 text-stone-800'
                      }`}
                    >
                      {tier.cta} <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* What you get */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl lg:text-3xl font-serif font-bold text-stone-900 mb-2 text-center">What you actually get</h2>
            <p className="text-stone-500 text-center mb-10 max-w-2xl mx-auto">
              For $29 you get one Move Pass for one move. Here’s what that means in plain English.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {whatYouGet.map((item) => (
                <div key={item.title} className="bg-white rounded-xl border border-stone-200 p-6 flex items-start gap-3">
                  <Check size={18} className="text-sage-600 mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-stone-600 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Who this is for */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl lg:text-3xl font-serif font-bold text-stone-900 mb-10 text-center">Is Move Pass for you?</h2>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-sage-50 border border-sage-200 rounded-xl p-6">
                <h3 className="font-semibold text-stone-900 mb-4">Yes, if</h3>
                <ul className="space-y-3">
                  {builtFor.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-stone-700">
                      <Check size={16} className="text-sage-600 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white border border-stone-200 rounded-xl p-6">
                <h3 className="font-semibold text-stone-900 mb-4">Maybe not yet, if</h3>
                <ul className="space-y-3">
                  {notForNow.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-stone-600">
                      <span className="text-stone-300 mt-0.5 shrink-0">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Pricing FAQ */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl lg:text-3xl font-serif font-bold text-stone-900 mb-10 text-center">Pricing FAQ</h2>

            <div className="space-y-4">
              {pricingFaq.map((item) => (
                <div key={item.q} className="bg-white rounded-xl border border-stone-200 p-6">
                  <h3 className="font-semibold text-stone-900 mb-2">{item.q}</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-stone-900 text-white py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-serif font-bold mb-4">Ready to actually plan your move?</h2>
            <p className="text-stone-300 mb-8 text-lg">
              Start free. Buy Move Pass when you’re ready to actually move.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={APP_URL} target="_blank" rel="noopener noreferrer">
                <Button className="bg-sage-600 hover:bg-sage-500 text-white px-8 py-6 text-lg rounded-full">
                  Open GoMate App <ArrowRight size={18} className="ml-2" />
                </Button>
              </a>
              <Link to="/country-guides">
                <Button variant="outline" className="border-2 border-white/40 text-white hover:bg-white/10 hover:text-white hover:border-white px-8 py-6 text-lg rounded-full bg-transparent">
                  Browse Free Country Guides
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default PricingPage;
