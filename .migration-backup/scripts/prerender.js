/**
 * Pre-rendering script for GoMate marketing site.
 *
 * After `vite build`, this script:
 * 1. Reads dist/index.html as a template
 * 2. Imports all country data + field guide articles
 * 3. Generates a static HTML file per route with SEO content + meta tags
 * 4. Generates sitemap.xml
 *
 * Google gets real HTML content. Users get the same React app (hydrates on load).
 */

import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const DIST = resolve(ROOT, 'dist');
const SITE_URL = 'https://gomaterelocate.com';

// Read the Vite-built index.html as template
const template = readFileSync(resolve(DIST, 'index.html'), 'utf-8');

// ── Collect all routes ──────────────────────────────────────────

const routes = [];

// ── 1. Static pages ─────────────────────────────────────────────

routes.push({
  path: '/',
  title: 'GoMate Relocate — Practical Guides for Moving Abroad',
  description: 'Relocation intelligence for 125+ countries. Visas, housing, healthcare, banking, admin, and the real systems behind moving abroad — before you move.',
  content: '<h1>GoMate Relocate — Practical Guides for Moving Abroad</h1><p>125+ country guides built around the real systems behind moving abroad — visas, banking, registration deadlines, and the things that catch people off guard.</p><h2>Popular Country Guides</h2><ul><li><a href="/country-guides/spain">Moving to Spain</a></li><li><a href="/country-guides/portugal">Moving to Portugal</a></li><li><a href="/country-guides/sweden">Moving to Sweden</a></li><li><a href="/country-guides/germany">Moving to Germany</a></li><li><a href="/country-guides/thailand">Moving to Thailand</a></li><li><a href="/country-guides/japan">Moving to Japan</a></li><li><a href="/country-guides/australia">Moving to Australia</a></li><li><a href="/country-guides/canada">Moving to Canada</a></li><li><a href="/country-guides/united-states">Moving to the United States</a></li><li><a href="/country-guides/netherlands">Moving to the Netherlands</a></li><li><a href="/country-guides/italy">Moving to Italy</a></li><li><a href="/country-guides/united-kingdom">Moving to the United Kingdom</a></li></ul><p><a href="/country-guides">Browse all 125+ country guides</a></p>'
});

routes.push({
  path: '/country-guides',
  title: 'Country Guides — GoMate Relocate',
  description: 'Explore 84 country guides covering visas, housing, healthcare, work, and daily life. Real information for real relocations.',
  content: '<h1>Country Guides</h1><p>Explore practical relocation guides for over 84 countries. Each guide covers visa options, housing, healthcare, work, cost of living, and the systems that actually affect your move.</p>'
});

routes.push({
  path: '/field-guide',
  title: 'Relocation Field Guide — GoMate Relocate',
  description: 'Deep-dive articles on the reality of moving abroad — visas, admin, housing, money, healthcare, and the mistakes people make.',
  content: '<h1>The Relocation Field Guide</h1><p>In-depth articles about what moving abroad actually involves. From bureaucratic dependencies to healthcare systems — written from experience, not theory.</p>'
});

routes.push({
  path: '/about',
  title: 'About GoMate — GoMate Relocate',
  description: 'GoMate is an AI-powered relocation intelligence platform that helps people navigate the real complexity of moving abroad.',
  content: '<h1>About GoMate</h1><p>GoMate is a relocation intelligence platform. We help people understand and navigate the real systems behind international moves.</p>'
});

