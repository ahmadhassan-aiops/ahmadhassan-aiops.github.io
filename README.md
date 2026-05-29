# Ahmad Hassan — AI/ML Portfolio

**Live site: https://ahmadhassan-aiops.github.io**

Personal portfolio showcasing AI/ML projects, teaching work, and professional background. Built with Astro and Tailwind CSS, deployed automatically to GitHub Pages.

---

## Tech Stack

- [Astro](https://astro.build) — static site framework
- [Tailwind CSS](https://tailwindcss.com) — utility-first styling
- GitHub Actions — CI/CD pipeline for automatic deployment

## Project Structure

```
my-portfolio/
├── src/
│   ├── components/       # Astro components (Hero, About, Projects, Skills, etc.)
│   └── pages/
│       └── index.astro   # Main page
├── public/               # Static assets (images, favicon)
├── .github/workflows/    # GitHub Actions deploy workflow
├── astro.config.mjs      # Astro configuration
└── tailwind.config.mjs   # Tailwind configuration
```

## Local Development

**Prerequisites:** Node.js v18 or higher

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

## Build & Preview

```bash
# Build for production
npm run build

# Preview the production build locally
npm run preview
```

## Deployment

The site deploys automatically to GitHub Pages on every push to the `main` branch via GitHub Actions. No manual steps needed.

**Workflow:** `.github/workflows/deploy.yml`
- Triggers on push to `main`
- Builds the Astro site
- Deploys the `dist/` output to GitHub Pages

## Sections

| Section | Description |
|---|---|
| Hero | Name, title, and quick links |
| About | Background, education, and bio |
| Skills | Technical skills and tools |
| Projects | Featured AI/ML projects with links |
| Achievements | Certifications and notable accomplishments |
| Teaching Roadmaps | Structured learning paths used in tutoring |

## Contact

- Email: ahmad.hds393@gmail.com
- WhatsApp: +92 316 5193665
- GitHub: [ahmadhassan-aiops](https://github.com/ahmadhassan-aiops)
