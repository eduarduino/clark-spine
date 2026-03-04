/**
 * Client-side input sanitization and validation utilities.
 *
 * IMPORTANT: These are defense-in-depth protections for the UI layer.
 * Any backend / serverless endpoint that receives form data MUST
 * independently validate and sanitize all inputs server-side.
 */

/**
 * Strip HTML tags and characters that could enable XSS,
 * then trim surrounding whitespace.
 * React already escapes JSX output, but we sanitize before
 * storing state so nothing unsafe ever enters the data layer.
 *
 * @param {unknown} value
 * @returns {string}
 */
export function sanitizeText(value) {
  return String(value ?? '')
    .replace(/<[^>]*>/g, '')          // strip full HTML tags
    .replace(/[<>"'`]/g, '')          // strip remaining injection chars
    .replace(/javascript:/gi, '')     // block javascript: URIs
    .replace(/on\w+\s*=/gi, '')       // strip inline event handlers
    .trim()
}

/**
 * Same as sanitizeText but does NOT trim surrounding whitespace.
 * Use this in onChange handlers so users can type spaces mid-string
 * (e.g. typing a first name then a space before moving to the next field).
 * sanitizeText (with trim) is still used at validation/submission time.
 *
 * @param {unknown} value
 * @returns {string}
 */
export function sanitizeInput(value) {
  return String(value ?? '')
    .replace(/<[^>]*>/g, '')          // strip full HTML tags
    .replace(/[<>"'`]/g, '')          // strip remaining injection chars
    .replace(/javascript:/gi, '')     // block javascript: URIs
    .replace(/on\w+\s*=/gi, '')       // strip inline event handlers
}

/**
 * Enforce a maximum character length after sanitization.
 * @param {string} value
 * @param {number} max
 * @returns {string}
 */
export function truncate(value, max) {
  return String(value ?? '').slice(0, max)
}

/**
 * Validate an email address (practical RFC 5322 subset).
 * @param {string} value
 * @returns {boolean}
 */
export function isValidEmail(value) {
  return /^[^\s@]{1,64}@[^\s@]{1,253}\.[^\s@]{2,}$/.test(String(value).trim())
}

/**
 * Dynamically format a US phone number as the user types.
 * Strips non-digits, caps at 10 digits, then wraps in (XXX) XXX-XXXX pattern.
 *
 * Examples:
 *   '9'          → '(9'
 *   '908'        → '(908'
 *   '9084'       → '(908) 4'
 *   '9084979'    → '(908) 497-9'
 *   '9084979440' → '(908) 497-9440'
 *
 * @param {unknown} value  - raw input value (may contain existing formatting)
 * @returns {string}  formatted phone string
 */
export function formatPhone(value) {
  const digits = String(value ?? '').replace(/\D/g, '').slice(0, 10)
  if (digits.length === 0) return ''
  if (digits.length <= 3)  return `(${digits}`
  if (digits.length <= 6)  return `(${digits.slice(0, 3)}) ${digits.slice(3)}`
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
}

/**
 * Extract only the digit characters from a (possibly formatted) phone string.
 * @param {unknown} value
 * @returns {string}
 */
export function phoneDigits(value) {
  return String(value ?? '').replace(/\D/g, '')
}

/**
 * Strip everything from a phone field that isn't a digit or common
 * formatting character (spaces, dashes, dots, parentheses, leading +).
 * Use this in the onChange handler for phone inputs so non-numeric
 * characters are rejected as the user types.
 *
 * @param {unknown} value
 * @returns {string}
 */
export function sanitizePhone(value) {
  return String(value ?? '')
    .replace(/[^0-9\s\-()+.]/g, '') // keep only digit-safe phone chars
    .slice(0, 20)                    // enforce max length
}

/**
 * Validate a US phone number — requires exactly 10 digits.
 * This field is mandatory; empty string is NOT valid.
 * @param {string} value  - may be formatted e.g. "(908) 497-9440"
 * @returns {boolean}
 */
export function isValidPhone(value) {
  return phoneDigits(value).length === 10
}

/**
 * Validate a human name: at least 2 printable characters, no HTML.
 * @param {string} value
 * @returns {boolean}
 */
export function isValidName(value) {
  const s = sanitizeText(value)
  return s.length >= 2 && s.length <= 120
}

/**
 * Validate a single name component (first or last name).
 * Must be 2–50 characters of letters, spaces, hyphens, or apostrophes.
 * Accepts accented/international characters.
 * @param {string} value
 * @returns {boolean}
 */
export function isValidPersonName(value) {
  const s = String(value ?? '').trim()
  return s.length >= 2 && s.length <= 50 && /^[A-Za-z\u00C0-\u024F'\- ]+$/.test(s)
}

/**
 * Check whether a new form submission is allowed based on a cooldown
 * stored in localStorage. Prevents rapid repeated submissions.
 *
 * @param {string} storageKey  - unique key per form (e.g. 'contact_last_submit')
 * @param {number} cooldownMs  - minimum milliseconds between submissions (default 60 s)
 * @returns {{ canSubmit: boolean, remainingSeconds: number }}
 */
export function checkRateLimit(storageKey, cooldownMs = 60_000) {
  try {
    const last = parseInt(localStorage.getItem(storageKey) ?? '0', 10)
    const elapsed = Date.now() - last
    if (elapsed < cooldownMs) {
      return { canSubmit: false, remainingSeconds: Math.ceil((cooldownMs - elapsed) / 1000) }
    }
  } catch {
    // localStorage unavailable (private browsing, etc.) — allow submission
  }
  return { canSubmit: true, remainingSeconds: 0 }
}

/**
 * Record the current timestamp as the last submission time.
 * Call this immediately after a successful submit.
 * @param {string} storageKey
 */
export function recordSubmission(storageKey) {
  try {
    localStorage.setItem(storageKey, String(Date.now()))
  } catch {
    // localStorage unavailable — fail silently
  }
}