routes.push({
  path: '/app',
  title: 'GoMate App — AI-Powered Relocation Planning | GoMate Relocate',
  description: 'The GoMate App builds a personalized relocation plan from a 15-minute AI interview. Task dependencies, deadline tracking, compliance alerts, and context-aware chat.',
  content: '<h1>The GoMate App</h1><p>GoMate is not a guide. It is an operating system for your move. A 15-minute AI interview builds a complete, personalized plan with task dependencies, deadlines, and compliance tracking.</p><h2>How It Works</h2><h3>1. Describe Your Situation</h3><p>An AI assistant builds your profile with 65+ data points — citizenship, destination, purpose, family, budget, work experience, and more.</p><h3>2. Get Your Personalized Guide</h3><p>An AI research pipeline searches official sources and synthesizes a tailored guide with visa recommendations, cost of living, document checklists, and timeline.</p><h3>3. Land and Get Established</h3><p>Post-arrival task graph with real dependencies and deadlines tied to your arrival date. Compliance alerts for overdue and urgent tasks.</p><h3>4. Ask Anything</h3><p>Context-aware AI chat that knows your profile, plan, and destination.</p>'
});

routes.push({
  path: '/pricing',
  title: 'Pricing — GoMate Relocate',
  description: 'GoMate pricing: Free profile building, Pro Single for a complete relocation plan ($29), Pro+ for post-arrival compliance and unlimited plans ($29/mo). A fraction of the cost of a relocation agency.',
  content: '<h1>Pricing</h1><p>A relocation agency costs $2,000–5,000 and focuses on corporations. GoMate gives individuals the same structured intelligence — starting at $29.</p><h2>Free — $0</h2><p>Full AI chat interview, profile building (65+ fields), and basic relocation overview. 1 plan.</p><h2>Pro Single — $29 one-time</h2><p>Visa recommendations and research, local requirements, cost of living analysis, budget planner, full AI-generated relocation guide (PDF), document checklist, flight and hotel search, pre-move timeline, tax overview, and chat history. 1 plan.</p><h2>Pro+ — $29/month</h2><p>Everything in Pro Single plus unlimited plans, visa application tracker, banking setup wizard, tax registration guide, post-arrival task manager, post-arrival AI assistant, compliance calendar with iCal export, compliance alerts, and wellbeing check-ins. Full platform access.</p><h2>Pro+ Subscription Plans</h2><p>Monthly $29/mo. 3 Months $69 ($23/mo, 22% savings). 6 Months $119 ($20/mo, 33% savings). Annual $199 ($17/mo, 44% savings).</p>'
});

routes.push({
  path: '/compare',
  title: 'Compare Countries — GoMate Relocate',
  description: 'Compare two countries side by side — cost of living, visa options, complexity, languages, and key requirements. Find the best destination for your move.',
  content: '<h1>Compare Countries</h1><p>Compare two destinations side by side. Cost of living, visa options, relocation complexity, languages, and what it actually takes to move there.</p>'
});

routes.push({
  path: '/faq',
  title: 'FAQ — GoMate Relocate',
  description: 'Frequently asked questions about GoMate, our relocation guides, and how we help people move abroad.',
  content: '<h1>Frequently Asked Questions</h1><p>Answers to common questions about GoMate and international relocation.</p>'
});

// ── 2. Country guide pages ──────────────────────────────────────

const countriesDir = resolve(ROOT, 'src/data/countries');
const skipFiles = ['index.js', 'extended_data.js', 'relocation_realities.js'];
const countryFiles = readdirSync(countriesDir)
  .filter(f => f.endsWith('.js') && !skipFiles.includes(f));

// Import relocation realities for richer SEO content
let relocationRealities = {};
try {
  const realitiesMod = await import(pathToFileURL(resolve(countriesDir, 'relocation_realities.js')).href);
  relocationRealities = realitiesMod.relocationRealities || {};
} catch (e) {
  console.warn('Could not load relocation_realities.js:', e.message);
}

console.log(`Found ${countryFiles.length} country files`);

// Pre-load basic country data for internal linking
const allCountryBasicData = [];
for (const cf of countryFiles) {
  try {
    const cfMod = await import(pathToFileURL(resolve(countriesDir, cf)).href);
    const cfCountry = Object.values(cfMod)[0];
    if (cfCountry && cfCountry.slug && cfCountry.name && cfCountry.region) {
      allCountryBasicData.push({ slug: cfCountry.slug, name: cfCountry.name, region: cfCountry.region });
    }
  } catch (_) { /* skip */ }
}

