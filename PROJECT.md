# Clark Spine and Pain Relief — Website Project

**Package:** `clarkspine-redesign`  
**Version:** `0.1.0-alpha.1`  
**Current Status:** Alpha 1 — tagged `v0.1.0-alpha.1`  
**Stack:** React 18 + Vite 6 + CSS Modules  
**Last Updated:** March 4, 2026

---

## 1. Project Overview

A bilingual (English / Spanish) marketing and patient-intake website for **Clark Spine and Pain Relief** — the chiropractic practice of **Dr. James Garabo, DC**, located at 118 Westfield Avenue, Suites 3 & 4, Clark, NJ 07066.

Dr. Garabo is a Palmer College of Chiropractic graduate, Trauma Qualified chiropractor, and "Inner Circle" provider for Hackensack Meridian employees. The practice specializes in motor vehicle accident (MVA) injuries and has operated since 1991.

---

## 2. Tech Stack

| Layer | Choice | Notes |
|---|---|---|
| Framework | React 18.3.1 | Functional components, hooks only |
| Build tool | Vite 6.4.1 | Upgraded from 5 to patch CVE-2025-31125 |
| Routing | React Router DOM 6.23.1 | Client-side SPA routing |
| Icons | lucide-react 0.576.0 | Replaced react-icons (5 MB removed) |
| Styling | CSS Modules + global `index.css` | No CSS-in-JS, no Tailwind |
| i18n | Custom `useLanguage()` hook | `en.js` + `es.js` translation files |
| Linting | ESLint with `react/no-danger`, `no-console` | `.eslintrc.cjs` |
| Node | 18.x | Vite 7 requires Node 20+, skipped |

**Path alias:** `@` → `src/` (configured in `vite.config.js` and `jsconfig.json`)

---

## 3. Pages

| Route | Component | Description |
|---|---|---|
| `/` | `HomePage` | Hero, services preview, steps, testimonials, CTA, insurance section |
| `/about` | `AboutPage` | Dr. Garabo bio, credentials, practice history |
| `/services` | `ServicesPage` | Full service list including MVA as featured service |
| `/auto-accidents` | `AutoAccidentsPage` | Dedicated MVA/trauma page |
| `/patient-center` | `PatientCenterPage` | Patient intake forms, FAQ, insurance info |
| `/contact` | `ContactPage` | Office info, hours, Google Maps embed, contact form |
| `*` | `NotFoundPage` | 404 fallback |

---

## 4. Directory Structure

```
src/
├── assets/
│   ├── images/dr-garabo.jpg
│   └── logo.svg
├── components/
│   ├── ErrorBoundary/        ← class component, wraps entire app
│   ├── layout/
│   │   ├── Navbar/           ← Phone, Menu, X icons (lucide)
│   │   └── Footer/           ← Phone, Printer, Mail, MapPin icons
│   └── sections/
│       ├── CtaBanner/        ← call-to-action banner with phone
│       ├── DrPreview/
│       ├── Hero/             ← animated eyebrow pill, stats bar
│       ├── InsuranceSection/
│       ├── ServicesPreview/
│       ├── StepsSection/
│       └── TestimonialsSection/
├── context/
│   └── LanguageContext.jsx   ← useLanguage() → { t, lang, toggle }
├── i18n/
│   ├── en.js                 ← English translations
│   ├── es.js                 ← Spanish translations
│   └── index.js
├── lib/
│   ├── icons.js              ← shared ICON_MAP for lucide icons
│   └── sanitize.js           ← all input sanitization & validation
├── pages/
│   ├── About/
│   ├── AutoAccidents/
│   ├── Contact/
│   ├── Home/
│   ├── NotFound/
│   ├── PatientCenter/
│   └── Services/
├── App.jsx
├── index.css                 ← CSS custom properties, global styles, form validation states
└── main.jsx
public/
├── _headers                  ← Netlify: CSP, HSTS, cache headers
└── _redirects                ← Netlify: SPA fallback + HTTPS redirect
```

Each component/page directory follows the barrel pattern:
```
ComponentName/
├── ComponentName.jsx
├── ComponentName.module.css
└── index.js                  ← export { default } from './ComponentName'
```

---

## 5. i18n System

Language is stored in React context (`LanguageContext.jsx`). The `useLanguage()` hook returns:
- `t` — the full translation object for the current language
- `lang` — `'en'` or `'es'`
- `toggle` — function to switch languages

All user-visible strings live in `src/i18n/en.js` and `src/i18n/es.js`. No external i18n library is used.

---

## 6. Contact Form — Detailed Spec

