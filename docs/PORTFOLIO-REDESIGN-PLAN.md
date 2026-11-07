# ahmadhassanrx.com: portfolio polish and warm redesign plan

**Owner:** Ahmad Hassan · **Date:** 2026-11-08 · **Status:** Approved for implementation in a single run
**Implementer:** Claude Code, working in `W:\my-portfolio` (Astro 7, Tailwind v4)
**Save as:** `docs/PORTFOLIO-REDESIGN-PLAN.md`

---

## 0. Read this first (instructions for Claude Code)

1. Read `README.md`, `src/content/site.ts`, `src/styles/global.css` and `src/lib/ui.ts` before you change anything.
2. **Do the whole redesign in one run, without stopping for approval.** Ahmad has already made every decision (section 14). Follow the work order in section 12. Run `npm run build` after each step and fix any error before moving on. Ask Ahmad only if something is truly blocked; otherwise make the call that best fits this plan and note it in the final report.
3. **Content stays in `src/content/site.ts`.** Components never hold visitor-facing text.
4. **Tokens only.** Components use the semantic utilities from `global.css` (`bg-surface`, `text-fg-muted`, `text-brand` and so on). No raw hex values in components, no leftover teal values anywhere.
5. **Never use the em dash (—)** in any text: copy, comments, commit messages, alt text. Use commas, colons, periods or parentheses. An en dash is allowed only inside number and year ranges (`2024–2026`).
6. **Git commits:** the author is Ahmad only:
   ```
   git -c user.name="Ahmad Hassan" -c user.email="ahmad.hds393@gmail.com" commit -m "<precise message>"
   ```
   - Never add Claude as author or co-author.
   - Never add `Co-Authored-By`, "Generated with" or session lines.
   - Write one short, precise message per logical change (e.g. "Replace teal tokens with terracotta and ivory palette").
7. **Never invent facts.** Ahmad's decisions are in section 14. If anything else is unclear, ask him rather than guessing.
8. **Keep the facts in step** with the AI with Ahmad platform (`learn.ahmadhassanrx.com`): stats, dates, credentials and roadmap names. The wording and the look are the portfolio's own.

---

## 1. Goal

Make the portfolio feel **warm, welcoming and unmistakably professional**: every element polished, every sentence in one voice, every number presented the same way. It must look clearly different from the blue-and-white learning platform while telling the same story.

| # | Goal | How we'll know |
|---|---|---|
| G1 | **Warm, distinct identity** | Terracotta and ivory palette in light and dark; no teal left; nobody would confuse it with the platform |
| G2 | **Polished hierarchy** | Each section has one clear focal point; cards, chips and buttons come from one set of recipes |
| G3 | **One writing voice** | First person throughout, sentence-case headings, British spelling, no clichés, no em dashes (section 4) |
| G4 | **Professional data** | Every fact appears at most twice; numbers, dates and metrics share one format (section 5) |
| G5 | **Uses the whole page** | Full-width layout kept, but text lines stay readable and wide screens get richer grids, not stretched cards |
| G6 | **Shorter, calmer page** | The mobile page drops from about 27,000px to under 15,000px; desktop from about 13,000px to under 9,500px |

**Decisions already made by Ahmad**
- **Palette:** terracotta and ivory.
- **Hero:** light and warm; it follows the theme (it is no longer always dark).
- **Voice:** first person throughout.
- **Availability line:** "Open to collaboration and research".
- **Width:** keep the full-width page.

---

## 2. Audit of the current site

Issues found in the code and in screenshots at 1440px and 390px.

**Visual**
1. **Cold palette.** The site is teal on green-grey, and the light-mode sections alternate between `#fbfcfb` and `#f3f6f5`, which are nearly identical. The page looks flat and clinical rather than welcoming.
2. **The hero is overloaded.** It stacks:
   - an availability chip
   - a mono kicker
   - the gradient name
   - a typed terminal line (`~/ AI Engineer`)
   - a statement
   - an intro
   - a "Next goal" box
   - two CTAs
   - social icons
   - a scroll cue
   - stats
   - a marquee

   Too many competing elements, plus gimmicks (typing effect, pointer spotlight, photo tilt) that read as "developer template" rather than professional.
3. **Mono type overused.** There are mono eyebrows, kickers, years and labels. Mixed with Space Grotesk and Geist, that makes three voices in the type.
4. **Same-weight cards everywhere.** Projects (31), achievements (9), skills (4 × 12 chips) and credentials all use the same white card, so nothing stands out.
5. **The roadmaps section is mostly empty space.** The flagship card has a title and a button in a large box. The five supporting cards use the platform's blue, violet and pink accent bars, which clash with any warm palette and repeat the platform's look.
6. **Weak Hugging Face section.** It shows a username and vague badges ("Models & Spaces", "Open source") but no actual models or apps.
7. **Very long page.** It is about 13,300px on desktop and 27,000px on mobile, mostly because all 31 project cards and 48 skill chips render at once.

**Writing**

