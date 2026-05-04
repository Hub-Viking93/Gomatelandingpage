import React, { useState, useEffect, useRef, useCallback } from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import AppRecommendationCTA from './AppRecommendationCTA';
import ResourcesSection from './ResourcesSection';

const TypewriterText = ({ content, resources = [], onComplete }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [showCTA, setShowCTA] = useState(false);
  const onCompleteRef = useRef(onComplete);
  const contentRef = useRef(content);

  // Keep refs in sync without triggering re-runs
  onCompleteRef.current = onComplete;
  contentRef.current = content;

  // App Recommendation Detection Logic
  useEffect(() => {
    const keywords = ['GoMate App', 'personalized plan', 'tailored guidance', 'comprehensive plan'];
    const hasRecommendation = keywords.some(keyword => content.includes(keyword));
    setShowCTA(hasRecommendation);
  }, [content]);

  useEffect(() => {
    // Reset state for new content
    setDisplayedText('');
    setIsTypingComplete(false);

    const text = contentRef.current;
    // Reveal in word-sized chunks for speed + clean markdown rendering
    // Split into chunks: words, spaces, and punctuation groups
    const chunks = text.match(/\S+\s*/g) || [text];
    let chunkIndex = 0;
    let accumulated = '';

    const CHUNK_INTERVAL = 30; // ms per chunk — fast but readable

    const timer = setInterval(() => {
      // Reveal multiple chunks per tick for longer messages
      const chunksPerTick = text.length > 300 ? 3 : text.length > 150 ? 2 : 1;

      for (let i = 0; i < chunksPerTick && chunkIndex < chunks.length; i++) {
        accumulated += chunks[chunkIndex];
        chunkIndex++;
      }

      setDisplayedText(accumulated);

      if (chunkIndex >= chunks.length) {
        clearInterval(timer);
        setIsTypingComplete(true);
        if (onCompleteRef.current) onCompleteRef.current();
      }
    }, CHUNK_INTERVAL);

    return () => clearInterval(timer);
  }, [content]); // Only re-run when content actually changes

  // Markdown component styles with Clickable Links
  const markdownComponents = {
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
    <div className="flex flex-col gap-2">
      <div className="prose prose-sm prose-stone max-w-none text-stone-800">
        <ReactMarkdown components={markdownComponents}>
          {displayedText}
        </ReactMarkdown>
      </div>

      {/* Extras section (CTA & Resources) - Reveals when typing is done */}
      {isTypingComplete && (
        <div className="flex flex-col gap-1">
          {showCTA && (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
              <AppRecommendationCTA />
            </div>
          )}

          {resources && resources.length > 0 && (
            <ResourcesSection resources={resources} />
          )}
        </div>
      )}
    </div>
  );
};

export default TypewriterText;
