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
      'All 125+ country guides',
      'Field Guide articles',
    ],
    limits: '1 plan. No multi-agent research, guides, or post-arrival features.',
    cta: 'Try Free',
    ctaLink: APP_URL,
    ctaExternal: true,
  },
  {
    name: 'Pro',
    price: '$39',
    period: '/month',
    description: 'Your AI relocation consultant team',
    highlight: true,
    features: [
      'Multi-agent extraction (no hallucination)',
      '13 specialist research agents',
      'Visa recommendations grounded in official sources',
      'Inline citations (Migrationsverket, Skatteverket, etc.)',
      'Cost of living + budget planner',
      'Document checklist with apostille tracking',
      'Pre-departure timeline',
      'Post-arrival settling-in (DAG-based tasks)',
      'Compliance alerts + iCal export',
      'Audit trail per recommendation',
      'Unlimited relocation plans',
      'Email reminders + document templates',
    ],
    limits: 'Full platform access. Cancel anytime.',
    cta: 'Start Pro',
    ctaLink: APP_URL,
    ctaExternal: true,
  },
];

const bundles = [
  { plan: 'Monthly', price: '$39/mo', perMonth: '$39', savings: null },
  { plan: 'Annual', price: '$299/year', perMonth: '$25', savings: '36%' },
];

const featureMatrix = [
  { feature: 'Chat interview', free: true, pro: true },
  { feature: 'Country guides browsing', free: true, pro: true },
  { feature: 'Field Guide articles', free: true, pro: true },
  { feature: 'Multi-agent extraction', free: false, pro: true },
  { feature: 'Visa specialist agent', free: false, pro: true },
  { feature: 'Tax strategist agent', free: false, pro: true },
  { feature: 'Documents specialist (apostille)', free: false, pro: true },
  { feature: 'Cost of living analysis', free: false, pro: true },
  { feature: 'Budget planner + affordability', free: false, pro: true },
  { feature: 'Inline citations to official sources', free: false, pro: true },
  { feature: 'Audit trail per recommendation', free: false, pro: true },
  { feature: 'Personalized relocation guide', free: false, pro: true },
  { feature: 'Document checklist + apostille tracking', free: false, pro: true },
  { feature: 'Pre-departure timeline', free: false, pro: true },
  { feature: 'Plan consistency checks (17 rules)', free: false, pro: true },
  { feature: 'Settling-in tasks (DAG)', free: false, pro: true },
  { feature: 'Compliance alerts + iCal export', free: false, pro: true },
  { feature: 'Post-arrival AI assistant', free: false, pro: true },
  { feature: 'Visa application tracker', free: false, pro: true },
  { feature: 'Banking + tax registration wizards', free: false, pro: true },
  { feature: 'Wellbeing check-ins (stage-aware)', free: false, pro: true },
  { feature: 'Email reminders + document templates', free: false, pro: true },
  { feature: 'Unlimited relocation plans', free: false, pro: true },
];

const PricingPage = () => {
  return (
    <>
      <Helmet>
        <title>Pricing — GoMate</title>
        <meta name="description" content="GoMate pricing: Free for profile building + 125 country guides, Pro at $39/mo for the full AI relocation consultant team. Replace a $5,000 relocation agency for 1% of the cost." />
        <meta property="og:title" content="Pricing — GoMate" />
        <meta property="og:description" content="Free for browsing + profile building. Pro at $39/mo for the full AI relocation consultant team." />
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
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
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

        {/* Pro Subscription Plans */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2 text-center">Pro Subscription Plans</h2>
            <p className="text-stone-600 text-center mb-8">Save 36% with an annual plan — covers your full relocation lifecycle.</p>

            <div className="bg-white rounded-xl border border-stone-200 shadow-sm overflow-hidden">
              <div className="grid grid-cols-4 bg-stone-900 text-white text-sm font-medium">
                <div className="p-4">Plan</div>
                <div className="p-4 text-center">Price</div>
                <div className="p-4 text-center">Per month</div>
                <div className="p-4 text-center">Savings</div>
              </div>
              {bundles.map((b, idx) => (
                <div key={b.plan} className={`grid grid-cols-4 text-sm ${idx < bundles.length - 1 ? 'border-b border-stone-100' : ''} ${b.plan === 'Annual' ? 'bg-sage-50' : ''}`}>
                  <div className="p-4 font-medium text-stone-900 flex items-center gap-2">
                    {b.plan}
                    {b.plan === 'Annual' && <span className="text-xs bg-sage-600 text-white px-2 py-0.5 rounded-full">Best value</span>}
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
              <div className="grid grid-cols-3 bg-stone-900 text-white text-sm font-medium">
                <div className="p-4">Feature</div>
                <div className="p-4 text-center">Free</div>
                <div className="p-4 text-center">Pro</div>
              </div>
              {featureMatrix.map((row, idx) => (
                <div key={row.feature} className={`grid grid-cols-3 text-sm ${idx < featureMatrix.length - 1 ? 'border-b border-stone-100' : ''}`}>
                  <div className="p-3 px-4 text-stone-700">{row.feature}</div>
                  <div className="p-3 flex justify-center">
                    {row.free ? <Check size={16} className="text-sage-600" /> : <Minus size={16} className="text-stone-300" />}
                  </div>
                  <div className="p-3 flex justify-center">
                    {row.pro ? <Check size={16} className="text-sage-600" /> : <Minus size={16} className="text-stone-300" />}
                  </div>
                </div>
              ))}
              {/* Totals */}
              <div className="grid grid-cols-3 text-sm border-t-2 border-stone-200 bg-stone-50 font-bold">
                <div className="p-4 text-stone-900">Total features</div>
                <div className="p-4 text-center text-stone-900">3</div>
                <div className="p-4 text-center text-stone-900">23</div>
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