// Import curated related countries map
let relatedCountriesMap = {};
try {
  const rcMod = await import(pathToFileURL(resolve(countriesDir, 'relatedCountries.js')).href);
  relatedCountriesMap = rcMod.relatedCountries || {};
} catch (e) {
  console.warn('Could not load relatedCountries.js:', e.message);
}

for (const file of countryFiles) {
  try {
    const mod = await import(pathToFileURL(resolve(countriesDir, file)).href);
    const country = Object.values(mod)[0];

    if (!country || !country.slug || !country.name) {
      console.warn(`  Skipping ${file} — no valid country data`);
      continue;
    }

    // Get relocation realities for this country
    const realities = relocationRealities[country.id] || relocationRealities[country.slug] || {};

    // Build rich SEO content from all available data
    let content = `<h1>Moving to ${country.name} — Relocation Guide</h1>`;
    content += `<p>${country.shortDescription || `Practical guide for relocating to ${country.name}.`}</p>`;

    // At a Glance
    if (country.atAGlance) {
      content += `<h2>${country.name} at a Glance</h2><p>${country.atAGlance}</p>`;
    }

    // Relocation Realities — the richest content for SEO
    if (realities.lifeEconomics || realities.housingLivingReality || realities.workIncomeReality) {
      content += `<h2>Relocation Realities</h2>`;
      if (realities.lifeEconomics) content += `<h3>Life &amp; Economics</h3><p>${realities.lifeEconomics}</p>`;
      if (realities.housingLivingReality) content += `<h3>Housing</h3><p>${realities.housingLivingReality}</p>`;
      if (realities.workIncomeReality) content += `<h3>Work &amp; Income</h3><p>${realities.workIncomeReality}</p>`;
      if (realities.healthcareReality) content += `<h3>Healthcare</h3><p>${realities.healthcareReality}</p>`;
      if (realities.taxesSocialSystem) content += `<h3>Taxes &amp; Social System</h3><p>${realities.taxesSocialSystem}</p>`;
      if (realities.climateSeasons) content += `<h3>Climate &amp; Seasons</h3><p>${realities.climateSeasons}</p>`;
      if (realities.whoThisCountryIsFor) content += `<h3>Who Is ${country.name} For?</h3><p>${realities.whoThisCountryIsFor}</p>`;
    }

    // Visa information
    if (country.visas && country.visas.length > 0) {
      content += `<h2>Visa Options for ${country.name}</h2><ul>`;
      for (const visa of country.visas.slice(0, 8)) {
        content += `<li><strong>${visa.name || visa.type || 'Visa'}</strong>`;
        if (visa.useCase) content += ` — ${visa.useCase}`;
        else if (visa.description) content += ` — ${visa.description}`;
        content += `</li>`;
      }
      content += '</ul>';
    }

    // Key requirements
    if (country.requirements && country.requirements.length > 0) {
      content += `<h2>Key Requirements for Moving to ${country.name}</h2>`;
      for (const req of country.requirements.slice(0, 6)) {
        const title = typeof req === 'string' ? req : req.title || req.name || '';
        const explanation = typeof req === 'object' ? (req.explanation || req.importance || '') : '';
        content += `<h3>${title}</h3>`;
        if (explanation) content += `<p>${explanation}</p>`;
      }
    }

    // Culture
    if (country.culture) {
      content += `<h2>Culture in ${country.name}</h2>`;
      if (typeof country.culture === 'string') {
        content += `<p>${country.culture}</p>`;
      } else if (country.culture.text) {
        content += `<p>${country.culture.text}</p>`;
        if (country.culture.highlights) {
          content += '<ul>';
          for (const h of country.culture.highlights) content += `<li>${h}</li>`;
          content += '</ul>';
        }
      }
    }

    // Related Field Guide Articles (internal linking for SEO)
    content += `<h2>Related Field Guide Articles</h2><ul>`;
    content += `<li><a href="/field-guide/before-you-move/what-people-underestimate">What People Underestimate Before Moving Abroad</a></li>`;
    content += `<li><a href="/field-guide/administrative-reality/how-admin-systems-work">How Administrative Systems Actually Work Behind the Counter</a></li>`;
    content += `<li><a href="/field-guide/visas-status/visa-categories-meaning">Why Visa Categories Rarely Mean What People Think</a></li>`;
    content += `<li><a href="/field-guide/housing-reality/foreigner-premium-rentals">The "Foreigner Premium" in Rentals</a></li>`;
    content += `<li><a href="/field-guide/money-banking-payments/opening-bank-account">Opening a Bank Account: The Gatekeeper</a></li>`;
    content += `<li><a href="/field-guide/digital-infrastructure/phone-number-identity-anchor">Why Your Phone Number Is an Identity Document</a></li>`;
    content += `</ul>`;

    // Related countries — curated geographic/cultural connections
    const relatedSlugs = relatedCountriesMap[country.slug] || [];
    const relatedList = relatedSlugs
      .map(s => allCountryBasicData.find(c => c.slug === s))
      .filter(Boolean);
    if (relatedList.length > 0) {
      content += `<h2>Related Country Guides</h2><ul>`;
      for (const rc of relatedList) {
        content += `<li><a href="/country-guides/${rc.slug}">Moving to ${rc.name}</a></li>`;
      }
      content += `</ul>`;
    }

    // Common mistakes
    if (country.mistakes && country.mistakes.length > 0) {
      content += `<h2>Common Mistakes When Moving to ${country.name}</h2><ul>`;
      for (const m of country.mistakes) content += `<li>${m}</li>`;
      content += '</ul>';
    }

    // Considerations
    if (country.considerations && country.considerations.length > 0) {
      content += `<h2>Things to Know About ${country.name}</h2><ul>`;
      for (const c of country.considerations) content += `<li>${c}</li>`;
      content += '</ul>';
    }

    routes.push({
      path: `/country-guides/${country.slug}`,
      title: `Moving to ${country.name} — Visa, Housing & Relocation Guide | GoMate`,
      description: country.shortDescription || `Everything you need to know about relocating to ${country.name}. Visas, housing, healthcare, work, and practical advice.`,
      content,
      ogType: 'article'
    });

    console.log(`  ✓ ${country.name} (${country.slug})`);
  } catch (err) {
    console.warn(`  ✗ Failed to import ${file}: ${err.message}`);
  }
}

