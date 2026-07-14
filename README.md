# LOOM — Cosmic (Next.js)

The LOOM AI-powered HR marketing site, built with **Next.js 14 (App Router)** + **TypeScript** and a hand-written cosmic design system in plain CSS. This is a faithful port of the `LOOM Cosmic.html` design — same glowing thread-ball "planet" hero, starfield, glassmorphic dark UI and animated interactions — restructured into idiomatic React components.

## Quick start

```bash
cd loom-app
npm install
npm run dev
```

Open <http://localhost:3000>.

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # next lint
```
aa
> Requires Node.js 18.17+.

## Project structure

```
loom-app/
├─ app/
│  ├─ globals.css        # the full cosmic design system (CSS variables, components, responsive)
│  ├─ layout.tsx         # root layout, <html>, Inter via next/font, metadata
│  └─ page.tsx           # composes all sections
├─ components/
│  ├─ Nav.tsx            # sticky glass nav + mobile menu        (client)
│  ├─ Hero.tsx           # headline + glowing LOOM planet + floating cards
│  ├─ Starfield.tsx      # animated star layer                    (client)
│  ├─ Logos.tsx
│  ├─ Showcase.tsx       # platform section
│  ├─ DashboardMock.tsx  # dark dashboard UI mock
│  ├─ Features.tsx       # 11 modules (data-driven)
│  ├─ AIAssistant.tsx
│  ├─ Chat.tsx           # self-typing LLM chat demo              (client)
│  ├─ Why.tsx
│  ├─ Stats.tsx
│  ├─ Counter.tsx        # animated count-up on scroll            (client)
│  ├─ Timeline.tsx       # employee lifecycle
│  ├─ Testimonials.tsx
│  ├─ Pricing.tsx
│  ├─ FAQ.tsx            # accordion                              (client)
│  ├─ Forms.tsx          # demo / contact tabbed form + success   (client)
│  ├─ CTA.tsx
│  ├─ Footer.tsx
│  ├─ Icon.tsx           # inline SVG icon set
│  ├─ LoomMark.tsx       # woven thread-ball logo
│  └─ ScrollReveal.tsx   # fade-in-on-scroll observer + fail-safe (client)
├─ lib/
│  └─ data.ts            # all copy/content: features, FAQs, pricing, chat script, etc.
├─ package.json
├─ tsconfig.json
└─ next.config.mjs
```

## Where to edit things

- **Copy & content** — almost everything (features, why, timeline, FAQs, testimonials, stats, chat script, nav) lives in `lib/data.ts`.
- **Colors, type, spacing** — CSS custom properties at the top of `app/globals.css` (`--purple`, `--cyan`, `--bg`, radii, shadows…).
- **Pricing plans** — `components/Pricing.tsx`.
- **Page order** — `app/page.tsx`.

## Design notes

- **Brand colors**: Electric Purple `#7F00FF`, with cyan (`#34E5D0`) and amber (`#FFB25E`) accents on a deep-space navy/black canvas.
- **Typography**: Inter, loaded with `next/font/google` (self-hosted at build, no layout shift).
- **The hero "planet"** is pure CSS (radial gradients + box-shadow glow) with a slowly rotating SVG thread overlay echoing the logo — no image assets required.
- **Interactions**: scroll reveals, count-up stats, the typing AI chat, FAQ accordion, and the form all use `IntersectionObserver` / React state, each with a fail-safe so content is never stuck hidden.
- **Accessibility**: respects `prefers-reduced-motion` (animations disabled), semantic landmarks, focus-visible inputs.

## Next steps you might want

- Wire the contact form to a real endpoint / Resend / your CRM (currently client-side only).
- Add real product screenshots in place of the CSS dashboard mock.
- Split routes (e.g. `/pricing`, `/security`) if this grows beyond a single landing page.
