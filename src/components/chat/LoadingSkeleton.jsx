import React from 'react';
import { motion } from 'framer-motion';
import ThinkingAnimation from './ThinkingAnimation';

const LoadingSkeleton = () => {
  return (
    <div className="flex justify-start w-full">
      <div className="bg-white border border-stone-200 p-3 rounded-2xl rounded-bl-none shadow-sm max-w-[85%] flex items-center min-h-[44px]">
        <ThinkingAnimation />
      </div>
    </div>
  );
};

export default LoadingSkeleton;