// ── 3. Field guide articles ─────────────────────────────────────

const CATEGORY_META = {
  beforeYouMove: { id: 'before-you-move', title: 'Before You Move' },
  administrativeReality: { id: 'administrative-reality', title: 'Administrative Reality' },
  visasAndStatus: { id: 'visas-status', title: 'Visas & Status' },
  commonMistakesAndDelays: { id: 'common-mistakes-delays', title: 'Common Mistakes & Delays' },
  digitalInfrastructure: { id: 'digital-infrastructure', title: 'Digital Infrastructure' },
  housingReality: { id: 'housing-reality', title: 'Housing Reality' },
  moneyBankingAndPayments: { id: 'money-banking-payments', title: 'Money, Banking & Payments' },
  healthcareReality: { id: 'healthcare-reality', title: 'Healthcare Reality' },
  workAndIncomeReality: { id: 'work-income-reality', title: 'Work & Income Reality' },
  dailyLifeAndBureaucracy: { id: 'daily-life-bureaucracy', title: 'Daily Life & Bureaucracy' },
  movingWithSomeone: { id: 'moving-with-someone', title: 'Moving With Someone' },
  returningHome: { id: 'returning-home', title: 'Returning Home' },
  howGoMateFitsIn: { id: 'how-gomate-fits-in', title: 'How GoMate Fits In' },
  taxesAndCompliance: { id: 'taxes-compliance', title: 'Taxes & Compliance' },
  digitalNomadAndRemoteWork: { id: 'digital-nomad-remote-work', title: 'Digital Nomad & Remote Work' }
};