8. **Mixed voice.** "About Ahmad" (third person) sits over first-person paragraphs. Achievements are third-person fragments ("Top-performing graduate in…", "Pursuing the full…").
9. **Mixed spelling.** American ("optimization", "behavior", "visualizing", "neighborhood", "summarize") sits beside British ("specialisation", "personalised", "optimising").
10. **Mixed casing.**
    - Project titles and many chips use Title Case ("Feature Engineering", "Hypothesis Testing").
    - Others use sentence case ("Imbalanced data", "Deep learning").
    - Headings use sentence case.
11. **Clichés.**
    - "Projects that speak for themselves"
    - "Ready to build something remarkable?"
    - "A track record built through years of consistent…"
    - "Production-grade · Multi-domain" (for course and portfolio projects)

**Data**

12. **The same facts repeat 3 or 4 times.**
    - PharmD 3.9 cGPA: hero facts, About quick info, credentials grid, achievements and timeline.
    - The AIOps diploma A*: the same five places.
    - 1,500+ hours, 100+ students, 30+ projects and 5+ years: the hero stats and again as achievement cards.
13. **Inconsistent separators and formats.**
    - Separators: "3.9 / 4.0 cGPA" vs "3.9 cGPA"; "·" vs "," vs "→".
    - Year labels: "2022–now" vs "2020–now" vs "In progress".
14. **Conflicting dates.** Achievements say teaching on Superprof since **2022**; the timeline says **2024**. **Decided: 2024** (after Fiverr/Upwork). Fix every occurrence (the achievements cards currently say "2022–now").
15. **Claims to correct.**
    - "Superprof · Top tutor" becomes **"Superprof Ambassador"** (decided by Ahmad).
    - "Kubernetes (CKA/CKAD)" in Current focus could read as earned; change it to "Kubernetes (CKA/CKAD track)".
16. **Featured badge overused.** It's on 12 of 31 projects, so it no longer signals anything. Some descriptions carry result numbers (85%+ F1, >92% accuracy); **decided: remove result numbers from the portfolio** (they belong on the CV).

---

## 3. Design system

### 3.1 Palette: terracotta and ivory

Replace every value in `:root` and `.dark` in `src/styles/global.css`. Keep the semantic token names, so most components keep working. All text pairs below have been contrast-checked against their background.

**Brand scale (terracotta)**

| Token | Hex | Token | Hex |
|---|---|---|---|
| `--brand-50` | `#fdf5ef` | `--brand-500` | `#cf6a3e` |
| `--brand-100` | `#f8e6d9` | `--brand-600` | `#b4532a` |
| `--brand-200` | `#f0cbb3` | `--brand-700` | `#96421f` |
| `--brand-300` | `#edb592` | `--brand-800` | `#7a361c` |
| `--brand-400` | `#e8956c` | `--brand-900` | `#632e1b` |
| | | `--brand-950` | `#3a170c` |

**Semantic tokens**

| Token | Light | Dark (espresso) | Notes |
|---|---|---|---|
| `--bg` | `#fbf7f1` ivory | `#17120f` | Page |
| `--bg-subtle` | `#f4ede3` | `#1d1714` | Alternate sections; visibly different from `--bg` |
| `--surface` | `#ffffff` | `#231c18` | Cards |
| `--surface-raised` | `#ffffff` | `#2a221d` | Menus, sheet, popovers |
| `--surface-hover` | `#f7f1e8` | `#30271f` | Hover rows and chips |
| `--line` | `#e8dfd3` | `rgb(255 240 225 / 0.09)` | Borders |
| `--line-strong` | `#d6c9b8` | `rgb(255 240 225 / 0.17)` | Inputs, dashed "in progress" |
| `--fg` | `#1c1917` (16.4:1) | `#f3ece4` (15.9:1) | Main text |
| `--fg-muted` | `#57534e` (7.2:1) | `#c4b8ab` (9.6:1) | Secondary text |
| `--fg-subtle` | `#736a62` (5.0:1) | `#9c8f82` (5.9:1) | Captions, meta |
| `--brand` | `--brand-700` (6.4:1) | `--brand-400` (7.9:1) | Links, icons, eyebrows |
| `--brand-solid` | `--brand-600` | `--brand-600` | Primary button fill (white text 5.0:1); hover `--brand-700` (6.8:1) |
| `--brand-soft` | `--brand-100` | `rgb(232 149 108 / 0.12)` | Tinted backgrounds |
| `--on-brand` | `#ffffff` | `#ffffff` | |
| `--sage` (new) | `#4d6b57` (5.5:1) | `#9db8a4` (8.7:1) | Secondary accent, used sparingly: healthcare tags, "next goal", the success dot |
| `--sage-soft` (new) | `#e9efe9` | `rgb(157 184 164 / 0.12)` | |
| `--success` | `#3f7a4f` | `#86c79a` | |
| `--warning` | `#a15c07` | `#f2b84b` | |
| `--danger` | `#b42318` | `#f28b82` | |
| `--selection` | `--brand-200` | `--brand-800` | |

**Shadows** (light theme): tint them warm, not black.
```
--elev-sm: 0 1px 2px rgb(60 35 20 / 0.06);
--elev-md: 0 8px 24px -8px rgb(60 35 20 / 0.12);
--elev-brand: 0 16px 36px -14px rgb(180 83 42 / 0.35);
```
Dark theme: depth comes from surface steps and borders; keep `--elev-brand` only, at a lower strength.

