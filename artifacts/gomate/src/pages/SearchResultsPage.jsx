import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Search, MapPin, BookOpen, ArrowRight, Info } from 'lucide-react';
import { searchContent } from '@/utils/SearchEngine';
import SearchInput from '@/components/SearchInput';
import { Button } from '@/components/ui/button';

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // Simulate slight delay for smoother UI feel and to allow the UI to reset
    const timer = setTimeout(() => {
      console.log("Executing search for:", query);
      const searchResults = searchContent(query);
      setResults(searchResults);
      setLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [query]);

  // Group results
  const countryResults = results.filter(r => r.type === 'country');
  const guideResults = results.filter(r => r.type === 'fieldGuide');

  return (
    <>
      <Helmet>
        <title>Search Results — GoMate Relocate</title>
        <meta name="description" content={`Search results for ${query} on GoMate.`} />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <main className="min-h-screen bg-stone-50">
        {/* Search Header */}
        <div className="bg-white border-b border-stone-200 sticky top-16 z-30 shadow-sm">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <SearchInput 
              initialValue={query} 
              placeholder="Refine your search..." 
              className="w-full max-w-full"
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="mb-6">
            <h1 className="text-2xl font-serif font-bold text-stone-900">
              {loading ? (
                <span className="animate-pulse bg-stone-200 text-transparent rounded">Searching...</span>
              ) : (
                <>
                  {results.length} result{results.length !== 1 ? 's' : ''} for <span className="text-sage-700">"{query}"</span>
                </>
              )}
            </h1>
          </div>

          {loading ? (
            <div className="space-y-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-24 bg-white rounded-xl border border-stone-200 animate-pulse" />
              ))}
            </div>
          ) : results.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-xl border border-stone-200 border-dashed">
              <Search className="h-12 w-12 text-stone-300 mx-auto mb-4" />
              <h2 className="text-lg font-medium text-stone-900 mb-2">No results found</h2>
              <p className="text-stone-500 max-w-md mx-auto mb-6">
                We couldn't find anything matching "{query}".
              </p>
              <div className="flex flex-col gap-2 max-w-xs mx-auto text-left text-sm text-stone-500 bg-stone-50 p-4 rounded-lg">
                <p className="font-medium text-stone-700 flex items-center gap-2">
                  <Info size={14} /> Search Tips:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-1">
                  <li>Check for typos (e.g., "Japn" vs "Japan")</li>
                  <li>Try broader terms (e.g., "Asia" or "Visas")</li>
                  <li>Search for specific countries (e.g., "Spain")</li>
                </ul>
              </div>
            </div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-10"
            >
              {/* Country Results */}
              {countryResults.length > 0 && (
                <section>
                  <h2 className="text-sm font-bold uppercase tracking-wider text-stone-400 mb-4 flex items-center gap-2">
                    <MapPin size={16} /> Countries
                  </h2>
                  <div className="grid gap-4">
                    {countryResults.map((result, index) => (
                      <Link 
                        key={`${result.path}-${index}`} 
                        to={result.path}
                        className="group block bg-white rounded-xl p-6 border border-stone-200 hover:border-sage-300 hover:shadow-md transition-all relative overflow-hidden"
                      >
                        <div className="flex justify-between items-start relative z-10">
                          <div>
                            <h3 className="text-xl font-serif font-bold text-stone-900 group-hover:text-sage-700 mb-2">
                              {result.title}
                            </h3>
                            <p className="text-stone-600">
                              {result.description}
                            </p>
                            {/* Debug info in dev mode if needed, otherwise hidden */}
                            {/* <span className="text-xs text-stone-300 mt-2 block">Match: {result.matchReason}</span> */}
                          </div>
                          <ArrowRight className="text-stone-300 group-hover:text-sage-600 transition-colors" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              {/* Field Guide Results */}
              {guideResults.length > 0 && (
                <section>
                  <h2 className="text-sm font-bold uppercase tracking-wider text-stone-400 mb-4 flex items-center gap-2">
                    <BookOpen size={16} /> Field Guides
                  </h2>
                  <div className="grid gap-4">
                    {guideResults.map((result, index) => (
                      <Link 
                        key={`${result.path}-${index}`} 
                        to={result.path}
                        className="group block bg-white rounded-xl p-6 border border-stone-200 hover:border-sage-300 hover:shadow-md transition-all"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-lg font-bold text-stone-900 group-hover:text-sage-700 mb-2">
                              {result.title}
                            </h3>
                            <p className="text-stone-600 text-sm mb-3">
                              {result.description}
                            </p>
                            <span className="text-xs font-medium text-sage-600 bg-sage-50 px-2 py-1 rounded">
                              Relocation Guide
                            </span>
                          </div>
                          <ArrowRight className="text-stone-300 group-hover:text-sage-600 transition-colors" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              )}
            </motion.div>
          )}
        </div>
      </main>
    </>
  );
};

export default SearchResultsPage;