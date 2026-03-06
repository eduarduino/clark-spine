# tasks.md

Role: Engineering Program Manager

Responsibility:
Convert the architecture plan into a development roadmap.

Must Define:
- development phases
- milestones
- implementation tasks
- dependencies
- priorities
- launch checklist

Must NOT Define:
- architecture decisions
- product philosophy

---

# Clark Spine and Pain Relief — Development Roadmap

> **Branch**: `nextjs-rebuild` | **Project root**: `chiro-next/`
> Tasks are organized by phase. Complete each phase gate before starting the next.
> `[P]` = can run in parallel with other `[P]` tasks in the same phase.
> Speckit local artifact branches may use `001-*`; integration and deployment target branch is `nextjs-rebuild`.

### Task ID Convention

- Use stable IDs when executing tasks: `P<phase>.<section>.<index>`.
- Example: first task under section 2.4 is `P2.4.1`.
- Keep IDs in execution logs/checklists for requirement traceability.

---

## Phase 1 – Project Setup

**Goal**: A running Next.js project with all tooling, configuration, and infrastructure in place. No visible UI yet — just a working build.

**Milestone**: `npm run build` passes. `npm run lint` returns zero errors. Security headers are present on `localhost:3000`.

**Dependencies**: None. This is the starting point.

---

### 1.1 Initialize the project

- [ ] Create a new Next.js project inside `chiro-next/` using the App Router, TypeScript, Tailwind CSS, and ESLint
- [ ] Configure TypeScript with `"strict": true` and `"noUncheckedIndexedAccess": true`
- [ ] Set up path aliases (`@/` → `src/`)

### 1.2 Configure code quality tooling

- [ ] [P] Configure ESLint with the Next.js ruleset and accessibility linting plugin (`eslint-plugin-jsx-a11y`)
- [ ] [P] Configure Prettier with a shared `.prettierrc`
- [ ] [P] Add a pre-commit hook (husky + lint-staged) to enforce lint and format on every commit

### 1.3 Install dependencies

- [ ] Install form libraries: `react-hook-form`, `zod`, `@hookform/resolvers`
- [ ] [P] Install UI utilities: `lucide-react`
- [ ] [P] Install i18n: `next-intl`
- [ ] [P] Install email: `resend`
- [ ] [P] Install rate limiting: `@upstash/ratelimit`, `@upstash/redis`
- [ ] [P] Install analytics: `@vercel/analytics`
- [ ] [P] Install test tooling: `vitest`, `@testing-library/react`, `playwright`

### 1.4 Configure environment variables

- [ ] Create `.env.example` documenting all required variables:
  - `RESEND_API_KEY`
  - `UPSTASH_REDIS_REST_URL`
  - `UPSTASH_REDIS_REST_TOKEN`
  - `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`
  - `PRACTICE_EMAIL`
  - `NEXT_PUBLIC_SITE_URL`
- [ ] Create `.env.local` (git-ignored) with development values

### 1.5 Configure security headers

- [ ] Add a `headers()` function to `next.config.ts` setting: `Content-Security-Policy`, `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy`
- [ ] [P] Create `public/_headers` as a Vercel CDN backup mirroring the same headers

### 1.6 Configure test infrastructure

- [ ] [P] Configure Vitest with a jsdom environment and React Testing Library setup file
- [ ] [P] Configure Playwright targeting `localhost:3000` with Chromium and mobile Chrome viewports

### 1.7 Configure deployment

- [ ] Create `vercel.json` setting `rootDirectory` to `chiro-next` and an HTTP → HTTPS redirect rule

**Phase 1 Gate**: `npm run build` ✅ · `npm run lint` zero errors ✅ · Security headers on localhost ✅

---

## Phase 2 – Core Pages

**Goal**: All pages of the site are built and rendering the correct content in both English and Spanish.

**Milestone**: Every page loads, displays correct content, is mobile-responsive, and passes an automated accessibility scan.

**Dependencies**: Phase 1 complete.

---

### 2.1 Content foundation

- [ ] Port all English copy from the existing app into `messages/en.json`
- [ ] [P] Port all Spanish copy into `messages/es.json`, maintaining full parity with English
- [ ] [P] Add new translation keys for all new features: appointment form, mobile call button
- [ ] [P] Create `src/lib/constants.ts` with all business facts as typed exports: phone numbers, address, office hours, email

