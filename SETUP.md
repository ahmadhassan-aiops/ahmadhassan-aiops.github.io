# Portfolio Setup Guide

## 1. Install Node.js

Download and install Node.js (LTS) from: https://nodejs.org

Verify install: `node --version` (should show v18 or higher)

## 2. Install dependencies

```bash
cd W:\my-portfolio
npm install
```

## 3. Run locally

```bash
npm run dev
```

Open http://localhost:4321 in your browser.

## 4. Update placeholders

Before deploying, update these values:

**`astro.config.mjs`**
- Change `YOUR_GITHUB_USERNAME` to your actual GitHub username

**`src/components/Projects.astro`**
- Change `YOUR_GITHUB_USERNAME` in the GitHub links to your actual username

**`src/components/Footer.astro`**
- Change `YOUR_GITHUB_USERNAME` and `YOUR_LINKEDIN` to your actual handles

## 5. Deploy to GitHub Pages

### Option A — Automatic (GitHub Actions)
1. Create a GitHub repo named `ahmadhassan-aiops.github.io`
2. Push this folder to that repo's `main` branch
3. Go to repo Settings → Pages → Source: "GitHub Actions"
4. GitHub Actions will auto-build and deploy on every push

### Option B — Manual
```bash
npm run build
# Then upload the `dist/` folder to GitHub Pages manually
```

## 6. Add your photo (optional)

Replace the "AH" monogram in `About.astro` with:
```html
<img src="/your-photo.jpg" alt="Ahmad Hassan" />
```
And place your photo in the `public/` folder.
