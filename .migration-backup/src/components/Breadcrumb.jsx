import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

const Breadcrumb = ({ items, className }) => {
  if (!items || items.length === 0) return null;

  return (
    <nav 
      className={cn(
        "flex items-center text-xs sm:text-sm text-stone-500 overflow-hidden", 
        className
      )} 
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center whitespace-nowrap min-w-0">
        <li className="flex items-center shrink-0">
          <Link 
            to="/" 
            className="hover:text-sage-700 transition-colors flex items-center p-1 -ml-1"
            title="Home"
          >
            <Home size={14} className="sm:w-4 sm:h-4" />
          </Link>
        </li>
        
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          
          return (
            <li key={index} className="flex items-center min-w-0">
              <ChevronRight size={12} className="mx-1 text-stone-300 shrink-0 sm:w-3.5 sm:h-3.5" />
              {isLast ? (
                <span 
                  className="font-medium text-stone-900 truncate max-w-[120px] sm:max-w-xs" 
                  title={item.label}
                >
                  {item.label}
                </span>
              ) : (
                <Link 
                  to={item.path} 
                  className="hover:text-sage-700 transition-colors truncate max-w-[100px] sm:max-w-xs"
                  title={item.label}
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;