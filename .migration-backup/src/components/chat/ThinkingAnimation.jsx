import React from 'react';
import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';

const ThinkingAnimation = () => {
  return (
    <div className="flex items-center gap-3 px-1 py-0.5">
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.7, 1, 0.7],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
        className="text-sage-600 relative"
      >
        <Brain size={20} />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0, 0.5, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut"
          }}
          className="absolute inset-0 bg-sage-400 rounded-full blur-md -z-10"
        />
      </motion.div>
      <div className="flex gap-1">
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
          className="w-1.5 h-1.5 bg-sage-500 rounded-full"
        />
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
          className="w-1.5 h-1.5 bg-sage-500 rounded-full"
        />
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
          className="w-1.5 h-1.5 bg-sage-500 rounded-full"
        />
      </div>
      <span className="text-xs font-medium text-sage-600 ml-1">Thinking...</span>
    </div>
  );
};

export default ThinkingAnimation;