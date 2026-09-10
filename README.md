# Codeoura

Corporate site for Codeoura — an engineering-first software studio. Bilingual
(English / Arabic with native RTL), statically generated, dark by default.

## Stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 15 (App Router), React 19 |
| Language | TypeScript, `strict` |
| Styling | Tailwind CSS v4 (CSS-first `@theme` tokens, no config file) |
| Motion | `motion` (Framer Motion v12) |
| i18n | `next-intl` — routed `/en` and `/ar` segments |
| Fonts | Geist (Latin) + IBM Plex Sans Arabic, self-hosted via `next/font` |
| Forms | `react-hook-form` + `zod`, submitted through a Server Action |
| Email | Resend |

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in RESEND_API_KEY
npm run dev                  # http://localhost:9002
```

| Script | Purpose |
| --- | --- |
| `npm run dev` | Dev server on port 9002 (Turbopack) |
| `npm run build` | Production build |
| `npm run lint` | ESLint (flat config) |
| `npm run typecheck` | `tsc --noEmit` |

Build errors are **not** ignored. If `tsc` or ESLint fails, the build fails —
this is deliberate.

## Architecture

```
src/
├── app/[locale]/          Routes. Every page is server-rendered and prerendered.
├── components/
│   ├── primitives/        Design system: Section, Container, GlowCard, Reveal, Marquee…
│   ├── sections/          Homepage blocks, one file each
│   ├── portfolio/         Project grid, filters, cards, quick-look dialog
│   ├── layout/            Header, Footer, MobileNav, LocaleSwitcher, ThemeToggle
│   └── ui/                Pruned shadcn/Radix primitives
├── content/               ← Typed data. The single source of truth.
├── messages/              ← Translated UI chrome (en.json / ar.json)
├── i18n/                  next-intl routing, request config, navigation helpers
├── lib/                   utils, motion presets, validation schemas, rate limiter
└── actions/               Server Actions
```

### Where content lives

Two places, split by kind:

- **`src/content/*.ts`** — data with structure: projects, services, the tech
  stack, company facts. Localized strings are inline as
  `{ en: '…', ar: '…' }`, typed as `Localized<T>`. Adding a locale to
  `routing.ts` makes every incomplete entry a **compile error** — that is the
  point.
- **`src/messages/*.json`** — UI chrome: labels, buttons, form copy.

Components hold no content. Adding a project is one object in
`src/content/projects.ts`; nothing in `components/` changes.

### Conventions worth knowing

- **RTL is structural.** Use logical utilities (`ms-`, `me-`, `ps-`, `pe-`,
  `start-`, `end-`) — never `ml-`/`mr-`/`left-`/`right-`. Motion presets read
  `--motion-dir`, which flips to `-1` under `[dir="rtl"]`, so slide-ins always
  travel inward.
- **Server by default.** `'use client'` belongs only on interactive leaves.
  Today that is `Header`, `MobileNav`, `LocaleSwitcher`, `ThemeToggle`,
  `ProjectGrid`/`ProjectCard`, `ContactForm` and `Reveal`.
- **Animate `opacity`, `transform`, `filter` only.** Everything else forces
  layout. `Reveal` never gates content behind an exit animation, so a throttled
  tab can never strand a section at zero opacity.
- **Colors are OKLCH tokens** in `globals.css`. Define every token on bare
  `:root`, override only what changes under `.dark`.
- **Orange (`--accent`) is reserved for primary CTAs.** If it appears anywhere
  else, it stops meaning "act here".

## Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `RESEND_API_KEY` | yes, in production | Sends contact inquiries |
| `CONTACT_INBOX` | no | Destination inbox (defaults to `company.email`) |
| `CONTACT_FROM` | no | Verified sender. Needs a domain verified in Resend |

Without `RESEND_API_KEY` the contact form returns the error state and logs
server-side; it never fails silently.

## Outstanding

- [ ] Real contact details and social URLs in `src/content/company.ts` — the
      placeholders there are the only invented values in the content layer.
- [ ] `RESEND_API_KEY` and a verified sending domain.
- [ ] Production screenshots for the portfolio. Cards currently render a
      generated gradient keyed to each project's `cover` stops; swapping in a
      real `<Image>` does not change the surrounding layout.
- [ ] Real metrics per project (`Project.metrics`), left empty on purpose —
      invented figures on a corporate site are a liability.
