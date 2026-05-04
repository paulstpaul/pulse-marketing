# Pulse — Marketing Site: Design Decisions

## Token Summary (extracted from Pulse Design System)

### Color Tokens

| Token | Hex | Usage |
|---|---|---|
| `brand-50` | `#F4F8FC` | Lightest tint, hero backgrounds |
| `brand-100` | `#E4EEF7` | Subtle fills |
| `brand-200` | `#C8DDEE` | Borders on light surfaces |
| `brand-300` | `#9CC2DF` | Muted UI elements |
| `brand-400` | `#7FB3E6` | Dark-mode accent |
| `brand-500` | `#1D6FB8` | Interactive mid-blue |
| `brand-600` | `#155A99` | Hover state |
| `brand-700` | `#0B3D6F` | Primary accent (light mode) |
| `brand-800` | `#0A2F55` | Deep navy |
| `brand-900` | `#0F1A2B` | Near-black, hero text |
| `ink-0` | `#FFFFFF` | White |
| `ink-25` | `#FBFCFD` | Soft white surface |
| `ink-50` | `#F5F7FA` | Canvas / page background |
| `ink-100` | `#ECEFF4` | Subtle divider fills |
| `ink-200` | `#DCE2EA` | Borders |
| `ink-300` | `#B6BFCC` | Placeholder text |
| `ink-400` | `#7B8696` | Disabled / faint |
| `ink-500` | `#525E70` | Muted text |
| `ink-600` | `#37424F` | Secondary text |
| `ink-700` | `#202B38` | Primary dark text |
| `ink-800` | `#121A24` | Headings |
| `ink-900` | `#0A0F16` | Near-black |
| `status-critical` | `#C8322B` | High-priority alarm |
| `status-warning` | `#D88A1A` | Warning |
| `status-success` | `#2F8F5E` | Stable / OK |
| `status-info` | `#1D6FB8` | Informational |

### Typography

- **Display font**: Inter Tight — geometric sans, weights 400/500/600/700
- **Mono font**: JetBrains Mono — for numerics, code, tokens
- **Type scale**: 10-step from Overline (11px/0.10em tracking) to Display (64px/-0.02em)
- **Body default**: 15px / 1.55 line-height
- **Min interactive label**: 12px

### Spacing

4-point base grid. Steps: 2, 4, 6, 8, 12, 16, 20, 24, 32, 40, 56, 72px.

### Radius

| Token | Value |
|---|---|
| `r-xs` | 3px |
| `r-sm` | 5px |
| `r-md` | 8px |
| `r-lg` | 12px |
| `r-xl` | 16px |
| `r-pill` | 999px |

### Shadows

- **xs**: `0 1px 0 rgba(15,26,43,.04), 0 1px 2px rgba(15,26,43,.06)`
- **sm**: `0 1px 2px rgba(15,26,43,.06), 0 2px 6px rgba(15,26,43,.05)`
- **md**: `0 2px 4px rgba(15,26,43,.05), 0 8px 20px rgba(15,26,43,.07)`
- **lg**: `0 4px 8px rgba(15,26,43,.06), 0 24px 40px rgba(15,26,43,.10)`

---

## Inferred Decisions

### 1. Product positioning
**Decision**: Pulse is marketed as a design system for clinical software teams — not a SaaS product with pricing tiers.  
**Rationale**: The design guide frames it as a foundation/toolkit ("A design system for clinical software and connected devices"). No pricing section is included.

### 2. Hero image
**Decision**: Unsplash clinical/tech imagery (`hospital+technology`, `medical+interface`, `healthcare+data`).  
**Rationale**: Matches the "clinical and precise" tone. Avoiding generic stock doctors — using screens, data, environments.

### 3. Voice & tone
**Decision**: Serious, precise, authoritative. No exclamation marks in headlines. Short declarative sentences. Clinical terminology used naturally (clinician, EHR, vitals, bedside).  
**Rationale**: The design system explicitly targets "clinical and precise (cool blues, lots of whitespace)" tone.

### 4. No Pricing section
**Decision**: Omitted. Pulse is an open design system, not a tiered SaaS.  
**Rationale**: Guide implies a design system toolkit, not a commercial product with plans.

### 5. Social proof logos
**Decision**: Fictional but plausible hospital/health-tech SVG monochrome wordmarks.  
**Rationale**: No real logos available; the guide calls for "simple SVG monochrome placeholders styled in the brand's neutral token."

### 6. Feature set for Features section
**Decision**: Color system, Typography, Components, Accessibility (WCAG 2.1 AA), Clinical conventions (IEC 60601-1-8), Dark mode support.  
**Rationale**: Directly derived from what the design system ships.

### 7. Gallery imagery
**Decision**: Clinical interface screenshots simulated with Unsplash `medical+technology`, `hospital+computer`, `healthcare+software`.  
**Rationale**: Showcasing the design system in context of real clinical environments.

### 8. Animation strategy
**Decision**: Framer Motion used only for: section entrance (fade-up, once, 0.4s), stagger on card grids, subtle hero parallax. No looping or attention-grabbing animations.  
**Rationale**: Clinical/serious aesthetic — "calm, legible" per the guide. Medical contexts require restraint.

### 9. Dark mode
**Decision**: Not implemented on the marketing site (only toggle in the design system docs).  
**Rationale**: Marketing site targets light-mode-first. The dark-mode toggle is a design system feature to demonstrate, not a page-level requirement.

### 10. shadcn/ui components used
Accordion (FAQ), Button (CTAs), Card (features). All restyled to Pulse tokens via `globals.css` CSS variable overrides.
