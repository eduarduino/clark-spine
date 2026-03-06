# spec.md

Role: Product Manager

Responsibility:
Define exactly what the application does from a user perspective.

Must Define:
- product overview
- business goals
- user types
- feature list
- page requirements
- user flows
- inputs and outputs
- validation rules
- edge cases
- acceptance criteria

Must NOT Define:
- architecture
- technology stack
- engineering tasks

---

# Clark Spine and Pain Relief — Product Specification

> **Garabo Chiropractic Health Center, PC** · Dr. James Garabo, DC · Clark, NJ
> This document defines what the website does and how it should behave from a patient's perspective.
> It is a product document — not a technical one.

---

## Product Overview

Clark Spine and Pain Relief is the patient-facing website for Dr. James Garabo's chiropractic practice in Clark, New Jersey. The practice has operated since 1991 and specializes in pain relief without medication, with particular expertise in auto accident injury care.

The website serves as the primary digital entry point for new and returning patients. It must clearly communicate what the practice does, establish the doctor's credibility, and make it as easy as possible for a patient to get in touch or request an appointment.

The site is available in English (default) and Spanish, and must work equally well on a phone as it does on a desktop.

---

## Business Goals

1. **Generate new patient leads** — a prospective patient who visits the site should be able to request an appointment or call the office within seconds.
2. **Build trust and credibility** — the site must make it immediately clear that Dr. Garabo is qualified, experienced, and focused on patient outcomes.
3. **Reduce administrative friction** — patients can access office information, hours, insurance details, and intake forms without calling.
4. **Capture auto accident referrals** — a dedicated page targets patients injured in car accidents, who represent high-value leads.
5. **Serve Spanish-speaking patients** — the entire site is available in Spanish, with no degraded experience.

---

## User Types

### Primary: Prospective Patient (New Patient)
A person experiencing pain or discomfort who is researching chiropractors. They may have found the site through a search engine, a referral, or a social media link. They need to:
- Understand what the practice offers
- Feel confident in the doctor's credentials
- Know how to get in touch or book an appointment

This user is often on a mobile device. They may be in pain. Their time and patience are limited.

### Secondary: Auto Accident Patient
A person injured in a car accident — or their family member — searching urgently for a trauma-qualified chiropractor. They need immediate reassurance that the practice handles their type of injury and is available.

### Tertiary: Existing Patient
A patient who has already visited the practice and returns to the site for information: office hours, contact details, intake forms, or directions.

### Tertiary: Spanish-Speaking Patient
Any of the above users who prefer to read and interact with the site in Spanish. They must receive an experience of identical quality to the English version.

---

## Feature List

| # | Feature | Priority | Description |
|---|---------|----------|-------------|
| 1 | Mobile call button | Must Have | A persistent call-to-action button on mobile that dials the office with one tap |
| 2 | Appointment request form | Must Have | A form where patients submit their preferred time, reason, and contact info |
| 3 | Contact form | Must Have | A general-purpose contact form for questions and messages to the practice |
| 4 | Service descriptions | Must Have | Clear descriptions of conditions treated and treatments offered |
| 5 | Doctor credentials display | Must Have | Dr. Garabo's credentials, bio, and photo prominently displayed |
| 6 | Office information | Must Have | Address, phone numbers, hours, and directions always accessible |
| 7 | Insurance information | Must Have | List of accepted insurance carriers |
| 8 | Patient intake forms | Must Have | Downloadable PDF intake forms for new patients |
| 9 | Auto accidents page | Must Have | Dedicated page for accident victims with urgency and process information |
| 10 | Mobile-friendly navigation | Must Have | A navigation menu that works cleanly on small screens |
| 11 | English / Spanish toggle | Must Have | Language switcher that persists across the session and on return visits |
| 12 | Google Maps embed | Should Have | Embedded map on the contact page showing the office location |
| 13 | Online intake form | Should Have | A multi-step online version of the patient intake form |
| 14 | FAQ chatbot | Should Have | An automated FAQ assistant for common patient questions |
| 15 | Dark mode | Should Have | A dark color scheme that respects the user's OS preference |


