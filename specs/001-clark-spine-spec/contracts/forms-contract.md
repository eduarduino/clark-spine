# Interface Contract: Patient Form Submissions (v1)

## Scope
Public user-facing contract for appointment request and contact inquiry behavior as experienced by patients.

## Contract 1: Appointment Request Submission
- Route: `/appointment`
- Method: Server Action-backed form submit (no public REST endpoint exposed)
- Inputs:
  - `firstName` (required)
  - `lastName` (required)
  - `email` (required, valid email)
  - `phone` (required, valid phone)
  - `preferredDate` (optional, future date when present)
  - `preferredTime` (optional: `Morning|Afternoon|Any`)
  - `reasonForVisit` (required: `Back Pain|Neck Pain|Auto Accident|New Patient|Other`)
  - `insuranceProvider` (optional)
  - `additionalNotes` (optional)
  - `privacyConsent` (required true)
- Success response (UI contract):
  - Form clears.
  - Confirmation message shown: "We've received your request and will contact you shortly to confirm your appointment."
- Validation failure response:
  - Inline field errors; submission blocked.
- Rate-limit response:
  - Message: "Please wait before submitting again."
- Server failure response:
  - Message: "Something went wrong. Please call us directly at (908) 497-9440."
  - No internal error details exposed.

## Contract 2: Contact Inquiry Submission
- Route: `/contact`
- Method: Server Action-backed form submit (no public REST endpoint exposed)
- Inputs:
  - `firstName` (required)
  - `lastName` (required)
  - `email` (required, valid email)
  - `phone` (optional, valid when present)
  - `subject` (optional)
  - `message` (required)
- Success response (UI contract):
  - Confirmation message shown.
- Validation failure response:
  - Inline field errors; submission blocked.
- Rate-limit response:
  - Message: "Please wait before submitting again."
- Server failure response:
  - Generic fallback message with office phone number; no internal details.

## Shared Constraints
- Rate limit: max 1 submission per 60 seconds per client identity.
- Character limits:
  - First Name 50
  - Last Name 50
  - Email 254
  - Phone 20
  - Subject 100
  - Message/Notes 1000
  - Insurance Provider 100
- Privacy:
  - Submitted information used only for response/scheduling.
  - No long-term health-data storage.
- Security:
  - Server-side sanitization and schema validation required for all payloads.

## Localization Contract
- All labels, placeholders, inline errors, success messages, and rate-limit/server errors must be available in `en` and `es`.
- Active locale derives from `NEXT_LOCALE` cookie with fallback `en`.
