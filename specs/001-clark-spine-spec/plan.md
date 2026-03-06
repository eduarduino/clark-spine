# plan.md

Role: Technical Architect

Responsibility:
Define how the system will be built.

Must Define:
- architecture overview
- technology stack
- application structure
- routing approach
- component structure
- data flow
- form handling strategy
- deployment approach
- security considerations
- performance considerations

Must NOT Define:
- product philosophy
- feature definitions
- implementation tasks

---

# Clark Spine and Pain Relief — Architecture Plan

> **Garabo Chiropractic Health Center, PC** · Dr. James Garabo, DC · Clark, NJ
> This document defines how the system is built and why each technical decision was made.
> It is an architecture document — not a product or task document.

---

## Architecture Overview

This is a statically-rendered, server-side-enhanced marketing website with a small number of interactive forms. There is no database, no user authentication, and no persistent state beyond language and theme preferences stored client-side.

The architecture is intentionally minimal. Complexity is introduced only where the product requires it.

**guiding principle**: choose the simplest approach that fully satisfies the requirement. If the simplest approach is good enough, it is the right approach.

### Key Characteristics

- Pages are rendered at the server and served as HTML — fast first load, SEO-friendly
- Forms submit to server-side handlers — no client-side API calls for mutations
- All copy is managed through a translation layer — content changes in one place
- No database — form submissions are delivered via email and discarded server-side
- Deployed to a CDN-backed serverless platform — no server to manage

---

## Technology Stack

| Concern | Choice | Rationale |
|---------|--------|-----------|
| Framework | Next.js 15 (App Router) | Server rendering by default, built-in image/font optimization, file-based routing, Server Actions for forms |
| Language | TypeScript (strict mode) | Catches errors at build time; enforced across all source files |
| Styling | Tailwind CSS | Utility-first; keeps styles co-located with markup; fast to iterate |
| i18n | next-intl | First-class App Router support; type-safe message keys; minimal setup |
| Forms | React Hook Form + Zod | Controlled form UX; schema shared between client validation and server validation |
| Email | Resend | Simple API; reliable delivery; free tier sufficient for this traffic level |
| Rate limiting | Upstash Redis + @upstash/ratelimit | Serverless-safe; persists across cold starts; edge-compatible |
| Analytics | Vercel Analytics | Privacy-first; no cookies; no consent banner needed |
| Deployment | Vercel | Zero-config for Next.js; automatic SSL; preview deployments per branch |
| Testing | Vitest + Playwright | Vitest for unit/integration; Playwright for end-to-end flows |
| Linting | ESLint (Next.js config) + Prettier | Enforced on every commit |

---

## Application Structure

The Next.js application lives in a `chiro-next/` subdirectory within the existing repository. The existing React/Vite app at the repository root is left untouched on `main` until the `nextjs-rebuild` branch is ready to replace it.

```
chiro-next/
├── next.config.ts              # Security headers, image config, i18n
├── tailwind.config.ts
├── tsconfig.json               # strict: true
├── .env.example                # All required env var names documented
│
├── messages/
│   ├── en.json                 # All English copy
│   └── es.json                 # All Spanish copy
│
├── public/
│   ├── _headers                # Vercel CDN-level security headers (backup)
│   ├── forms/                  # Static PDF downloads
│   └── images/                 # Static images (dr-garabo.jpg, etc.)
│
└── src/
    ├── app/                    # Next.js App Router pages and layouts
    ├── components/             # UI components
    ├── actions/                # Server Actions (form handlers)
    ├── lib/                    # Shared utilities
    ├── schemas/                # Zod validation schemas
    ├── types/                  # TypeScript interfaces
    └── data/                   # Static content data
```

---

## Routing

All routes use the Next.js App Router file-based convention. Each route segment is a directory under `src/app/`.