> **v1.0 scope**: Should Have features — online intake form (#13), FAQ chatbot (#14), and dark mode (#15) — are out of scope for v1.0 and will be addressed in a future release. Implement Must Have features first.

---

## Page Requirements

---

### Homepage (`/`)

**Purpose**: First impression and conversion gateway. A patient should understand the practice's core offer, feel confident in the doctor's qualifications, and know how to take the next step — all within seconds of arriving.

**Required Sections**:

1. **Hero**
  - Headline communicating the core offer: pain relief without medication
  - Doctor's name and credentials (Trauma Qualified, Palmer Graduate)
  - Trust indicators: years in practice, founding year, educational background
  - Insurance trust indicators: Medicare, Horizon BC/BS, Auto Accident Specialist
  - One primary call to action: "Book an Appointment" (links to `/appointment`)
  - One secondary call to action: "View Services" (links to `/services`)

2. **Services Preview**
  - A brief overview of the top services offered
  - Each item links to the full Services page

3. **Testimonials**
  - At least three patient testimonials in a readable, trust-building format

4. **Call to Action Banner**
  - A final prompt to book an appointment before the footer
  - Phone number and booking link both visible

**Behavior**:
- On all pages on mobile viewports, a persistent call button is fixed at the bottom of the screen and dials (908) 497-9440
- "Book an Appointment" in the hero navigates to `/appointment`

---

### Services Page (`/services`)

**Purpose**: Help a patient understand what conditions are treated and what to expect from treatment. Supports trust-building and conversion.

**Required Sections**:

1. **Category Navigation**
  - Three categories: Conditions Treated, Treatments Offered, Office Services
  - Clicking a category scrolls the page to that section

2. **Conditions Treated**
  - At minimum: Back Pain, Neck Pain, Sciatica, Herniated Disc, Auto Accident Injuries, Headaches, Shoulder Pain, Knee Pain
  - Each condition displays a name and a brief description

3. **Treatments Offered**
  - At minimum: Chiropractic Adjustment, Physical Therapy, Traction, Electrical Stimulation, Ultrasound, Massage Therapy
  - Each treatment displays a name and a description of what it involves

4. **Office Services**
  - On-site X-Ray, Insurance Accepted, Workers' Compensation, No-Fault Claims

5. **Call to Action Banner**
  - A prompt at the bottom of the page to book an appointment

**Behavior**:
- Category navigation anchors scroll smoothly to the correct section
- On mobile, content stacks vertically; the category nav scrolls horizontally if needed

---

### About Page (`/about`)

**Purpose**: Build trust with a patient who wants to vet Dr. Garabo's qualifications and background before booking.

**Required Content**:

1. **Doctor Introduction**
  - Dr. James Garabo's photo
  - Full name and title: Dr. James Garabo, DC
  - Visible credential tags: "Trauma Qualified", "Palmer Graduate", "35+ Years", "Est. 1991"

2. **Biography**
  - A written bio covering: Palmer College graduation, Trauma Qualification, founding year 1991, focus on non-medication pain relief

3. **Credential Highlights**
  - Two highlighted credential items with brief explanations:
    - Palmer College of Chiropractic
    - Trauma Qualified certification

4. **Contact Info Block**
  - Address: 118 Westfield Avenue, Suites 3 & 4, Clark, NJ 07066
  - Phone: (908) 497-9440 (tappable)
  - Mobile: (908) 797-0077 (tappable)
  - Email: garabochiro@gmail.com (linked)

5. **Call to Action Banner**

---

### Appointment Request Page (`/appointment`)

**Purpose**: Allow a patient to request an appointment. This is the primary lead-generation mechanism on the site.

**Required Form Fields**:

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| First Name | Text | Yes | |
| Last Name | Text | Yes | |
| Email Address | Email | Yes | |
| Phone Number | Phone | Yes | |
| Preferred Date | Date picker | No | Must be a future date if provided |
| Preferred Time | Select | No | Options: Morning, Afternoon, Any |
| Reason for Visit | Select | Yes | Options: Back Pain, Neck Pain, Auto Accident, New Patient, Other |
| Insurance Provider | Text | No | |
| Additional Notes | Textarea | No | |
| Privacy Consent | Checkbox | Yes | Must default to unchecked |

**Privacy Notice**:
A plain-language statement appears above the submit button: submitted information will be used only to schedule an appointment and will not be shared or stored beyond that operational purpose.

**Submission Behavior**:
- **Success**: Form clears. Confirmation message: "We've received your request and will contact you shortly to confirm your appointment."
- **Validation error**: Inline error messages appear next to each invalid field. Form does not submit.
- **Server error**: Generic message: "Something went wrong. Please call us directly at (908) 497-9440." No system details exposed.
- **Rate limit exceeded**: "Please wait before submitting again." Submission is blocked.

---

### Contact Page (`/contact`)

**Purpose**: Give patients every way to reach the practice and capture general inquiries via form.

**Required Sections**:

1. **Contact Form** (see field table below)

2. **Office Information**
  - Practice Name: Clark Spine and Pain Relief / Garabo Chiropractic Health Center, PC
  - Address: 118 Westfield Avenue, Suites 3 & 4, Clark, NJ 07066 (linked to directions)
  - Phone: (908) 497-9440 (tappable)
  - Mobile: (908) 797-0077 (tappable)
  - Fax: (908) 497-9442
  - Email: garabochiro@gmail.com (linked)

3. **Office Hours**

  | Day | Hours |
  |-----|-------|
  | Monday | 8:30 AM – 6:00 PM |
  | Tuesday | 8:30 AM – 12:30 PM |
  | Wednesday | 8:30 AM – 6:00 PM |
  | Thursday | Closed |
  | Friday | 8:30 AM – 6:00 PM |
  | Saturday | 8:30 AM – 12:00 PM |
  | Sunday | Closed |

4. **Google Maps Embed**
  - Map centered on 118 Westfield Avenue, Clark, NJ 07066
  - "Get Directions" link opens Google Maps in a new tab
  - If the map fails to load: address shown as plain text with a directions link — no blank or broken area displayed

**Contact Form Fields**:

| Field | Type | Required |
|-------|------|----------|
| First Name | Text | Yes |
| Last Name | Text | Yes |
| Email Address | Email | Yes |
| Phone Number | Phone | No |
| Subject | Text | No |
| Message | Textarea | Yes |

**Privacy Notice**: A plain-language statement appears above the submit button: submitted information will be used only to respond to the patient's inquiry and will not be shared or stored beyond that purpose.

**Submission Behavior**: Same as the Appointment form — success confirmation, inline validation errors, generic server error message, rate limiting (1 submission per 60 seconds).

---

### Auto Accidents Page (`/auto-accidents`)

**Purpose**: Serve patients injured in car accidents. Conversion-focused and urgency-driven. Visitors are often in acute pain or acting on behalf of an injured family member.

**Required Sections**:

1. **Hero**
  - Headline emphasizing trauma expertise
  - "MVA Specialist" or equivalent trust badge
  - One primary CTA: "Book an Appointment" (links to `/appointment`)
  - One secondary CTA: direct phone number call action

2. **Why Act Fast**
  - Three urgency cards explaining why prompt care matters after an accident
  - Each card has a title and a two-to-three sentence explanation

3. **Common Auto Accident Injuries**
  - At least six injury types with name and brief description
  - Must include: Whiplash, Herniated Disc, Soft Tissue Injuries, Radiculopathy, Post-Accident Headaches, Spinal Subluxation

4. **Our Process**
  - Four steps: Contact Us → Initial Evaluation → Personalized Treatment Plan → Recovery and Follow-Up

5. **Call to Action Banner**

---

### Patient Center Page (`/patient-center`)

**Purpose**: Help new patients prepare for their first visit and give existing patients access to forms and information.

**Required Sections**:

1. **What to Expect**
  - A numbered step sequence describing the new patient experience from first contact through follow-up

2. **Downloadable Forms**
  - At minimum four downloadable PDF forms:
    - New Patient Intake Form
    - Medical History Form
    - Insurance Information Form
    - HIPAA Notice and Acknowledgment
  - Fax number `(908) 497-9442` displayed for patients who prefer to fax completed forms

3. **FAQ Accordion**
  - At least eight Q&A pairs, expandable on click
  - Topics must include: what to bring to the first visit, insurance questions, what an adjustment involves, cancellation policy, accepted insurance plans

4. **Accepted Insurance**
  - Medicare
  - Horizon Blue Cross Blue Shield (Tier 1)
  - Inner Circle / Hackensack Meridian employees
  - Note to call and verify specific plan coverage

---

## User Flows

### Flow 1: New Patient Books an Appointment (Mobile)

1. Patient lands on `/` from a search result
2. Patient reads the hero and sees doctor credentials
3. Patient taps "Book an Appointment"
4. Patient is taken to `/appointment`
5. Patient fills in their name, phone, reason for visit, and checks the consent checkbox
6. Patient submits the form
7. Patient sees a confirmation message
8. The practice receives an email with the appointment request details

### Flow 2: Auto Accident Patient Calls the Office

1. Patient lands on `/auto-accidents`
2. Patient reads the hero and sees the MVA Specialist badge and urgency content
3. Patient taps the phone CTA in the hero
4. Patient's phone dialer opens with the office number pre-filled

### Flow 3: Patient Researches Services Then Books

1. Patient lands on `/`
2. Patient taps "View Services"
3. Patient navigates to `/services` and reads about their condition
4. Patient taps the CTA banner at the bottom
5. Patient is taken to `/appointment`

### Flow 4: Patient Gets Directions

1. Patient visits `/contact`
2. Patient sees the address and map
3. Patient taps "Get Directions"
4. Google Maps opens with directions to 118 Westfield Avenue, Clark, NJ 07066

### Flow 5: Spanish-Speaking Patient Uses the Site

1. Patient sees the language toggle in the navigation
2. Patient taps to switch to Spanish
3. All content switches to Spanish immediately
4. Patient navigates to other pages — Spanish persists
5. Patient returns later — Spanish preference is remembered

### Flow 6: New Patient Downloads an Intake Form

1. Patient visits `/patient-center`
2. Patient finds the forms section
3. Patient taps "Download" on the desired form card
4. A PDF downloads to their device

---

## Inputs and Outputs

### Appointment Request Form

**Input**: First Name, Last Name, Email, Phone, Preferred Date, Preferred Time, Reason for Visit, Insurance Provider, Notes, Privacy Consent

**Output**:
- Patient sees: a confirmation message on the page
- Practice receives: an email with all submitted fields, timestamped, no system metadata included

### Contact Form

**Input**: First Name, Last Name, Email, Phone (optional), Subject (optional), Message

**Output**:
- Patient sees: a confirmation message
- Practice receives: an email with all submitted fields

### Language Toggle

**Input**: User selects "ES" or "EN" in the navigation

**Output**: All user-visible text switches to the selected language immediately. Preference is saved and persists on return visits.

---

## Validation Rules

### All Forms

| Rule | Behavior |
|------|----------|
| Required field left blank | Inline error appears on submit or on blur. Form does not submit. |
| Email format invalid | Inline error: "Please enter a valid email address." |
| Phone format invalid | Inline error: "Please enter a valid phone number." |
| Preferred date is in the past | Inline error: "Please select a future date." |
| Privacy consent unchecked | Inline error or disabled submit: "Please agree to the privacy notice to continue." |
| Submission within 60-second window | Error: "Please wait before submitting again." |
| Server-side validation fails | Generic error message. No system details exposed. |
| Field exceeds character limit | Inline error with character count shown. Limit enforced client-side and server-side. |

### Character Limits

| Field | Maximum |
|-------|---------|
| First Name | 50 characters |
| Last Name | 50 characters |
| Email | 254 characters |
| Phone | 20 characters |
| Subject | 100 characters |
| Message / Notes | 1,000 characters |
| Insurance Provider | 100 characters |

> **Rate-limit window**: The 60-second submission window applies uniformly to all v1.0 forms. The same window will apply to the online patient intake form when it is implemented in v2.0.

---

## Edge Cases

| Scenario | Expected Behavior |
|----------|-------------------|
| Patient submits a form with JavaScript disabled | Page displays a message to call (908) 497-9440 directly |
| Google Maps fails to load | Plain-text address and a direct Google Maps link shown — no blank iframe |
| Doctor photo fails to load | Alt text "Dr. James Garabo, DC" shown — no broken image icon |
| Patient double-taps the submit button | Submit button is disabled after the first tap; only one submission is processed |
| Language cookie is expired or invalid | Site defaults to English without crashing |
| Patient navigates to an unknown URL | Branded 404 page shown with a link back to the homepage |
| Unhandled server error | Branded error page shown — never a raw error screen |
| Form submission fails mid-send | Form stays in place with patient's data visible; generic error message with phone number shown |
| Page viewed on 320px viewport | No horizontal scrolling; all content is readable |
| Page used via screen reader | All fields are labeled, all errors are announced, all interactions are keyboard-operable |
| User has `prefers-reduced-motion` enabled | All non-essential motion effects are disabled; layout and content are unaffected |

---

## Acceptance Criteria

### AC-01: Homepage loads and converts

- [ ] Homepage loads on a 375px mobile browser
- [ ] Doctor's name and at least two credentials are visible above the fold
- [ ] "Book an Appointment" button is visible above the fold
- [ ] Tapping "Book an Appointment" navigates to `/appointment`
- [ ] Persistent call button is visible at the bottom of the screen on mobile
- [ ] Tapping the call button dials (908) 497-9440

### AC-02: Services page displays all categories

- [ ] Three categories render: Conditions Treated, Treatments Offered, Office Services
- [ ] Clicking a category nav link scrolls to the correct section
- [ ] At least eight conditions are listed with descriptions
- [ ] At least six treatments are listed with descriptions
- [ ] A booking CTA is visible at the bottom of the page

### AC-03: About page establishes trust

- [ ] Dr. Garabo's photo appears
- [ ] "Trauma Qualified" and "Palmer Graduate" are both visible
- [ ] "35+ Years" and "Est. 1991" appear as trust indicators
- [ ] Phone number, address, and email are all visible and tappable
- [ ] Phone number links to `tel:9084979440`

### AC-04: Appointment form works end-to-end

- [ ] All required fields are clearly labeled
- [ ] Submitting with a blank required field shows an inline error
- [ ] Submitting with an invalid email shows an inline error
- [ ] Privacy consent checkbox defaults to unchecked
- [ ] Privacy notice text is visible above the submit button
- [ ] Submitting without consent is blocked
- [ ] A valid submission shows a confirmation message
- [ ] A second submission within 60 seconds shows a rate-limit error
- [ ] No system details appear in any error message

### AC-05: Contact page provides complete office information

- [ ] Contact form is visible and validates correctly
- [ ] Full office address is displayed
- [ ] Both phone numbers are displayed and tappable
- [ ] Fax number is displayed
- [ ] Complete office hours shown for all seven days
- [ ] Google Maps embed or its fallback address block is visible
- [ ] A second submission within 60 seconds shows a rate-limit error
- [ ] Privacy notice is visible above the contact form submit button

### AC-06: Auto Accidents page drives urgency

- [ ] Hero shows a trauma specialist badge, one primary CTA, and one secondary CTA
- [ ] At least three urgency cards in the "Why Act Fast" section
- [ ] At least six injury types listed
- [ ] A four-step process is displayed

### AC-07: Spanish experience is complete

- [ ] Toggling to Spanish switches all page text immediately
- [ ] Navigation, form labels, error messages, and hours are in Spanish
- [ ] Navigating to another page — it also renders in Spanish
- [ ] Refreshing — Spanish is still active
- [ ] No English strings visible while in Spanish mode
- [ ] Inline form validation errors and rate-limit messages display in Spanish when locale is ES

### AC-08: Site is usable on mobile

- [ ] No horizontal scrolling on any page at 375px
- [ ] All tap targets are easily activatable (minimum 44×44px)
- [ ] Navigation menu is reachable and closable on mobile
- [ ] Forms are fillable without zooming

### AC-09: Accessibility baseline is met

- [ ] All images have descriptive alt text or empty alt for decorative images
- [ ] All form fields have visible labels
- [ ] All error messages are associated with their field
- [ ] All interactive elements are keyboard-operable
- [ ] Focus is always visually visible when using keyboard navigation
- [ ] A skip-to-main-content link is present on every page

### AC-10: Patient Center provides necessary resources

- [ ] "What to Expect" steps are displayed
- [ ] At least four downloadable form cards are shown with working download links
- [ ] FAQ accordion has at least eight entries that expand and collapse
- [ ] Accepted insurance list includes Medicare and Horizon BC/BS

> **AC-11 through AC-13 are deferred to v2.0.** They correspond to the three Should Have features that are out of scope for v1.0.

### AC-11: Online intake form works end-to-end

- [ ] Step navigation advances and retreats without losing previously entered data
- [ ] Submitting with a required field blank prevents progression to the next step
- [ ] HIPAA consent checkbox is present on the final step and defaults to unchecked
- [ ] Submitting without HIPAA consent is blocked
- [ ] A valid full submission shows a confirmation message
- [ ] A second submission within 60 seconds shows a rate-limit error
- [ ] The page is marked `noindex` and does not appear in the sitemap

### AC-12: FAQ chatbot widget is functional

- [ ] The chatbot widget is visible on all pages as a floating element
- [ ] Opening the widget shows a greeting that identifies it as automated
- [ ] Typing or selecting a topic returns a relevant FAQ answer
- [ ] An unrecognized input returns a fallback message containing the office phone number and a booking link
- [ ] The widget does not make any external API calls
- [ ] The widget renders correctly on a 375px mobile viewport
- [ ] Spanish locale: all widget messages display in Spanish

### AC-13: Dark mode is correct and stable

- [ ] Dark mode activates automatically when the user's OS preference is dark
- [ ] Toggling dark/light mode via the UI control changes the theme immediately
- [ ] The theme preference persists across page navigation and browser refresh
- [ ] No flash of incorrect theme on initial page load
- [ ] All text meets minimum contrast ratios in dark mode
- [ ] The toggle is keyboard-operable and has a visible focus state

---

**Version**: 2.0.0 | **Created**: 2026-03-05 | **Last Updated**: 2026-03-05

> This is a product document. It defines what the site does and how it behaves from a patient's perspective.
> For architecture decisions, see `plan.md`. For implementation tasks, see `tasks.md`.
