import { useState, useCallback, useEffect } from 'react'
import { MapPin, Phone, Printer, Smartphone, Mail, CheckCircle } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import {
  sanitizeInput,
  formatPhone,
  isValidEmail,
  isValidPhone,
  isValidPersonName,
  checkRateLimit,
  recordSubmission,
} from '@/lib/sanitize'
import styles from './ContactPage.module.css'

// Field character limits
const LIMITS = { firstName: 50, lastName: 50, email: 254, phone: 14, subject: 120, message: 1500 }
// One submission per 60 seconds per browser session
const RATE_KEY = 'contact_last_submit'
const COOLDOWN_MS = 60_000
const EMPTY = { firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' }

export default function ContactPage() {
  const { t, lang } = useLanguage()
  const c = t.contact
  const dayKeys = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

  const [formData, setFormData]   = useState(EMPTY)
  const [errors, setErrors]       = useState({})
  const [touched, setTouched]     = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [rateError, setRateError] = useState('')

  // Re-translate any visible error messages when the language is toggled
  useEffect(() => {
    setErrors((prev) => {
      const next = {}
      Object.keys(prev).forEach((name) => {
        if (prev[name]) next[name] = validateField(name, formData[name])
      })
      return next
    })
  }, [lang]) // eslint-disable-line react-hooks/exhaustive-deps

  // Validate a single field and return an error string (or '')
  const validateField = useCallback((name, value) => {
    if (name === 'firstName') return isValidPersonName(value) ? '' : c.errors.firstName
    if (name === 'lastName')  return isValidPersonName(value) ? '' : c.errors.lastName
    if (name === 'email')     return isValidEmail(value)      ? '' : c.errors.email
    if (name === 'phone')     return isValidPhone(value)      ? '' : c.errors.phone
    if (name === 'message')   return value.trim().length >= 10 ? '' : c.errors.message
    return ''
  }, [c.errors])

  const handleChange = useCallback((e) => {
    const { name, value } = e.target
    // Phone: format dynamically as user types (digits only, max 10, US format)
    // Other fields: strip injection chars, hard-cap at field limit
    const clean = name === 'phone'
      ? formatPhone(value)
      : (name === 'firstName' || name === 'lastName')
        ? sanitizeInput(value).replace(/[^A-Za-z\u00C0-\u024F'\- ]/g, '').slice(0, LIMITS[name])
        : sanitizeInput(value).slice(0, LIMITS[name] ?? 500)
    setFormData((prev) => ({ ...prev, [name]: clean }))
    // Re-validate live once the field has been touched at least once
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, clean) }))
    }
  }, [touched, validateField])

  // Validate on blur so the user gets feedback as soon as they leave a field
  const handleBlur = useCallback((e) => {
    const { name, value } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }))
  }, [validateField])

  const validate = (data) => {
    const e = {}
    const fields = ['firstName', 'lastName', 'email', 'phone', 'message']
    fields.forEach((f) => {
      const msg = validateField(f, data[f])
      if (msg) e[f] = msg
    })
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setRateError('')

    // Rate limiting — prevent rapid repeated submissions
    const { canSubmit, remainingSeconds } = checkRateLimit(RATE_KEY, COOLDOWN_MS)
    if (!canSubmit) {
      setRateError(c.errors.rateLimit(remainingSeconds))
      return
    }

    // Mark all validated fields as touched so errors become visible
    setTouched({ firstName: true, lastName: true, email: true, phone: true, message: true })
    // Field validation
    const fieldErrors = validate(formData)
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors)
      document.getElementById(`c-${Object.keys(fieldErrors)[0]}`)?.focus()
      return
    }

    // Record submission for rate limiting
    recordSubmission(RATE_KEY)

    // TODO: POST formData to a backend/serverless endpoint.
    // All server-side endpoints must independently validate + sanitize inputs.
    // Never put API keys or secrets in this file — use env vars on the server only.

    setSubmitted(true)
  }

  const handleReset = () => {
    setFormData(EMPTY)
    setErrors({})
    setTouched({})
    setRateError('')
    setSubmitted(false)
  }

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <span className="section-tag">{c.tag}</span>
          <h1 className={styles.heroTitle}>{c.heroTitle}</h1>
          <p className={styles.heroSub}>{c.heroSub}</p>
        </div>
      </section>

      <section className={`section ${styles.contactSection}`}>
        <div className="container">
          <div className={styles.layout}>
            {/* Left: Info */}
            <div className={styles.infoCol}>
              <div className={styles.infoBlock}>
                <span className="section-tag">{c.ourLocation}</span>
                <h2 className={styles.infoTitle}>{c.locationTitle}</h2>
                <div className="divider"></div>

                <div className={styles.infoItems}>
                  <div className={styles.infoItem}>
                    <span className={styles.infoIcon} aria-hidden="true"><MapPin size={18} /></span>
                    <div>
                      <strong>{c.addressLabel}</strong>
                      <a
                        href="https://maps.google.com/?q=118+Westfield+Avenue+Clark+NJ+07066"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        118 Westfield Avenue, Suites 3 &amp; 4<br />
                        Clark, NJ 07066
                      </a>
                    </div>
                  </div>

                  <div className={styles.infoItem}>
                    <span className={styles.infoIcon} aria-hidden="true"><Phone size={18} /></span>
                    <div>
                      <strong>{c.phoneLabel}</strong>
                      <a href="tel:9084979440">(908) 497-9440</a>
                    </div>
                  </div>

                  <div className={styles.infoItem}>
                    <span className={styles.infoIcon} aria-hidden="true"><Printer size={18} /></span>
                    <div>
                      <strong>{c.faxLabel}</strong>
                      <span>(908) 497-9442</span>
                    </div>
                  </div>

                  <div className={styles.infoItem}>
                    <span className={styles.infoIcon} aria-hidden="true"><Smartphone size={18} /></span>
                    <div>
                      <strong>{c.cellLabel}</strong>
                      <a href="tel:9087970077">(908) 797-0077</a>
                    </div>
                  </div>

                  <div className={styles.infoItem}>
                    <span className={styles.infoIcon} aria-hidden="true"><Mail size={18} /></span>
                    <div>
                      <strong>{c.emailLabel}</strong>
                      <a href="mailto:garabochiro@gmail.com">garabochiro@gmail.com</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className={styles.hoursBlock}>
                <h3 className={styles.hoursTitle}>{c.officeHours}</h3>
                <ul className={styles.hoursList}>
                  {dayKeys.map((key) => (
                    <li key={key} className={c.times[key] === c.closed ? styles.closed : ''}>
                      <span>{c.days[key]}</span>
                      <span>{c.times[key]}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Map Embed */}
              <div className={styles.mapWrap}>
                <iframe
                  title="Garabo Chiropractic Health Center Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.0793!2d-74.2998815!3d40.6207108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3b3e808fa6533%3A0xc3fd405a8d8d388!2s118%20Westfield%20Ave%2C%20Clark%2C%20NJ%2007066!5e0!3m2!1sen!2sus!4v1700000000000"
                  width="100%"
                  height="220"
                  style={{ border: 0, borderRadius: 'var(--radius-lg)' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  sandbox="allow-scripts allow-same-origin allow-popups"
                ></iframe>
              </div>
            </div>

            {/* Right: Form */}
            <div className={styles.formCol}>
              <div className={styles.formCard}>
                {submitted ? (
                  <div className={styles.success}>
                    <CheckCircle size={48} color="#22c55e" aria-hidden="true" />
                    <h3>{c.successTitle}</h3>
                    <p>{c.successMsg}</p>
                    <button className="btn btn-primary" onClick={handleReset}>{c.sendAnotherBtn}</button>
                  </div>
                ) : (
                  <>
                    <h2 className={styles.formTitle}>{c.formTitle}</h2>
                    <p className={styles.formSub}>{c.formSub}</p>

                    {rateError && (
                      <p role="alert" style={{ color: 'var(--danger, #dc2626)', fontSize: '0.875rem', marginBottom: '1rem' }}>
                        {rateError}
                      </p>
                    )}

                    <form className={styles.form} onSubmit={handleSubmit} noValidate aria-label="Contact form">
                      <div className={styles.row2}>
                        <div className="form-group">
                          <label htmlFor="c-firstName">{c.firstNameLabel}</label>
                          <input
                            id="c-firstName" name="firstName" type="text"
                            placeholder={c.firstNamePlaceholder}
                            required maxLength={LIMITS.firstName} autoComplete="given-name"
                            value={formData.firstName} onChange={handleChange} onBlur={handleBlur}
                            aria-describedby={errors.firstName ? 'err-firstName' : undefined}
                            aria-invalid={touched.firstName ? (errors.firstName ? 'true' : 'false') : undefined}
                          />
                          {errors.firstName && <span id="err-firstName" role="alert" className={styles.fieldError}>{errors.firstName}</span>}
                        </div>
                        <div className="form-group">
                          <label htmlFor="c-lastName">{c.lastNameLabel}</label>
                          <input
                            id="c-lastName" name="lastName" type="text"
                            placeholder={c.lastNamePlaceholder}
                            required maxLength={LIMITS.lastName} autoComplete="family-name"
                            value={formData.lastName} onChange={handleChange} onBlur={handleBlur}
                            aria-describedby={errors.lastName ? 'err-lastName' : undefined}
                            aria-invalid={touched.lastName ? (errors.lastName ? 'true' : 'false') : undefined}
                          />
                          {errors.lastName && <span id="err-lastName" role="alert" className={styles.fieldError}>{errors.lastName}</span>}
                        </div>
                      </div>
                      <div className={styles.row2}>
                        <div className="form-group">
                          <label htmlFor="c-email">{c.emailLabel2}</label>
                          <input
                            id="c-email" name="email" type="email"
                            placeholder={c.emailPlaceholder}
                            required maxLength={LIMITS.email} autoComplete="email"
                            value={formData.email} onChange={handleChange} onBlur={handleBlur}
                            aria-describedby={errors.email ? 'err-email' : undefined}
                            aria-invalid={touched.email ? (errors.email ? 'true' : 'false') : undefined}
                          />
                          {errors.email && <span id="err-email" role="alert" className={styles.fieldError}>{errors.email}</span>}
                        </div>
                        <div className="form-group">
                          <label htmlFor="c-phone">{c.phoneLabel2}</label>
                          <input
                            id="c-phone" name="phone" type="tel"
                            placeholder="(908) 000-0000"
                            required maxLength={LIMITS.phone} autoComplete="tel"
                            value={formData.phone} onChange={handleChange} onBlur={handleBlur}
                            aria-describedby={errors.phone ? 'err-phone' : undefined}
                            aria-invalid={touched.phone ? (errors.phone ? 'true' : 'false') : undefined}
                          />
                          {errors.phone && <span id="err-phone" role="alert" className={styles.fieldError}>{errors.phone}</span>}
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="c-subject">{c.subjectLabel}</label>
                        <input
                          id="c-subject" name="subject" type="text"
                          placeholder={c.subjectPlaceholder}
                          maxLength={LIMITS.subject}
                          value={formData.subject} onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="c-message">{c.messageLabel}</label>
                        <textarea
                          id="c-message" name="message" rows="6"
                          placeholder={c.messagePlaceholder}
                          required maxLength={LIMITS.message}
                          value={formData.message} onChange={handleChange} onBlur={handleBlur}
                          aria-describedby={errors.message ? 'err-message' : undefined}
                          aria-invalid={touched.message ? (errors.message ? 'true' : 'false') : undefined}
                        />
                        {errors.message && <span id="err-message" role="alert" className={styles.fieldError}>{errors.message}</span>}
                        <span style={{ fontSize: '0.75rem', color: 'var(--gray-600)', float: 'right', marginTop: '0.2rem' }}>
                          {formData.message.length}/{LIMITS.message}
                        </span>
                      </div>
                      <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '1rem' }}>
                        {c.sendBtn}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