const fieldGuideDir = resolve(ROOT, 'src/data/fieldGuide');
const categoryFolders = readdirSync(fieldGuideDir, { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => d.name);

console.log(`\nFound ${categoryFolders.length} field guide categories`);

for (const folder of categoryFolders) {
  const meta = CATEGORY_META[folder];
  if (!meta) continue;

  // Category overview page
  routes.push({
    path: `/field-guide/${meta.id}`,
    title: `${meta.title} — Relocation Field Guide | GoMate`,
    description: `Articles about ${meta.title.toLowerCase()} when relocating abroad.`,
    content: `<h1>${meta.title}</h1><p>In-depth articles about ${meta.title.toLowerCase()} — what to expect, what to prepare, and what most people get wrong.</p>`
  });

  // Individual articles
  const articleFiles = readdirSync(resolve(fieldGuideDir, folder))
    .filter(f => f.startsWith('article') && f.endsWith('.js'));

  for (const file of articleFiles) {
    try {
      const mod = await import(pathToFileURL(resolve(fieldGuideDir, folder, file)).href);
      const article = mod.article || mod.default;

      if (!article || !article.id) continue;

      // Build article SEO content
      let content = `<article>`;
      content += `<h1>${article.title}</h1>`;
      content += `<p><em>${article.excerpt || ''}</em></p>`;

      if (article.sections) {
        for (const section of article.sections) {
          if (section.heading) content += `<h2>${section.heading}</h2>`;
          if (section.content) content += `<p>${section.content}</p>`;
        }
      }
      // Related Country Guides (internal linking for SEO)
      content += `<h2>Explore Country Guides</h2>`;
      content += `<p>See how these topics apply in practice across different countries:</p>`;
      content += `<ul>`;
      content += `<li><a href="/country-guides/germany">Moving to Germany</a></li>`;
      content += `<li><a href="/country-guides/spain">Moving to Spain</a></li>`;
      content += `<li><a href="/country-guides/netherlands">Moving to the Netherlands</a></li>`;
      content += `<li><a href="/country-guides/france">Moving to France</a></li>`;
      content += `<li><a href="/country-guides/united-kingdom">Moving to the United Kingdom</a></li>`;
      content += `</ul>`;
      content += `</article>`;

      routes.push({
        path: `/field-guide/${meta.id}/${article.id}`,
        title: `${article.title} — ${meta.title} | GoMate`,
        description: article.excerpt || `${article.title} — practical relocation advice from GoMate.`,
        content,
        ogType: 'article'
      });

      console.log(`  ✓ ${meta.title} / ${article.title}`);
    } catch (err) {
      console.warn(`  ✗ Failed to import ${folder}/${file}: ${err.message}`);
    }
  }
}

const today = new Date().toISOString().split('T')[0];

// ── 4. JSON-LD Structured Data ─────────────────────────────────

const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'GoMate Relocate',
  url: SITE_URL,
  logo: 'https://raw.githubusercontent.com/Hub-Viking93/gomatelogo/a7f6068ce4dadd248025a0617ee743aedbe64481/GoMateLogo.png',
  description: 'Relocation intelligence platform covering 125+ countries — visas, housing, healthcare, admin, and the systems behind moving abroad.',
  sameAs: [
    'https://x.com/GoMateRelocate',
    'https://www.instagram.com/gomaterelocate/',
    'https://se.pinterest.com/gomaterelocate/',
    'https://www.tiktok.com/@gomaterelocate'
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'contact@gomaterelocate.com',
    contactType: 'customer support'
  }
};