| URL | File | Notes |
|-----|------|-------|
| `/` | `src/app/page.tsx` | Homepage |
| `/about` | `src/app/about/page.tsx` | |
| `/services` | `src/app/services/page.tsx` | |
| `/auto-accidents` | `src/app/auto-accidents/page.tsx` | |
| `/patient-center` | `src/app/patient-center/page.tsx` | |
| `/appointment` | `src/app/appointment/page.tsx` | Appointment request form |
| `/contact` | `src/app/contact/page.tsx` | |
| `/*` (not found) | `src/app/not-found.tsx` | Branded 404 page |

> **Deferred to v2.0**: The `/patient-center/intake` route (multi-step online intake form) is not scaffolded in v1.0. See Phase 7 of `tasks.md`.

### i18n and Locale

Language does **not** appear in URLs. `/services` is the same URL in English and Spanish. Locale is determined by a cookie written when the user toggles the language switcher. `next-intl` middleware reads this cookie and resolves the active locale for each request.

This preserves clean URLs, avoids redirect complexity, and presents no SEO risk since the page HTML changes (via the cookie value) but the URL does not.

**Locale cookie key**: `NEXT_LOCALE`
**Supported locales**: `en` (default), `es`
**Fallback**: If the cookie is absent or invalid, `en` is used.

---

## Component Structure

Components are co-located in directories under `src/components/`. Each component directory contains the component file, its styles (if any), and its barrel export.

```
src/components/
│
├── layout/              # Global layout components (rendered in root layout)
│   ├── Navbar/
│   ├── Footer/
│   └── MobileCallButton/
│
├── sections/            # Page sections composed into page files
│   ├── Hero/
│   ├── ServicesPreview/
│   ├── TestimonialsSection/
│   ├── CtaBanner/
│   ├── StepsSection/
│   ├── InsuranceSection/
│   └── MapEmbed/
│
├── forms/               # Form components (all Client Components)
│   ├── ContactForm/
│   └── AppointmentForm/
│
└── ui/                  # Primitive, reusable UI elements
    ├── Button/
    ├── Card/
    ├── Badge/
    ├── Accordion/
    └── ErrorBoundary/

# v2.0 (deferred — added in Phase 7):
# ├── forms/IntakeForm/        # Multi-step online intake form
# └── chatbot/ChatbotWidget/   # FAQ chatbot widget
```

### Server vs Client Components

The default is Server Components. A component only opts into `"use client"` when it requires:
- Browser APIs (e.g., `localStorage`, `window`)
- React state or effects
- User interaction that can't be handled with HTML alone (forms, toggles, chatbot)

**Client Components** (v1.0): all form components, the Navbar (drawer toggle), the language toggle, the MobileCallButton.

> **v2.0 additions**: the theme toggle (`ThemeProvider`) and the `ChatbotWidget` become Client Components when Phase 7 is implemented.

**Server Components**: all page files, all section components, Footer, layout wrappers.

### Component Rules

- No component file exceeds 300 lines. Logic that exceeds this is extracted to a custom hook or utility.
- Section components receive their data as props. They do not fetch data directly.
- UI primitives (`ui/`) are stateless and accept props only — no internal data access.
- Error boundaries wrap every third-party component (Maps embed, chatbot widget).

---

## Data Flow

### Static Content

All page copy flows from the i18n message files through `next-intl`'s `useTranslations` hook (Client) or `getTranslations` function (Server). No hardcoded strings in component files.

```
messages/en.json
    └── getTranslations('hero')
            └── Server Component
                    └── renders translated copy
```

Business constants (phone number, address, hours, doctor name) live in `src/lib/constants.ts`. This is the single source of truth — imported directly wherever they are needed.

### Form Data Flow

```
User fills form (Client Component)
    └── React Hook Form validates against Zod schema (client-side UX)
            └── Server Action called on submit
                    ├── Re-validates with same Zod schema (server-side gate)
                    ├── Sanitizes all string inputs
                    ├── Checks rate limit (Upstash Redis)
                    ├── If valid: sends email via Resend
                    └── Returns { success: true } or { error: string }
                            └── Client updates UI (confirmation or error message)
```