**Also update:**
- `theme-color` in `Layout.astro`: `#fbf7f1` for light; add a second `<meta name="theme-color" media="(prefers-color-scheme: dark)" content="#17120f">`.
- `public/favicon.svg` and `ui/Logo.astro`: the hexagon gradient becomes `#cf6a3e` → `#7a361c`. The top node is `--brand-300`; the second node is `--sage`.
- The `text-gradient` utility: remove it (see 3.2).
- `hero-grid`: make it lighter and warmer (see 7.1).

**Roadmap accents:** stop using the platform's six colours on this site (see 7.6).

### 3.2 Typography

Warm and professional calls for a refined serif for headings with a clean sans for reading. This also separates the portfolio from the all-sans platform.

| Role | Font | Notes |
|---|---|---|
| Display and headings | **Fraunces Variable** (`@fontsource-variable/fraunces`) | Weight 500 to 600, `opsz` auto, SOFT axis 50, WONK 0. Warm but serious. |
| Body and UI | **Geist Variable** (keep) | 400 / 500 / 600 |
| Numbers and code | Geist Mono (keep) | **Only** for stats, years, metrics and code. Never for eyebrows or labels. |

- Remove Space Grotesk (package and imports).
- **Hero name:** solid `--fg` in Fraunces 600. No gradient text. A small terracotta full stop after the name is allowed ("Ahmad Hassan.").
- **Eyebrows:** Geist 600, 12px, uppercase, tracking 0.12em, colour `--brand`. Use one eyebrow per section and never mono.
- **Text measure:** body paragraphs at most `68ch`; intros at most `60ch`. The page stays full width; the text doesn't.
- **Type scale:** keep the existing scale tokens. Raise `--text-hero` to `clamp(3rem, 6.4vw, 6rem)` with line-height 1.0 and letter-spacing −0.02em (a serif needs less negative tracking). Raise h2-lg to 2.25rem.

### 3.3 Shape, spacing and texture

- **Radius:** controls 12px; cards 20px; feature panels and photo 28px; chips full pill.
- **Section rhythm:** 96px on mobile, 128px at `lg`. Alternate `--bg` / `--bg-subtle` as today, but now the difference is visible.
- **Texture:** one subtle paper-grain overlay on `body` (an inline SVG noise at 3–4% opacity, `pointer-events: none`), light theme only. No glows, no drifting blobs.
- **Dividers:** a 1px `--line`, or a short 40px terracotta rule under section eyebrows (one decorative device, used consistently).

### 3.4 Motion (calm and purposeful)

| Keep | Change | Remove |
|---|---|---|
| Section reveal (fade + 12px rise) | Stats count-up runs once and only in the stats band | Typing role line (`~/ AI Engineer`) |
| Card hover: border to `--brand/40`, `--elev-md`, lift 2px | Tools marquee: slower (70s), monochrome logos in `--fg-subtle`, pauses on hover | Pointer spotlight, photo 3D tilt, drifting glows |
| Logo hexagon rotate on hover | | Ping animation on the availability dot (make it a static sage dot) |

Respect `prefers-reduced-motion` (keep the existing rules).

### 3.5 Component recipes (`src/lib/ui.ts`)

Update the recipes and use them everywhere; no one-off class soups.

| Recipe | Spec |
|---|---|
| `button('primary')` | `bg-brand-solid text-on-brand hover:bg-brand-700`, `--elev-brand` on hover only |
| `button('secondary')` | `bg-surface border-line-strong text-fg hover:border-brand/50 hover:bg-surface-hover` |
| `button('ghost')` | as now |
| `button('inverse')` / `('inverse-outline')` | for the contact band (white on terracotta) |
| `badge('neutral' / 'brand' / 'sage' / 'outline' / 'dashed')` | Add a `sage` variant; remove the `success` badge from credentials (use `brand`) |
| `chip` (new) | Skill and tool chips: `h-8 rounded-full border border-line bg-surface px-3 text-small text-fg-muted`, logo `size-3.5 text-fg-subtle`. One recipe for Skills, VerdictRx stack and project tags |
| `card` | `rounded-[20px] border border-line bg-surface p-6 shadow-sm` |
| `card('feature')` (new) | Larger panel: `rounded-[28px] p-8 lg:p-10`, used for VerdictRx, the platform band and featured projects |
| `iconTile` (new) | `grid size-10 place-items-center rounded-xl bg-brand-soft text-brand`; this replaces 6 hand-written copies |

---

## 4. Writing style guide

Apply it to every string in `site.ts`. Claude Code rewrites copy to this guide; facts never change.

**Voice**
- First person singular throughout ("I build…", "My projects…").
- No third-person "Ahmad" except the page title, meta, alt text and the footer copyright.
- Confident, plain and specific. Show, don't boast: prefer a fact ("3.9 / 4.0 cGPA") to an adjective ("top-performing").

