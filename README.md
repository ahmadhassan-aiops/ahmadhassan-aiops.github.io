# Ahmad Hassan, AI Engineer Portfolio

**Live site: https://ahmadhassanrx.com**

Personal portfolio: projects, VerdictRx, credentials and teaching work, with links to my free learning platform, [AI with Ahmad](https://learn.ahmadhassanrx.com). It tells the same story as the platform with its own warm look: a terracotta and ivory palette (espresso in dark mode), Fraunces headings with Geist for reading, and a hexagon "AH" mark. The full design and copy rules are in `docs/PORTFOLIO-REDESIGN-PLAN.md`.

---

## Tech Stack

- [Astro](https://astro.build) 7: static site
- [Tailwind CSS](https://tailwindcss.com) v4: design tokens in `src/styles/global.css`, class recipes in `src/lib/ui.ts`
- [lucide](https://lucide.dev) and [simple-icons](https://simpleicons.org): icons and tool logos, inlined at build time
- Fraunces (headings), Geist (body) and Geist Mono (numbers only), all from Fontsource
- GitHub Actions: builds and deploys to GitHub Pages

## Project Structure

```
my-portfolio/
├── src/
│   ├── content/site.ts   # ALL copy and facts (keep in step with the platform's site.ts)
│   ├── components/       # Sections (Hero, About + Journey, Expertise, VerdictRx, Projects, OpenSource, Teaching, Milestones, Footer)
│   │   └── ui/           # Icon, BrandIcon, Logo, Section, ThemeToggle
│   ├── lib/              # Class recipes (button, badge, chip, card, iconTile), brand logo paths
│   ├── styles/global.css # Design tokens: terracotta and ivory, espresso dark theme, sage accent
│   ├── assets/ahmad.png  # Profile photo (WebP in the hero, JPEG for the social preview)
│   └── pages/index.astro # The page
├── public/               # favicon (the hexagon AH mark), CNAME
├── docs/                 # Redesign plan and QA screenshots
└── .github/workflows/    # GitHub Pages deploy workflow
```

## Editing content

Everything visitors read lives in `src/content/site.ts`. The facts (stats, dates, credentials, roadmap names and taglines) match the AI with Ahmad platform: when one changes, change the other too. The wording is the portfolio's own: first person, sentence case, British spelling, no em dashes and no result metrics on projects.

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
