import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import FieldGuideLayout from '@/components/FieldGuideLayout';
import PrefetchLink from '@/components/PrefetchLink';
import { getFieldGuideStructure } from '@/data/fieldGuide/discoverStructure';
import { optimizeImageUrl } from '@/utils/optimizeImageUrl';

const FieldGuidePage = () => {
  const fieldGuideStructure = useMemo(() => getFieldGuideStructure(), []);

  const breadcrumbItems = [
    { label: 'Field Guide', path: null }
  ];

  return (
    <FieldGuideLayout breadcrumbItems={breadcrumbItems}>
      <Helmet>
        <title>Relocation Field Guide — GoMate Relocate</title>
        <meta name="description" content="60+ in-depth articles on the mechanics of moving abroad — admin, visas, housing, banking, healthcare, and the mistakes that cost people months." />
        <link rel="canonical" href="https://gomaterelocate.com/field-guide" />
        <meta property="og:title" content="Relocation Field Guide — GoMate Relocate" />
        <meta property="og:description" content="60+ in-depth articles on the mechanics of moving abroad — admin, visas, housing, banking, healthcare, and common mistakes." />
        <meta property="og:url" content="https://gomaterelocate.com/field-guide" />
        <meta property="og:image" content="https://raw.githubusercontent.com/Hub-Viking93/gomatelogo/626b0079bd23e19b026f898fdd9353dfe7aae4d9/GoMateLogo.png" />
        <meta property="og:locale" content="en_US" />
      </Helmet>

      <div className="pt-6 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Breadcrumb is now handled by Layout */}
      </div>

      <div className="pb-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4"
          >
            The Field Guide
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed"
          >
            Essential knowledge for the modern expat.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fieldGuideStructure.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(index * 0.03, 0.18), duration: 0.25 }}
            >
              <PrefetchLink to={`/field-guide/${category.id}`} className="group block h-full">
                <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-stone-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                  {/* Category Image */}
                  {category.image && (
                    <div className="relative h-36 overflow-hidden">
                      <img
                        src={optimizeImageUrl(category.image, { width: 800 })}
                        alt={category.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        width={400}
                        height={144}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                  )}

                  {!category.image && (
                    <div className={`h-2 bg-gradient-to-r ${category.color}`} />
                  )}

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center text-white shadow-sm`}>
                        <category.icon size={18} />
                      </div>
                      <h3 className="text-lg font-serif font-bold text-stone-900 group-hover:text-sage-700 transition-colors">
                        {category.title}
                      </h3>
                    </div>

                    <p className="text-stone-500 mb-5 text-sm flex-grow leading-relaxed">
                      {category.description}
                    </p>

                    <div className="flex items-center text-sm text-sage-600 font-medium group-hover:text-sage-800 mt-auto">
                      {category.articles.length} Articles <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </PrefetchLink>
            </motion.div>
          ))}
        </div>
      </div>
    </FieldGuideLayout>
  );
};

export default FieldGuidePage;