### 2.2 Shared utilities

- [ ] Create `src/lib/sanitize.ts`: `sanitizeInput()`, `formatPhone()`, `isValidEmail()`, `isValidPhone()`
- [ ] [P] Write unit tests for `sanitize.ts` covering XSS strings, phone formatting, email edge cases
- [ ] [P] Create `src/lib/icons.ts`: typed map of icon names to `lucide-react` components

### 2.3 Root layout and global styles

- [ ] Define CSS custom properties in `globals.css` for light mode: colors, spacing, radius, shadow tokens
- [ ] [P] Create `src/app/layout.tsx`: wraps all pages with locale provider, Navbar, Footer, MobileCallButton, skip-to-main link, Vercel Analytics
- [ ] [P] Load fonts via `next/font` in the root layout (no font flash, no layout shift)

### 2.4 Layout components

- [ ] Build `Navbar`: scroll-aware background, hamburger drawer on mobile, language toggle (EN/ES), accessible keyboard behavior
- [ ] [P] Build `Footer`: brand column, quick links, complete office hours, contact info with tappable phone and email links
- [ ] [P] Build `MobileCallButton`: fixed bottom bar visible only on mobile, one-tap call to `(908) 497-9440`

### 2.5 Shared UI primitives

- [ ] [P] Build `Button` component: variants (primary, outline, ghost), sizes, accessible focus ring
- [ ] [P] Build `Card` component: surface color, border, radius, shadow, hover state
- [ ] [P] Build `Badge` component: pill style for credential tags and service labels
- [ ] [P] Build `Accordion` component: accessible expand/collapse with keyboard support, smooth transition, `prefers-reduced-motion` guard
- [ ] [P] Build `ErrorBoundary` component: wraps any section that can fail, accepts a `fallback` prop

### 2.6 Homepage

- [ ] Build `Hero` section: headline, doctor photo (LCP-optimized with `priority`), stat pills, insurance trust pills, one primary CTA, and one secondary CTA
- [ ] [P] Build `ServicesPreview` section: top service cards linking to `/services`
- [ ] [P] Build `TestimonialsSection`: patient testimonials in card layout
- [ ] [P] Build `CtaBanner`: reusable booking prompt used at the bottom of every page
- [ ] [P] Compose `src/app/page.tsx` with all homepage sections and unique page metadata

### 2.7 Services page

- [ ] Build Services page with three sections: Conditions Treated, Treatments Offered, Office Services
- [ ] [P] Build sticky category navigation bar with smooth anchor scrolling
- [ ] [P] Add per-page metadata export

### 2.8 About page

- [ ] Build About page: doctor photo, bio, credential highlight cards, experience chips, contact sidebar
- [ ] [P] Copy doctor photo to `chiro-next/public/images/dr-garabo.jpg`
- [ ] [P] Add per-page metadata export

### 2.9 Auto Accidents page

- [ ] Build Auto Accidents page with: hero + primary/secondary CTA pair, "Why Act Fast" urgency cards, injury grid (6 items), 4-step process, CTA banner
- [ ] [P] Add per-page metadata export

### 2.10 Patient Center page

- [ ] Build Patient Center page with: "What to Expect" steps, downloadable form cards (4 PDFs), FAQ accordion (minimum 8 entries), accepted insurance list with fax number
- [ ] [P] Add placeholder PDF files to `public/forms/`
- [ ] [P] Add per-page metadata export

### 2.11 Error and loading states

- [ ] [P] Build `src/app/not-found.tsx`: branded 404 page with a link home
- [ ] [P] Build `src/app/error.tsx`: branded error page, "Try Again" button, no system details exposed
- [ ] [P] Build `src/app/loading.tsx`: skeleton loading state for the root layout

**Phase 2 Gate**: All pages render in EN and ES ✅ · No horizontal overflow on 375px ✅ · No axe-core violations on any P0 page ✅

---

## Phase 3 – Forms and Contact

**Goal**: All forms are built, validated, rate-limited, and sending email to the practice. The contact page and appointment page are complete.