const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'GoMate Relocate',
  url: SITE_URL,
  description: 'Practical relocation guides for 125+ countries. Visas, housing, healthcare, banking, and the real systems behind moving abroad.',
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE_URL}/search?q={search_term_string}`,
    'query-input': 'required name=search_term_string'
  }
};

// FAQ data mirrored from FAQPage.jsx for schema generation
const FAQ_ITEMS = [
  { q: 'What exactly is GoMate?', a: 'GoMate is a relocation intelligence platform. We help you understand what moving to another country actually involves — visas, housing, healthcare, banking, admin, deadlines, and the things no one tells you until you\'re already there. We offer 125+ country guides, 60+ in-depth field guide articles, and an AI-powered planning app (coming soon).' },
  { q: 'Is GoMate free to use?', a: 'Yes! Exploring our extensive Country Guides and using the website resources is completely free. We believe essential information about moving abroad should be accessible to everyone.' },
  { q: 'Do I need an account to browse country guides?', a: 'No account is needed to browse the website. You can explore all our country data, field guides, and resources immediately without signing up.' },
  { q: 'What\'s the difference between the website and the app?', a: 'Think of the website as your encyclopedia — it\'s where you explore options, compare countries, and learn the rules. The App is your personal project manager — it\'s where you actually plan your specific move, track your budget, and manage your to-do list.' },
  { q: 'Is the GoMate App available now?', a: 'Not yet — it\'s under active development. The website is fully available and free to use today.' },
  { q: 'How accurate is the information in the guides?', a: 'We strive for high accuracy by aggregating data from official government sources, embassies, and reputable international organizations. However, immigration rules change frequently, so we always recommend verifying critical details with official authorities.' },
  { q: 'Do you provide official legal advice?', a: 'No. GoMate provides information and guidance, but we are not a law firm. Our content is for informational purposes. For complex legal situations, we recommend consulting a qualified immigration lawyer.' },
  { q: 'Is GoMate a visa agency?', a: 'No, we are not a government agency or a visa processing firm. We help you understand the requirements and organize your application, but you will submit your actual visa application directly to the relevant government authorities.' },
  { q: 'Where is GoMate based?', a: 'GoMate has its roots in Sweden, built from a real cross-border relocation between Sweden and the Philippines. We work remotely across time zones — just like the people we serve.' },
];

function buildJsonLd(route) {
  const schemas = [ORGANIZATION_SCHEMA];

  // Homepage: add WebSite schema
  if (route.path === '/') {
    schemas.push(WEBSITE_SCHEMA);
  }

  // FAQ page: add FAQPage schema
  if (route.path === '/faq') {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQ_ITEMS.map(item => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.a
        }
      }))
    });
  }

  // Country guide pages: BreadcrumbList + Article
  if (route.path.startsWith('/country-guides/') && route.path.split('/').length === 3) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Country Guides', item: `${SITE_URL}/country-guides` },
        { '@type': 'ListItem', position: 3, name: route.title.split(' — ')[0] }
      ]
    });
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: route.title,
      description: route.description,
      url: `${SITE_URL}${route.path}`,
      author: { '@type': 'Organization', name: 'GoMate Relocate' },
      publisher: { '@type': 'Organization', name: 'GoMate Relocate', logo: { '@type': 'ImageObject', url: ORGANIZATION_SCHEMA.logo } },
      datePublished: '2026-02-03',
      dateModified: today
    });
  }

  // Field guide articles: BreadcrumbList + Article
  if (route.path.startsWith('/field-guide/') && route.path.split('/').length === 4) {
    const parts = route.path.split('/');
    const categorySlug = parts[2];
    const categoryTitle = route.title.split(' — ')[1]?.split(' |')[0] || categorySlug;
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Field Guide', item: `${SITE_URL}/field-guide` },
        { '@type': 'ListItem', position: 3, name: categoryTitle, item: `${SITE_URL}/field-guide/${categorySlug}` },
        { '@type': 'ListItem', position: 4, name: route.title.split(' — ')[0] }
      ]
    });
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: route.title.split(' — ')[0],
      description: route.description,
      url: `${SITE_URL}${route.path}`,
      author: { '@type': 'Organization', name: 'GoMate Relocate' },
      publisher: { '@type': 'Organization', name: 'GoMate Relocate', logo: { '@type': 'ImageObject', url: ORGANIZATION_SCHEMA.logo } },
      datePublished: '2026-02-03',
      dateModified: today
    });
  }

  // Field guide category pages: BreadcrumbList
  if (route.path.startsWith('/field-guide/') && route.path.split('/').length === 3) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Field Guide', item: `${SITE_URL}/field-guide` },
        { '@type': 'ListItem', position: 3, name: route.title.split(' — ')[0] }
      ]
    });
  }

  return schemas.map(s => `<script type="application/ld+json">${JSON.stringify(s)}</script>`).join('\n');
}

// ── 5. Generate HTML files ──────────────────────────────────────

console.log(`\nGenerating ${routes.length} HTML files...`);

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

for (const route of routes) {
  let html = template;

  // Replace title
  html = html.replace(/<title>.*?<\/title>/, `<title>${escapeHtml(route.title)}</title>`);

  // Replace meta description
  html = html.replace(
    /<meta name="description" content="[^"]*"/,
    `<meta name="description" content="${escapeHtml(route.description)}"`
  );

  // Replace OG tags
  html = html.replace(
    /<meta property="og:title" content="[^"]*"/,
    `<meta property="og:title" content="${escapeHtml(route.title)}"`
  );
  html = html.replace(
    /<meta property="og:description" content="[^"]*"/,
    `<meta property="og:description" content="${escapeHtml(route.description)}"`
  );
  html = html.replace(
    /<meta property="og:url" content="[^"]*"/,
    `<meta property="og:url" content="${SITE_URL}${route.path}"`
  );
  if (route.ogType) {
    html = html.replace(
      /<meta property="og:type" content="[^"]*"/,
      `<meta property="og:type" content="${route.ogType}"`
    );
  }

  // Replace Twitter tags
  html = html.replace(
    /<meta name="twitter:title" content="[^"]*"/,
    `<meta name="twitter:title" content="${escapeHtml(route.title)}"`
  );
  html = html.replace(
    /<meta name="twitter:description" content="[^"]*"/,
    `<meta name="twitter:description" content="${escapeHtml(route.description)}"`
  );

  // Replace canonical URL
  html = html.replace(
    /<link rel="canonical" href="[^"]*"/,
    `<link rel="canonical" href="${SITE_URL}${route.path}"`
  );

  // Inject JSON-LD structured data before </head>
  const jsonLd = buildJsonLd(route);
  html = html.replace('</head>', `${jsonLd}\n</head>`);

  // Inject SEO content into root div (React's createRoot will replace it on load)
  if (route.content) {
    html = html.replace(
      '<div id="root"></div>',
      `<div id="root"><div class="seo-content" style="position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0">${route.content}</div></div>`
    );
  }

  // Write to dist
  const outPath = route.path === '/'
    ? resolve(DIST, 'index.html')
    : resolve(DIST, route.path.slice(1), 'index.html');

  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, html);
}

console.log(`✓ Generated ${routes.length} pre-rendered pages`);

// ── 6. Generate sitemap.xml ─────────────────────────────────────

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

for (const route of routes) {
  const priority = route.path === '/' ? '1.0'
    : route.path.split('/').length <= 2 ? '0.8'
    : route.path.includes('/country-guides/') && route.path.split('/').length === 3 ? '0.9'
    : '0.7';

  const changefreq = route.path === '/' ? 'weekly'
    : route.path.includes('/country-guides/') ? 'monthly'
    : 'monthly';

  sitemap += `  <url>
    <loc>${SITE_URL}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>
`;
}

sitemap += `</urlset>`;

writeFileSync(resolve(DIST, 'sitemap.xml'), sitemap);
console.log(`✓ Generated sitemap.xml with ${routes.length} URLs`);

// ── 6. Generate robots.txt ──────────────────────────────────────

const robots = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

writeFileSync(resolve(DIST, 'robots.txt'), robots);
console.log('✓ Generated robots.txt');
