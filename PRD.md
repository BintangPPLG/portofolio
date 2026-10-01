# PRD — Portfolio Developer Premium (LUMINA)

## Project Overview
Portfolio personal developer yang menampilkan skill, project, experience, dan contact. Target: recruiter & client. Harus terasa seperti produk SaaS kelas dunia (Linear, Vercel, Stripe, Framer, Raycast), **bukan template**.

## Business Goal
Meningkatkan peluang interview & project freelance melalui first-impression visual & UX yang memorable, profesional, dan trusted.

## Target Users
- Technical recruiter (scan 15–30 detik)
- Engineering manager (cari depth technical)
- Potential client (cari bukti delivery & aesthetic)

## Functional Requirements (Must Have)
| ID | Feature | Detail |
|----|---------|--------|
| F1 | Hero | Headline, sub, CTA, scroll indicator, animated background |
| F2 | About | Narrative + 3 value cards (craft, ownership, growth) |
| F3 | Skills | Kategori (Frontend, Backend, DevOps, Design) — interactive chips |
| F4 | Projects | Featured (2 kolom) + Other (grid) — hover lift, tech pills, link external |
| F5 | Experience | Timeline vertikal, expandable cards, tech stack per role |
| F6 | Contact | Form validasi (RHF + Zod), toast success, honeypot, rate-limit client |
| F7 | Theme | Dark/Light toggle, persist localStorage, respect system preference |
| F8 | Navbar | Sticky, scroll-shadow, mobile drawer, smooth scroll anchor |
| F9 | Footer | Social links, copyright, back-to-top |
| F10 | SEO/ATS | JSON-LD Person, semantic HTML, meta OG/Twitter, sitemap, robots |

## Non-Functional Requirements
| Area | Target |
|------|--------|
| Performance | LCP < 2.5s, TBT < 200ms, CLS < 0.1; bundle JS gz < 130kB, CSS gz < 20kB |
| Accessibility | WCAG 2.1 AA: contrast, focus-visible, landmarks, skip-link, reduced-motion |
| Responsive | Mobile-first: 375 / 768 / 1024 / 1440 breakpoints fluid |
| Maintainability | Strict TS, ESLint + Prettier + Stylelint, component-driven, zero hardcoded colors |
| Security | CSP-ready, no inline scripts, form honeypot, sanitized output |
| Motion | 60fps, prefers-reduced-motion respected, spring easing (expo-out) |

## Out of Scope
- Backend / CMS / Database
- Blog / MDX
- i18n (single lang EN first)
- Auth / Dashboard

## Success Metrics
- Recruiter feedback "portfolio terlihat senior"
- Time-on-page > 60s
- Contact form conversion > 3%
- Lighthouse 100/100/100/100