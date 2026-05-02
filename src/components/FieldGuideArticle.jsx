import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, Calendar, Share2, Printer, ChevronLeft, ChevronRight, Lightbulb, AlertTriangle, Info, Quote, CheckCircle2, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getFieldGuideStructure } from '@/data/fieldGuide/discoverStructure';
import { countries } from '@/data/countries/index';
import { optimizeImageUrl } from '@/utils/optimizeImageUrl';

// Rich section renderer — supports: text (default), callout, tip, warning, quote, image, list, keyTakeaway
const SectionBlock = ({ section, index }) => {
  const type = section.type || 'text';

  if (type === 'image') {
    return (
      <div className="my-8">
        <div className="rounded-xl overflow-hidden shadow-sm">
          <img
            src={section.src}
            alt={section.alt || section.heading || 'Article illustration'}
            className="w-full h-auto object-cover max-h-[400px]"
            loading="lazy"
            width={800}
            height={400}
          />
        </div>
        {section.caption && (
          <p className="text-sm text-stone-400 mt-2 text-center italic">{section.caption}</p>
        )}
      </div>
    );
  }

  if (type === 'callout') {
    return (
      <div className="my-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
        <div className="flex gap-3">
          <Info size={20} className="text-blue-500 mt-0.5 flex-shrink-0" />
          <div>
            {section.heading && (
              <h3 className="font-bold text-blue-900 mb-2">{section.heading}</h3>
            )}
            <p className="text-blue-800 leading-relaxed">{section.content}</p>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'tip') {
    return (
      <div className="my-8 bg-emerald-50 border border-emerald-200 rounded-xl p-6">
        <div className="flex gap-3">
          <Lightbulb size={20} className="text-emerald-600 mt-0.5 flex-shrink-0" />
          <div>
            {section.heading && (
              <h3 className="font-bold text-emerald-900 mb-2">{section.heading}</h3>
            )}
            <p className="text-emerald-800 leading-relaxed">{section.content}</p>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'warning') {
    return (
      <div className="my-8 bg-amber-50 border border-amber-200 rounded-xl p-6">
        <div className="flex gap-3">
          <AlertTriangle size={20} className="text-amber-600 mt-0.5 flex-shrink-0" />
          <div>
            {section.heading && (
              <h3 className="font-bold text-amber-900 mb-2">{section.heading}</h3>
            )}
            <p className="text-amber-800 leading-relaxed">{section.content}</p>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'quote') {
    return (
      <div className="my-8">
        <blockquote className="border-l-4 border-sage-400 bg-sage-50/50 rounded-r-xl pl-6 pr-6 py-5">
          <div className="flex gap-3">
            <Quote size={18} className="text-sage-400 mt-1 flex-shrink-0" />
            <div>
              <p className="text-stone-700 leading-relaxed italic text-lg">{section.content}</p>
              {section.attribution && (
                <p className="text-sm text-stone-500 mt-3 font-medium">— {section.attribution}</p>
              )}
            </div>
          </div>
        </blockquote>
      </div>
    );
  }

  if (type === 'list') {
    return (
      <div className="my-8">
        {section.heading && (
          <h2 className="text-2xl font-bold text-stone-900 mb-4">{section.heading}</h2>
        )}
        <ul className="space-y-3">
          {section.items.map((item, i) => (
            <li key={i} className="flex gap-3 items-start">
              <CheckCircle2 size={18} className="text-sage-600 mt-0.5 flex-shrink-0" />
              <span className="text-stone-700 leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (type === 'keyTakeaway') {
    return (
      <div className="my-8 bg-stone-900 text-white rounded-xl p-6">
        <h3 className="font-bold text-sm uppercase tracking-wider text-stone-400 mb-3">Key Takeaway</h3>
        <p className="text-lg leading-relaxed">{section.content}</p>
      </div>
    );
  }

  // Default: standard text section
  return (
    <div className="mb-10 last:mb-0">
      <h2 className="text-2xl font-bold text-stone-900 mb-4">{section.heading}</h2>
      <p className="text-stone-700 leading-8">{section.content}</p>
    </div>
  );
};

const FieldGuideArticle = ({ article }) => {
  const structure = useMemo(() => getFieldGuideStructure(), []);

  const categoryIndex = structure.findIndex(c => c.id === article.categoryId);
  const category = structure[categoryIndex];

  const articleIndex = category?.articles.findIndex(a => a.id === article.id);

  // Prev/Next navigation
  let prevLink = null;
  let nextLink = null;

  if (category && articleIndex !== -1) {
    if (articleIndex > 0) {
      const prevArticle = category.articles[articleIndex - 1];
      prevLink = {
        to: `/field-guide/${category.id}/${prevArticle.id}`,
        label: prevArticle.title,
        type: 'Previous Article'
      };
    } else if (categoryIndex > 0) {
      const prevCategory = structure[categoryIndex - 1];
      const lastArticle = prevCategory.articles[prevCategory.articles.length - 1];
      prevLink = {
        to: `/field-guide/${prevCategory.id}/${lastArticle.id}`,
        label: lastArticle.title,
        type: `Previous: ${prevCategory.title}`
      };
    }

    if (articleIndex < category.articles.length - 1) {
      const nextArticle = category.articles[articleIndex + 1];
      nextLink = {
        to: `/field-guide/${category.id}/${nextArticle.id}`,
        label: nextArticle.title,
        type: 'Next Article'
      };
    } else if (categoryIndex < structure.length - 1) {
      const nextCategory = structure[categoryIndex + 1];
      const firstArticle = nextCategory.articles[0];
      nextLink = {
        to: `/field-guide/${nextCategory.id}/${firstArticle.id}`,
        label: firstArticle.title,
        type: `Next: ${nextCategory.title}`
      };
    }
  }

  const CategoryIcon = category ? category.icon : null;
  const categoryColor = category ? category.color : 'from-stone-500 to-stone-600';
  const heroImage = article.heroImage || category?.image;

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Hero Image */}
      {heroImage && (
        <div className="relative h-[260px] lg:h-[360px] w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-stone-900/30 to-stone-900/10 z-10" />
          <img
            src={optimizeImageUrl(heroImage, { width: 1600 })}
            alt={article.title}
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            fetchpriority="high"
            width={1200}
            height={360}
          />
        </div>
      )}

      {/* Article Header */}
      <div className={heroImage ? "bg-white" : "bg-stone-50 border-b border-stone-200"}>
        <div className={`max-w-3xl mx-auto px-4 sm:px-6 ${heroImage ? 'py-10' : 'py-12'}`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Category Badge */}
            {category && (
              <div className="flex items-center gap-2 mb-6">
                <Link to={`/field-guide/${category.id}`} className="hover:opacity-80 transition-opacity">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${categoryColor} text-white shadow-sm`}>
                    {CategoryIcon && <CategoryIcon size={12} className="mr-1.5" />}
                    {category.title}
                  </span>
                </Link>
                <span className="flex items-center text-xs text-stone-500 font-medium">
                  <Clock size={12} className="mr-1" /> {article.readingTime}
                </span>
              </div>
            )}

            <h1 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 leading-tight mb-6">
              {article.title}
            </h1>

            <p className="text-xl text-stone-600 leading-relaxed border-l-4 border-sage-300 pl-5 mb-8 italic">
              {article.excerpt}
            </p>

            <div className="flex items-center justify-between border-t border-stone-200 pt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center text-sage-700 font-bold text-sm">
                  GM
                </div>
                <div>
                  <p className="text-sm font-bold text-stone-900">{article.author}</p>
                  <p className="text-xs text-stone-500 flex items-center">
                    <Calendar size={10} className="mr-1" /> {article.date}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" className="text-stone-400 hover:text-stone-900">
                  <Share2 size={18} />
                </Button>
                <Button variant="ghost" size="icon" className="text-stone-400 hover:text-stone-900">
                  <Printer size={18} />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="prose prose-stone prose-lg max-w-none"
        >
          {article.sections.map((section, index) => (
            <SectionBlock key={index} section={section} index={index} />
          ))}
        </motion.article>

        {/* Editorial footer: last reviewed + disclaimer */}
        <div className="mt-10 pt-6 border-t border-stone-200">
          {article.lastReviewed && (
            <p className="text-xs text-stone-500 mb-3 flex items-center">
              <Calendar size={12} className="mr-1.5" />
              Last reviewed: {new Date(article.lastReviewed).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </p>
          )}
          <div className="bg-stone-50 border border-stone-200 rounded-xl p-5 text-sm text-stone-600 leading-relaxed">
            <p className="font-semibold text-stone-800 mb-1.5">Orientation, not advice</p>
            <p>
              GoMate is a relocation intelligence platform — not a legal, tax, or immigration advisor. Rules change frequently and depend on your personal circumstances. Always verify current requirements with the relevant official source (the destination country&apos;s tax authority, migration service, or a qualified professional) before acting.
            </p>
          </div>
        </div>

        {/* Related Country Guides */}
        {(() => {
          const CATEGORY_COUNTRY_MAP = {
            'visas-status': ['spain', 'germany', 'portugal', 'thailand', 'united-arab-emirates', 'canada'],
            'housing-reality': ['sweden', 'netherlands', 'switzerland', 'japan', 'australia', 'united-kingdom'],
            'money-banking-payments': ['germany', 'france', 'singapore', 'united-states', 'brazil', 'india'],
            'healthcare-reality': ['sweden', 'spain', 'japan', 'canada', 'thailand', 'france'],
            'work-income-reality': ['germany', 'netherlands', 'united-states', 'singapore', 'australia', 'ireland'],
            'before-you-move': ['spain', 'portugal', 'thailand', 'mexico', 'italy', 'new-zealand'],
            'administrative-reality': ['germany', 'france', 'sweden', 'switzerland', 'austria', 'belgium'],
            'common-mistakes-delays': ['spain', 'thailand', 'portugal', 'germany', 'united-kingdom', 'italy'],
            'daily-life-bureaucracy': ['japan', 'spain', 'mexico', 'south-korea', 'italy', 'thailand'],
            'digital-infrastructure': ['portugal', 'thailand', 'colombia', 'mexico', 'georgia', 'indonesia'],
            'returning-home': ['united-kingdom', 'australia', 'united-states', 'germany', 'canada', 'sweden'],
            'how-gomate-fits-in': ['switzerland', 'singapore', 'japan', 'united-arab-emirates', 'south-korea', 'norway'],
            'moving-with-someone': ['spain', 'australia', 'canada', 'germany', 'portugal', 'new-zealand'],
            'taxes-compliance': ['portugal', 'switzerland', 'united-arab-emirates', 'singapore', 'germany', 'monaco'],
            'digital-nomad-remote-work': ['portugal', 'spain', 'estonia', 'georgia', 'thailand', 'colombia'],
          };

          const FLAG_CODES = {
            spain:'es',germany:'de',portugal:'pt',thailand:'th','united-arab-emirates':'ae',canada:'ca',
            sweden:'se',netherlands:'nl',switzerland:'ch',japan:'jp',australia:'au','united-kingdom':'gb',
            france:'fr',singapore:'sg','united-states':'us',brazil:'br',india:'in',ireland:'ie',
            mexico:'mx',italy:'it','new-zealand':'nz',austria:'at',belgium:'be','south-korea':'kr',
            colombia:'co',georgia:'ge',indonesia:'id',norway:'no',
            estonia:'ee',monaco:'mc'
          };

          const catId = category?.id;
          const slugs = CATEGORY_COUNTRY_MAP[catId];
          if (!slugs) return null;

          const related = slugs
            .map(s => countries.find(c => c.slug === s))
            .filter(Boolean)
            .slice(0, 6);

          if (related.length === 0) return null;

          return (
            <div className="mt-14 mb-4">
              <div className="flex items-center gap-2 mb-1">
                <Globe size={18} className="text-sage-600" />
                <h3 className="text-lg font-serif font-bold text-stone-900">Related Country Guides</h3>
              </div>
              <p className="text-sm text-stone-500 mb-4">See how these topics play out in specific countries.</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {related.map((rc) => (
                  <Link
                    key={rc.slug}
                    to={`/country-guides/${rc.slug}`}
                    className="group flex items-center gap-2.5 bg-stone-50 rounded-lg border border-stone-200 p-3 hover:border-sage-300 hover:bg-sage-50 transition-all"
                  >
                    {FLAG_CODES[rc.slug] && (
                      <img
                        src={`https://flagcdn.com/w80/${FLAG_CODES[rc.slug]}.png`}
                        alt={`${rc.name} flag`}
                        className="w-6 h-auto rounded shadow-sm"
                        width={24}
                        height={16}
                        loading="lazy"
                      />
                    )}
                    <span className="text-sm font-medium text-stone-800 group-hover:text-sage-700 transition-colors">{rc.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          );
        })()}

        {/* Navigation Footer */}
        <div className="mt-16 pt-8 border-t border-stone-200 grid grid-cols-1 md:grid-cols-2 gap-4">
          {prevLink ? (
            <Link to={prevLink.to} className="group flex flex-col items-start p-4 rounded-lg border border-stone-200 hover:border-sage-300 hover:bg-sage-50 transition-all">
              <span className="text-xs font-semibold text-stone-400 uppercase mb-1 flex items-center group-hover:text-sage-600">
                <ChevronLeft size={12} className="mr-1" /> {prevLink.type}
              </span>
              <span className="text-stone-900 font-medium group-hover:text-sage-900">{prevLink.label}</span>
            </Link>
          ) : <div />}

          {nextLink ? (
            <Link to={nextLink.to} className="group flex flex-col items-end text-right p-4 rounded-lg border border-stone-200 hover:border-sage-300 hover:bg-sage-50 transition-all">
              <span className="text-xs font-semibold text-stone-400 uppercase mb-1 flex items-center group-hover:text-sage-600">
                {nextLink.type} <ChevronRight size={12} className="ml-1" />
              </span>
              <span className="text-stone-900 font-medium group-hover:text-sage-900">{nextLink.label}</span>
            </Link>
          ) : <div />}
        </div>
      </div>
    </div>
  );
};

export default FieldGuideArticle;