**Milestone**: A form submission in the staging environment delivers an email to the test inbox. Invalid inputs are rejected. Rate limiting fires on repeat submissions.

**Dependencies**: Phase 2 complete. Environment variables (`RESEND_API_KEY`, `UPSTASH_*`, `PRACTICE_EMAIL`) set in `.env.local`.

---

### 3.1 Zod schemas

- [ ] Create `src/schemas/contactSchema.ts`: firstName, lastName, email, phone (optional), subject (optional), message — with character limits
- [ ] [P] Create `src/schemas/appointmentSchema.ts`: firstName, lastName, email, phone, preferredDate, preferredTime, reasonForVisit, additionalNotes (optional), insuranceProvider (optional), privacyConsent — with character limits
- [ ] [P] Write unit tests for each schema: valid input passes, invalid input fails with correct error messages

### 3.2 Shared form utilities

- [ ] Create `src/lib/rateLimit.ts`: `checkRateLimit(key)` → `{ allowed: boolean; retryAfterSeconds: number }` using Upstash in production, in-memory adapter in test
- [ ] [P] Create `src/lib/email.ts`: `sendEmail({ to, subject, html })` wrapping the Resend SDK; typed error; never logs PII
- [ ] [P] Write unit tests for `rateLimit.ts`: allowed on first call, blocked within window, allowed after window expires

### 3.3 Contact form

- [ ] Build `ContactForm` client component: React Hook Form + Zod resolver, inline blur validation, character counter, success state, generic error state
- [ ] [P] Build `submitContact` Server Action: validate, sanitize, rate-limit, send email, return typed result
- [ ] [P] Write integration tests for `submitContact`: valid → success, invalid email → error, double submit → rate limit, XSS input → sanitized
- [ ] [P] Build Google Maps embed component: lazy-loaded iframe, error boundary, static address fallback if the API key is absent
- [ ] [P] Compose `src/app/contact/page.tsx`: contact form, office info column, hours table, map embed, per-route `error.tsx`

### 3.4 Appointment request form

- [ ] Build `AppointmentForm` client component: all fields from the spec, privacy notice, consent checkbox (unchecked by default), success/error states
- [ ] [P] Build `submitAppointment` Server Action: validate, sanitize, rate-limit, send email, return typed result
- [ ] [P] Write integration tests for `submitAppointment`: valid → success, past date → error, missing consent → validation error, rate limit fires
- [ ] [P] Create `src/app/appointment/page.tsx`: standalone appointment page with metadata (`title: 'Book an Appointment'`, `noindex: false`)
- [ ] [P] Update all "Book an Appointment" CTAs site-wide to link to `/appointment`

> **§3.5 Patient intake form is deferred to Phase 7 (v2.0).** See Phase 7 for all intake form tasks.

**Phase 3 Gate**: All forms submit in staging ✅ · Invalid inputs rejected ✅ · Rate limiting fires on repeat submit ✅ · Email reaches test inbox ✅ · No PII in server logs ✅

---

## Phase 4 – Styling and UX

**Goal**: The site looks polished, feels fast, and is fully accessible. Motion is limited to non-decorative, accessibility-supporting behavior.

**Milestone**: Lighthouse mobile score ≥ 90 on homepage. Zero WCAG 2.1 AA violations on all P0 pages.

**Dependencies**: Phase 2 and Phase 3 complete.

---

### 4.1 Design polish

- [ ] Review and refine all pages for consistent spacing, typography hierarchy, and color usage against the design token system
- [ ] [P] Ensure component interaction states are clear and consistent without decorative motion effects
- [ ] [P] Ensure mobile tap targets are large enough (minimum 44×44px) on all interactive elements
- [ ] [P] Verify the mobile dropdown nav drawer interaction works correctly on iOS Safari

### 4.2 Motion compliance

- [ ] Ensure no decorative or engagement-first animations are introduced in v1 pages/components
- [ ] [P] Verify required motion behavior (if any) is limited to comprehension/accessibility and respects `prefers-reduced-motion`

> **§4.3 FAQ chatbot widget is deferred to Phase 7 (v2.0).** See Phase 7 for all chatbot tasks.

### 4.4 Accessibility pass

