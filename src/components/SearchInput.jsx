import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, Loader2 } from 'lucide-react';
import { searchContent } from '@/utils/SearchEngine';
import { cn } from '@/lib/utils';

const SearchInput = ({ className, placeholder = "Search countries & guides...", initialValue = "" }) => {
  const [query, setQuery] = useState(initialValue);
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const wrapperRef = useRef(null);
  const navigate = useNavigate();

  // Debounced search effect
  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.trim().length >= 2) {
        setIsSearching(true);
        const searchResults = searchContent(query);
        setResults(searchResults.slice(0, 8)); // Limit to 8 results for dropdown
        setIsOpen(true);
        setIsSearching(false);
      } else {
        setResults([]);
        setIsOpen(false);
      }
    }, 300); // 300ms debounce

    return () => clearTimeout(timer);
  }, [query]);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      setIsOpen(false);
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  const handleResultClick = (path) => {
    setIsOpen(false);
    setQuery(""); // Optional: clear query after navigation
    navigate(path);
  };

  const clearSearch = () => {
    setQuery("");
    setResults([]);
    setIsOpen(false);
  };

  return (
    <div ref={wrapperRef} className={cn("relative w-full max-w-md", className)}>
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative flex items-center">
          <Search className="absolute left-3 h-4 w-4 text-stone-400 pointer-events-none" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            className="w-full pl-10 pr-10 py-2 bg-stone-100 border border-stone-200 rounded-full text-sm text-stone-900 placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-sage-500/50 focus:bg-white transition-all"
          />
          {query && (
            <button
              type="button"
              onClick={clearSearch}
              className="absolute right-3 p-0.5 hover:bg-stone-200 rounded-full text-stone-400 hover:text-stone-600 transition-colors"
            >
              <X size={14} />
            </button>
          )}
        </div>
      </form>

      {/* Dropdown Results */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-stone-100 overflow-hidden z-50">
          {isSearching ? (
            <div className="p-4 flex items-center justify-center text-stone-400">
              <Loader2 className="h-5 w-5 animate-spin mr-2" />
              <span className="text-sm">Searching...</span>
            </div>
          ) : results.length > 0 ? (
            <div className="py-2">
              <div className="px-3 py-1.5 text-xs font-semibold text-stone-400 uppercase tracking-wider">
                Suggestions
              </div>
              {results.map((result, index) => (
                <button
                  key={`${result.path}-${index}`}
                  onClick={() => handleResultClick(result.path)}
                  className="w-full text-left px-4 py-2.5 hover:bg-stone-50 transition-colors flex items-center justify-between group"
                >
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-stone-800 group-hover:text-sage-700">
                      {result.title}
                    </span>
                    <span className="text-xs text-stone-500 truncate max-w-[200px] sm:max-w-[280px]">
                      {result.type === 'country' ? 'Country Guide' : 'Field Guide'}
                    </span>
                  </div>
                  <span className="text-stone-300 group-hover:text-sage-400">
                    <Search size={14} />
                  </span>
                </button>
              ))}
              <div className="border-t border-stone-100 mt-1 pt-1">
                <button
                  onClick={handleSubmit}
                  className="w-full text-left px-4 py-2.5 text-xs font-medium text-sage-600 hover:text-sage-700 hover:bg-sage-50 transition-colors"
                >
                  See all results for "{query}"
                </button>
              </div>
            </div>
          ) : (
            <div className="p-4 text-center text-stone-500 text-sm">
              No results found for "{query}"
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchInput;