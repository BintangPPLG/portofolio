# DESIGN.md — LUMINA Portfolio v2

## Design Philosophy
**Luminous by motion.** The visitor's first impression is a cinematic welcome splash — letters rise, particles orbit, gradient mesh glows — then the site unfolds with continuous spin, micro-interactions, and a face behind the work. Every pixel answers: *a real engineer built this, with care.*

Stack: same tokens (LUMINA). New layer: **ambient motion** — spinning tech logos, floating avatar, breathing blobs, aurora gradients — driving the portfolio beyond the static-template feel.

Inspirations: Linear, Vercel, Stripe, Framer, Arc Browser, Raycast, Apple, Linear Orbit.

---

## New Components (v2)

### 1. Welcome Splash (`components/Welcome.tsx`)
Full-screen overlay on first visit. sessionStorage flag prevents repeat.

```
┌────────────────────────────────────────────┐
│  [aurora gradient mesh + grid + orbits]    │
│                                            │
│            FLO'S PORTFOLIO                 │
│                                            │
│         W E L C O M E  (letter rise)       │
│                                            │
│         ─── expanding divider ───          │
│                                            │
│       Crafting digital experiences         │
│                                            │
│            ● ● ●  (loading dots)           │
│                                            │
│       click anywhere to skip               │
└────────────────────────────────────────────┘
```

- **Phases**: `in` (0–1.2s) → `hold` (1.2–2.1s) → `out` (2.1–2.7s).
- **Welcome chars** rise from below with stagger 40ms, expo-out.
- **Orbits** — 3 rotating rings emitting glowing particles.
- **Aurora** — radial mesh gradient animates opacity.
- **Click-to-skip** (no skip ≠ locked).
- **A11y**: `role="dialog"`, `aria-live="polite"`, `aria-label="Welcome"`. Reduced motion → instant fade.

### 2. Avatar (`ui/Avatar.tsx`)
Profile photo with:
- Animated glow ring (gradient + scale + rotate).
- Orbit ring with leading particles.
- Float bobbing (4s ease-in-out).
- Ring border (`ring-paper`) to stay visible on any surface.

Fallback: gradient + initials. Swap `/public/avatar.svg` with real photo (`/public/avatar.jpg`) — auto-detected by extension.

### 3. Tech Logo (`ui/TechLogo.tsx`) + Data (`data/techLogos.tsx`)
Each tech = inline SVG path + brand color + category. 22 techs. **MIT-licensed** Simple Icons simps.

- Continuous **spin** (12–20s linear, randomized per logo).
- **Float** bobbing (3–5s ease-in-out).
- Hover: scale 1.15 + glow ring color = tech hex.
- Border ring animation: gradient sweep rotates 360°.

Used in:
- **Hero**: orbit around avatar (8 logos on dashed circle).
- **Skills**: full grid of 22 logos, stagger reveal.
- **Projects / Experience**: tech pills with mini-logo + hover scale.

### 4. Section Backgrounds
Each section now has a radial gradient mesh (`opacity-40`, `pointer-events-none`):
- About: faint vertical primary tint.
- Skills: dual primary + accent radial.
- Projects: accent radial centered.
- Experience: primary radial centered.
- Contact: dual corners (primary + accent).

---

## Color System (unchanged base + new accent computations)
Tokens already in `index.css`. New utility `.bg-aurora` mixes 3 radial gradients.

---

## Motion System (v2 — expanded)

| Type | Duration | Easing | Use |
|------|----------|--------|-----|
| Micro | 120ms | easeOut | hover, tap |
| Card | 200ms | spring(0.3, 0.8) | lift, reveal |
| Modal/Drawer | 280ms | spring(0.35, 0.9) | enter/exit |
| Hero Reveal | 500ms | expo-out stagger 80ms | headline → sub → CTA → mockup |
| **Splash letter** | 600ms | expo-out, 40ms stagger | welcome word |
| **Splash out** | 600ms | expo-in | splash dismiss |
| **Logo spin** | 12–20s | linear infinite | continuous rotation |
| **Logo float** | 3–5s | easeInOut infinite | up/down bob |
| **Avatar bob** | 4s | easeInOut infinite | breathing |
| **Avatar glow** | 3s | easeInOut, rotate 8s | ring pulse |
| Stats | spring(200, 20) | 100ms stagger | counter |
| **Orbit ring** | 40–60s | linear infinite | ring rotate |
| Scroll Reveal | 600ms | expo-out | fade-up 24px, once |
| Page Transition | 350ms | expo-in-out | crossfade routes |

**Reduced motion** respected (`prefers-reduced-motion: reduce`): all CSS animations → 0.01ms; splash → instant fade; logo spin disabled when JS detects preference.

---

## Layout (v2)

- **Hero**: Avatar center + 8 orbiting tech logos on dashed ring + content below. `min-h-screen pt-24` so nav doesn't overlap.
- **About**: 3-col grid (1/3 avatar, 2/3 bio+values). Avatar vertical-stacked with available badge.
- **Skills**: top section = 22-logo wrap grid; bottom = 4-col categorized text chips.
- **Projects**: same as before, but tech pills now show logos + hovers.
- **Experience**: same timeline, tech chips now have logos.
- **Contact**: dual gradient mesh background.

---

## Components Reused (unchanged)
- `Button`, `Card`, `Icon`, `Badge`, `Tag`, `Input`, `SectionHeading`, `Navbar`, `Footer`.

---

## Performance Considerations

- **Tech SVGs** inline → reuses tree-shaken bundle, no extra requests.
- **Avatar** preloaded (above-fold) via `loading="eager"`.
- **Welcome** set to `display: none` when dismissed (no re-render cost).
- **Continuous animations** use `transform` + `opacity` (GPU-friendly).
- **Random per-logo durations** break sync, feel organic.
- **Stops-on-hover** counter-rotation could be added; currently we scale on hover only.

---

## Accessibility

- Welcome: `role="dialog"`, `aria-live="polite"`, `aria-label`, click-to-skip.
- Avatar: `alt="Profile photo"`.
- Tech logos: `aria-hidden="true"` (decorative), labels appear on hover (tooltip).
- `@media (prefers-reduced-motion: reduce)` cuts all animations to 0.01ms.
- Focus-visible rings preserved on all interactive elements.

---

## Future Ideas (not in v2)
- Real asset swap by drop-in `avatar.jpg` (no code change).
- Sound on splash (off by default).
- Cursor parallax for hero orbit.
- 3D tilt on Project cards (mouse-tracked).
- Locale-aware welcome word list.

---

*End of LUMINA v2 DESIGN.md — ambient motion edition.*
