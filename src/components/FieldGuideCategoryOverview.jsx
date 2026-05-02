import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, ChevronRight } from 'lucide-react';
import { getFieldGuideStructure, getArticlesByCategory } from '@/data/fieldGuide/discoverStructure';
import { optimizeImageUrl } from '@/utils/optimizeImageUrl';

const FieldGuideCategoryOverview = ({ categoryId }) => {
  const structure = getFieldGuideStructure();
  const category = structure.find(c => c.id === categoryId);
  const articles = getArticlesByCategory(categoryId);

  if (!category) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-xl font-bold text-stone-900">Category not found</h2>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Hero Header with Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        {category.image && (
          <div className="relative h-[240px] lg:h-[320px] w-full overflow-hidden rounded-2xl mb-8">
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-stone-900/20 to-transparent z-10" />
            <img
              src={category.image}
              alt={category.title}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
              width={800}
              height={320}
            />
            <div className="absolute bottom-0 left-0 z-20 p-8">
              <div className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r ${category.color} text-white shadow-sm mb-3`}>
                <category.icon size={14} className="mr-1.5" />
                {articles.length} Articles
              </div>
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-white leading-tight">
                {category.title}
              </h1>
            </div>
          </div>
        )}

        {!category.image && (
          <>
            <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${category.color} text-white mb-6 shadow-md`}>
              <category.icon size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4">
              {category.title}
            </h1>
          </>
        )}

        <p className="text-lg text-stone-600 leading-relaxed max-w-3xl">
          {category.description}
        </p>
      </motion.div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article, index) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            className="group"
          >
            <Link to={`/field-guide/${category.id}/${article.id}`} className="block h-full">
              <div className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                {/* Article image - use article heroImage or category image as fallback */}
                {(article.heroImage || category.image) && (
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={optimizeImageUrl(article.heroImage || category.image, { width: 800 })}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      width={400}
                      height={160}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                )}

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-sage-600 bg-sage-50 px-2 py-1 rounded-md">
                      GUIDE
                    </span>
                    <span className="flex items-center text-xs text-stone-400">
                      <Clock size={12} className="mr-1" /> {article.readingTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-stone-900 mb-2 group-hover:text-sage-700 transition-colors leading-snug">
                    {article.title}
                  </h3>

                  {article.excerpt && (
                    <p className="text-sm text-stone-500 mb-4 line-clamp-2 leading-relaxed flex-grow">
                      {article.excerpt}
                    </p>
                  )}

                  <div className="flex items-center text-sm font-medium text-sage-600 group-hover:text-sage-800 mt-auto pt-2">
                    Read Article <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FieldGuideCategoryOverview;
