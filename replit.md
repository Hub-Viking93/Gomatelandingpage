# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Artifacts

### GoMate Relocate (`artifacts/gomate/`)
- **Type**: react-vite
- **Preview path**: `/`
- **Port**: 23722
- **Description**: GoMate Relocate marketing website — relocation guides for 125+ countries
- **Stack**: React 18 + React Router DOM + Tailwind CSS v3 + shadcn/ui + Framer Motion
- **Key pages**: Home, Country Guides, Field Guide, Compare Countries, Pricing, About, FAQ, Search
- **AI Chat**: Uses Supabase Edge Function at `https://xnwcoeydkcckekmxcbcj.supabase.co/functions/v1/chat` for the floating AI assistant
- **Waitlist**: Uses Supabase Edge Function at `https://xnwcoeydkcckekmxcbcj.supabase.co/functions/v1/bright-action` for waitlist signups
- **Data**: Static country data for 133+ countries in `src/data/countries/`, field guide articles in `src/data/fieldGuide/`
- **Note**: No local API server used — all backend calls go to external Supabase Edge Functions

### API Server (`artifacts/api-server/`)
- **Type**: Express API
- **Preview path**: `/api`
- **Description**: Shared backend API server (currently unused by GoMate frontend; reserved for future backend features)

## Ported From

Originally a Vercel/v0 Vite + React project. Migrated to Replit pnpm workspace structure.
- Removed `@vercel/analytics` and `@vercel/speed-insights` (Vercel-specific)
- Removed v0-specific Vite plugins (visual editor, selection mode, iframe route restoration)
- Moved Google Fonts `@import` before Tailwind directives to fix PostCSS ordering
- Preserved all original routing, components, data files, and functionality
