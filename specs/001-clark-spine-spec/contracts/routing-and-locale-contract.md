# Interface Contract: Routing, Locale, and Navigation Behavior (v1)

## Route Contract
The product exposes these user-facing routes:
- `/`
- `/about`
- `/services`
- `/auto-accidents`
- `/patient-center`
- `/appointment`
- `/contact`
- unknown routes -> branded not-found page

## Navigation Contract
- Mobile navigation must be operable on small viewports.
- Persistent mobile call action is available on mobile page views and dials `(908) 497-9440`.
- Primary CTA pathways:
  - Home hero -> `/appointment`
  - Home services preview -> `/services`
  - Service/auto-accident/patient-center CTAs -> `/appointment`

## Locale Contract
- URL paths remain locale-neutral (no locale segment in URL).
- Language selected via navigation toggle (`EN` / `ES`).
- Locale persistence:
  - Cookie key: `NEXT_LOCALE`
  - Supported values: `en`, `es`
  - Invalid/missing value fallback: `en`
- Locale must persist across page navigation and revisit.
- In Spanish mode, all user-visible strings including validation and error messages must be Spanish.

## Error/Fallback Contract
- Unknown URL: branded 404 with path back to homepage.
- Server-side failure: branded generic error state; no raw stack trace or sensitive details.
- Maps embed failure: plain-text address + direction link fallback; never blank panel.