**Casing**
- **Headings, buttons, labels, chips and tags:** sentence case ("Feature engineering", "Hypothesis testing").
- **Project titles:** sentence case too ("Bank customer churn prediction").
- **Proper nouns keep their own casing:** PyTorch, scikit-learn, Hugging Face, AWS, PharmD, MLOps, AIOps, RAG, LLM, SQL, Power BI, VerdictRx.

**Spelling:** British English everywhere (optimise, behaviour, visualise, neighbourhood, summarise, analyse, programme for a course, "program" for software).

**Punctuation**
- No em dashes.
- No exclamation marks.
- Oxford comma: no (match the existing copy).
- Use "and", not "&", in running text. "&" is allowed only in short labels: nav, chips and section eyebrows.
- Separator in meta lines: " · " (middle dot with spaces). Never "→" or "|".

**Banned words:** remarkable, passionate, cutting-edge, world-class, speak for themselves, leverage, seamless, robust (unless literal), journey (except the section name), production-grade (unless it is true and specific).

**Project descriptions:** one sentence of 25 words or fewer, in the pattern *what it predicts or does* + *with what* + *for whom or why*. **No result numbers** (accuracy, F1 and so on) anywhere on the portfolio; Ahmad keeps those for his CV.
- Before: "Ensemble model (XGBoost + Random Forest) to predict which customers are likely to leave Beta Bank, achieving 85%+ F1-score."
- After: "Predicts which Beta Bank customers are likely to leave, using an XGBoost and random forest ensemble." 

**Formats**

| Thing | Format |
|---|---|
| Year | `2024` |
| Range | `2024–2026` (en dash, no spaces) |
| Ongoing | `2024–present` (not "now") |
| Planned | badge "Next goal" |
| Grade | "3.9 / 4.0 cGPA" (always with the scale); "Grade A*" |
| Big numbers | "1,500+" with a comma |
| Percentages | "92%" (no space) |
| Lists in a line | "PyTorch, TensorFlow and Keras" |

**Credentials wording**

| Item | Long form (once) | Short form (everywhere else) |
|---|---|---|
| Diploma | "RQF Level 6 Diploma in AIOps (EduQual), Al Nafi International College" | "Level 6 Diploma in AIOps" |
| PharmD | "PharmD, Quaid-i-Azam University" | "PharmD" |

In-progress items always carry "In progress" or "Track" and use the dashed style.

---

## 5. Data presentation rules

1. **Each fact appears at most twice:** once as a headline (hero or stats) and once in context (journey or credentials). The table below assigns a home to every fact.
2. **Numbers** use Geist Mono with `tabular-nums`, in `--fg`, with a muted label underneath. Every stat on the page uses the same component.
3. **No result metrics on projects.** Remove accuracy and F1 figures from every description (decided by Ahmad). Headline stats in the stats band stay.
4. **Dates** are right-aligned in mono `--fg-subtle` on cards, and in a left column on the timeline.
5. **Counts** in filter chips use mono in a small pill.
6. **Status:** earned = solid icon tile and brand badge; in progress = dashed border, neutral icon tile, "In progress" badge; next goal = sage tint and "Next goal" badge. Never colour-only.

