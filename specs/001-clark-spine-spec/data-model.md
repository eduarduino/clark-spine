# Data Model — Clark Spine and Pain Relief

## Overview
This feature set is intentionally no-database for v1. Entities below model runtime payloads, static content structures, and validation contracts required to satisfy form, bilingual, and page behavior requirements.

## Entity: AppointmentRequest
- Purpose: Represents a patient appointment request submission.
- Fields:
  - `firstName` (string, required, max 50)
  - `lastName` (string, required, max 50)
  - `email` (string, required, valid email, max 254)
  - `phone` (string, required, valid phone, max 20)
  - `preferredDate` (date string, optional, must be future date when present)
  - `preferredTime` (enum, optional: `Morning` | `Afternoon` | `Any`)
  - `reasonForVisit` (enum, required: `Back Pain` | `Neck Pain` | `Auto Accident` | `New Patient` | `Other`)
  - `insuranceProvider` (string, optional, max 100)
  - `additionalNotes` (string, optional, max 1000)
  - `privacyConsent` (boolean, required, must be `true`)
  - `submittedAt` (timestamp, server-generated)
- Validation rules:
  - Required fields must be present and non-empty.
  - Consent must default unchecked in UI and be true at submission.
  - Sanitization applied to all string fields server-side.
- State transitions:
  - `draft` -> `client_validated` -> `server_validated` -> `emailed` | `rejected_validation` | `rejected_rate_limit` | `error`.

## Entity: ContactInquiry
- Purpose: Represents a general patient contact submission.
- Fields:
  - `firstName` (string, required, max 50)
  - `lastName` (string, required, max 50)
  - `email` (string, required, valid email, max 254)
  - `phone` (string, optional, valid phone when present, max 20)
  - `subject` (string, optional, max 100)
  - `message` (string, required, max 1000)
  - `submittedAt` (timestamp, server-generated)
- Validation rules:
  - Required fields must be present and non-empty.
  - Sanitization applied to all string fields server-side.
- State transitions:
  - `draft` -> `client_validated` -> `server_validated` -> `emailed` | `rejected_validation` | `rejected_rate_limit` | `error`.

## Entity: RateLimitRecord (External Store)
- Purpose: Tracks submission attempts for abuse prevention.
- Backing store: Upstash Redis.
- Fields:
  - `key` (string, derived from route + client identity/IP)
  - `windowSeconds` (number, fixed 60)
  - `count` (number)
  - `expiresAt` (timestamp)
- Validation rules:
  - One allowed submission per key per 60-second window.
- State transitions:
  - `absent` -> `allowed` -> `limited` -> `expired`.

## Entity: LocalePreference
- Purpose: Tracks selected language for rendering.
- Fields:
  - `locale` (enum: `en` | `es`)
  - `cookieKey` (constant: `NEXT_LOCALE`)
  - `persistedAt` (client-side timestamp, optional)
- Validation rules:
  - Invalid or missing value falls back to `en`.
- State transitions:
  - `unset` -> `en|es` -> `invalid` -> `fallback_en`.

## Entity: PracticeProfile
- Purpose: Single source of truth for practice identity/contact constants.
- Fields (examples from spec):
  - `practiceName`
  - `doctorName`
  - `credentials[]`
  - `address`
  - `phonePrimary`
  - `phoneMobile`
  - `fax`
  - `email`
  - `hoursByDay`
- Validation rules:
  - Contact info must be consistent across nav/footer/contact/about/CTA contexts.

## Entity: PageContentBundle
- Purpose: Localized copy collections loaded via `next-intl`.
- Fields:
  - `locale` (`en` | `es`)
  - `namespace` (e.g., `hero`, `services`, `forms`, `errors`)
  - `messages` (key-value map)
- Validation rules:
  - English/Spanish parity required for all patient-visible strings and validation messages.

## Entity: DownloadableFormAsset
- Purpose: Represents a static patient intake PDF asset.
- Fields:
  - `id`
  - `title`
  - `filePath`
  - `mimeType` (`application/pdf`)
  - `available` (boolean)
- Validation rules:
  - At least four required assets present for patient center v1.
  - Broken/missing asset must surface graceful fallback messaging.

## Relationships
- `PageContentBundle` provides labels/errors for `AppointmentRequest` and `ContactInquiry` forms.
- `PracticeProfile` is referenced by all route views and all server error fallback messages.
- `RateLimitRecord` governs transition to `rejected_rate_limit` for both form entities.
- `LocalePreference` selects which `PageContentBundle` is active.
