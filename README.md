# Praba — Portfolio

A premium, dark, motion-forward personal portfolio built with React, TypeScript, Vite, Tailwind CSS, GSAP, Lenis, and Framer Motion.

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # preview the production build
npm run lint      # oxlint
```

## Project structure

```
src/
  components/   Hero, About, CurrentlyExploring, Projects, Skills, Contact, Nav, Footer, CanopyGlow
  data/         content.ts — all copy, project info, and skills live here
  hooks/        useSmoothScroll (Lenis + GSAP), useScrollReveal, useReducedMotion
  assets/       drop images here (see below)
```

## Images

Your portrait and both project screenshots are already wired in:

- `src/assets/portrait.jpg` — used in the About section
- `src/assets/villa-gading.jpg` / `src/assets/tari-kecak.jpg` — used in the
  Projects section (referenced from `src/data/content.ts`)

All three were resized and re-compressed from the originals (down to
roughly 100–160 KB each) to keep the page fast without a visible quality
loss. To swap any of them later, just replace the file in `src/assets/` and
keep the same filename, or update the import path in `content.ts` /
`About.tsx`.

**GitHub links** — each project's `github` field currently points to your
GitHub profile as a placeholder, since no repo URLs were provided. Update it
in `src/data/content.ts` to the specific repository URL once one exists for
that project.

## Design notes

- **Palette** — a dusk-over-canopy dark theme (`--color-ink`, `--color-panel`)
  with two accents: brass gold (`--color-gold`) and jungle foliage green
  (`--color-foliage`), rather than a single neon accent.
- **Type** — Fraunces (display/serif) for personality, Manrope for body copy,
  JetBrains Mono for labels and eyebrows.
- **Signature motif** — the `CanopyGlow` component, an ambient light field
  that drifts slowly toward the cursor across the whole page, evoking
  sunlight through a villa's canopy.
- **Motion** — Lenis drives smooth scrolling synced to GSAP's ticker;
  `useScrollReveal` handles scroll-triggered fades; Framer Motion covers
  hover micro-interactions. Everything respects `prefers-reduced-motion`.
