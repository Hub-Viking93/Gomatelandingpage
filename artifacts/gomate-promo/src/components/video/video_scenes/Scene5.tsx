import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { sceneTransitions } from '@/lib/video/animations';

const plans = [
  {
    name: 'Explorer',
    price: 'Free',
    sub: 'Forever',
    features: ['5 country guides', 'Basic AI assistant', 'Community forum'],
    highlight: false,
  },
  {
    name: 'Nomad',
    price: '$12',
    sub: 'per month',
    features: ['All 125+ guides', 'Full AI assistant', 'Compare tool', 'Task tracker'],
    highlight: true,
  },
  {
    name: 'Expat Pro',
    price: '$29',
    sub: 'per month',
    features: ['Everything in Nomad', 'Lawyer consultations', 'Priority support', 'Tax planning'],
    highlight: false,
  },
];

export function Scene5() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 300),
      setTimeout(() => setPhase(2), 900),
      setTimeout(() => setPhase(3), 1700),
      setTimeout(() => setPhase(4), 5200),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center bg-cream-100 overflow-hidden"
      {...sceneTransitions.morphExpand}
    >
      {/* Subtle noise texture */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }}
      />

      {/* Heading */}
      <motion.div
        className="relative z-10 text-center mb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={phase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, ease: 'circOut' }}
      >
        <p className="text-[1.3vw] font-body text-sage-600 uppercase tracking-[0.25em] mb-2">Simple Pricing</p>
        <h2 className="text-[4vw] font-display text-stone-900 leading-tight">Start free. Go further.</h2>
      </motion.div>

      {/* Pricing cards */}
      <motion.div
        className="relative z-10 flex gap-5 max-w-[88vw] w-full justify-center mb-10"
        initial={{ opacity: 0 }}
        animate={phase >= 2 ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            className={`flex-1 max-w-[26vw] rounded-2xl px-6 py-7 flex flex-col gap-4 ${
              plan.highlight
                ? 'bg-sage-600 border-2 border-sage-400 shadow-xl shadow-sage-900/20'
                : 'bg-white border border-stone-200 shadow-sm'
            }`}
            initial={{ opacity: 0, y: 25, scale: 0.97 }}
            animate={phase >= 2 ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 25, scale: 0.97 }}
            transition={{ duration: 0.55, delay: i * 0.1, ease: 'circOut' }}
          >
            {plan.highlight && (
              <div className="text-[1vw] font-body text-cream-50/80 uppercase tracking-widest bg-sage-500/40 rounded-full px-3 py-1 self-start">
                Most Popular
              </div>
            )}
            <div>
              <p className={`text-[1.1vw] font-body uppercase tracking-widest mb-1 ${plan.highlight ? 'text-sage-200' : 'text-stone-400'}`}>
                {plan.name}
              </p>
              <div className="flex items-baseline gap-1">
                <span className={`text-[3.5vw] font-display font-bold leading-none ${plan.highlight ? 'text-cream-50' : 'text-stone-900'}`}>
                  {plan.price}
                </span>
                <span className={`text-[1vw] font-body ${plan.highlight ? 'text-sage-200' : 'text-stone-400'}`}>{plan.sub}</span>
              </div>
            </div>

            <div className={`h-px w-full ${plan.highlight ? 'bg-sage-400/30' : 'bg-stone-100'}`} />

            <ul className="space-y-2.5">
              {plan.features.map((f, fi) => (
                <motion.li
                  key={fi}
                  className={`flex items-center gap-2.5 text-[1.1vw] font-body ${plan.highlight ? 'text-cream-100' : 'text-stone-600'}`}
                  initial={{ opacity: 0, x: -8 }}
                  animate={phase >= 3 ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
                  transition={{ duration: 0.35, delay: i * 0.1 + fi * 0.07 }}
                >
                  <svg className={`w-4 h-4 shrink-0 ${plan.highlight ? 'text-sage-200' : 'text-sage-500'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {f}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      {/* Logo + tagline */}
      <motion.div
        className="relative z-10 flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={phase >= 4 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.92 }}
        transition={{ duration: 0.8, ease: 'circOut' }}
      >
        <motion.img
          src="https://raw.githubusercontent.com/Hub-Viking93/gomatelogo/626b0079bd23e19b026f898fdd9353dfe7aae4d9/GoMateLogo.png"
          alt="GoMate Logo"
          className="h-[6vw] object-contain mb-3"
        />
        <h1 className="text-[3.5vw] font-display text-stone-900 italic tracking-tight">
          "Just Go Mate!"
        </h1>
        <motion.div
          className="mt-4 h-[1px] bg-sage-500"
          initial={{ width: 0 }}
          animate={phase >= 4 ? { width: '30vw' } : { width: 0 }}
          transition={{ duration: 1, ease: 'easeInOut', delay: 0.2 }}
        />
        <motion.p
          className="mt-4 text-[1.1vw] font-body text-sage-600 tracking-[0.25em] uppercase"
          initial={{ opacity: 0 }}
          animate={phase >= 4 ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          gomate.io · Relocation Intelligence Platform
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