- [ ] Audit all images: descriptive `alt` for content images, `alt=""` for decorative images
- [ ] [P] Verify all form fields have visible, associated labels
- [ ] [P] Verify all form error messages are programmatically associated with their field
- [ ] [P] Verify all interactive elements are keyboard-operable and have visible focus states
- [ ] [P] Verify skip-to-main link is present and functional on every page
- [ ] [P] Run axe-core scan on all pages and fix all reported violations

### 4.5 Performance pass

- [ ] Verify the doctor's photo uses `priority={true}` on the homepage (LCP candidate)
- [ ] [P] Verify all non-critical images use lazy loading
- [ ] [P] Verify fonts are loaded via `next/font` with no fallback flash
- [ ] [P] Verify the Google Maps iframe uses `loading="lazy"`
- [ ] [P] Run Lighthouse mobile audit on the homepage — achieve score ≥ 90; fix regressions

### 4.6 SEO and metadata

- [ ] Add `export const metadata` to every page with a unique `title`, `description`, and Open Graph tags
- [ ] [P] Generate `sitemap.xml` including all public pages
- [ ] [P] Create `public/robots.txt`
- [ ] [P] Verify all external links use `rel="noopener noreferrer"`

**Phase 4 Gate**: Lighthouse mobile ≥ 90 ✅ · Zero axe-core violations on P0 pages ✅

---

## Phase 5 – Testing

**Goal**: All critical user journeys are covered by automated tests. Security behaviors are verified.

**Milestone**: All E2E tests pass against the staging deployment. `npm audit` returns zero high/critical vulnerabilities. Security headers verified at grade A.

**Dependencies**: Phases 1–4 complete. Staging deployment available (Phase 6.1).

---

### 5.1 End-to-end tests

- [ ] `e2e/homepage.spec.ts`: sticky call button visible on 375px, call button href links to `tel:9084979440`, doctor's name and at least two credentials visible above fold, "Book an Appointment" CTA visible above fold, hero CTA navigates to `/appointment`, no horizontal overflow, Lighthouse mobile ≥ 90
- [ ] [P] `e2e/contact.spec.ts`: office address displayed, both phone numbers displayed and tappable, fax number visible, all seven days of office hours visible, privacy notice visible above submit button, invalid email shows error, valid submission shows confirmation, second submission within 60s shows rate-limit error, map embed renders or shows fallback, keyboard navigation through form
- [ ] [P] `e2e/about.spec.ts`: doctor photo appears, "Trauma Qualified" and "Palmer Graduate" visible, trust indicators present, office address visible, phone link href is `tel:9084979440`, email link present and tappable
- [ ] [P] `e2e/appointment.spec.ts`: consent checkbox defaults unchecked, privacy notice visible above submit button, blank required field shows inline error, invalid email shows inline error, submitting without consent is blocked, valid submission shows confirmation, no system error details exposed in any error state, second submission within 60 seconds shows rate-limit error, form fields are focusable at 375px without triggering browser zoom (font-size ≥ 16px)
- [ ] [P] `e2e/autoAccidents.spec.ts`: all sections render, hero shows trauma specialist badge and both CTAs, at least three urgency cards in "Why Act Fast" section, at least six injury types listed, four-step process displayed, Spanish toggle switches all content
- [ ] [P] `e2e/services.spec.ts`: three categories render, at least eight conditions listed, at least six treatments listed, category nav anchor-scrolls correctly, CTA banner present
- [ ] [P] `e2e/patientCenter.spec.ts`: steps render, FAQ accordion has at least eight entries that expand and collapse, at least four downloadable form cards with working download links, insurance section includes Medicare and Horizon BC/BS
- [ ] [P] `e2e/language.spec.ts`: toggle switches to Spanish, navigation preserves language, refresh preserves language, form validation errors display in Spanish
- [ ] [P] `e2e/nav.spec.ts`: hamburger opens/closes, Escape closes drawer, active nav link highlighted, unknown URL shows branded 404 page

### 5.2 Security verification

