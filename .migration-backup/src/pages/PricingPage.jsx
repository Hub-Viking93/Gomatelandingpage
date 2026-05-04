import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, Minus, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { APP_URL } from '@/lib/config';

const tiers = [
  {
    name: 'Free',
    price: '$0',
    period: '',
    description: 'Explore your options',
    highlight: false,
    features: [
      'Full AI chat interview',
      'Profile building (65+ fields)',
      'Basic relocation overview',
    ],
    limits: '1 plan. No research, guides, or post-arrival features.',
    cta: 'Explore Free Guides',
    ctaLink: '/country-guides',
  },
  {
    name: 'Pro Single',
    price: '$29',
    period: 'one-time',
    description: 'Get your complete relocation plan',
    highlight: true,
    features: [
      'Visa recommendations & research',
      'Local requirements research',
      'Cost of living analysis',
      'Budget planner & affordability analysis',
      'Full AI-generated relocation guide (PDF)',
      'Document checklist with status tracking',
      'Pre-move timeline',
      'Plan consistency checks',
      'Tax overview',
      'Chat history',
    ],
    limits: '1 plan. No post-arrival features.',
    cta: 'Join Beta Waitlist',
    ctaLink: '/app',
  },
  {
    name: 'Pro+',
    price: '$29',
    period: '/month',
    description: 'Stay compliant and in control after arrival',
    highlight: false,
    features: [
      'Everything in Pro Single',
      'Unlimited relocation plans',
      'Visa application tracker',
      'Banking setup wizard',
      'Tax registration guide',
      'Post-arrival task manager (DAG-based)',
      'Post-arrival AI assistant',
      'Compliance calendar + iCal export',
      'Compliance alerts & reminders',
      'Wellbeing check-ins',
      'Plan switcher',
    ],
    limits: 'None. Full platform access.',
    cta: 'Join Beta Waitlist',
    ctaLink: '/app',
  },
];

const bundles = [
  { plan: 'Monthly', price: '$29/mo', perMonth: '$29', savings: null },
  { plan: '3 Months', price: '$69', perMonth: '$23', savings: '22%' },
  { plan: '6 Months', price: '$119', perMonth: '$20', savings: '33%' },
  { plan: 'Annual', price: '$199', perMonth: '$17', savings: '44%' },
];

const featureMatrix = [
  { feature: 'Chat interview', free: true, pro: true, plus: true },
  { feature: 'Visa recommendations', free: false, pro: true, plus: true },
  { feature: 'Local requirements', free: false, pro: true, plus: true },
  { feature: 'Cost of living', free: false, pro: true, plus: true },
  { feature: 'Budget planner', free: false, pro: true, plus: true },
  { feature: 'Affordability analysis', free: false, pro: true, plus: true },
  { feature: 'Relocation guide (PDF)', free: false, pro: true, plus: true },
  { feature: 'Document checklist', free: false, pro: true, plus: true },
  { feature: 'Pre-move timeline', free: false, pro: true, plus: true },
  { feature: 'Plan consistency checks', free: false, pro: true, plus: true },
  { feature: 'Tax overview', free: false, pro: true, plus: true },
  { feature: 'Chat history', free: false, pro: true, plus: true },
  { feature: 'Unlimited plans', free: false, pro: false, plus: true },
  { feature: 'Settling-in tasks (DAG)', free: false, pro: false, plus: true },
  { feature: 'Compliance alerts', free: false, pro: false, plus: true },
  { feature: 'Compliance calendar', free: false, pro: false, plus: true },
  { feature: 'Post-arrival AI assistant', free: false, pro: false, plus: true },
  { feature: 'Visa application tracker', free: false, pro: false, plus: true },
  { feature: 'Banking setup wizard', free: false, pro: false, plus: true },
  { feature: 'Tax registration guide', free: false, pro: false, plus: true },
  { feature: 'Wellbeing check-ins', free: false, pro: false, plus: true },
];

