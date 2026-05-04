import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { sceneTransitions } from '@/lib/video/animations';

const messages = [
  { role: 'user', text: 'I want to move to Portugal in 6 months. Where do I start?' },
  { role: 'ai',   text: 'Great choice! Let\'s start with your D7 Visa application. I\'ll build your step-by-step checklist. First: do you have proof of passive income over €820/mo?' },
  { role: 'user', text: 'Yes, I have remote freelance income.' },
  { role: 'ai',   text: 'Perfect. That qualifies you. Next step: gather bank statements (last 3 months) and book an appointment at the Portuguese consulate in your city. I\'ve added both to your task list.' },
];

export function Scene4() {
  const [phase, setPhase] = useState(0);
  const [msgCount, setMsgCount] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 400),
      setTimeout(() => setMsgCount(1), 900),
      setTimeout(() => setMsgCount(2), 2200),
      setTimeout(() => setMsgCount(3), 3600),
      setTimeout(() => setMsgCount(4), 5000),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center bg-stone-900 overflow-hidden"
      {...sceneTransitions.splitHorizontal}
    >
      {/* Ambient glow */}
      <motion.div
        className="absolute top-0 right-0 w-[50vw] h-[100vh] bg-sage-600/15 blur-[120px] rounded-full pointer-events-none"
        animate={{ x: [-40, 0, -40], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="w-full max-w-[86vw] mx-auto flex items-start gap-12 relative z-10">

        {/* Left: chat window */}
        <motion.div
          className="flex-[1.1] flex flex-col bg-stone-800 border border-stone-700 rounded-2xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, x: -40, rotateY: 20 }}
          animate={phase >= 1 ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: -40, rotateY: 20 }}
          transition={{ duration: 1, ease: 'circOut' }}
          style={{ perspective: '800px' }}
        >
          {/* Title bar */}
          <div className="flex items-center gap-2 px-5 py-3 border-b border-stone-700 bg-stone-900/60">
            <div className="w-3 h-3 rounded-full bg-sage-500" />
            <span className="text-[1.2vw] font-body text-sage-300 font-semibold tracking-wide">GoMate AI Assistant</span>
          </div>

          {/* Messages */}
          <div className="flex flex-col gap-3 px-5 py-5 min-h-[28vw] justify-end">
            {messages.slice(0, msgCount).map((msg, i) => (
              <motion.div
                key={i}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                {msg.role === 'ai' && (
                  <div className="w-7 h-7 rounded-full bg-sage-500 flex items-center justify-center shrink-0 mr-3 mt-1 text-[0.8vw] font-bold text-cream-50">G</div>
                )}
                <div
                  className={`max-w-[78%] px-4 py-3 rounded-2xl text-[1.1vw] font-body leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-sage-600 text-cream-50 rounded-tr-sm'
                      : 'bg-stone-700 text-stone-200 rounded-tl-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </motion.div>
            ))}

            {/* Typing indicator */}
            {msgCount > 0 && msgCount < messages.length && (
              <motion.div className="flex justify-start" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className="w-7 h-7 rounded-full bg-sage-500 flex items-center justify-center shrink-0 mr-3 text-[0.8vw] font-bold text-cream-50">G</div>
                <div className="bg-stone-700 px-4 py-3 rounded-2xl rounded-tl-sm flex gap-1 items-center">
                  {[0, 1, 2].map(d => (
                    <motion.div
                      key={d}
                      className="w-2 h-2 rounded-full bg-sage-400"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity, delay: d * 0.15 }}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Input bar */}
          <div className="flex items-center gap-3 px-5 py-4 border-t border-stone-700 bg-stone-900/40">
            <div className="flex-1 bg-stone-700/50 rounded-xl px-4 py-2 text-[1vw] text-stone-400 font-body">Ask anything about relocating…</div>
            <div className="w-9 h-9 rounded-xl bg-sage-500 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Right: feature list */}
        <motion.div
          className="flex-[0.85] space-y-6"
          initial={{ opacity: 0, x: 40 }}
          animate={phase >= 1 ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
          transition={{ duration: 0.9, ease: 'circOut', delay: 0.2 }}
        >
          <div>
            <div className="text-sage-400 font-body tracking-[0.2em] uppercase text-[1.1vw] mb-3">Your AI Relocation Assistant</div>
            <h2 className="text-[4vw] font-display text-cream-50 leading-[1.1]">
              Plan smarter.<br />Move faster.
            </h2>
          </div>

          {[
            { icon: '📋', label: 'Personalised step-by-step checklist' },
            { icon: '🛂', label: 'Visa & compliance guidance' },
            { icon: '🏠', label: 'Housing & cost of living research' },
            { icon: '✅', label: 'Task tracking & deadline alerts' },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: 20 }}
              animate={phase >= 1 ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
            >
              <span className="text-[1.8vw]">{item.icon}</span>
              <p className="text-[1.6vw] text-stone-300 font-body">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