- [ ] Verify CSRF protection: confirm Next.js Server Action same-origin enforcement is active by attempting a cross-origin submission in a test environment and confirming rejection. Document the result in a comment at the top of each action file.
- [ ] [P] Run `npm audit` — must return 0 high/critical vulnerabilities. Document any resolved packages.
- [ ] [P] Verify security headers on staging via `curl -I` — all five headers present on every route
- [ ] [P] Verify security headers score at `securityheaders.com` — must achieve grade A minimum
- [ ] [P] Verify Google Maps API key has HTTP referrer restrictions set in Google Cloud Console
- [ ] [P] Submit a form twice within 60 seconds on staging — confirm the second is rejected with the rate-limit message
- [ ] [P] Check Vercel function logs after a form submission — confirm no names, emails, or phone numbers appear in the log output
- [ ] [P] Verify form submissions are not persisted in any database/filesystem after transmission to practice email
- [ ] [P] Verify operational data retention policy for form payloads is documented and limited to immediate transmission handling
- [ ] [P] Test all forms with JavaScript disabled — confirm a usable fallback message and the office phone number are displayed

### 5.3 Cross-browser smoke test

- [ ] [P] All P0 pages pass visual review in: Chrome (desktop), Safari on iOS, Firefox

**Phase 5 Gate**: All E2E tests pass ✅ · `npm audit` clean ✅ · Security headers grade A ✅ · No PII in logs ✅

---

## Phase 6 – Deployment

**Goal**: The new site is live on Vercel, verified, and ready to replace the current production site.

**Milestone**: Staging deployment passes all checks. PR to `main` created and approved.

**Dependencies**: Phase 5 complete. All success criteria verified.

---

### 6.1 Staging deployment

- [ ] Configure the Vercel project to use `chiro-next/` as the root directory
- [ ] [P] Set all environment variables in the Vercel project dashboard for the `nextjs-rebuild` branch (Preview environment)
- [ ] [P] Push to `nextjs-rebuild` and verify the Vercel preview build succeeds

### 6.2 Final staging verification

- [ ] [P] Final Lighthouse audit on the Vercel preview URL (not localhost) — all scores ≥ 90 mobile
- [ ] [P] Final `npm audit` on the deployed branch
- [ ] [P] Verify `sitemap.xml` and `robots.txt` are accessible at the staging URL
- [ ] [P] Verify `PRACTICE_EMAIL` is set correctly and a test form submission delivers to the correct inbox
- [ ] [P] Verify the Google Maps embed loads correctly on the staging domain (API key referrer restriction allows the staging URL)

### 6.3 Launch checklist

- [ ] All Phase 5.2 security verification items confirmed: CSRF same-origin enforcement verified, `npm audit` clean, all five security headers present, security headers score grade A, Google Maps API key HTTP-referrer-restricted, rate limiting fires on repeat submission, no PII appears in Vercel function logs, JS-disabled fallback shows office phone number
- [ ] All acceptance criteria from `spec.md` (AC-01 through AC-10) verified against staging
- [ ] All P0 pages pass Lighthouse mobile score ≥ 90
- [ ] Zero WCAG 2.1 AA violations on all P0 pages
- [ ] All forms deliver email to the correct inbox
- [ ] Security headers verified at grade A
- [ ] `npm audit` clean
- [ ] No form payload persistence beyond immediate transmission handling is verified
- [ ] `sitemap.xml` and `robots.txt` verified
- [ ] Language toggle (EN/ES) tested end-to-end on staging
- [ ] No hardcoded copy — all text comes from `messages/en.json` or `messages/es.json`
- [ ] Doctor's photo and all PDFs confirmed present and accessible on staging
- [ ] The existing `main` branch deployment remains unaffected

**Phase 6 Gate**: Staging passes all checks ✅ · Launch checklist complete ✅

---

## Phase 7 – Future Enhancements (v2.0)

**Goal**: Implement the three Should Have features deferred from v1.0 — dark mode, online patient intake form, and FAQ chatbot widget.

**Milestone**: All three features complete and tested. AC-11 through AC-13 in `spec.md` all pass.

**Dependencies**: Phase 6 (v1.0 launch) complete.

---

### 7.1 Dark mode