| Fact | Headline home | Context home | Remove from |
|---|---|---|---|
| 5+ yrs, 1,500+ hrs, 100+ students, 30+ projects | Stats band (hero) | none | Achievements cards |
| PharmD 3.9 / 4.0 | Hero credential card | Journey timeline | About quick info, credentials grid duplicates, achievements |
| Level 6 Diploma A* | Hero credential card | Journey timeline | same as above |
| Next goal (Master's/PhD) | About (sage callout) | Journey (final step) | Hero box, credentials grid card |
| Kubernetes / security tracks | Milestones (in progress) | Expertise chip "(track)" | Credentials grid |
| Email / WhatsApp | Contact band, footer | none | About quick info |

---

## 6. Page structure and navigation

**New order**

1. **Hero** + stats band
2. **About** (story + quick facts + next goal)
3. **Journey** (timeline + education)
4. **Expertise** (was Skills)
5. **VerdictRx**
6. **Selected projects** (+ all projects)
7. **Open source** (Hugging Face, compact)
8. **Teaching** (AI with Ahmad + roadmaps)
9. **Milestones** (trimmed)
10. **Contact** band
11. **Footer**

**Nav (6 links):** About · Expertise · VerdictRx · Projects · Teaching · Contact. The right side keeps the theme toggle and the "AI with Ahmad" button, which becomes a secondary button with a graduation-cap icon. The primary nav CTA becomes **"Get in touch"** (links to `#contact`). Mobile sheet: the same links, both CTAs at the bottom.

The nav follows the theme (remove the "always dark over hero" logic). Background is `--bg` at 80% with blur; it gets a bottom border after scrolling.

---

## 7. Section specifications

All widths use `container-wide` (full width, max 1728px). Each spec says how the extra width is used.

### 7.1 Hero (light, warm)

- **Layout:** 12-column grid. Text in 7 columns, photo in 5. At `2xl`, text 6, gap 1, photo 5. Min height `min(100svh − 64px, 52rem)`.
- **Background:** `--bg` with a very faint warm dot grid (dots `--line`, 28px spacing, masked to fade at the edges) and one soft terracotta wash in the top right (radial, `--brand-100` at 60%, static).

**Left column, in this order**
1. **Availability chip:** static sage dot, "Open to collaboration and research", then "· Rawalpindi, Pakistan".
2. **Eyebrow:** "PharmD · AI engineer · Educator" (the 40px rule device, not mono). The tagline moves to the About pull quote.
3. **H1:** "Ahmad Hassan." in Fraunces.
4. **Role line** (static, replaces the typer): "AI engineer · Data scientist · MLOps engineer" in `text-h3 text-fg-muted`.
5. **Statement** (Fraunces 500, h2 size): "I build production AI for health and medicine, and teach the next generation of AI engineers."
6. **Intro**, one sentence (`--fg-muted`, max 60ch): "A PharmD graduate turned AI engineer, designing machine learning, GenAI and MLOps systems end to end."
7. **CTAs:**
   - **"See my work"** (primary, xl).
   - **"Visit AI with Ahmad"** as a secondary card-button with the icon tile and the sub-label "Free learning platform".
8. **Social row:** icon buttons only, no "Find me on" label. 44px, `--surface`, border `--line`, brand on hover.

**Right column**
- Photo, 4:5, radius 28px. Behind it, offset 16px down and right, a solid `--brand-100` rounded block (light) or `--brand-950` (dark) as a warm frame. No glow, no tilt.
- Below the photo, the two credential cards ("PharmD · 3.9 / 4.0 cGPA · Quaid-i-Azam University" and "Level 6 Diploma in AIOps · Grade A* · EduQual") with `iconTile`.

**Below the hero**
- **Stats band:** a full-width `--surface` panel, radius 28px, 4 columns with vertical `--line` dividers (2×2 on mobile). The value is Geist Mono 600 at h1-lg; the label is muted. Remove the icon tiles from the stats.
- **Tools marquee:** keep it, on `--bg-subtle`, with the slower speed and monochrome logos.

Remove: the "Next goal" box (it moves to About), the scroll cue and the typing caret.

### 7.2 About

- **Eyebrow:** "About" · **Title:** "A pharmacist who builds AI".
- **Layout:** 12 columns.
  - Story in 7 columns (max 68ch), as four paragraphs rewritten to first person, British spelling and no repetition of the stats band.
  - At `lg`, a 5-column sticky aside with:
    1. A quick-facts card with 4 rows: location; PharmD; Level 6 Diploma; Superprof tutor.
    2. A **sage "Next goal" callout**: an icon tile with `Dna` and the line "Next goal: a Master's and PhD in computational biology and bioinformatics, towards AI-assisted drug discovery and development."
    3. A "Current focus" card whose chips use the `chip` recipe, with the first one in brand.
- Add one pull quote after the story, in Fraunces italic, `--brand`, with a 2px left rule: *"From drug molecules to neural networks."* (Ahmad's tagline, decided). Because the tagline now lives here, change the hero eyebrow (7.1) to "PharmD · AI engineer · Educator".

### 7.3 Journey

- **Eyebrow:** "Journey" · **Title:** "From pharmacy to production AI".
- **Desktop:** a horizontal timeline across the full width at `xl`. Six steps on one line, with years in mono above the line and cards below. Below `xl`, a vertical timeline with a left rail (not alternating left and right; that wastes space and is hard to scan).
- The final "Next" step uses the sage dashed style.
- **"Education and credentials"** follows as a 2-column row (PharmD, Level 6 Diploma) of `card('feature')` items. Each has the long-form name, institution, grade badge and years. Remove the in-progress and next-goal cards here; they live in Milestones and About.
- Superprof tutoring starts in **2024** (decided). The other timeline years stay as they are.

### 7.4 Expertise (was Skills)

- **Eyebrow:** "Expertise" · **Title:** "What I build with" · **Intro:** "The stack I use and teach, from the first notebook to monitored systems in production."
- **Layout:** 4 columns at `xl` (one per group), 2 at `md`.
- Each group card has an icon tile, a title and a short one-line description, for example:
  - Data science and ML: "Turning raw data into models and decisions."
  - Deep learning and GenAI: "Neural networks, LLMs and retrieval systems."
  - DevOps and MLOps: "Shipping, scaling and monitoring models."
  - Cloud and security: "Running and protecting systems in the cloud."
- **Chips:** show the 8 most important per group, with a "+4 more" chip that expands inline (a `<details>` element; no JS needed). Use sentence case.
- Move certifications out of the chips: "CISSP (studying)" and "CCSP (studying)" go to Milestones. "Kubernetes (CKA/CKAD track)" stays in Current focus only.

### 7.5 VerdictRx (flagship product)

- **Eyebrow:** "Flagship product" · **Title:** "VerdictRx: clinical decision support" · **Intro:** keep the current one, tightened.
- **Panel:** `card('feature')` on `--surface` with a terracotta top border (4px) and a faint `--brand-50` wash in the top right.
- **Left 7 columns:**
  - badges: Ongoing · AI clinical decision support
  - name in Fraunces h1
  - the outcome paragraph
  - the "Details shared selectively" note with a lock icon
- **Right 5 columns:** "Tech stack" chips grouped into three short rows with tiny labels: Backend (FastAPI, PostgreSQL, Pytest, JWT auth), AI (RAG pipeline, ChromaDB, Groq LLM, RxNorm, OpenFDA), Frontend (Next.js, React, TypeScript, Tailwind CSS), plus Docker.
- **Bottom:** four principle tiles in one row, each with an icon tile, a bold label and a one-line explanation, for example:
  - Deterministic and auditable: "Every recommendation cites the guideline or rule behind it."
  - Production-grade: "Typed API, auth, containers and CI."
  - Tested: "Pytest coverage on clinical rules."
  - Regulation-aware: "Built with clinical safety and data protection in mind."

  These four lines are confirmed by Ahmad; use them as written.

### 7.6 Selected projects

- **Eyebrow:** "Projects" · **Title:** "Selected work" · **Intro:** "Over 30 projects across data analysis, machine learning, deep learning, generative AI and BI. Healthcare is where I started, so much of my work lives there."
- **Featured row (decided by Ahmad):** exactly these 6, in this order, as larger `card('feature')` items (3 columns at `lg`, 2 at `md`):

  | # | Project | Badges | Chips | Links |
  |---|---|---|---|---|
  | 1 | **VerdictRx** | Flagship product · Ongoing work | Clinical AI, LLMs, Healthcare | "Read more" (scrolls to `#verdictrx`); no code link |
  | 2 | **MedGuide: medical assistant RAG bot** | Healthcare | RAG, LLMs, Streamlit | Code |
  | 3 | **Nutritional bot** | Healthcare | RAG, LangChain, ChromaDB | Live app, Code |
  | 4 | **Stroke prediction** | Healthcare | scikit-learn, XGBoost, Imbalanced data | Code |
  | 5 | **Lung cancer prediction app** | Healthcare | XGBoost, Flask, Docker | Live app, Code |
  | 6 | **Alzheimer's disease detection** | Healthcare | Deep learning, CNN, TensorFlow | Code |

  Descriptions (use these; they are Ahmad's approved wording):
  1. "My flagship product: clinical decision support that helps physicians make the right prescribing choice by weighing the complete patient profile, with every recommendation backed by documented proof from clinical guidelines and rules."
  2. "An LLM assistant that explains a patient's prescribed medicines, nutrition and lifestyle plan against international clinical guidelines."
  3. "A nutrition-disorder specialist chatbot that answers from a medical reference library with retrieval-augmented generation."
  4. "Predicts stroke risk from patient health records, handling heavy class imbalance with resampling and boosted trees."
  5. "A multiclass lung cancer risk model served as a Dockerised Flask web app that generates a PDF report."
  6. "A deep learning image classifier that grades MRI brain scans across four stages of dementia."

  The VerdictRx card is the first and visually strongest (terracotta top border, "Flagship product" brand badge). Add a `featured: number` (order) field in `site.ts`, and a VerdictRx entry to the featured list that is not part of the filterable 31.
- **All projects:** below the featured row, the filter chips (keep the counts) and a **compact list layout**: a table-like grid at `lg` with columns Title · Category · Tools · Links. On mobile, use compact cards. Show 9 at first with a "Show all 31 projects" button; filtering always shows every match. The 5 featured projects also appear in this list.
- Remove the per-card "Featured" star badge and the old `featured: true` flags (the featured row replaces them).
- **No result numbers** anywhere (decided). Rewrite every `desc` per section 4 and strip the figures ("achieving 85%+ F1-score", ">92% accuracy" and similar).
- Add the live Space link to the jet engine RUL project (see 7.7).
- Keep the two text links at the bottom (all code on GitHub, live apps on Hugging Face) as secondary buttons.

### 7.7 Open source (Hugging Face)

- A compact two-column band on `--bg-subtle`. **Eyebrow:** "Open source" · **Title:** "Live apps on Hugging Face".
- **Left:** the intro (rewrite it around live apps people can try) and a "View my Hugging Face profile" button.
- **Right:** a list of Ahmad's **four public Spaces** (confirmed by Ahmad), each with a name, a one-line description, a "Space" badge and an arrow link:

  | Space (display name) | One-line description |
  |---|---|
  | Turbofan RUL prediction app | Predicts the remaining useful life of jet engines on NASA's turbofan data. |
  | Lung cancer prediction | Estimates lung cancer risk and explains the result. |
  | Email and calls forecasting | Forecasts daily email and call volumes from 27 features. |
  | Nutritional bot | A nutrition-disorder specialist chatbot built on RAG. |

- **Links:** check each Space's real URL on `https://huggingface.co/myhuggingface333` before writing it into `site.ts`.
  - The Nutritional bot Space is currently titled "My Hf Space" on Hugging Face (Ahmad will rename it later). Show it as "Nutritional bot" and link to its actual URL. Note that `site.ts` currently links `spaces/myhuggingface333/Nutritional_assistant`: verify which URL is live.
  - Use the same URLs for the "Live app" buttons in the project list. That adds a Live app link to the jet engine RUL project.
- Remove the vague "Models & Spaces" and "Open source" badges.

### 7.8 Teaching (AI with Ahmad and roadmaps)

- **Eyebrow:** "Teaching" · **Title:** "Six free roadmaps on AI with Ahmad" · **Intro:** "1,500+ hours of teaching turned into stage-by-stage paths, with the lessons, notebooks, projects and progress tracking included. Free for everyone."
- **Layout at `lg`:** a 5-column left panel and a 7-column right grid.
  - **Left panel:** `card('feature')` in **terracotta** (`bg-brand-solid`, white text) with the platform name, the pitch, "Explore the roadmaps" (inverse button) and "How to join" (inverse-outline).
  - **Right grid:** the six roadmaps as a 2×3 grid of cards, each with:
    - a mono number (01–06) in `--brand`
    - the title
    - a one-line description
    - an arrow icon

    AI Engineering gets a small "Flagship" badge.
- **Use the portfolio palette only.** Remove the platform's accent colours and the `accent` fields from `roadmaps.list` here.
- **Descriptions (decided): copy each roadmap's tagline from the AI with Ahmad platform** so both sites match word for word. Take them from the live roadmap pages (`https://learn.ahmadhassanrx.com/roadmaps/<slug>`) or the platform repo's `src/content/roadmaps/*.ts`. Store them in `roadmaps.list[].tagline` in `site.ts`. If a tagline uses an em dash, replace it with a comma or colon here and tell Ahmad so he can fix the platform too.

### 7.9 Milestones (was Achievements)

- **Eyebrow:** "Milestones" · **Title:** "Milestones and recognition" · No intro.
- **Trim to 6 cards** (3 columns at `lg`, 2 at `md`). Drop the 4 cards that duplicate the stats band (1,500+ hours, 100+ students, 30+ projects, 5+ years) and fold their substance into About.
- Keep:
  1. PharmD
  2. Level 6 Diploma
  3. Final year project defence (with "Watch the defence")
  4. Kubernetes certification track (in progress)
  5. Security certification track (in progress)
  6. Superprof Ambassador: meta line "Superprof Ambassador · Data science tutor since 2024" (decided; replaces "Top tutor")
- **Card anatomy:** icon tile · title · meta line (" · " separated) · one-sentence description in first person · up to 3 tags · date top-right in mono. In-progress cards use the dashed style and the "In progress" badge.
- Rewrite the descriptions to first person, for example: "I graduated with a 3.9 / 4.0 cGPA, building a base in research, clinical data and analytical thinking."

### 7.10 Contact band

- A full-width `card('feature')` in `bg-brand-solid` (terracotta) with a faint paper grain.
- **Eyebrow:** "Contact" · **Title:** "Let's work together" · **Text:** "Hiring an AI engineer, planning a research collaboration, or looking for guidance on your own path? I'd love to hear from you."
- **Buttons:** "Send an email" (inverse) · "WhatsApp" (inverse-outline) · "Visit AI with Ahmad" (inverse-outline).
- Below the buttons, small text in `on-brand/80`: the email address in mono, so people can copy it.

### 7.11 Footer

Keep the four columns. Update them:
- The Portfolio column lists the new nav.
- The availability pill uses the sage dot.
- The tagline reads "AI engineer · Data scientist · AI educator" (sentence case).

Add "Built with Astro" in `--fg-subtle` at bottom right, next to the theme toggle. The background is `--bg-subtle`.

---

## 8. Using the full width well

- **Grids grow with the screen:** projects 3 columns at `lg` and 4 at `2xl` (featured stays at 3, larger); milestones 3 → 3; expertise 2 → 4.
- **Text never stretches:** paragraphs at most 68ch, intros at most 60ch, even in full-width sections.
- **No lonely cards:** a grid row is either full or the last item spans. Check every breakpoint.
- **Left alignment** for section headings, except Contact (centred). Use the same heading component everywhere (`ui/Section.astro`).

---

## 9. Responsive and mobile

- Test widths: 390, 768, 1024, 1440, 1920.
- Hero on mobile: photo first (max 320px wide), then the text; hide the credential cards below the photo at `<sm` (they are in Journey).
- Stats 2×2. Expertise shows 6 chips per group before "+N more". Projects show 4 featured, then compact cards for the rest.
- Targets: page height under 15,000px at 390px wide and under 9,500px at 1440px (measure and report it).
- Touch targets at least 44px.

## 10. Accessibility

- Every text pair must pass WCAG AA (the token table is pre-checked; check any new pair).
- Visible focus ring: `3px` at `--brand-500` 50%.
- Keep the skip link, `aria-pressed` on filters and `aria-current` on nav.
- The expand controls (`<details>`, "Show all projects") are keyboard-operable and announce state.
- Photo alt "Ahmad Hassan"; decorative SVGs `aria-hidden`.

## 11. Performance and SEO

- Remove the Space Grotesk package; add Fraunces with the latin subset only.
- Lighthouse (mobile) targets: Performance ≥ 95, Accessibility 100, Best Practices ≥ 95, SEO 100.
- Update `meta.description` to the new voice. Regenerate the OG image if needed (keep the photo). Add JSON-LD `Person` (name, jobTitle, url, sameAs: LinkedIn, GitHub, Hugging Face).

---

## 12. Work order (one run, no approval stops)

Work through these steps in order. Build after each one (`npm run build`), fix errors, then commit with a precise message before starting the next. Commits are authored by Ahmad Hassan only (section 0).

1. **Foundations:** palette and dark tokens, Fraunces in and Space Grotesk out, shadows, radii, paper texture, `ui.ts` recipes, logo and favicon, `theme-color`. Remove teal values, gradient text and the hero gimmicks (typer, spotlight, tilt, drifting glows, ping).
   *Commit:* "Replace teal theme with terracotta and ivory design tokens"
2. **Content:** rewrite `site.ts` to sections 4, 5 and 14:
   - first person, British spelling, sentence case, no clichés, no em dashes
   - no result numbers, de-duplicated facts
   - the six featured projects, the four Hugging Face Spaces (verify URLs), roadmap taglines from the platform
   - new section titles and nav

   *Commit:* "Rewrite portfolio copy in one consistent voice"
3. **Shell and top of page:** nav (6 links, follows the theme), hero, stats band, marquee, About, Journey (sections 6, 7.1 to 7.3).
   *Commit:* "Redesign nav, hero, about and journey"
4. **Middle:** Expertise, VerdictRx, Selected projects with the compact list and "Show all", Open source (7.4 to 7.7).
   *Commit:* "Redesign expertise, VerdictRx, projects and Hugging Face sections"
5. **End:** Teaching, Milestones, Contact, Footer (7.8 to 7.11).
   *Commit:* "Redesign teaching, milestones, contact and footer"
6. **Polish:**
   - sections 8 to 11
   - the full checklist in section 13
   - fix every misaligned edge, uneven gap, orphaned grid item and contrast issue found in the screenshots

   *Commit:* "Polish layout, accessibility and metadata"

Do not push to GitHub (pushing deploys the live site). Leave that to Ahmad after he reviews.

## 13. Final QA checklist (run before the final report)

- [ ] `npm run build` passes with no warnings.
- [ ] Playwright screenshots of the full page at 390, 1440 and 1920px, light and dark, saved to `docs/screenshots/`. Look at them and fix what's wrong before reporting.
- [ ] Page height measured and reported (targets in section 9).
- [ ] No em dash anywhere in `src` (`grep -rn "—" src`).
- [ ] No raw hex in components (`grep -rnE "#[0-9a-fA-F]{6}" src/components`).
- [ ] Keyboard pass: nav, mobile sheet, project filters, "Show all", expandable chips.
- [ ] Reduced-motion pass.
- [ ] Commits authored by Ahmad Hassan only, with precise messages and no Claude attribution (`git log --format='%an <%ae> | %s%n%b' -8`).
- [ ] **Final report to Ahmad:**
  - what changed, section by section
  - any judgement calls made
  - page heights before and after
  - the screenshot folder
  - the exact command to preview locally (`npm run dev`)
  - a reminder that nothing is pushed yet

## 14. Decisions confirmed by Ahmad (2026-11-08)

All earlier `CONFIRM` items are settled. Follow these exactly:

| # | Topic | Decision | Where it applies |
|---|---|---|---|
| 1 | Superprof start year | **2024** (not 2022) | Timeline, Milestones, About, any "2022–now" |
| 2 | "Top tutor" claim | Replace with **"Superprof Ambassador"** | Milestones, About quick facts |
| 3 | Featured projects | **VerdictRx, MedGuide, Nutritional bot, Stroke prediction, Lung cancer prediction app, Alzheimer's disease detection** (in that order) | 7.6 |
| 4 | Result metrics | **Remove all result numbers** from the portfolio (true, but kept for the CV) | 7.6, every project `desc` |
| 5 | Hugging Face | List the **four public Spaces**: Turbofan RUL prediction app, Lung cancer prediction, Email and calls forecasting, Nutritional bot (Space currently titled "My Hf Space") | 7.7, project Live app links |
| 6 | Roadmap descriptions | **Copy the taglines from the AI with Ahmad platform** | 7.8 |
| 7 | VerdictRx principle lines | The four drafted lines are **accurate; use them as written** | 7.5 |
| 8 | About pull quote | Use the tagline **"From drug molecules to neural networks."** (hero eyebrow changes accordingly) | 7.1, 7.2 |

Earlier decisions: terracotta and ivory palette; light, warm hero that follows the theme; first-person voice; availability "Open to collaboration and research"; full-width page.

---

## Appendix: prompt to start Claude Code

> Read `docs/PORTFOLIO-REDESIGN-PLAN.md` in full, then `README.md` and `src/content/site.ts`. Implement the **whole plan in one run**, following the work order in section 12 and every rule in section 0. Don't stop for my approval between steps: build after each step, fix errors, and commit with a precise message authored by Ahmad Hassan only (no Claude author, co-author or attribution lines). Never use the em dash. Don't push to GitHub. When everything is done, run the final QA checklist in section 13, save screenshots to `docs/screenshots/`, and give me the final report.