The contact form (`src/pages/Contact/ContactPage.jsx`) is the most complex component in the project. Here is its full behavior:

### Fields

| Field | Type | Required | Limit | Validation |
|---|---|---|---|---|
| First Name | `text` | Yes | 50 chars | Letters, spaces, hyphens, apostrophes, accented chars only. No numbers or symbols. |
| Last Name | `text` | Yes | 50 chars | Same as First Name |
| Email | `email` | Yes | 254 chars | RFC 5322 subset regex |
| Phone | `tel` | Yes | 10 digits (14 chars formatted) | Exactly 10 US digits |
| Subject | `text` | No | 120 chars | No validation |
| Message | `textarea` | Yes | 1500 chars | At least 10 characters |

### Phone Formatting
As the user types, digits are extracted and reformatted in real time:
```
9            → (9
908          → (908
9084         → (908) 4
9084979      → (908) 497-9
9084979440   → (908) 497-9440
```
Non-digits are rejected at the keystroke level. Max 10 digits enforced.

### Name Field Rules
- Numbers are physically blocked from being typed (filtered in `onChange`)
- Special characters except `-`, `'`, and spaces are blocked
- Handles international names: O'Brien, Smith-Jones, García-López, D'Angelo
- `autoComplete="given-name"` / `autoComplete="family-name"` for browser autofill

### Live Validation Behavior
- **On blur** — the field is marked as "touched" and validated immediately
- **On change** — if the field has already been touched, it re-validates on every keystroke
- **On submit** — all fields are marked as touched and validated before submission
- **Clean initial state** — no red/green borders on page load (only activates after interaction)

### Visual States (CSS via `aria-invalid`)
- `aria-invalid="true"` → red border + red glow
- `aria-invalid="false"` (non-empty, touched) → green border + green glow
- Untouched fields → no border styling

### Rate Limiting
One submission per 60 seconds per browser session, tracked via `localStorage`. The wait message is bilingual.

### i18n Errors
All validation error messages are sourced from the translation file (`c.errors.*`) and automatically switch language when the user toggles EN/ES.

---

## 7. Security

### Input Sanitization (`src/lib/sanitize.js`)
| Function | Purpose |
|---|---|
| `sanitizeText(value)` | Strips HTML tags, `<>"'\``, `javascript:` URIs, `on*=` event handlers, trims whitespace |
| `sanitizeInput(value)` | Same as above but **without** `.trim()` — used in `onChange` so spaces can be typed |
| `formatPhone(value)` | Extracts digits, caps at 10, formats as `(XXX) XXX-XXXX` |
| `phoneDigits(value)` | Extracts only digit characters from a formatted phone string |
| `isValidEmail(value)` | Practical RFC 5322 subset regex |
| `isValidPhone(value)` | Requires exactly 10 digits (mandatory) |
| `isValidPersonName(value)` | 2–50 chars, letters/spaces/hyphens/apostrophes/accented chars only |
| `isValidName(value)` | Legacy: 2–120 chars, no HTML (kept for other potential uses) |
| `checkRateLimit(key, ms)` | Returns `{ canSubmit, remainingSeconds }` from localStorage |
| `recordSubmission(key)` | Records submission timestamp to localStorage |

### Build Hardening (`vite.config.js`)
- `console` and `debugger` statements stripped from production builds
- `sourcemap: false` in production
- `allowedHosts` restricted to `localhost` and `127.0.0.1`
- Dev server host binding disabled

