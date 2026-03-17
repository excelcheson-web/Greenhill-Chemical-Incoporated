# Greenhills Chemicals Incorporated — Project Guidelines

> Top-tier chemical supplier. Clean industrial design, high accessibility, SEO for chemical procurement, sustainability focus.

## Brand & Design

- **Primary color**: `#2D3436` (dark charcoal) — headers, body text, nav backgrounds
- **Accent color**: `#00FFC2` (electric mint) — CTAs, highlights, interactive elements, sustainability badges
- **Neutral palette**: `#F5F6FA` (light gray backgrounds), `#DFE6E9` (borders/dividers), `#FFFFFF` (cards/surfaces)
- **Typography**: Clean sans-serif system stack; headings bold and uppercase-sparing; body 16px+ for readability
- **Imagery**: Industrial photography with sustainability overlays; avoid stock-generic; prefer real facilities and products
- **Tone**: Professional, authoritative, environmentally conscious — no hyperbole

## Architecture

- **Framework**: Next.js 14+ with App Router and TypeScript
- **Styling**: Tailwind CSS with a custom theme extending the brand palette above
- **Components**: Server Components by default; use `"use client"` only when interactivity requires it
- **Directory layout**:
  - `app/` — routes, layouts, pages (App Router conventions)
  - `components/` — reusable UI components (`ui/` for primitives, `sections/` for page blocks)
  - `lib/` — utilities, API clients, constants
  - `public/` — static assets (images, favicons, documents)
  - `content/` — MDX/JSON for product catalogs, SDS sheets, and blog posts

## Code Style

- TypeScript strict mode; no `any` types
- Named exports over default exports for components
- Props defined with explicit `interface` declarations, not inline types
- Tailwind classes ordered: layout → sizing → spacing → typography → colors → effects
- Use `cn()` utility (clsx + tailwind-merge) for conditional class composition

## Accessibility (WCAG 2.1 AA)

- All images must have descriptive `alt` text; decorative images use `alt=""`
- Interactive elements need visible focus indicators (accent ring `#00FFC2`)
- Color contrast ratio ≥ 4.5:1 for normal text, ≥ 3:1 for large text
- Forms require associated `<label>` elements and `aria-describedby` for errors
- Semantic HTML: `<nav>`, `<main>`, `<article>`, `<section>` with proper heading hierarchy
- Skip-to-content link on every page

## SEO & Chemical Procurement

- Every page needs unique `<title>` and `meta description` targeting chemical procurement keywords
- Use structured data (JSON-LD): `Organization`, `Product`, `BreadcrumbList`, `FAQPage`
- Product pages must include: CAS number, chemical formula, purity grade, packaging options, SDS download link
- URL structure: `/products/[category]/[slug]` — human-readable, keyword-rich slugs
- Implement `sitemap.xml` and `robots.txt` via Next.js metadata API
- Optimize Core Web Vitals: lazy-load below-fold images, prefetch critical routes

## Sustainability

- Dedicated `/sustainability` section with measurable goals and certifications
- Show eco-certifications (ISO 14001, Responsible Care) on product cards where applicable
- Use accent color `#00FFC2` for sustainability-related badges and callouts
- Include carbon footprint or green chemistry data when available on product pages

## Build & Test

```bash
npm install          # Install dependencies
npm run dev          # Development server (localhost:3000)
npm run build        # Production build
npm run lint         # ESLint + accessibility checks
npm run test         # Run test suite
```

- Use `next lint` with the recommended + accessibility plugin (`eslint-plugin-jsx-a11y`)
- Write tests with Vitest + React Testing Library; co-locate `*.test.tsx` beside components
- Prefer integration tests for page flows; unit tests for utilities

## Conventions

- Environment variables prefixed `NEXT_PUBLIC_` for client-safe values; never expose secrets
- API routes in `app/api/` use standard `NextRequest`/`NextResponse`; validate all inputs with Zod
- Loading and error states: use Next.js `loading.tsx` and `error.tsx` per route segment
- Images served via `next/image` with explicit `width`/`height` or `fill` — no unsized images
- Commit messages follow Conventional Commits: `feat:`, `fix:`, `docs:`, `chore:`
