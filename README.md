# codeductor.com

Official website for **Codeductor LLC**.

This repo is intentionally:
- **Static-deployable** (GitHub Pages) via Next.js static export
- **PR-first** (feature branches → protected `main`)
- **Maintainable** (simple architecture, minimal dependencies)

## What this site is

A clean, fast landing page that explains what Codeductor is, what we do, and where to go next (portfolio, contact).

## Tech

- Next.js (App Router) + TypeScript
- CSS (no Tailwind)
- Radix UI primitives (accessibility-first building blocks)

## Local development

```bash
npm ci
npm run dev
```

## Build (static export)

```bash
npm run build
```

Output is generated to `out/`.

To preview the static export locally:

```bash
npm run serve
```

## Release / deploy

This project is intended to deploy from **tags/releases** (not every push).

## Notes

- Custom domain is `codeductor.com` (DNS configured separately).
