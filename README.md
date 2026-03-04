# Clark Spine and Pain Relief

Bilingual (English / Spanish) marketing and patient-intake website for Clark Spine and Pain Relief — Dr. James Garabo, DC — Clark, NJ.

**Stack:** React 18 · Vite 6 · CSS Modules · React Router 6 · lucide-react

---

## Prerequisites

| Tool | Minimum Version | Check |
|---|---|---|
| Node.js | 18.x | `node -v` |
| npm | 9.x | `npm -v` |

> Node 18 is the minimum. Node 20+ also works. Vite 7 (not used here) would require Node 20+.

---

## Installation

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/chiroApp.git
cd chiroApp

# 2. Install dependencies
npm install

# 3. (Optional) Copy the environment variables template
cp .env.example .env.local
```

---

## Environment Variables

All env vars are optional for local development — the app runs without them. They are intended for production use (canonical URLs, contact info, etc.).

Edit `.env.local` after copying:

```env
VITE_SITE_URL=https://yourdomain.com
VITE_CONTACT_EMAIL=garabochiro@gmail.com
VITE_PHONE=9084979440
VITE_FAX=9084979442
VITE_ADDRESS=118 Westfield Avenue, Clark NJ 07066
```

> Variables must be prefixed with `VITE_` to be accessible in the browser. Never put secrets or API keys here.

---

## Development

```bash
npm run dev
```

Opens at **http://localhost:5173** with hot module replacement.

---

## Production Build

```bash
npm run build
```

Output goes to `dist/`. To preview the production build locally:

```bash
npm run preview
```

Opens at **http://localhost:4173**.

---

## Deployment (Netlify)

This project is pre-configured for Netlify:

| File | Purpose |
|---|---|
| `public/_redirects` | SPA fallback — all routes serve `index.html` |
| `public/_headers` | Security headers (CSP, HSTS, cache control) |

**Steps:**
1. Push the repo to GitHub
2. Log in to [netlify.com](https://netlify.com) → **Add new site** → **Import from Git**
3. Select the repo
4. Set build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **Deploy**
6. Add any environment variables under **Site settings → Environment variables**

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

---

## Project Structure

```
src/
├── components/        # Reusable layout and section components
├── context/           # Language context (EN/ES toggle)
├── i18n/              # en.js and es.js translation files
├── lib/               # sanitize.js utilities, icons registry
├── pages/             # One folder per route
├── index.css          # Global styles and CSS custom properties
└── App.jsx            # Router setup and ErrorBoundary
public/
├── _headers           # Netlify HTTP headers
└── _redirects         # Netlify SPA routing
```

For full architecture details, design decisions, and the beta backlog see [PROJECT.md](PROJECT.md).

---

## Security Notes

- All form inputs are sanitized client-side via `src/lib/sanitize.js`
- `console` and `debugger` statements are stripped from production builds
- Source maps are disabled in production
- If you add a form backend, **all inputs must be independently validated server-side** as well — never trust client-side validation alone

---

## License

Private — all rights reserved. Not licensed for redistribution.
