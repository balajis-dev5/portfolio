# Portfolio — Balaji S

Personal portfolio website. React 19 · Vite · TypeScript · Tailwind CSS v4 · Framer Motion · Lucide Icons.

## Features

- Premium, minimal design (Vercel/Linear-inspired) — light & dark mode with no-flash theme boot
- All content driven from one typed file: [`src/data/profile.ts`](src/data/profile.ts)
- Framer Motion scroll-reveal animations, branded loading screen
- Fully responsive, keyboard-accessible (skip link, focus rings, aria labels)
- SEO: meta description, Open Graph, canonical URL
- Testimonials section auto-hides until real quotes are added

## Quick start

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # type-check + production build to dist/
npm run preview   # preview the production build
```

## Before deploying — 5-minute checklist

1. Identity values are **already filled**: GitHub `balajis-dev5`, LinkedIn `linkedin.com/in/balaji-s-72245b244`, URL `https://balajis-dev.vercel.app`, company `RSoft Technologies Pvt Ltd`. If any of these ends up different (e.g. username taken), search-replace the old value across the repo.
2. `public/Balaji_S_Full_Stack_Developer.pdf` is already in place (generated from the resume suite). Add `og-image.png` (1200×630) when ready — see `../assets/ASSETS.md`.
3. Optionally replace testimonial placeholders in `profile.ts` (section stays hidden until you do).

## Deploy

**Vercel (recommended):** import the GitHub repo → framework auto-detected → deploy. Done.

**GitHub Pages:** set `base` in `vite.config.ts` to `'/portfolio/'`, build, and publish `dist/` with the `gh-pages` package or an Actions workflow.

## Structure

```
src/
├── App.tsx               # section composition
├── main.tsx              # entry
├── index.css             # Tailwind v4 theme + global styles
├── data/profile.ts       # ← ALL content lives here
├── hooks/useTheme.ts     # dark/light with localStorage + system fallback
└── components/           # one component per section + shared primitives
    ├── Section.tsx       # layout wrapper (kicker + title)
    ├── Reveal.tsx        # scroll-reveal animation primitive
    └── ...
```
