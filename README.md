# Pulse — Medical Device Design System
### Marketing website

A production-ready marketing site for the **Pulse** clinical design system,
built with Next.js 14 (App Router), TypeScript, Tailwind CSS, shadcn/ui,
and Framer Motion.

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 + CSS variables |
| Primitives | shadcn/ui (Accordion, Button, Slot) |
| Animation | Framer Motion v11 |
| Fonts | Inter Tight + JetBrains Mono (Google Fonts) |
| Images | Unsplash (next/image with remote patterns) |
| Deploy | Vercel (zero-config) |

---

## Setup

```bash
# Clone and install
git clone <repo>
cd pulse-marketing
npm install

# Dev server
npm run dev
# → http://localhost:3000

# Production build
npm run build
npm start

# Lint
npm run lint
```

---

## Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deploy
vercel --prod
```

No environment variables are required. `next.config.js` whitelists
`images.unsplash.com` and `picsum.photos` for `next/image`.

---

## Project structure

```
/
├── app/
│   ├── globals.css          # CSS variable theme + Tailwind base
│   ├── layout.tsx           # Root layout, font loading, metadata
│   └── page.tsx             # Single-page composition
│
├── components/
│   ├── sections/
│   │   ├── Header.tsx       # Sticky nav with glass effect
│   │   ├── Hero.tsx         # Full-height hero with browser mockup
│   │   ├── SocialProof.tsx  # Logo strip
│   │   ├── ColorSection.tsx # Interactive color ramp (click to copy)
│   │   ├── TypographySection.tsx  # Font pairing + type scale table
│   │   ├── Features.tsx     # 6-card feature grid
│   │   ├── About.tsx        # Two-column with image
│   │   ├── HowItWorks.tsx   # 4-step process with code blocks
│   │   ├── Gallery.tsx      # 7-image bento grid
│   │   ├── Testimonials.tsx # 3 quotes on dark background
│   │   ├── FAQ.tsx          # 7-item accordion
│   │   ├── FinalCTA.tsx     # CTA banner with trust indicators
│   │   └── Footer.tsx       # Full footer with nav columns
│   │
│   ├── shared/
│   │   ├── Logo.tsx         # Pulse logomark + wordmark
│   │   └── PulseIcon.tsx    # 1.5px stroked SVG icon set
│   │
│   └── ui/
│       ├── button.tsx       # CVA-powered button variants
│       └── accordion.tsx    # Radix accordion (FAQ)
│
├── lib/
│   └── utils.ts             # cn() helper (clsx + tailwind-merge)
│
├── tailwind.config.ts       # Pulse tokens → Tailwind theme
├── DECISIONS.md             # Inferred design decisions
└── README.md                # This file
```

---

## Design token reference

All tokens live in `tailwind.config.ts` and are mirrored as CSS variables in
`app/globals.css`. The Tailwind color utilities map directly:

| Utility | Token |
|---|---|
| `bg-brand-700` | `#0B3D6F` (primary accent) |
| `bg-brand-50` | `#F4F8FC` (accent tint) |
| `text-ink-800` | `#121A24` (heading text) |
| `text-ink-500` | `#525E70` (body muted) |
| `border-ink-200` | `#DCE2EA` (standard border) |
| `bg-status-critical` | `#C8322B` (alarm red) |
| `bg-status-success` | `#2F8F5E` (stable green) |

Font utilities: `font-sans` → Inter Tight, `font-mono` → JetBrains Mono.

---

## Lighthouse targets

| Metric | Target |
|---|---|
| Performance | 95+ |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

Images use `next/image` with explicit `sizes`, `alt`, and `loading="lazy"`.
Fonts use `display: swap`. No layout shift from font loading.

---

## Sections

| # | Section | Anchor |
|---|---|---|
| 1 | Sticky header + nav | — |
| 2 | Hero | `#hero` |
| 3 | Social proof strip | `#social-proof` |
| 4 | Color system | `#color` |
| 5 | Typography | `#typography` |
| 6 | Features / Components | `#components` |
| 7 | About / Story | `#about` |
| 8 | How it works | `#patterns` |
| 9 | Gallery / Showcase | `#gallery` |
| 10 | Testimonials | `#testimonials` |
| 11 | FAQ | `#faq` |
| 12 | Final CTA | `#get-started` |
| 13 | Footer | — |