- [ ] Add dark mode CSS custom properties to `globals.css` alongside existing light mode tokens
- [ ] [P] Create `ThemeProvider` client component: reads `localStorage`, applies `data-theme` to `<html>`, defaults to OS `prefers-color-scheme`
- [ ] [P] Update `src/app/layout.tsx` to wrap all pages with `ThemeProvider`
- [ ] [P] Add dark/light toggle to `Navbar`
- [ ] [P] Verify all text meets minimum contrast ratios in dark mode
- [ ] [P] Verify theme preference persists across navigation and refresh with no flash on load
- [ ] [P] Write E2E test `e2e/darkMode.spec.ts`: toggle activates dark mode, persists on refresh, OS preference is respected

### 7.2 Online patient intake form

- [ ] Create `src/schemas/intakeSchema.ts`: four-step schema covering personal info, medical history, insurance, and HIPAA consent
- [ ] [P] Build `IntakeForm` client component: 4-step UI with step indicator, "Next"/"Back"/"Submit" buttons, data preserved across steps, HIPAA notice, unchecked consent checkbox
- [ ] [P] Build `submitIntake` Server Action: validate full schema, sanitize, rate limit (1 per 60 seconds), send email, return result
- [ ] [P] Write integration tests for `submitIntake`: valid full submission → success, incomplete step → validation error, rate limit fires
- [ ] [P] Create `src/app/patient-center/intake/page.tsx`: renders `IntakeForm`, `noindex` metadata, per-route `error.tsx`
- [ ] [P] Add a link to the online intake form from the Patient Center forms section
- [ ] [P] Update `sitemap.xml` to exclude `/patient-center/intake`; update `robots.txt` to disallow `/patient-center/intake`
- [ ] [P] Write E2E test `e2e/intake.spec.ts`: step navigation works, data preserved on "Back", successful submission shows confirmation

### 7.3 FAQ chatbot widget

- [ ] Create `src/data/chatbotFaqs.ts`: typed array of at least 15 FAQ entries covering: hours, address, insurance, new patient process, auto accidents, appointment booking, forms, what to bring, Medicare, Horizon BC/BS, chiropractic explanation, cost, weekend availability, referral requirements, cancellation policy
- [ ] [P] Add all chatbot FAQ entries to `messages/en.json` and `messages/es.json`
- [ ] [P] Build `src/lib/chatbotMatcher.ts`: pure function `matchFaq(input, faqs)` → `FaqEntry | null` using keyword/topic matching
- [ ] [P] Write unit tests for `chatbotMatcher`: exact match, partial keyword match, no match returns null
- [ ] Build `ChatbotWidget` client component: floating button, chat panel, greeting that identifies it as automated, topic prompts, matched answer or fallback with "Call us" and "Book appointment" links, no external API calls
- [ ] [P] Add `ChatbotWidget` to the root layout via dynamic import (client-only, SSR disabled)
- [ ] [P] Write E2E test `e2e/chatbot.spec.ts`: chatbot opens, FAQ question answered, unknown question shows fallback with call link
- [ ] [P] Verify chatbot loads via `next/dynamic` (client-only, SSR disabled)

**Phase 7 Gate**: AC-11 (intake form) ✅ · AC-12 (chatbot) ✅ · AC-13 (dark mode) ✅

---

## Task Summary

| Phase | Focus | Gate |
|-------|-------|------|
| 1 – Project Setup | Tooling, config, security headers, build pipeline | Build passes, lint clean, headers on localhost |
| 2 – Core Pages | All pages, layout, content, i18n, shared components | All pages render EN/ES, mobile-responsive, no a11y violations |
| 3 – Forms and Contact | All forms, Server Actions, rate limiting, email delivery | Forms submit, invalid inputs rejected, email delivered |
| 4 – Styling and UX | Polish, motion compliance, accessibility, SEO, performance | Lighthouse ≥ 90, zero a11y violations |
| 5 – Testing | E2E tests, security verification, cross-browser check | All tests pass, audit clean, headers grade A |
| 6 – Deployment | Staging, final verification, launch checklist | Launch checklist done, staging verified |
| 7 – Future Enhancements | Dark mode, online intake form, FAQ chatbot | AC-11/12/13 pass |

---

**Version**: 2.0.0 | **Created**: 2026-03-05 | **Last Updated**: 2026-03-05

> This is a development roadmap. It defines what to build and in what order.
> For product requirements, see `spec.md`. For architecture decisions, see `plan.md`.
