import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle } from 'lucide-react';
import { useAIChat } from '@/context/AIChatContext';
import ChatHint from '@/components/chat/ChatHint';

const FloatingChatBubble = () => {
  const { isOpen, toggleChat, hasUnread } = useAIChat();

  const bubbleVariants = {
    idle: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
        delay: 3
      }
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.9,
      transition: { duration: 0.1 }
    }
  };

  const unreadVariants = {
    initial: { scale: 0 },
    animate: {
      scale: 1,
      transition: { type: "spring", stiffness: 400, damping: 15 }
    },
    exit: { scale: 0 }
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
      {/* Smart Hint Component */}
      <ChatHint isOpen={isOpen} onDismiss={() => {}} />

      {/* Main Button */}
      <motion.button
        onClick={toggleChat}
        variants={bubbleVariants}
        initial="idle"
        animate="idle"
        whileHover="hover"
        whileTap="tap"
        className={`pointer-events-auto relative w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-xl flex items-center justify-center transition-colors duration-300 ${
          isOpen ? 'bg-stone-800' : 'bg-sage-600 hover:bg-sage-700'
        }`}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} className="text-white sm:w-7 sm:h-7" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={26} className="text-white sm:w-7 sm:h-7" strokeWidth={2} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Unread Indicator */}
        <AnimatePresence>
          {!isOpen && hasUnread && (
            <motion.span
              variants={unreadVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute top-0 right-0 w-4 h-4 sm:w-5 sm:h-5 bg-rose-500 rounded-full border-[3px] border-white"
            />
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default FloatingChatBubble;
