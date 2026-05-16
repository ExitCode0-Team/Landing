# Kairos Landing Page

Marketing landing page for **Kairos** — _Apply less. Land more._ — the WhatsApp-first AI career agent built by Team Exitcode0 for the Cursor Colombo Buildathon 2026.

## Stack

- **Next.js 16** (App Router, TypeScript, Turbopack)
- **Tailwind CSS v4** with the Kairos flat design tokens defined in [`src/app/globals.css`](src/app/globals.css)
- **Framer Motion** for the hero stagger reveal, scroll-in timeline, and the animated WhatsApp demo
- **Outfit** type family via `next/font/google`
- Forced **light theme** to match the Kairos product surface

## Develop

```bash
npm install
npm run dev
```

Open [`http://localhost:3000`](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Structure

```
src/
  app/
    layout.tsx       # Outfit font, light theme, metadata
    page.tsx         # Section composition
    globals.css      # Design tokens, typography, section/button/card classes
  components/
    nav.tsx          # Sticky top nav
    hero.tsx         # Animated intro text + WhatsApp preview card
    how-it-works.tsx # 3-step scroll timeline
    features.tsx     # Tinted feature cards + comparison grid
    demo-moment.tsx  # Animated WhatsApp chat replay (the "wow moment")
    cta-banner.tsx   # Amber call-to-action section
    footer.tsx
    logo.tsx         # Kairos mark + WhatsApp glyph
```

## Design system reference

See the design summary in the Kairos product brief. Key tokens:

| Token | Hex |
|-------|-----|
| Background | `#FFFFFF` |
| Foreground | `#111827` |
| Primary | `#3B82F6` |
| Secondary | `#10B981` |
| Accent | `#F59E0B` |
| Muted | `#F3F4F6` |
| Border | `#E5E7EB` |

Animations use `cubic-bezier(0.16, 1, 0.3, 1)` (`--ease-kairos`) at 200–700ms.
