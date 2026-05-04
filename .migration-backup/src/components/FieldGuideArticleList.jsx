import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, ChevronRight, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Refactored to accept articles and categoryId as props
const FieldGuideArticleList = ({ articles, categoryId }) => {
  if (!articles || articles.length === 0) {
    return (
      <div className="bg-white rounded-xl border border-stone-200 border-dashed p-12 text-center">
        <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-6 text-stone-400">
          <BookOpen size={32} />
        </div>
        <h3 className="text-xl font-serif font-bold text-stone-900 mb-3">
          Guides Coming Soon
        </h3>
        <p className="text-stone-600 max-w-md mx-auto mb-8">
          We are currently curating expert insights and practical guides for this section. Check back soon for updates!
        </p>
        <Link to="/field-guide">
          <Button variant="outline">Browse Other Categories</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {articles.map((article, index) => (
        <motion.div
          key={article.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="group"
        >
          <Link to={`/field-guide/${categoryId}/${article.id}`} className="block h-full">
            <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-sage-600 bg-sage-50 px-2 py-1 rounded-md">
                  GUIDE
                </span>
                <span className="flex items-center text-xs text-stone-400">
                  <Clock size={12} className="mr-1" /> {article.readingTime}
                </span>
              </div>

              <h3 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-sage-700 transition-colors line-clamp-2">
                {article.title}
              </h3>
              
              <p className="text-stone-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                {article.excerpt}
              </p>

              <div className="flex items-center text-sm font-medium text-sage-600 group-hover:text-sage-800 mt-auto">
                Read Article <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default FieldGuideArticleList;