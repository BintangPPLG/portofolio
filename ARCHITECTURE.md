# ARCHITECTURE.md — LUMINA Portfolio

## Stack Decision
| Layer | Choice | Rationale |
|-------|--------|-----------|
| Framework | **React 19 + Vite 7 (SPA)** | Static content, zero backend needed. Vite faster dev/build than Next.js for pure client. Deploy anywhere (Netlify, Vercel, Cloudflare Pages, GitHub Pages). |
| Language | **TypeScript strict** | Catch regressions early; portfolio is long-lived. |
| Styling | **Tailwind CSS v4** (via `@tailwindcss/vite`) | Native CSS custom properties, zero config, smaller bundle, `@theme` tokens. |
| Fonts | **@fontsource-variable/inter** + **@fontsource/jetbrains-mono** | Self-hosted, variable font (single file, optical size axis), preload, no CORS. |
| Motion | **Framer Motion (motion/react)** | Declarative, spring physics, layout animations, reduced-motion support, tree-shakeable. |
| Forms | **React Hook Form + Zod + @hookform/resolvers** | Tiny, performant, schema-driven validation, great TS inference. |
| Icons | **lucide-react** | Tree-shakeable, consistent 1.5px stroke, 300+ icons. |
| Lint/Format | **oxlint + Prettier** | oxlint ~50x faster than ESLint; Prettier for format. |
| Deploy | **Static build → `dist/`** | `npm run build` outputs `dist/`. Push to any static host. |

## Folder Structure (src/)
```
src/
├── assets/              # static images (og-image, favicon source)
├── components/
│   ├── ui/              # Button, Card, Badge, Tag, Input, Textarea, Icon, SectionHeading, Toast
│   ├── layout/          # Navbar, Footer
│   └── sections/        # Hero, About, Skills, Projects, Experience, Contact
├── data/
│   └── profile.ts       # SINGLE SOURCE OF TRUTH — all content lives here
├── hooks/
│   ├── useTheme.ts      # dark/light + localStorage + system preference
│   ├── useReveal.ts     # IntersectionObserver scroll reveal
│   └── useReducedMotion.ts # prefers-reduced-motion hook
├── lib/
│   ├── utils.ts         # cn() classnames helper
│   ├── motion.ts        # Framer Motion variants (fadeUp, stagger, etc.)
│   └── validations.ts   # Zod schemas (contact form)
├── styles/
│   └── globals.css      # @import tailwindcss, @theme tokens, @layer components
├── App.tsx              # Composition only — no logic
└── main.tsx             # Providers + Hydration root
```

## Data Flow
```
profile.ts (typed) 
   ↓
Section components (read only)
   ↓
UI components (presentational)
```
**No state lifting** — profile is static config. Only interactive state: theme, form, mobile drawer, scroll reveal flags.

## Routing
Single page, anchor links (`#about`, `#projects`, etc.). `Navbar` smooth-scrolls via `element.scrollIntoView({behavior: 'smooth'})`. No router dependency.

## Theme Implementation
- `ThemeProvider` wraps App.
- On mount: read `localStorage.getItem('theme')` → `'light' | 'dark' | null`.
- If null: `window.matchMedia('(prefers-color-scheme: dark)').matches`.
- Apply `document.documentElement.dataset.theme = resolved`.
- Toggle writes to localStorage + updates dataset.
- Inline script in `index.html` `<head>` reads localStorage **before paint** to prevent flash.

## Motion Strategy
- `useReducedMotion()` → boolean context (optional).
- All Framer Motion components check `reducedMotion` prop → instant transitions.
- Global `@media (prefers-reduced-motion: reduce)` in CSS disables CSS transitions/animations.
- Hero reveal: staggered `fadeUp` variants from `lib/motion.ts`.
- Scroll reveal: `useReveal` hook (IntersectionObserver, threshold 0.15, once).
- Card hover: `whileHover={y: -4, transition: {type: 'spring', stiffness: 400, damping: 17}}`.

## Performance Optimizations
- **Code splitting:** Dynamic import for heavy sections (future) — currently single bundle < 130kB gz.
- **Fonts:** Subset latin-only woff2, preload via `<link rel="preload" as="font" crossorigin>`.
- **Images:** Hero mockup as optimized WebP/AVIF, `loading="eager"` (LCP), others `loading="lazy"`.
- **CSS:** Tailwind v4 JIT → only used utilities in bundle.
- **Icons:** Lucide tree-shaken — only imported icons in bundle.
- **No runtime deps** beyond React + Motion + RHF + Zod (all small).

## Accessibility Checklist (built-in)
- Semantic HTML: `<header>`, `<nav>`, `<main>`, `<section aria-labelledby>`, `<footer>`.
- Heading hierarchy: h1 → h2 → h3.
- Skip link: `<a href="#main" class="skip-link">Skip to content</a>` (visually hidden until focus).
- Focus-visible rings on all interactive elements.
- `aria-label` on icon-only buttons.
- `aria-live="polite"` on form status toast.
- Color contrast ≥ 4.5:1 verified in tokens.
- Reduced motion respected at CSS + JS level.

## Security
- No user input rendered dangerously (no `dangerouslySetInnerHTML`).
- Contact form: honeypot field, client-side rate limit (5/min), Zod sanitization.
- CSP-ready: no inline scripts except theme flash script (can be moved to external).
- All external links: `rel="noopener noreferrer"`, `target="_blank"`.

## SEO / ATS
- `index.html` meta: title, description, OG, Twitter Card.
- JSON-LD `Person` + `WebSite` schema in `<head>`.
- `public/robots.txt` + `public/sitemap.xml` (generate at build).
- Semantic landmarks for screen readers & crawlers.
- Clean URLs (anchors only).

## Build & Deploy
```bash
npm run dev      # Vite dev server
npm run build    # tsc -b && vite build → dist/
npm run preview  # serve dist locally
```
Output: `dist/index.html` + `dist/assets/*.js/*.css` (hashed). Ready for any static host.

## Future Extensibility (not in MVP)
- Blog via MDX + contentlayer
- i18n (next-intl or custom)
- Analytics (Plausible / Umami)
- Project detail pages (dynamic routes → migrate to Next.js if needed)
- CMS (Contentful / Sanity) for profile data

---
*Architecture frozen. Implementation follows DESIGN.md tokens & components.*