No form data is stored server-side. All data is transmitted to the practice via email and discarded.

### Language Preference

Language preference is stored in `localStorage` and written as a cookie (`NEXT_LOCALE`) on change. On first visit, language defaults to `en`. The preference is read immediately on page load to avoid a flash of the wrong language.

> **v2.0**: Theme preference (`ThemeProvider`, dark/light toggle, `prefers-color-scheme` default) is deferred to Phase 7. In v1.0, only light mode is rendered.

---

## Form Handling Strategy

All forms follow the same pattern:

1. **Client validation** via React Hook Form + Zod resolver — provides immediate inline feedback as the user fills the form
2. **Server Action** (`"use server"`) — the form's `action` prop or an explicit `onSubmit` handler calls the Server Action
3. **Server-side re-validation** against the same Zod schema — the server never trusts client input
4. **Sanitization** via `lib/sanitize.ts` — all string inputs are stripped of HTML tags, control characters, and injection patterns before use
5. **Rate limiting** via `lib/rateLimit.ts` — maximum one submission per 60-second window per user (keyed by IP at the server, with a client-side session window as UX guard)
6. **Email delivery** via `lib/email.ts` — wraps the Resend SDK; sends a structured email to the practice
7. **Response** — Server Action returns a typed result object; the Client Component updates its UI state accordingly

### Zod Schemas

Each form has one Zod schema in `src/schemas/`. The same schema file is imported by both the React Hook Form resolver and the Server Action. There is no duplicated validation logic.

```
src/schemas/
├── contactSchema.ts
└── appointmentSchema.ts
```

> **v2.0 addition**: `intakeSchema.ts` (four-step intake form schema) is added in Phase 7.

### Error States

- **Validation error**: inline error message next to the field; form does not submit
- **Rate limit error**: "Please wait before submitting again." — no submission
- **Server error**: generic message with the office phone number as fallback — no system details exposed

---

## Security Considerations

### HTTP Security Headers

Applied in two places for defense-in-depth:
- `next.config.ts` via the `headers()` function — applied to all Next.js responses
- `public/_headers` — applied by Vercel's CDN to static assets and edge responses

Required headers:

| Header | Value |
|--------|-------|
| `Content-Security-Policy` | Restrictive policy; Maps iframe origin explicitly allowlisted |
| `X-Frame-Options` | `DENY` |
| `X-Content-Type-Options` | `nosniff` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | Restrict camera, microphone, geolocation |

### Form Security

- All inputs sanitized server-side before any use (HTML stripped, control chars removed)
- Same Zod schema enforced on both client and server — no trust of client validation
- Rate limiting prevents abuse of contact and appointment endpoints
- No PII appears in server logs, error messages, or client-visible error payloads
- Privacy consent checkbox defaults to unchecked on all forms

### CSRF

Next.js 15 App Router Server Actions enforce same-origin by default. This is the CSRF protection. It must be explicitly verified during implementation: confirm the `Origin` header is checked and no cross-origin invocation is permitted. If any cross-origin pattern is introduced later, a manual origin check must be added to the affected action.

### Secrets Management

All API keys and service credentials are stored in environment variables. No secrets are hardcoded or committed. `.env.example` documents every required variable name (with no values).

Required environment variables:

| Variable | Scope | Purpose |
|----------|-------|---------|
| `RESEND_API_KEY` | Server only | Email delivery via Resend |
| `UPSTASH_REDIS_REST_URL` | Server only | Rate limiting via Upstash |
| `UPSTASH_REDIS_REST_TOKEN` | Server only | Rate limiting via Upstash |
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | Browser | Maps embed; must be HTTP-referrer-restricted in Google Cloud Console |
| `PRACTICE_EMAIL` | Server only | Recipient address for form submissions |
| `NEXT_PUBLIC_SITE_URL` | Browser + Server | Used for canonical URLs, Open Graph, and CSP |

### Dependency Security

