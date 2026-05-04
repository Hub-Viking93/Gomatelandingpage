#!/usr/bin/env node

/**
 * Generates llms.txt for AI assistants (ChatGPT, Perplexity, Claude).
 * Reads the same data sources as prerender.js to list all routes.
 */

import { readdirSync, writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

const BASE = 'https://gomaterelocate.com';
const lines = [];

lines.push('# GoMate Relocate');
lines.push('> Relocation intelligence platform — practical guides for moving abroad. Visas, housing, healthcare, banking, admin, and the real systems behind 125+ countries.');
lines.push('');
lines.push('## Static Pages');
lines.push(`- [Home](${BASE}/) — Main landing page. Overview of GoMate, country guides, field guide, and app waitlist.`);
lines.push(`- [Country Guides](${BASE}/country-guides) — Browse 125+ country guides covering visas, housing, healthcare, work, cost of living, and local admin.`);
lines.push(`- [Field Guide](${BASE}/field-guide) — 60+ in-depth articles on the mechanics of moving abroad.`);
lines.push(`- [About](${BASE}/about) — What GoMate is, what we provide, our philosophy, and how the project started.`);
lines.push(`- [GoMate App](${BASE}/app) — AI-powered relocation planning: 15-minute interview, personalized guide, task dependencies, deadline tracking, compliance alerts. Currently in development.`);
lines.push(`- [Compare Countries](${BASE}/compare) — Compare two countries side by side: cost of living, visa options, complexity, and key requirements.`);
lines.push(`- [Pricing](${BASE}/pricing) — GoMate pricing: Free, Pro Single ($29 one-time), Pro+ ($29/mo). Feature comparison and subscription plans.`);
lines.push(`- [FAQ](${BASE}/faq) — Frequently asked questions about GoMate, the guides, the app, and pricing.`);
lines.push('');

// ── Country guides ──
const countriesDir = resolve(ROOT, 'src/data/countries');
const skipFiles = ['index.js', 'extended_data.js', 'relocation_realities.js'];
const countryFiles = readdirSync(countriesDir)
  .filter(f => f.endsWith('.js') && !skipFiles.includes(f));

const countryEntries = [];
for (const file of countryFiles) {
  try {
    const mod = await import(pathToFileURL(resolve(countriesDir, file)).href);
    const country = Object.values(mod)[0];
    if (!country || !country.slug || !country.name) continue;
    countryEntries.push(`- [Moving to ${country.name}](${BASE}/country-guides/${country.slug}) — ${country.shortDescription || `Relocation guide for ${country.name}.`}`);
  } catch (e) {
    // skip
  }
}

lines.push(`## Country Guides (${countryEntries.length})`);
lines.push(...countryEntries);
lines.push('');

// ── Field guide categories and articles ──
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
  howGoMateFitsIn: { id: 'how-gomate-fits-in', title: 'How GoMate Fits In' }
};

const fieldGuideDir = resolve(ROOT, 'src/data/fieldGuide');
const categoryFolders = readdirSync(fieldGuideDir, { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => d.name);

lines.push('## Field Guide Articles');

for (const folder of categoryFolders) {
  const meta = CATEGORY_META[folder];
  if (!meta) continue;

  lines.push(`### ${meta.title}`);

  const articleFiles = readdirSync(resolve(fieldGuideDir, folder))
    .filter(f => f.startsWith('article') && f.endsWith('.js'));

  for (const file of articleFiles) {
    try {
      const mod = await import(pathToFileURL(resolve(fieldGuideDir, folder, file)).href);
      const article = mod.article || mod.default;
      if (!article || !article.id) continue;
      lines.push(`- [${article.title}](${BASE}/field-guide/${meta.id}/${article.id}) — ${article.excerpt || ''}`);
    } catch (e) {
      // skip
    }
  }
}

const output = lines.join('\n') + '\n';
const outputDir = resolve(ROOT, 'public');
mkdirSync(outputDir, { recursive: true });
writeFileSync(resolve(outputDir, 'llms.txt'), output, 'utf-8');
console.log(`✓ Generated llms.txt with ${lines.filter(l => l.startsWith('- ')).length} entries`);
