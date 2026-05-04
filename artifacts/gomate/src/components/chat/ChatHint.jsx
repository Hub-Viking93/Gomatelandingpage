import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const SAGE_LIGHT = "#d4dfd5";

const ChatHint = ({ isOpen, onDismiss }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem('gomate_hint_dismissed');
    if (dismissed) return;

    const showTimer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(showTimer);
  }, []);

  const handleClose = (e) => {
    e.stopPropagation();
    setIsVisible(false);
    localStorage.setItem('gomate_hint_dismissed', 'true');
    if (onDismiss) onDismiss();
  };

  if (isOpen || !isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 14, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 8, scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 360, damping: 24 }}
        className="pointer-events-auto relative origin-bottom-right"
        style={{ marginRight: 8 }}
      >
        {/* Bubble body */}
        <div
          className="relative bg-white shadow-[0_10px_30px_-5px_rgba(61,94,65,0.25),0_4px_10px_rgba(0,0,0,0.06)] border pl-4 pr-9 py-3"
          style={{
            borderColor: SAGE_LIGHT,
            borderRadius: '20px',
            maxWidth: 240,
          }}
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 z-10 text-stone-400 hover:text-stone-600 hover:bg-stone-100 p-1 rounded-full transition-all duration-200"
            aria-label="Dismiss hint"
          >
            <X size={13} />
          </button>

          <p className="font-semibold text-stone-800 text-sm leading-tight mb-1">
            Need a hand?
          </p>
          <p className="text-stone-600 text-sm leading-snug">
            Don't know where to start? I'd be happy to help!
          </p>

          {/* Tail — points down at the chat button */}
          <svg
            width="18"
            height="14"
            viewBox="0 0 18 14"
            className="absolute"
            style={{ right: 16, bottom: -12 }}
          >
            <path
              d="M 1 0 Q 5 8 9 13 Q 13 8 17 0 Z"
              fill="white"
              stroke={SAGE_LIGHT}
              strokeWidth="1"
            />
            {/* Cover the seam where the tail meets the bubble's bottom edge */}
            <rect x="2" y="-1" width="14" height="2" fill="white" />
          </svg>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ChatHint;