`npm audit` must return zero high or critical vulnerabilities before any deployment to production. This is a hard gate.

---

## Performance Considerations

### Images

All content images use the Next.js `<Image>` component. This enforces:
- Automatic format conversion (WebP/AVIF)
- Responsive `srcset` generation
- Lazy loading by default (LCP-critical images set `priority={true}`)
- Explicit `width` and `height` to prevent layout shift

The doctor's photo (`dr-garabo.jpg`) is the primary LCP candidate and must be loaded with `priority={true}`.

### Fonts

Fonts are loaded via `next/font`. This eliminates FOUT (flash of unstyled text) and prevents layout shift from font loading.

### Third-Party Scripts

The Google Maps embed is an `<iframe>` with `loading="lazy"`. Any analytics script is loaded with `strategy="afterInteractive"` to avoid blocking the main thread.

> **v2.0**: The `ChatbotWidget` loads its data from a local static file (no network request) and is added in Phase 7.

### Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse mobile score | ≥ 90 |
| Largest Contentful Paint (LCP) | < 2.5s |
| Cumulative Layout Shift (CLS) | < 0.1 |
| Interaction to Next Paint (INP) | < 200ms |

These are measured on the homepage on a simulated mid-range mobile device. All pages must pass before launch.

### Motion Policy

Decorative or engagement-first animations are out of scope for v1. Motion is used only when required to improve comprehension or accessibility (for example, focus visibility and essential state transitions), and always respects `prefers-reduced-motion`.

---

## Deployment

### Platform

Vercel. The `chiro-next/` subdirectory is set as the Vercel project's root directory. This means Vercel runs `npm run build` inside `chiro-next/` and treats it as a standard Next.js project.

### Branch Strategy

| Branch | Status | Vercel |
|--------|--------|--------|
| `main` | Production (current React/Vite app) | Live at production domain |
| `nextjs-rebuild` | Development | Preview deployment only |

The `nextjs-rebuild` branch is **not** merged to `main` until all acceptance criteria in `spec.md` are verified passing against the preview deployment.

For Speckit artifact workflows, local feature branches may still use `001-*` naming while targeting `nextjs-rebuild` for integration.

### SSL

Handled automatically by Vercel. All HTTP traffic is redirected to HTTPS via Vercel's platform-level redirect. No manual configuration required.

### Preview Deployments

Every push to `nextjs-rebuild` generates a unique preview URL on Vercel. This is used for stakeholder review, E2E testing, and security header verification before merge.

### Environment Variables

Set in the Vercel project dashboard for each environment (Preview, Production). Never committed to source control.

---

## Testing Strategy

### Unit Tests (Vitest)

Cover all functions in `src/lib/` and all Zod schemas in `src/schemas/`. These are pure functions with no side effects — fast to write and fast to run.

### Integration Tests (Vitest)

Cover all Server Actions in `src/actions/`. Tests verify: valid input succeeds, invalid input is rejected, rate limit fires on repeated calls, email delivery is invoked with the correct payload. Email and rate-limit dependencies are mocked.

### End-to-End Tests (Playwright)

Cover the critical patient journeys:
- Homepage load, call button (`tel:` link), hero CTA → Appointment form → successful submission
- About page → credentials visible, contact links tappable
- Services page → categories render, anchor navigation works
- Contact page → form submission → confirmation, rate limit fires on repeat
- Appointment page → consent required, validation errors, rate limit fires on repeat
- Auto Accidents page → phone CTA interaction
- Patient Center → FAQ accordion, form download links
- Language toggle → Spanish → navigate → Spanish persists; form errors in Spanish
- Navigation → mobile menu keyboard behavior; unknown URL shows branded 404 page

E2E tests run against the Vercel preview deployment in CI.

---

**Version**: 2.0.0 | **Created**: 2026-03-05 | **Last Updated**: 2026-03-05

> This is an architecture document. It defines how the system is built.
> For product requirements and behavior, see `spec.md`.
> For implementation tasks and sequencing, see `tasks.md`.
