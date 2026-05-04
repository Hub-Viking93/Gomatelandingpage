import {
  Map, FileText, ShieldCheck, AlertTriangle, Home, Wallet,
  Heart, Briefcase, Coffee, Users, Undo2, Sparkles, Wifi,
  Receipt, Plane
} from 'lucide-react';

// Define metadata for categories since this info exists outside individual article files
const CATEGORY_METADATA = {
  beforeYouMove: {
    id: 'before-you-move',
    title: 'Before You Move',
    icon: Map,
    color: 'from-blue-500 to-blue-600',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828',
    description: 'What people consistently underestimate before leaving—and the decisions that quietly shape everything that comes after.'
  },
  administrativeReality: {
    id: 'administrative-reality',
    title: 'Administrative Reality',
    icon: FileText,
    color: 'from-slate-500 to-slate-600',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f',
    description: 'Why paperwork, documentation, and formalities matter more than expected—and how small gaps create big delays.'
  },
  visasAndStatus: {
    id: 'visas-status',
    title: 'Visas & Status',
    icon: ShieldCheck,
    color: 'from-indigo-500 to-indigo-600',
    image: 'https://images.unsplash.com/photo-1544377193-33dcf4d68fb5',
    description: 'How legal status actually works in practice, and why "being allowed to stay" is only part of the picture.'
  },
  commonMistakesAndDelays: {
    id: 'common-mistakes-delays',
    title: 'Common Mistakes & Delays',
    icon: AlertTriangle,
    color: 'from-amber-500 to-amber-600',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173',
    description: 'The patterns behind the most common setbacks—and why they\'re usually caused by assumptions, not rules.'
  },
  housingReality: {
    id: 'housing-reality',
    title: 'Housing Reality',
    icon: Home,
    color: 'from-emerald-500 to-emerald-600',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2',
    description: 'Why housing abroad works differently than people expect, and how status, timing, and paperwork quietly affect your options.'
  },
  moneyBankingAndPayments: {
    id: 'money-banking-payments',
    title: 'Money, Banking & Payments',
    icon: Wallet,
    color: 'from-violet-500 to-violet-600',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3',
    description: 'Why money systems are often the first thing to break—and how access, not income, becomes the real issue.'
  },
  healthcareReality: {
    id: 'healthcare-reality',
    title: 'Healthcare Reality',
    icon: Heart,
    color: 'from-rose-500 to-rose-600',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907',
    description: 'Why access to healthcare isn\'t binary, and how registration, insurance, and status affect everyday care—not just emergencies.'
  },
  workAndIncomeReality: {
    id: 'work-income-reality',
    title: 'Work & Income Reality',
    icon: Briefcase,
    color: 'from-cyan-500 to-cyan-600',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902',
    description: 'How employment, contracts, and income status affect far more than your job—and why "remote" isn\'t neutral.'
  },
  taxesAndCompliance: {
    id: 'taxes-compliance',
    title: 'Taxes & Compliance',
    icon: Receipt,
    color: 'from-yellow-600 to-yellow-700',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85',
    description: 'The cross-border tax and compliance risks that quietly catch out remote workers and expats—permanent establishment, social security, reporting obligations, and the rules your employer may not know either.'
  },
  digitalNomadAndRemoteWork: {
    id: 'digital-nomad-remote-work',
    title: 'Digital Nomad & Remote Work',
    icon: Plane,
    color: 'from-purple-500 to-purple-600',
    image: 'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931',
    description: 'Nomad visas, workation compliance, and the infrastructure of working across borders—what has changed, what is myth, and what will get you deported.'
  },
  digitalInfrastructure: {
    id: 'digital-infrastructure',
    title: 'Digital Infrastructure',
    icon: Wifi,
    color: 'from-sky-500 to-sky-600',
    image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8',
    description: 'Phone numbers, digital IDs, internet, and official mail—the invisible systems that everything else depends on, and that nobody warns you about.'
  },
  dailyLifeAndBureaucracy: {
    id: 'daily-life-bureaucracy',
    title: 'Daily Life & Bureaucracy',
    icon: Coffee,
    color: 'from-orange-500 to-orange-600',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
    description: 'The everyday admin people don\'t think about until it stacks up—and why small systems matter more than big rules.'
  },
  movingWithSomeone: {
    id: 'moving-with-someone',
    title: 'Moving With Someone',
    icon: Users,
    color: 'from-teal-500 to-teal-600',
    image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2',
    description: 'Why partners, families, and dependents rarely share the same status—and how that creates hidden dependencies.'
  },
  returningHome: {
    id: 'returning-home',
    title: 'Returning Home',
    icon: Undo2,
    color: 'from-stone-500 to-stone-600',
    image: 'https://images.unsplash.com/photo-1499591934245-40b55745b905',
    description: 'Why returning isn\'t a reset button, and what doesn\'t automatically undo itself when you move back.'
  },
  howGoMateFitsIn: {
    id: 'how-gomate-fits-in',
    title: 'How GoMate Fits In',
    icon: Sparkles,
    color: 'from-pink-500 to-pink-600',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692',
    description: 'Where GoMate helps you understand your situation—and where official sources or professionals are still required.'
  }
};

// Use import.meta.glob to dynamically load all article files
const modules = import.meta.glob('/src/data/fieldGuide/*/*.js', { eager: true });

export const getFieldGuideStructure = () => {
  const structure = [];
  const categoryArticlesMap = {};

  // 1. Sort and process files
  for (const path in modules) {
    // Expected path: /src/data/fieldGuide/[folderName]/[fileName].js
    const parts = path.split('/');
    const folderName = parts[parts.length - 2];
    const fileName = parts[parts.length - 1];

    // Skip index.js files
    if (fileName === 'index.js') continue;

    // Get the article data
    const module = modules[path];
    const articleData = module.article || module.default;

    if (!articleData) continue;

    // Initialize category array if needed
    if (!categoryArticlesMap[folderName]) {
      categoryArticlesMap[folderName] = [];
    }

    // Add article to category
    // Ensure ID matches what the router expects (often 'article1', 'article2' based on filename or internal id)
    // We prefer the ID from the file content if available
    categoryArticlesMap[folderName].push({
      ...articleData,
      categoryId: CATEGORY_METADATA[folderName]?.id // Link back to public category ID
    });
  }

  // 2. Build the final structure array in the order of keys defined in CATEGORY_METADATA
  Object.keys(CATEGORY_METADATA).forEach(folderKey => {
    const metadata = CATEGORY_METADATA[folderKey];
    const articles = categoryArticlesMap[folderKey] || [];

    // Sort articles by ID to ensure consistent order (article1, article2, etc.)
    articles.sort((a, b) => a.id.localeCompare(b.id));

    structure.push({
      ...metadata,
      folderName: folderKey, // Keep internal folder name reference just in case
      articles: articles
    });
  });

  return structure;
};

export const getArticlesByCategory = (categoryId) => {
  const structure = getFieldGuideStructure();
  const category = structure.find(cat => cat.id === categoryId);
  return category ? category.articles : [];
};

export const getArticleById = (categoryId, articleId) => {
  const articles = getArticlesByCategory(categoryId);
  return articles.find(article => article.id === articleId);
};