/**
 * Utility to map site content for AI context awareness
 * STRICTLY VALIDATED against existing GoMate content
 */

// 1. Define AVAILABLE_COUNTRIES array with all country slugs
// This serves as the source of truth for valid routes.
export const AVAILABLE_COUNTRIES = [
  "argentina", "australia", "austria", "barbados", "belgium", "brazil", "bulgaria",
  "canada", "chile", "colombia", "costa-rica", "croatia", "cyprus", "czech-republic",
  "denmark", "dominican-republic", "ecuador", "egypt", "estonia", "finland", "france",
  "germany", "greece", "guatemala", "hong-kong", "hungary", "iceland", "india",
  "indonesia", "ireland", "italy", "jamaica", "japan", "kenya", "latvia",
  "liechtenstein", "lithuania", "luxembourg", "malaysia", "malta", "mexico",
  "morocco", "nepal", "netherlands", "new-zealand", "nicaragua", "norway", "panama",
  "paraguay", "peru", "philippines", "poland", "portugal", "qatar", "romania",
  "serbia", "singapore", "slovakia", "slovenia", "south-africa", "south-korea",
  "spain", "sri-lanka", "sweden", "switzerland", "taiwan", "thailand",
  "trinidad-and-tobago", "tunisia", "turkey", "united-arab-emirates", "united-kingdom",
  "united-states", "uruguay", "vietnam",
  "cambodia", "china", "georgia", "montenegro",
  "saudi-arabia", "albania", "israel", "mauritius", "bahrain",
  // Batch 1: South/Central Asia
  "pakistan", "bangladesh", "kazakhstan", "uzbekistan", "armenia",
  // Batch 2: Europe/Balkans
  "ukraine", "bosnia-and-herzegovina", "north-macedonia", "moldova", "monaco",
  // Batch 3: Africa
  "nigeria", "ghana", "rwanda", "tanzania", "namibia",
  // Batch 4: Middle East + Islands
  "oman", "jordan", "kuwait", "maldives", "fiji",
  // Batch 5: Caucasus/Central Asia/South Asia/Middle East
  "azerbaijan", "kyrgyzstan", "mongolia", "bhutan", "lebanon",
  // Batch 6: East/Southern Africa
  "ethiopia", "uganda", "botswana", "madagascar", "seychelles",
  // Batch 7: West Africa + European microstates
  "cote-divoire", "senegal", "cape-verde", "andorra", "kosovo",
  // Batch 8: Central America + Caribbean
  "el-salvador", "honduras", "belize", "bahamas", "puerto-rico",
  // Batch 9: Cuba
  "cuba",
  // Batch 10: Regional gap-fills
  "laos", "bolivia", "zambia", "san-marino"
];