const PricingPage = () => {
  return (
    <>
      <Helmet>
        <title>Pricing — GoMate Relocate</title>
        <meta name="description" content="GoMate pricing: Free profile building, Pro Single for a complete relocation plan ($29), Pro+ for post-arrival compliance and unlimited plans ($29/mo). A fraction of the cost of a relocation agency." />
        <meta property="og:title" content="Pricing — GoMate Relocate" />
        <meta property="og:description" content="Free profile building, Pro Single for a complete relocation plan ($29), Pro+ for post-arrival compliance ($29/mo)." />
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
                A relocation agency costs $2,000–5,000 and focuses on corporations. GoMate gives individuals the same structured intelligence — starting at $29.
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

        {/* Tier Cards */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
          <div className="grid md:grid-cols-3 gap-6">
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
                {tier.highlight && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-sage-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
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
              </motion.div>
            ))}
          </div>
        </section>

        {/* Pro+ Bundles */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2 text-center">Pro+ Subscription Plans</h2>
            <p className="text-stone-600 text-center mb-8">The 3-month plan covers a typical relocation timeline — our recommended entry point.</p>

            <div className="bg-white rounded-xl border border-stone-200 shadow-sm overflow-hidden">
              <div className="grid grid-cols-4 bg-stone-900 text-white text-sm font-medium">
                <div className="p-4">Plan</div>
                <div className="p-4 text-center">Price</div>
                <div className="p-4 text-center">Per month</div>
                <div className="p-4 text-center">Savings</div>
              </div>
              {bundles.map((b, idx) => (
                <div key={b.plan} className={`grid grid-cols-4 text-sm ${idx < bundles.length - 1 ? 'border-b border-stone-100' : ''} ${b.plan === '3 Months' ? 'bg-sage-50' : ''}`}>
                  <div className="p-4 font-medium text-stone-900 flex items-center gap-2">
                    {b.plan}
                    {b.plan === '3 Months' && <span className="text-xs bg-sage-600 text-white px-2 py-0.5 rounded-full">Recommended</span>}
                  </div>
                  <div className="p-4 text-center text-stone-800">{b.price}</div>
                  <div className="p-4 text-center text-stone-800">{b.perMonth}</div>
                  <div className="p-4 text-center text-stone-500">{b.savings || '—'}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Full Feature Matrix */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-8 text-center">Full Feature Comparison</h2>

            <div className="bg-white rounded-xl border border-stone-200 shadow-sm overflow-hidden">
              <div className="grid grid-cols-4 bg-stone-900 text-white text-sm font-medium">
                <div className="p-4">Feature</div>
                <div className="p-4 text-center">Free</div>
                <div className="p-4 text-center">Pro Single</div>
                <div className="p-4 text-center">Pro+</div>
              </div>
              {featureMatrix.map((row, idx) => (
                <div key={row.feature} className={`grid grid-cols-4 text-sm ${idx < featureMatrix.length - 1 ? 'border-b border-stone-100' : ''}`}>
                  <div className="p-3 px-4 text-stone-700">{row.feature}</div>
                  <div className="p-3 flex justify-center">
                    {row.free ? <Check size={16} className="text-sage-600" /> : <Minus size={16} className="text-stone-300" />}
                  </div>
                  <div className="p-3 flex justify-center">
                    {row.pro ? <Check size={16} className="text-sage-600" /> : <Minus size={16} className="text-stone-300" />}
                  </div>
                  <div className="p-3 flex justify-center">
                    {row.plus ? <Check size={16} className="text-sage-600" /> : <Minus size={16} className="text-stone-300" />}
                  </div>
                </div>
              ))}
              {/* Totals */}
              <div className="grid grid-cols-4 text-sm border-t-2 border-stone-200 bg-stone-50 font-bold">
                <div className="p-4 text-stone-900">Total features</div>
                <div className="p-4 text-center text-stone-900">1</div>
                <div className="p-4 text-center text-stone-900">12</div>
                <div className="p-4 text-center text-stone-900">21</div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-stone-900 text-white py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-serif font-bold mb-4">Ready to Plan Your Move?</h2>
            <p className="text-stone-300 mb-8 text-lg">
              Start free. Upgrade when you need the full plan.
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
