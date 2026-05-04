import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { sceneTransitions } from '@/lib/video/animations';

export function Scene1() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 1500),
      setTimeout(() => setPhase(3), 2500),
      setTimeout(() => setPhase(4), 4500), // start exit
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center bg-stone-900 overflow-hidden"
      {...sceneTransitions.fadeBlur}
    >
      {/* Background Video Layer */}
      <motion.video 
        src={`${import.meta.env.BASE_URL}globe-bg.mp4`}
        className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-screen"
        autoPlay muted loop playsInline
        animate={{ scale: [1, 1.05] }}
        transition={{ duration: 6, ease: "linear" }}
      />

      <div className="absolute inset-0 bg-stone-900/60"></div>

      {/* Decorative floating elements */}
      <motion.div 
        className="absolute w-[40vw] h-[40vw] rounded-full border-[1px] border-sage-500/20"
        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute w-[60vw] h-[60vw] rounded-full border-[1px] border-sage-500/10"
        animate={{ rotate: -360, scale: [1, 1.05, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 text-center px-12" style={{ perspective: '1000px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={phase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >
          <span className="text-sage-200 text-[1.5vw] tracking-[0.2em] font-body uppercase">THE WORLD IS OPEN</span>
        </motion.div>

        <motion.h1 
          className="text-[7vw] font-display text-cream-50 leading-[1.1]"
        >
          {'Ready to'.split('').map((char, i) => (
            <motion.span key={i} className="inline-block"
              initial={{ opacity: 0, y: 50, rotateX: -60 }}
              animate={phase >= 2 ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 50, rotateX: -60 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20, delay: phase >= 2 ? i * 0.04 : 0 }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
          <br/>
          {'move abroad?'.split('').map((char, i) => (
            <motion.span key={`b-${i}`} className="inline-block text-sage-300 italic"
              initial={{ opacity: 0, y: 50, rotateX: -60 }}
              animate={phase >= 3 ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 50, rotateX: -60 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20, delay: phase >= 3 ? i * 0.04 : 0 }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.h1>
      </div>
    </motion.div>
  );
}