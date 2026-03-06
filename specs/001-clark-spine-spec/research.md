# Phase 0 Research — Clark Spine and Pain Relief

## Decision 1: Rendering Strategy
- Decision: Use Next.js App Router server-rendered pages with selective client components for interactive behavior.
- Rationale: Supports fast first contentful experience, SEO, and low complexity while still enabling interactive forms/navigation/toggles.
- Alternatives considered:
  - Full CSR SPA: rejected due to weaker first-load and SEO posture for a patient-acquisition site.
  - Static-only pages with no server actions: rejected because form flows require server-side validation and delivery.

## Decision 2: Form Validation and Submission Model
- Decision: Use React Hook Form + shared Zod schemas, then re-validate in server actions before sending email.
- Rationale: Gives immediate UX feedback and enforces trusted server validation with a single source of validation truth.
- Alternatives considered:
  - Client-only validation: rejected due to trust/security gaps.
  - Separate client/server schema implementations: rejected due to drift risk and maintenance overhead.

## Decision 3: Form Delivery and Data Retention
- Decision: Send submissions via Resend and do not persist submissions in a database.
- Rationale: Matches constitution privacy expectations (minimal retention, no long-term health-data storage) while meeting operational needs.
- Alternatives considered:
  - Database persistence: rejected for privacy/compliance burden and unnecessary complexity for v1.
  - Third-party form SaaS: rejected for reduced control over privacy guarantees.

## Decision 4: Abuse Protection
- Decision: Enforce server-side rate limiting with Upstash Redis (1 submission per 60 seconds) plus client-side UX guard.
- Rationale: Meets acceptance criteria and protects form endpoints under serverless execution.
- Alternatives considered:
  - In-memory per-instance limit: rejected because serverless instances do not share state.
  - CAPTCHA-first approach: rejected for added friction on high-intent patients.

## Decision 5: Internationalization Model
- Decision: Use next-intl with cookie-based locale (`NEXT_LOCALE`) without locale-prefixed URLs.
- Rationale: Preserves clean route structure, keeps bilingual parity, and matches plan constraints.
- Alternatives considered:
  - URL locale segments (`/es/...`): rejected to avoid URL expansion and routing complexity for v1.
  - Runtime auto-translate: rejected for quality/consistency risk in healthcare context.

## Decision 6: Security Baseline
- Decision: Apply security headers in `next.config.ts` plus `public/_headers`, sanitize all server-bound strings, and rely on same-origin server actions with explicit origin checks when needed.
- Rationale: Defense-in-depth with practical controls for a small no-auth site handling contact data.
- Alternatives considered:
  - Headers in a single layer only: rejected due to weaker resilience.
  - No centralized sanitization utility: rejected due to inconsistency risk.

## Decision 7: Accessibility Baseline
- Decision: Treat WCAG 2.1 AA as release gate including keyboard reachability, semantic structure, visible focus states, labeled fields, and reduced-motion compliance.
- Rationale: Constitution defines accessibility as non-negotiable and acceptance criteria explicitly test it.
- Alternatives considered:
  - Best-effort accessibility: rejected due to constitution conflict.

## Decision 8: Performance Budget and Asset Strategy
- Decision: Use Next image/font optimization, prioritize LCP doctor image, lazy-load non-critical embeds/scripts, and enforce lighthouse/core web vitals targets before launch.
- Rationale: Aligns with constitution performance expectations and mobile-first patient context.
- Alternatives considered:
  - Unoptimized static assets: rejected due to LCP/CLS risk.
  - Heavy third-party widgets in v1: rejected due to performance and privacy tradeoffs.

## Decision 9: Deployment and Release Safety
- Decision: Deploy via Vercel with preview deployments on feature branch and production cutover only after acceptance criteria verification.
- Rationale: Enables stakeholder validation and controlled migration from existing root app with minimal ops burden.
- Alternatives considered:
  - Immediate in-place replacement on main: rejected due to higher rollout risk.
  - Self-managed infra: rejected for unnecessary operational complexity.

## Clarifications Resolved
- Technical-context unknowns in this feature are resolved by the user-provided architecture plan; no remaining `NEEDS CLARIFICATION` items.
- v1 scope excludes online intake form, chatbot, and dark mode; these remain deferred to v2 as defined in spec/plan.

## Post-Design Constitution Check (Re-evaluated)
- Patient-first clarity: PASS (single primary CTAs and low-friction call/booking paths preserved)
- Trust and credibility: PASS (credentials/contact/accountability surfaced across key pages)
- Privacy discipline: PASS (minimum collection, explicit consent, no long-term health-data persistence)
- Accessibility baseline: PASS (WCAG 2.1 AA treated as release gate)
- Mobile/performance: PASS (mobile-first behavior and explicit performance budgets retained)
- Maintainability/non-goals: PASS (no portal/e-commerce/social/data-business expansion in v1)
