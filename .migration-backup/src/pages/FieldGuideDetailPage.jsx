import React, { useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';

import { optimizeImageUrl } from '@/utils/optimizeImageUrl';

// Components
import FieldGuideLayout from '@/components/FieldGuideLayout';
import FieldGuideArticle from '@/components/FieldGuideArticle';
import FieldGuideCategoryOverview from '@/components/FieldGuideCategoryOverview';

// Data - Dynamic Import
import { getFieldGuideStructure, getArticleById } from '@/data/fieldGuide/discoverStructure';

const FieldGuideDetailPage = () => {
  const { categoryId, articleId } = useParams();
  
  // Memoize structure access
  const structure = useMemo(() => getFieldGuideStructure(), []);

  // Find category details
  const category = structure.find(c => c.id === categoryId);

  // Find specific article if ID is present
  const currentArticle = articleId 
    ? getArticleById(categoryId, articleId)
    : null;

  useEffect(() => {
    // Scroll to top when article or category changes
    window.scrollTo(0, 0);
  }, [categoryId, articleId]);

  // Generate breadcrumb items based on current view
  const breadcrumbItems = useMemo(() => {
    const items = [
      { label: 'Field Guide', path: '/field-guide' }
    ];

    if (category) {
      if (currentArticle) {
        // Article View: Home > Field Guide > Category > Article
        items.push({ 
          label: category.title, 
          path: `/field-guide/${categoryId}` 
        });
        items.push({ 
          label: currentArticle.title, 
          path: null // Current page, no link
        });
      } else {
        // Category View: Home > Field Guide > Category
        items.push({ 
          label: category.title, 
          path: null // Current page, no link
        });
      }
    } else {
      // Fallback for not found or error states
       items.push({ label: 'Not Found', path: null });
    }
    return items;
  }, [category, currentArticle, categoryId]);

  // Error State: Category not found
  if (!category) {
    return (
      <FieldGuideLayout breadcrumbItems={breadcrumbItems}>
        <Helmet>
          <title>Not Found - GoMate Field Guide</title>
        </Helmet>
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="min-h-[50vh] flex flex-col items-center justify-center text-center">
            <h1 className="text-2xl font-serif font-bold text-stone-900 mb-4">Category Not Found</h1>
            <p className="text-stone-600 mb-8">The category you're looking for doesn't exist.</p>
            <Link to="/field-guide">
              <Button variant="outline">Return to Field Guide</Button>
            </Link>
          </div>
        </div>
      </FieldGuideLayout>
    );
  }

  // View State: Specific Article
  if (articleId) {
    if (!currentArticle) {
       return (
        <FieldGuideLayout breadcrumbItems={breadcrumbItems}>
          <Helmet>
             <title>Article Not Found - GoMate Field Guide</title>
          </Helmet>
          <div className="max-w-4xl mx-auto px-4 py-6">
            <div className="min-h-[50vh] flex flex-col items-center justify-center text-center">
              <h1 className="text-2xl font-serif font-bold text-stone-900 mb-4">Article Not Found</h1>
              <p className="text-stone-600 mb-8">This guide may have been removed or updated.</p>
              <div className="flex gap-4">
                <Link to={`/field-guide/${categoryId}`}>
                  <Button variant="outline">View All {category.title} Articles</Button>
                </Link>
                <Link to="/field-guide">
                  <Button variant="ghost">Return to Main</Button>
                </Link>
              </div>
            </div>
          </div>
        </FieldGuideLayout>
      );
    }

    return (
      <FieldGuideLayout breadcrumbItems={breadcrumbItems}>
        <Helmet>
          <title>{currentArticle.title} — GoMate Relocate</title>
          <meta name="description" content={currentArticle.excerpt} />
          <link rel="canonical" href={`https://gomaterelocate.com/field-guide/${categoryId}/${currentArticle.id}`} />
          <meta property="og:title" content={`${currentArticle.title} — GoMate Relocate`} />
          <meta property="og:description" content={currentArticle.excerpt} />
          <meta property="og:url" content={`https://gomaterelocate.com/field-guide/${categoryId}/${currentArticle.id}`} />
          <meta property="og:image" content={optimizeImageUrl(currentArticle.heroImage || category?.image, { width: 1200 }) || "https://raw.githubusercontent.com/Hub-Viking93/gomatelogo/626b0079bd23e19b026f898fdd9353dfe7aae4d9/GoMateLogo.png"} />
          <meta property="og:locale" content="en_US" />
          {/* Preload hero image to improve LCP */}
          {(currentArticle.heroImage || category?.image) && (
            <link rel="preload" as="image" href={optimizeImageUrl(currentArticle.heroImage || category?.image, { width: 1600 })} fetchpriority="high" />
          )}
        </Helmet>
        <div className="max-w-4xl mx-auto pt-6">
          <FieldGuideArticle article={currentArticle} />
        </div>
      </FieldGuideLayout>
    );
  }

  // View State: Category Overview (No article selected)
  return (
    <FieldGuideLayout breadcrumbItems={breadcrumbItems}>
      <Helmet>
        <title>{category.title} — Relocation Field Guide | GoMate</title>
        <meta name="description" content={`In-depth articles about ${category.title.toLowerCase()} — what to expect, what to prepare, and what most people get wrong.`} />
        <link rel="canonical" href={`https://gomaterelocate.com/field-guide/${categoryId}`} />
        <meta property="og:title" content={`${category.title} — Relocation Field Guide | GoMate`} />
        <meta property="og:description" content={`In-depth articles about ${category.title.toLowerCase()} — what to expect, what to prepare, and what most people get wrong.`} />
        <meta property="og:url" content={`https://gomaterelocate.com/field-guide/${categoryId}`} />
        <meta property="og:image" content={category?.image || "https://raw.githubusercontent.com/Hub-Viking93/gomatelogo/626b0079bd23e19b026f898fdd9353dfe7aae4d9/GoMateLogo.png"} />
        <meta property="og:locale" content="en_US" />
      </Helmet>
      
      <div className="pt-6">
        <FieldGuideCategoryOverview categoryId={categoryId} />
      </div>
    </FieldGuideLayout>
  );
};

export default FieldGuideDetailPage;