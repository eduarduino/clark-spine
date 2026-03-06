# Quickstart — <feature-id>

## Purpose
Run and validate the v1 architecture baseline for Clark Spine and Pain Relief from local dev through preview verification.

## Prerequisites
- Node.js 20+
- npm 10+
- Vercel account/project access
- Upstash Redis instance
- Resend account/API key

## 1) Initialize project workspace
- Create Next.js app in `chiro-next/` with TypeScript + App Router.
- Install baseline dependencies:
  - `next-intl`
  - `react-hook-form`, `zod`, `@hookform/resolvers`
  - `resend`
  - `@upstash/redis`, `@upstash/ratelimit`
  - `tailwindcss`, `postcss`, `autoprefixer`
  - Dev: `vitest`, `@playwright/test`, `eslint`, `prettier`

## 2) Configure environment
Create `chiro-next/.env.local` with:
- `RESEND_API_KEY`
- `UPSTASH_REDIS_REST_URL`
- `UPSTASH_REDIS_REST_TOKEN`
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`
- `PRACTICE_EMAIL`
- `NEXT_PUBLIC_SITE_URL`

## 3) Run locally
From `chiro-next/`:
- `npm install`
- `npm run dev`
- Open `http://localhost:3000`

## 4) Verify v1 route scaffold
Confirm these routes render and are navigable:
- `/`
- `/about`
- `/services`
- `/auto-accidents`
- `/patient-center`
- `/appointment`
- `/contact`
- unknown route -> branded `not-found`

## 5) Verify form behavior
For `/appointment` and `/contact`:
- Required fields block submit when invalid.
- Privacy consent required on appointment form.
- Server action re-validation active.
- Rate limit blocks repeated submission in 60-second window.
- Success and generic fallback error messages match spec language.

## 6) Verify bilingual behavior
- Toggle EN/ES in navigation.
- Confirm labels/content/errors are localized.
- Refresh and route transitions preserve locale via `NEXT_LOCALE` cookie.

## 7) Verify constitution gates
- Accessibility: keyboard navigation, visible focus, semantic structure, reduced-motion behavior.
- Performance: Lighthouse mobile >= 90, LCP < 2.5s, CLS < 0.1, INP < 200ms.
- Privacy/trust: no long-term form storage, no sensitive logging, clear contact/credentials visibility.

## 8) Test suite
From `chiro-next/`:
- `npm run lint`
- `npm run test` (Vitest)
- `npx playwright test`

## 9) Preview deployment
- Push branch `nextjs-rebuild`.
- Validate Vercel preview URL.
- Re-run route/form/bilingual/a11y/performance checks against preview.

## Exit Criteria
- All v1 acceptance criteria from `spec.md` are satisfied in preview.
- Security headers present and validated.
- `npm audit` shows zero high/critical vulnerabilities before production merge.
