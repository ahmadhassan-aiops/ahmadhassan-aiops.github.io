# Ahmad Hassan, AI Engineer Portfolio

**Live site: https://ahmadhassanrx.com**

Personal portfolio: projects, VerdictRx, credentials and teaching work, with links to my free learning platform, [AI with Ahmad](https://learn.ahmadhassanrx.com). It shares the platform's structure and story but has its own look: a deep teal palette, Space Grotesk headings, a hexagon "AH" mark and a full-width, always-dark hero.

---

## Tech Stack

- [Astro](https://astro.build) 7: static site
- [Tailwind CSS](https://tailwindcss.com) v4: the platform's design tokens in `src/styles/global.css`
- [lucide](https://lucide.dev) and [simple-icons](https://simpleicons.org): icons and tool logos, inlined at build time
- Geist and Geist Mono (Fontsource): the platform's fonts
- GitHub Actions: builds and deploys to GitHub Pages

## Project Structure

```
my-portfolio/
├── src/
│   ├── content/site.ts   # ALL copy and facts (keep in step with the platform's site.ts)
│   ├── components/       # Sections (Hero, About, Skills, VerdictRx, Roadmaps, Projects, ...)
│   │   └── ui/           # Icon, BrandIcon, Logo, Section, ThemeToggle
│   ├── lib/              # Button/badge/card class recipes, brand logo paths
│   ├── styles/global.css # Design tokens (copied from the platform)
│   ├── assets/ahmad.png  # Profile photo (WebP in the hero, JPEG for the social preview)
│   └── pages/index.astro # The page
├── public/               # favicon (the hexagon AH mark), CNAME
└── .github/workflows/    # GitHub Pages deploy workflow
```

## Editing content

Everything visitors read lives in `src/content/site.ts`. The story, stats, timeline, credentials, VerdictRx wording and roadmap names mirror the AI with Ahmad platform's `src/content/site.ts`: when one changes, change the other too. Never use the em dash in visitor-facing text.

## Local Development

**Prerequisites:** Node.js 22 or higher

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # production build into dist/
npm run preview   # serve the build
```

## Deployment

Every push to `main` builds the site with GitHub Actions (Node 24) and deploys `dist/` to GitHub Pages. Workflow: `.github/workflows/deploy.yml`.

Custom domain: `ahmadhassanrx.com` (set in the repo's Settings → Pages, also kept in `public/CNAME`). DNS is on Cloudflare: four apex `A` records to GitHub Pages and `www` as a `CNAME` to `ahmadhassan-aiops.github.io`, all DNS only (grey cloud) so GitHub can issue the HTTPS certificate. The old `ahmadhassan-aiops.github.io` address redirects here.

## Contact

- Email: ahmad.hds393@gmail.com
- WhatsApp: +92 316 5193665
- GitHub: [ahmadhassan-aiops](https://github.com/ahmadhassan-aiops)