// Helper to format slug to Title Case for display
const formatCountryLabel = (slug) => {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

// 2. Define FIELD_GUIDE_CATEGORIES object with keyword mappings and URL slugs
export const FIELD_GUIDE_CATEGORIES = {
  administrativeReality: {
    label: "Administrative Reality",
    slug: "administrative-reality",
    keywords: ["administrative", "admin", "bureaucratic", "paperwork"]
  },
  beforeYouMove: {
    label: "Before You Move",
    slug: "before-you-move",
    keywords: ["before moving", "before you move", "preparation", "preparing", "checklist", "planning"]
  },
  commonMistakesAndDelays: {
    label: "Common Mistakes & Delays",
    slug: "common-mistakes-delays",
    keywords: ["mistakes", "delays", "common mistakes", "avoid", "errors"]
  },
  dailyLifeAndBureaucracy: {
    label: "Daily Life & Bureaucracy",
    slug: "daily-life-bureaucracy",
    keywords: ["daily life", "bureaucracy", "daily routine", "culture", "social", "lifestyle"]
  },
  healthcareReality: {
    label: "Healthcare Reality",
    slug: "healthcare-reality",
    keywords: ["healthcare", "health", "medical", "doctor", "hospital", "insurance", "pharmacy"]
  },
  housingReality: {
    label: "Housing Reality",
    slug: "housing-reality",
    keywords: ["housing", "rent", "apartment", "house", "accommodation", "lease", "finding a home"]
  },
  howGoMateFitsIn: {
    label: "How GoMate Fits In",
    slug: "how-gomate-fits-in",
    keywords: ["gomate", "how gomate fits", "app", "service", "features"]
  },
  moneyBankingAndPayments: {
    label: "Money, Banking & Payments",
    slug: "money-banking-payments",
    keywords: ["money", "banking", "payments", "bank", "financial", "currency", "budget", "cost of living"]
  },
  movingWithSomeone: {
    label: "Moving With Someone",
    slug: "moving-with-someone",
    keywords: ["moving with", "partner", "spouse", "fiancé", "family", "together", "kids", "children"]
  },
  returningHome: {
    label: "Returning Home",
    slug: "returning-home",
    keywords: ["returning home", "return home", "going back", "repatriation", "reverse culture shock"]
  },
  visasAndStatus: {
    label: "Visas & Status",
    slug: "visas-status",
    keywords: ["visa", "visas", "status", "immigration", "permit", "residency", "passport"]
  },
  workAndIncomeReality: {
    label: "Work & Income Reality",
    slug: "work-income-reality",
    keywords: ["work", "job", "income", "employment", "career", "salary", "freelance"]
  },
  taxesAndCompliance: {
    label: "Taxes & Compliance",
    slug: "taxes-compliance",
    keywords: ["tax", "taxes", "compliance", "tax residency", "permanent establishment", "fatca", "crs", "a1 certificate", "certificate of coverage", "social security", "183 days", "reporting", "exit tax", "foreign accounts"]
  },
  digitalNomadAndRemoteWork: {
    label: "Digital Nomad & Remote Work",
    slug: "digital-nomad-remote-work",
    keywords: ["digital nomad", "remote work", "nomad visa", "workation", "work from anywhere", "pwd", "posted workers directive", "bleisure", "remote worker"]
  }
};

// Common aliases mapping to valid slugs
// This maps search terms (cities, abbreviations, alternate names) to the correct country slug.
export const COUNTRY_ALIASES = {
  // United Kingdom
  "uk": "united-kingdom",
  "u.k.": "united-kingdom",
  "britain": "united-kingdom",
  "great britain": "united-kingdom",
  "england": "united-kingdom",
  "london": "united-kingdom",
  // United States
  "usa": "united-states",
  "u.s.a.": "united-states",
  "us": "united-states",
  "united states of america": "united-states",
  "america": "united-states",
  "nyc": "united-states",
  "new york": "united-states",
  "california": "united-states",
  // UAE
  "uae": "united-arab-emirates",
  "emirates": "united-arab-emirates",
  "dubai": "united-arab-emirates",
  "abu dhabi": "united-arab-emirates",
  // Netherlands
  "holland": "netherlands",
  "amsterdam": "netherlands",
  // New Zealand
  "nz": "new-zealand",
  // Hong Kong
  "hk": "hong-kong",
  // South Korea
  "korea": "south-korea",
  "seoul": "south-korea",
  // Japan
  "tokyo": "japan",
  "osaka": "japan",
  "kyoto": "japan",
  // France
  "paris": "france",
  // Germany
  "berlin": "germany",
  "munich": "germany",
  // Spain
  "barcelona": "spain",
  "madrid": "spain",
  // Italy
  "rome": "italy",
  "milan": "italy",
  // Indonesia
  "bali": "indonesia",
  "jakarta": "indonesia",
  // Thailand
  "bangkok": "thailand",
  "chiang mai": "thailand",
  "phuket": "thailand",
  // Portugal
  "lisbon": "portugal",
  "porto": "portugal",
  "algarve": "portugal",
  // Vietnam
  "hanoi": "vietnam",
  "ho chi minh": "vietnam",
  "saigon": "vietnam",
  // Singapore
  "sg": "singapore",
  // Turkey
  "türkiye": "turkey",
  "istanbul": "turkey",
  "ankara": "turkey",
  // Georgia
  "tbilisi": "georgia",
  "batumi": "georgia",
  // Cambodia
  "phnom penh": "cambodia",
  "siem reap": "cambodia",
  // Montenegro
  "podgorica": "montenegro",
  "budva": "montenegro",
  // China
  "prc": "china",
  "beijing": "china",
  "shanghai": "china",
  "shenzhen": "china",
  "guangzhou": "china",
  // Saudi Arabia
  "ksa": "saudi-arabia",
  "riyadh": "saudi-arabia",
  "jeddah": "saudi-arabia",
  "mecca": "saudi-arabia",
  // Albania
  "tirana": "albania",
  "durres": "albania",
  "vlore": "albania",
  // Israel
  "tel aviv": "israel",
  "jerusalem": "israel",
  "haifa": "israel",
  // Mauritius
  "port louis": "mauritius",
  // Bahrain
  "manama": "bahrain",
  // Pakistan
  "karachi": "pakistan",
  "lahore": "pakistan",
  "islamabad": "pakistan",
  // Bangladesh
  "dhaka": "bangladesh",
  // Kazakhstan
  "almaty": "kazakhstan",
  "astana": "kazakhstan",
  "nur-sultan": "kazakhstan",
  // Uzbekistan
  "tashkent": "uzbekistan",
  "samarkand": "uzbekistan",
  // Armenia
  "yerevan": "armenia",
  // Ukraine
  "kyiv": "ukraine",
  "kiev": "ukraine",
  "lviv": "ukraine",
  "odesa": "ukraine",
  "odessa": "ukraine",
  // Bosnia
  "sarajevo": "bosnia-and-herzegovina",
  "mostar": "bosnia-and-herzegovina",
  "bosnia": "bosnia-and-herzegovina",
  "herzegovina": "bosnia-and-herzegovina",
  // North Macedonia
  "skopje": "north-macedonia",
  "macedonia": "north-macedonia",
  // Moldova
  "chisinau": "moldova",
  "chișinău": "moldova",
  // Monaco
  "monte carlo": "monaco",
  "monte-carlo": "monaco",
  // Nigeria
  "lagos": "nigeria",
  "abuja": "nigeria",
  // Ghana
  "accra": "ghana",
  "kumasi": "ghana",
  // Rwanda
  "kigali": "rwanda",
  // Tanzania
  "dar es salaam": "tanzania",
  "dodoma": "tanzania",
  "zanzibar": "tanzania",
  // Namibia
  "windhoek": "namibia",
  // Oman
  "muscat": "oman",
  "salalah": "oman",
  // Jordan
  "amman": "jordan",
  "petra": "jordan",
  // Kuwait
  "kuwait city": "kuwait",
  // Maldives
  "malé": "maldives",
  "male maldives": "maldives",
  // Fiji
  "suva": "fiji",
  "nadi": "fiji",
  // Azerbaijan
  "baku": "azerbaijan",
  // Kyrgyzstan
  "bishkek": "kyrgyzstan",
  "osh": "kyrgyzstan",
  // Mongolia
  "ulaanbaatar": "mongolia",
  "ulan bator": "mongolia",
  // Bhutan
  "thimphu": "bhutan",
  "paro": "bhutan",
  // Lebanon
  "beirut": "lebanon",
  // Ethiopia
  "addis ababa": "ethiopia",
  "addis": "ethiopia",
  // Uganda
  "kampala": "uganda",
  // Botswana
  "gaborone": "botswana",
  // Madagascar
  "antananarivo": "madagascar",
  "tana": "madagascar",
  // Seychelles
  "mahé": "seychelles",
  "mahe": "seychelles",
  // Côte d'Ivoire
  "abidjan": "cote-divoire",
  "yamoussoukro": "cote-divoire",
  "ivory coast": "cote-divoire",
  "cote d'ivoire": "cote-divoire",
  "côte d'ivoire": "cote-divoire",
  // Senegal
  "dakar": "senegal",
  // Cape Verde
  "praia": "cape-verde",
  "cabo verde": "cape-verde",
  // Andorra
  "andorra la vella": "andorra",
  // Kosovo
  "pristina": "kosovo",
  "prishtina": "kosovo",
  // El Salvador
  "san salvador": "el-salvador",
  // Honduras
  "tegucigalpa": "honduras",
  "san pedro sula": "honduras",
  "roatan": "honduras",
  // Belize
  "belize city": "belize",
  "belmopan": "belize",
  // Bahamas
  "nassau": "bahamas",
  // Puerto Rico
  "san juan": "puerto-rico",
  "pr": "puerto-rico",
  // Cuba
  "havana": "cuba",
  "la habana": "cuba",
  "varadero": "cuba",
  "santiago de cuba": "cuba",
  // Laos
  "vientiane": "laos",
  "luang prabang": "laos",
  "vang vieng": "laos",
  "lao pdr": "laos",
  "lao people's democratic republic": "laos",
  // Bolivia
  "la paz": "bolivia",
  "santa cruz": "bolivia",
  "santa cruz de la sierra": "bolivia",
  "sucre": "bolivia",
  "cochabamba": "bolivia",
  "el alto": "bolivia",
  "uyuni": "bolivia",
  "salar de uyuni": "bolivia",
  // Zambia
  "lusaka": "zambia",
  "livingstone": "zambia",
  "kitwe": "zambia",
  "ndola": "zambia",
  "victoria falls": "zambia",
  "mosi-oa-tunya": "zambia",
  // San Marino
  "city of san marino": "san-marino",
  "città di san marino": "san-marino",
  "republic of san marino": "san-marino",
  "monte titano": "san-marino",
  "borgo maggiore": "san-marino",
  "serravalle": "san-marino"
};

/**
 * 7. Validate resource existence
 * @param {string} type - 'country' or 'fieldGuide'
 * @param {string} id - slug or categoryId
 * @returns {boolean}
 */
export const validateResource = (type, id) => {
  if (type === 'country') {
    return AVAILABLE_COUNTRIES.includes(id);
  }
  if (type === 'fieldGuide') {
    return Object.prototype.hasOwnProperty.call(FIELD_GUIDE_CATEGORIES, id);
  }
  return false;
};

/**
 * 3. Get Country Guide Path
 * @param {string} countryName 
 * @returns {string|null} Path to country guide or null
 */
export const getCountryGuidePath = (countryName) => {
  if (!countryName) return null;
  
  // Normalize: lowercase, trim, spaces to hyphens
  let slug = countryName.toLowerCase().trim().replace(/\s+/g, '-');
  
  // Check direct match
  if (validateResource('country', slug)) {
    return `/country-guides/${slug}`;
  }
  
  return null;
};

/**
 * 4. Get Field Guide Path
 * @param {string} categoryId 
 * @param {string} articleId (optional)
 * @returns {string|null} Path to field guide or null
 */
export const getFieldGuidePath = (categoryId, articleId = null) => {
  if (!validateResource('fieldGuide', categoryId)) {
    return null;
  }
  
  const categorySlug = FIELD_GUIDE_CATEGORIES[categoryId].slug;
  
  if (articleId) {
    return `/field-guide/${categorySlug}/${articleId}`;
  }
  return `/field-guide/${categorySlug}`;
};

/**
 * 5. Get Multiple Relevant Resources
 * Analyzes user message for keywords and maps to EXISTING content only.
 * @param {string} userMessage 
 * @returns {Array<{type: 'country'|'fieldGuide', path: string, label: string, title: string}>}
 */
export const getMultipleRelevantResources = (userMessage) => {
  if (!userMessage) return [];
  
  const suggestions = [];
  const lowerMsg = userMessage.toLowerCase();
  
  // A. Detect Country Mentions
  AVAILABLE_COUNTRIES.forEach(slug => {
    // Check slug variations: "united-kingdom", "united kingdom"
    const nameWithSpaces = slug.replace(/-/g, ' ');
    
    // Check for exact slug or spaced name in message
    if (lowerMsg.includes(nameWithSpaces) || lowerMsg.includes(slug)) {
      suggestions.push({
        type: 'country',
        path: `/country-guides/${slug}`,
        label: `${formatCountryLabel(slug)} Country Guide`,
        title: `${formatCountryLabel(slug)} Country Guide`, // Backwards compatibility
        score: 10
      });
    }
  });

  // Check Aliases
  Object.entries(COUNTRY_ALIASES).forEach(([alias, realSlug]) => {
    // Word boundary check for aliases
    const regex = new RegExp(`\\b${alias}\\b`, 'i');
    if (regex.test(lowerMsg)) {
      if (!suggestions.some(s => s.path === `/country-guides/${realSlug}`)) {
        if (validateResource('country', realSlug)) {
          suggestions.push({
            type: 'country',
            path: `/country-guides/${realSlug}`,
            label: `${formatCountryLabel(realSlug)} Country Guide`,
            title: `${formatCountryLabel(realSlug)} Country Guide`,
            score: 10
          });
        }
      }
    }
  });

  // B. Detect Field Guide Categories
  Object.entries(FIELD_GUIDE_CATEGORIES).forEach(([catId, config]) => {
    let matchCount = 0;
    config.keywords.forEach(keyword => {
      if (lowerMsg.includes(keyword)) {
        matchCount++;
      }
    });

    if (matchCount > 0) {
      suggestions.push({
        type: 'fieldGuide',
        path: `/field-guide/${config.slug}`, // Using corrected slug
        label: config.label,
        title: config.label,
        score: 5 + matchCount
      });
    }
  });

  // Deduplicate and Sort
  const uniqueSuggestions = suggestions.reduce((acc, current) => {
    const x = acc.find(item => item.path === current.path);
    if (!x) {
      return acc.concat([current]);
    } else {
      return current.score > x.score ? acc.map(i => i.path === current.path ? current : i) : acc;
    }
  }, []);

  return uniqueSuggestions
    .sort((a, b) => b.score - a.score)
    .slice(0, 4)
    .map(({ type, path, label, title }) => ({ type, path, label, title }));
};

/**
 * 6. Suggest Relevant Content
 * Helper wrapper for consistency
 */
export const suggestRelevantContent = (userMessage) => {
  return getMultipleRelevantResources(userMessage);
};