import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { sceneTransitions } from '@/lib/video/animations';

export function Scene2() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 400),
      setTimeout(() => setPhase(2), 1200),
      setTimeout(() => setPhase(3), 2200),
      setTimeout(() => setPhase(4), 3200),
      setTimeout(() => setPhase(5), 5500), // exit
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center bg-cream-100 overflow-hidden"
      {...sceneTransitions.wipe}
    >
      {/* Background Image Layer */}
      <motion.div className="absolute inset-0">
        <motion.img 
          src={`${import.meta.env.BASE_URL}travel-bg.jpg`}
          className="w-full h-full object-cover opacity-[0.05]"
          initial={{ scale: 1.1, x: 20 }}
          animate={{ scale: 1, x: 0 }}
          transition={{ duration: 7, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream-100/80 to-cream-100"></div>
      </motion.div>

      {/* Persistent geometric shapes */}
      <motion.div 
        className="absolute right-[-10vw] top-[-10vw] w-[40vw] h-[40vw] rounded-full bg-sage-200/50 blur-[80px]"
        animate={{ y: [0, 50, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="w-full max-w-[80vw] mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
        <div className="flex-1 space-y-8">
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={phase >= 1 ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="h-[2px] w-24 bg-sage-500 origin-left"
          />
          
          <motion.h2 
            className="text-[4.5vw] font-display text-stone-900 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "circOut" }}
          >
            The real systems behind moving abroad
          </motion.h2>

          <motion.p 
            className="text-[1.8vw] text-sage-600 font-body max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={phase >= 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: "circOut" }}
          >
            Intelligence, guides, and real knowledge — before you make the move.
          </motion.p>
        </div>

        <div className="flex-1 relative h-[30vw] flex items-center justify-center">
          <motion.div 
            className="absolute w-full h-full border border-sage-300 rounded-3xl"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={phase >= 4 ? { opacity: 1, scale: 1, rotate: -2 } : { opacity: 0, scale: 0.8, rotate: -5 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          />
          <motion.div 
            className="absolute w-full h-full bg-sage-500 rounded-3xl overflow-hidden shadow-2xl shadow-sage-900/20"
            initial={{ opacity: 0, scale: 0.8, rotate: 5, y: 20 }}
            animate={phase >= 4 ? { opacity: 1, scale: 1, rotate: 2, y: 0 } : { opacity: 0, scale: 0.8, rotate: 5, y: 20 }}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
          >
             <div className="absolute inset-0 bg-stone-900/10 mix-blend-overlay"></div>
             <motion.div 
               className="absolute inset-0 flex items-center justify-center p-8"
             >
                <div className="text-cream-50 font-display text-[2.5vw] text-center leading-snug">
                  Relocation Field Guide
                  <br/>
                  <span className="text-sage-200 font-body text-[1.2vw] tracking-widest uppercase mt-4 block">60+ in-depth articles</span>
                </div>
             </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}