### HTTP Headers (`public/_headers`)
- Full Content Security Policy (CSP) including `frame-src https://www.google.com` for Maps embed
- HSTS with 1-year max-age
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` restricting camera, microphone, geolocation
- Asset cache headers: `Cache-Control: public, max-age=31536000, immutable`

### Other
- `ErrorBoundary` class component wraps the entire app — catches render errors, shows generic fallback, logs to console in dev only (Sentry integration TODO)
- `.gitignore` excludes `node_modules`, `dist`, `.env.local`, `.DS_Store`, migration scripts
- `.env.example` documents all environment variables

---

## 8. CSS Design Tokens

Defined in `src/index.css` as CSS custom properties:

```css
--navy:        #0a2342   /* primary dark blue */
--accent:      #1a7abf   /* brand blue */
--danger:      #dc2626   /* error red */
--danger-bg:   #fef2f2
--off-white:   #f8f9fb
--white:       #ffffff
--gray-200 through --gray-700
--radius-sm / --md / --lg / --xl / --full
--shadow-sm / --md / --lg
--font-serif:  'Playfair Display', Georgia, serif
--font-sans:   'Inter', system-ui, sans-serif
```

---

## 9. Key Design Decisions & Discussion History

### Why lucide-react instead of react-icons?
`react-icons` was bundling ~5 MB of unused icon sets. It was removed entirely and replaced with `lucide-react`, which is tree-shakeable. Only the specific icons actually used are imported.

### Why split First Name / Last Name instead of Full Name?
The original single "Full Name" field had two problems:
1. `sanitizeText()` called `.trim()` on every keystroke, silently stripping spaces — users couldn't type a space between first and last name
2. A single letter like `"J"` passed the minimum 2-character check

Splitting into two mandatory fields forces complete entry, matches how names appear on insurance cards and medical charts, enables proper `autoComplete` attributes, and is the standard in healthcare intake contexts.

### Why allow hyphens and apostrophes in name fields?
Initial implementation blocked all special characters. This was revised because common patient names in a medical office — O'Brien, Smith-Jones, García-López, D'Angelo — require them. Numbers and all other symbols remain blocked.

### Why `sanitizeInput` vs `sanitizeText`?
`sanitizeText` trims whitespace, which caused the space-blocking bug in `onChange`. `sanitizeInput` is identical except it omits the `.trim()` call, so users can type spaces naturally. `sanitizeText` (with trim) is still used at validation time.

### Why Vite 6 and not Vite 7?
The machine runs Node 18. Vite 7 requires Node 20+. Vite 6.4.1 patches the relevant CVE (GHSA-67mh-4wv8-2f99) and is compatible with Node 18.

### Why no Tailwind / CSS-in-JS?
CSS Modules provide component-level scoping with zero runtime overhead and full IDE support. The site doesn't need a utility framework for its scale.

---

## 10. Environment Variables

Documented in `.env.example`. None are required for local development.

```env
VITE_SITE_URL=           # Production URL, used for canonical tags / OG meta
VITE_CONTACT_EMAIL=      # garabochiro@gmail.com
VITE_PHONE=              # 9084979440
VITE_FAX=                # 9084979442
VITE_ADDRESS=            # 118 Westfield Avenue, Clark NJ 07066
```

> Currently these values are hardcoded in JSX. Migrating to env vars is a beta task.

---

## 11. Deployment Readiness (Netlify)

`public/_headers` and `public/_redirects` are already in place:

- `_redirects` — SPA catch-all (`/* /index.html 200`) so React Router handles all routes
- HTTPS redirect lines are present but commented out (uncomment after DNS is pointed)
- `_headers` — all security and cache headers applied per-path

**Steps to deploy:**
1. Push repo to GitHub
2. Connect repo to Netlify (it will auto-detect Vite)
3. Set build command: `npm run build`, publish directory: `dist`
4. Point DNS to Netlify

---

## 12. Known Hardcoded Values (Beta TODO)

These should be moved to environment variables before production:

- Phone: `tel:9084979440`, `tel:9087970077`
- Fax: `(908) 497-9442`
- Email: `garabochiro@gmail.com`
- Address: `118 Westfield Avenue, Suites 3 & 4, Clark, NJ 07066`
- Google Maps embed URL (static `iframe` src)

---

## 13. Remaining Work (Beta Targets)

- [ ] **Form backend** — wire `handleSubmit` to a real endpoint (Netlify Functions, Formspree, or EmailJS). All server-side endpoints must independently validate and sanitize inputs. Never put API keys in client-side code.
- [ ] **Environment variables** — replace hardcoded contact info with `import.meta.env.VITE_*`
- [ ] **SEO** — `<meta>` tags, Open Graph, canonical URLs, `sitemap.xml`, `robots.txt`
- [ ] **Accessibility audit** — keyboard navigation review, screen reader testing, color contrast pass
- [ ] **Analytics** — privacy-respecting option (Plausible, Fathom, or GA4 with consent)
- [ ] **Error monitoring** — Sentry integration (placeholder comment exists in `ErrorBoundary`)
- [ ] **Content review** — Dr. Garabo to review and approve all copy and service descriptions
- [ ] **Photography** — replace placeholder `dr-garabo.jpg` with approved professional photo
- [ ] **SSL / DNS** — point domain to Netlify, enable HTTPS redirect in `_redirects`
- [ ] **Spanish content review** — native speaker review of all ES translations

---

## 14. Git

```
Repository initialized: March 4, 2026
Branch: master
Tag: v0.1.0-alpha.1
Commit: "chore: alpha.1 release — bilingual contact form with split name fields,
         dynamic phone formatting, live validation, i18n error messages"
```
