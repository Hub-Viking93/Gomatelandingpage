import { AVAILABLE_COUNTRIES, FIELD_GUIDE_CATEGORIES, COUNTRY_ALIASES } from '@/utils/contentMapper';

/**
 * Format country slug to readable title
 * e.g. "united-kingdom" -> "United Kingdom"
 */
const formatCountryLabel = (slug) => {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

/**
 * Main search function
 * @param {string} query - The search query
 * @returns {Array} - Array of result objects
 */
export const searchContent = (query) => {
  if (!query || query.trim().length < 2) {
    console.log("[SearchEngine] Query too short or empty.");
    return [];
  }

  const normalizedQuery = query.toLowerCase().trim();
  const results = [];

  console.log(`[SearchEngine] Searching for: "${normalizedQuery}"`);

  // --- 1. Search Countries ---
  // Create a set of processed slugs to avoid duplicates if matched multiple ways
  const processedSlugs = new Set();

  AVAILABLE_COUNTRIES.forEach(slug => {
    const title = formatCountryLabel(slug);
    const normalizedTitle = title.toLowerCase();
    
    let score = 0;
    let matchReason = "";

    // A. Direct Title Matching
    if (normalizedTitle === normalizedQuery) {
      score = 100; // Perfect match "Japan" == "Japan"
      matchReason = "Exact Title Match";
    } 
    else if (normalizedTitle.startsWith(normalizedQuery)) {
      score = 80; // "Jap" starts with "Jap"
      matchReason = "Starts With";
    }
    // B. Partial Matching (Bi-directional)
    // 1. "Digital Nomad Japan" includes "Japan" -> User wants Japan
    else if (normalizedQuery.includes(normalizedTitle)) {
      score = 70;
      matchReason = "Query contains Country Name";
    }
    // 2. "United" in "United Kingdom" -> User might want UK
    else if (normalizedTitle.includes(normalizedQuery)) {
      score = 50;
      matchReason = "Country Name contains Query";
    }
    // C. Slug Matching
    else if (slug.includes(normalizedQuery)) {
      score = 40;
      matchReason = "Slug Match";
    }

    if (score > 0) {
      results.push({
        type: 'country',
        title: title,
        description: `Comprehensive relocation guide for ${title}.`,
        path: `/country-guides/${slug}`,
        score,
        matchReason
      });
      processedSlugs.add(slug);
    }
  });

  // --- 2. Search Country Aliases (e.g., "Tokyo" -> "Japan") ---
  Object.entries(COUNTRY_ALIASES).forEach(([alias, slug]) => {
    // Only process if we haven't already added this country from the main loop
    // UNLESS the alias match is stronger (we'll sort later anyway)
    if (!AVAILABLE_COUNTRIES.includes(slug)) return; // Safety check

    let score = 0;
    const normalizedAlias = alias.toLowerCase();

    // Exact alias match ("Tokyo" == "Tokyo")
    if (normalizedAlias === normalizedQuery) {
      score = 95; 
    }
    // Query includes alias ("Working in Tokyo")
    else if (normalizedQuery.includes(normalizedAlias)) {
      score = 65;
    }
    // Alias includes Query ("Tok" in "Tokyo")
    else if (normalizedAlias.includes(normalizedQuery)) {
      score = 45;
    }

    if (score > 0) {
      // Check if we already have this country in results
      const existingResult = results.find(r => r.path === `/country-guides/${slug}`);
      
      if (existingResult) {
        // If this alias match is better than previous name match, update score
        if (score > existingResult.score) {
          existingResult.score = score;
          existingResult.matchReason = `Alias Match (${alias})`;
        }
      } else {
        // New result via alias
        const title = formatCountryLabel(slug);
        results.push({
          type: 'country',
          title: title,
          description: `Comprehensive relocation guide for ${title} (matches "${alias}").`,
          path: `/country-guides/${slug}`,
          score,
          matchReason: `Alias Match (${alias})`
        });
      }
    }
  });

  // --- 3. Search Field Guides ---
  Object.values(FIELD_GUIDE_CATEGORIES).forEach(category => {
    const normalizedLabel = category.label.toLowerCase();
    let score = 0;
    let matchReason = "";

    // Title match
    if (normalizedLabel === normalizedQuery) {
      score = 90;
      matchReason = "Exact Category Match";
    } else if (normalizedLabel.startsWith(normalizedQuery)) {
      score = 75;
      matchReason = "Category Starts With";
    } else if (normalizedLabel.includes(normalizedQuery) || normalizedQuery.includes(normalizedLabel)) {
      score = 45;
      matchReason = "Category Partial Match";
    }

    // Keyword match
    if (category.keywords) {
      const keywordMatch = category.keywords.find(k => 
        k.toLowerCase().includes(normalizedQuery) || normalizedQuery.includes(k.toLowerCase())
      );
      
      if (keywordMatch) {
        // Keyword matches are good but usually secondary to direct title matches
        const kwScore = 60; 
        if (kwScore > score) {
          score = kwScore;
          matchReason = `Keyword Match (${keywordMatch})`;
        }
      }
    }

    if (score > 0) {
      results.push({
        type: 'fieldGuide',
        title: category.label,
        description: `Guide covering ${category.keywords.slice(0, 3).join(', ')}...`,
        path: `/field-guide/${category.slug}`,
        score,
        matchReason
      });
    }
  });

  console.log(`[SearchEngine] Found ${results.length} results.`);
  
  // Sort by score descending
  return results.sort((a, b) => b.score - a.score);
};