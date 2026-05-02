import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles } from 'lucide-react';

const ChatHint = ({ isOpen, onDismiss }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check localStorage on mount
    const dismissed = localStorage.getItem('gomate_hint_dismissed');
    if (!dismissed) {
      // Delay appearance slightly for better UX (2 seconds)
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = (e) => {
    e.stopPropagation();
    setIsVisible(false);
    localStorage.setItem('gomate_hint_dismissed', 'true');
    if (onDismiss) onDismiss();
  };

  // Don't show if chat is open, or if dismissed/hidden
  if (isOpen || !isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.9 }}
        transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 25 }}
        className="pointer-events-auto relative max-w-[240px] bg-white/90 backdrop-blur-md p-4 rounded-2xl rounded-br-sm shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/50 origin-bottom-right group"
      >
        {/* Decorative background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-sage-50 to-stone-50 rounded-2xl rounded-br-sm opacity-50 -z-10" />

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-stone-400 hover:text-stone-600 hover:bg-stone-100 p-1 rounded-full transition-all duration-200"
          aria-label="Dismiss hint"
        >
          <X size={14} />
        </button>

        {/* Content */}
        <div className="flex gap-3">
          <div className="mt-1 shrink-0">
            <div className="bg-sage-100 p-1.5 rounded-full">
              <Sparkles size={16} className="text-sage-600" />
            </div>
          </div>
          <div className="pr-4">
            <h4 className="font-bold text-stone-800 text-sm mb-1">Need a hand?</h4>
            <p className="text-stone-600 text-xs leading-relaxed font-medium">
              Don't know where to start? I'd be happy to help!
            </p>
          </div>
        </div>

        {/* Arrow Pointer */}
        <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r border-b border-white/50 transform rotate-45 shadow-[2px_2px_2px_-1px_rgba(0,0,0,0.05)]"></div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ChatHint;