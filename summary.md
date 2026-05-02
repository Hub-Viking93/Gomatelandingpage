# GoMate — The Relocation Intelligence Platform

## What It Is

GoMate is a web-based relocation intelligence platform that helps people understand the practical reality of moving abroad. It's not a travel blog, not a tourism guide — it's the single, comprehensive resource that should exist for anyone seriously considering international relocation.

Born from a real experience — the founder relocated between Sweden and the Philippines and discovered there was no single place that covered visas, bureaucracy, housing, banking, healthcare, and daily logistics in one coherent resource. GoMate fills that gap.

---

## What It Does

### 74 Country Guides
Deep, practical profiles for 74 countries. Each guide covers visa types, residency requirements, cost of living, housing, healthcare, work permits, banking, and the bureaucratic systems you'll actually need to navigate. This isn't surface-level — it's "here's what a personnummer is and why you can't open a bank account without one" level detail.

### 50+ Field Guide Articles
A structured knowledge base across 13 categories — from "Before You Move" and "Administrative Reality" to "Common Mistakes & Delays" and "Returning Home." These articles treat relocation as a system migration, not an adventure checklist. Topics include what people underestimate, how trust gaps work across borders, and the real mechanics of dual bureaucracies.

### AI Chat Assistant
A conversational AI layer (powered by Supabase Edge Functions) that sits on every page. Users can ask questions in natural language and get context-aware responses that reference specific country guides and field guide articles. It bridges the gap between "I have a specific question" and "I don't even know what to ask yet."

### Country Comparison Tool
Side-by-side comparison of any two countries across key metrics — cost of living, visa complexity, languages, EU status, and more. Built for people narrowing down their shortlist.

### Intelligent Search
A client-side search engine that indexes all countries and articles with weighted scoring, alias support (e.g., "UK" resolves to "United Kingdom"), and instant results with debounced input.

### App Waitlist
GoMate is building a companion app for personalized relocation planning — step-by-step checklists, compliance tracking, deadline alerts, and budget tools. The website captures beta signups via an integrated waitlist system.

---

## How It's Built

| Layer | Tech |
|-------|------|
| Framework | React 18 + Vite |
| Styling | Tailwind CSS + custom Sass utilities |
| Routing | React Router DOM |
| UI Components | Radix UI (headless, accessible) |
| Animations | Framer Motion |
| Charts | Recharts |
| Forms | React Hook Form |
| Backend | Supabase Edge Functions |
| Deployment | Vercel |
| Analytics | Vercel Analytics |
| SEO | Pre-rendered static HTML per route + React Helmet |

---

## Design Philosophy

- **Clarity over complexity** — information architecture built to reduce confusion, not add to it.
- **Real over polished** — content reflects actual relocation experiences, not marketing copy.
- **System-focused** — explains how bureaucratic systems work, not just rules and requirements.
- **Empathy-driven** — acknowledges the emotional and logistical weight of moving abroad.
- **Conversation-enabled** — AI chat provides the personalized layer that static content can't.

The visual identity is clean and intentional: serif headings (Lora), sans-serif body (Inter), a stone/neutral palette with sage green accents, generous whitespace, and smooth scroll-triggered animations. Professional without being corporate.

---

## What Makes It Different

1. **Depth** — 74 countries with structured, actionable data. Not blog posts — structured intelligence.
2. **Breadth** — Covers the full relocation arc: before, during, after, and even returning home.
3. **AI layer** — Natural language access to the entire knowledge base, with contextual resource linking.
4. **Honest tone** — Doesn't sell relocation as a dream. Treats it as a complex life decision that deserves real information.
5. **One place** — Visas, housing, healthcare, banking, bureaucracy, and daily life — all in one platform instead of scattered across 30 tabs.

---

## Current State

The website is live and fully functional as an information platform. The companion app (personalized planning, task management, compliance tracking) is in development, with beta access available via waitlist signup. No authentication or payment systems are implemented yet — the current product is free and open.

---

## In One Line

GoMate turns the chaos of moving abroad into clarity — 74 country guides, 50+ deep articles, and an AI assistant, all in one place.
