# yufaza.github.io

Personal CV &amp; portfolio of **M Yusuf Fajar Zaelani** — Platform Engineer &amp; Enterprise Application Developer.

A fast, responsive, single-page site built with **plain HTML, CSS, and JavaScript** — no build step, no
framework, no external dependencies. Hosted on **GitHub Pages** at <https://yufaza.github.io>.

Features: light/dark theme toggle, sticky navigation, scroll animations, a project screenshot gallery with
lightbox, and a one-click **Download CV** (PDF).

---

## 📁 Structure

```
.
├── index.html                 ← all page content
├── css/style.css              ← styling + light/dark theme
├── js/main.js                 ← theme toggle, menu, animations, lightbox
├── assets/
│   ├── img/                   ← profile photo + project screenshots (placeholders)
│   └── cv/M-Yusuf-Fajar-Zaelani-CV.pdf   ← the downloadable résumé
├── .nojekyll                  ← tells GitHub Pages to serve files as-is
└── package.json               ← metadata + local-preview script
```

---

## 🖼️ Replace the placeholder images

Every image in `assets/img/` is a gray placeholder. **Keep the same file name** and drop in your real
photo/screenshot — no code changes needed.

| File | Replace with |
|------|--------------|
| `profile-photo.png` | Your professional headshot (portrait) |
| `project-kin-application-center.png` | KIN Application Center (PWA) |
| `project-kin-chatbot.png` | KIN Chatbot Assistant (GLPI-connected) |
| `project-kinspire.png` | Kinspire (Kaizen improvement app) |
| `project-smartkin.png` | SmartKin |
| `project-sales-demand-planning.png` | Sales Demand Planning |
| `project-dashboard-metabase.png` | Centralized Dashboard (Metabase) |
| `project-authentication-sso.png` | Enterprise Authentication (Keycloak SSO) |
| `project-ai-knowledge-dify.png` | AI Knowledge Platform (Dify) |
| `project-procure-to-pay.png` | Procure-to-Pay web app |
| `project-e-canteen.png` | E-Canteen app |
| `project-otsuka-go.png` | Otsuka GO platform |

> Project screenshots look best at a **16:10 ratio** (e.g. 1200 × 750).

---

## ✏️ Update content

- **Text** (summary, experience, skills, awards): edit `index.html` — sections are clearly commented.
- **LinkedIn link**: search `index.html` for `linkedin.com/in/yufaza` and set your real URL.
- **Downloadable CV**: replace `assets/cv/M-Yusuf-Fajar-Zaelani-CV.pdf` (keep the name).
- **Theme color**: change `--accent` near the top of `css/style.css`.

---

## 👀 Preview locally

Open `index.html` directly, or run a local server:

```bash
npm start        # serves at http://localhost:3000 (via npx serve)
```

---

## 🚀 Deploy (GitHub Pages)

This repo is a plain static site served from the **`main` branch root**.

1. Commit and push to `main`.
2. In GitHub: **Settings → Pages → Build and deployment → Source: “Deploy from a branch”**,
   Branch: **`main`**, folder: **`/ (root)`**, then **Save**.
3. Live at <https://yufaza.github.io> within a minute.

> Migrated from a Create React App setup that served the `build` branch. After confirming the new site is
> live from `main`, the old `build` branch can be deleted.
