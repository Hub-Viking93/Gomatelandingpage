import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Trash2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAIChat } from '@/context/AIChatContext';
import LoadingSkeleton from './chat/LoadingSkeleton';
import TypewriterText from './chat/TypewriterText';
import AppRecommendationCTA from './chat/AppRecommendationCTA';
import ResourcesSection from './chat/ResourcesSection';
const ChatWindow = () => {
  const { 
    isOpen, 
    toggleChat, 
    messages, 
    sendMessage, 
    isLoading, 
    clearChat 
  } = useAIChat();
  
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  
  const [animatedMessages, setAnimatedMessages] = useState(new Set());

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading, isOpen, animatedMessages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current.focus(), 100);
    }
  }, [isOpen]);

  const handleSend = (e) => {
    e.preventDefault();
    if (inputValue.trim() && !isLoading) {
      sendMessage(inputValue);
      setInputValue('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend(e);
    }
  };

  const handleAnimationComplete = (index) => {
    setAnimatedMessages(prev => {
      const newSet = new Set(prev);
      newSet.add(index);
      return newSet;
    });
    setTimeout(scrollToBottom, 100);
  };

  const shouldShowAppCTA = (content) => {
    const keywords = ['GoMate App', 'personalized plan', 'tailored guidance', 'comprehensive plan'];
    return keywords.some(keyword => content.includes(keyword));
  };

  const staticMarkdownComponents = {
    strong: ({ node, ...props }) => <span className="font-bold text-sage-800" {...props} />,
    em: ({ node, ...props }) => <span className="italic text-stone-600" {...props} />,
    ul: ({ node, ...props }) => <ul className="list-disc pl-4 space-y-1 my-2" {...props} />,
    ol: ({ node, ...props }) => <ol className="list-decimal pl-4 space-y-1 my-2" {...props} />,
    li: ({ node, ...props }) => <li className="pl-1" {...props} />,
    code: ({ node, inline, className, children, ...props }) => {
      return inline ? (
        <code className="bg-stone-100 px-1 py-0.5 rounded text-xs font-mono text-stone-700 border border-stone-200" {...props}>
          {children}
        </code>
      ) : (
        <div className="bg-stone-100 p-2 rounded-md my-2 border border-stone-200 overflow-x-auto">
          <code className="text-xs font-mono text-stone-700 block" {...props}>
            {children}
          </code>
        </div>
      );
    },
    a: ({ node, href, children, ...props }) => {
      const isInternal = href.startsWith('/');
      const className = "text-blue-600 hover:text-blue-800 underline decoration-blue-600/30 hover:decoration-blue-800 underline-offset-2 transition-colors duration-200 cursor-pointer font-medium";
      
      if (isInternal) {
        return (
          <Link to={href} className={className} {...props}>
            {children}
          </Link>
        );
      }
      return (
        <a 
          href={href} 
          className={className} 
          target="_blank" 
          rel="noopener noreferrer" 
          {...props}
        >
          {children}
        </a>
      );
    },
    p: ({ node, ...props }) => <p className="mb-2 last:mb-0 leading-relaxed" {...props} />,
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-[calc(100vw-32px)] sm:w-[400px] h-[560px] max-h-[calc(100vh-100px)] bg-white rounded-2xl shadow-2xl border border-stone-200 z-[60] flex flex-col overflow-hidden font-sans"
        >
          {/* Header */}
          <div className="bg-sage-600 p-4 flex items-center justify-between shrink-0 shadow-sm">
            <div>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-300"></span>
                </span>
                <h3 className="font-bold text-white text-base leading-tight">GoMate</h3>
              </div>
              <p className="text-sage-100 text-xs font-medium mt-0.5">Your relocation companion</p>
            </div>
            <div className="flex items-center gap-1">
              <button 
                onClick={clearChat}
                className="p-2 text-sage-200 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                title="Clear Conversation"
              >
                <Trash2 size={16} />
              </button>
              <button 
                onClick={toggleChat}
                className="p-2 text-white hover:bg-white/10 rounded-full transition-colors"
                aria-label="Close chat"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto bg-stone-50 p-4 space-y-4">
            {messages.map((msg, idx) => {
              const isUser = msg.role === 'user';
              const shouldAnimateTypewriter = !isUser && idx === messages.length - 1 && !animatedMessages.has(idx);

              return (
                <div key={idx} className="flex flex-col gap-2">
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex items-end gap-2 ${isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3.5 rounded-2xl text-sm shadow-sm transition-all duration-200 ${
                        isUser 
                          ? 'bg-sage-600 text-white rounded-br-none shadow-md' 
                          : msg.isError 
                            ? 'bg-rose-50 text-rose-800 border border-rose-100 rounded-bl-none'
                            : 'bg-white text-stone-800 border border-stone-200 rounded-bl-none shadow-sm'
                      }`}
                    >
                      {!isUser && !msg.isError ? (
                        shouldAnimateTypewriter ? (
                          <TypewriterText 
                            content={msg.content} 
                            resources={msg.suggestedResources}
                            onComplete={() => handleAnimationComplete(idx)}
                          />
                        ) : (
                          <div className="flex flex-col gap-2">
                            <div className="prose prose-sm prose-stone max-w-none text-stone-800">
                              <ReactMarkdown components={staticMarkdownComponents}>
                                {msg.content}
                              </ReactMarkdown>
                            </div>
                            
                            {shouldShowAppCTA(msg.content) && (
                              <AppRecommendationCTA />
                            )}

                            {msg.suggestedResources && msg.suggestedResources.length > 0 && (
                              <ResourcesSection resources={msg.suggestedResources} />
                            )}
                          </div>
                        )
                      ) : (
                        <p className="leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                      )}
                      
                      {msg.timestamp && (
                        <div className={`text-[10px] mt-1.5 text-right font-medium opacity-70 ${isUser ? 'text-sage-100' : 'text-stone-400'}`}>
                          {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>
              );
            })}

            {isLoading && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex items-end gap-2"
              >
                <LoadingSkeleton />
              </motion.div>
            )}
            <div ref={messagesEndRef} className="h-1" />
          </div>

          {/* Footer Input */}
          <div className="p-4 bg-white border-t border-stone-200 shrink-0 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.02)]">
            <form onSubmit={handleSend} className="relative flex items-end gap-2">
              <textarea
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about relocation..."
                className="w-full resize-none max-h-32 min-h-[48px] py-3 pl-4 pr-12 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage-500 focus:bg-white text-stone-800 text-sm placeholder:text-stone-400 transition-all duration-200"
                rows={1}
                style={{ height: 'auto', minHeight: '48px' }}
                onInput={(e) => {
                  e.target.style.height = 'auto';
                  e.target.style.height = `${e.target.scrollHeight}px`;
                }}
              />
              <Button 
                type="submit" 
                size="icon"
                disabled={!inputValue.trim() || isLoading}
                className={`absolute right-1.5 bottom-1.5 h-9 w-9 rounded-lg transition-all duration-200 ${
                  inputValue.trim() 
                    ? 'bg-sage-600 hover:bg-sage-700 shadow-md hover:shadow-lg translate-y-0' 
                    : 'bg-stone-200 text-stone-400 cursor-not-allowed'
                }`}
              >
                <Send size={16} className={inputValue.trim() ? "text-white" : "text-stone-400"} />
              </Button>
            </form>
            <div className="text-center mt-2">
              <span className="text-[10px] text-stone-400 font-medium tracking-tight">
                AI can make mistakes. Check important info.
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ChatWindow;
