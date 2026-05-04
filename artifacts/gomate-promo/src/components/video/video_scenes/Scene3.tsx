import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { sceneTransitions } from '@/lib/video/animations';

export function Scene3() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 400),
      setTimeout(() => setPhase(2), 1200),
      setTimeout(() => setPhase(3), 2400),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  const cols = [
    { flag: '🇵🇹', name: 'Portugal', visa: '✓ D7 Visa', rent: '€900/mo', tax: '20% NHR', health: 'Public + Private' },
    { flag: '🇲🇽', name: 'Mexico', visa: '✓ Temporary', rent: '$650/mo', tax: '0% Foreign', health: 'IMSS + Private' },
    { flag: '🇹🇭', name: 'Thailand', visa: '✓ LTR Visa', rent: '฿18k/mo', tax: '15% Flat', health: 'World-class' },
  ];

  const rows = ['Visa', 'Avg. Rent', 'Tax Rate', 'Healthcare'];

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center bg-sage-600 overflow-hidden"
      {...sceneTransitions.clipCircle}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: 'radial-gradient(var(--color-primary-light) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />

      {/* Header */}
      <motion.div
        className="text-center relative z-10 mb-8"
        initial={{ opacity: 0, y: 40 }}
        animate={phase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.9, ease: 'circOut' }}
      >
        <h2 className="text-[6vw] font-display text-cream-50 leading-none">
          125+ Country Guides
        </h2>
        <p className="text-[1.6vw] font-body text-sage-200 uppercase tracking-widest mt-2">
          Compare · Decide · Go
        </p>
      </motion.div>

      {/* Compare table */}
      <motion.div
        className="relative z-10 w-full max-w-[82vw] mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, ease: 'circOut' }}
      >
        {/* Column headers */}
        <div className="grid grid-cols-4 gap-3 mb-3">
          <div />
          {cols.map((c, i) => (
            <motion.div
              key={c.name}
              className="bg-sage-500/40 border border-sage-400/50 rounded-xl px-4 py-3 text-center backdrop-blur-sm"
              initial={{ opacity: 0, y: -10 }}
              animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="text-[2.5vw] mb-1">{c.flag}</div>
              <div className="text-[1.3vw] font-body font-semibold text-cream-50">{c.name}</div>
            </motion.div>
          ))}
        </div>

        {/* Rows */}
        {rows.map((row, ri) => {
          const vals = [
            cols.map(c => [c.visa, c.rent, c.tax, c.health][ri]),
          ][0];
          return (
            <motion.div
              key={row}
              className="grid grid-cols-4 gap-3 mb-3"
              initial={{ opacity: 0, x: -20 }}
              animate={phase >= 3 ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: ri * 0.12 }}
            >
              <div className="flex items-center px-4 py-3 text-[1.2vw] font-body text-sage-200 uppercase tracking-wider">
                {row}
              </div>
              {vals.map((val, ci) => (
                <div
                  key={ci}
                  className="bg-sage-700/30 border border-sage-500/30 rounded-xl px-4 py-3 text-center"
                >
                  <span className="text-[1.3vw] font-body text-cream-100">{val}</span>
                </div>
              ))}
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
