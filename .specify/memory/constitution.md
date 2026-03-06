# constitution.md

Role: Product Philosopher

Responsibility:
Define the core principles and non-negotiable rules of the product.

Must Define:
- product mission
- guiding product principles
- UX philosophy
- trust and credibility principles
- privacy expectations
- accessibility standards
- performance expectations
- maintainability standards
- long term vision
- non goals

Must NOT Define:
- features
- architecture
- engineering tasks

---

# Clark Spine and Pain Relief — Product Constitution

> **Garabo Chiropractic Health Center, PC** · Dr. James Garabo, DC · Clark, NJ
> This document defines the enduring principles that govern what this product is,
> how it behaves, and what it will never become.
> It is a product document — not a technical one.

---

## Product Mission

Help patients in pain find, trust, and connect with Dr. James Garabo's chiropractic practice as quickly and confidently as possible.

Every page, every interaction, and every word on this site exists to serve one of three purposes:

1. **Inform** — help a patient understand their condition, the available treatments, and what to expect.
2. **Reassure** — demonstrate that this practice is experienced, qualified, and genuinely cares about patient outcomes.
3. **Connect** — make it effortless for a patient to call, book, or ask a question.

If something on the site does not serve at least one of these purposes, it does not belong here.

---

## Guiding Product Principles

### 1. The Patient Comes First
Every decision — visual, content, structural — is made from the perspective of a patient who may be in pain, anxious, or unfamiliar with chiropractic care. We do not design for aesthetics alone. We design for clarity, speed, and confidence.

### 2. Simplicity Is a Feature
This site should feel effortless. A first-time visitor should understand who Dr. Garabo is, what he treats, and how to get in touch within 30 seconds. Complexity is the enemy of conversion and trust.

### 3. Trust Is the Product
Patients are making a decision about their health. Every element of the site must earn and reinforce trust: credentials are visible, contact information is always accessible, claims are specific and honest. We never use vague language to sound impressive.

### 4. Mobile Is the Default
The majority of new patients will find this practice on a phone. The mobile experience is not a reduced version of the desktop experience — it is the primary experience. The desktop experience scales from it.

### 5. Speed Is Respect
A slow site tells a patient their time does not matter. Fast page loads are not a technical nicety — they are a direct expression of respect for the patient.

### 6. Content Owns the Design
The design serves the content, not the other way around. Copy, credentials, hours, services, and contact information take precedence over decorative elements. Visual flourishes are allowed only when they reinforce comprehension or trust — never when they compete with it.

### 7. Accessibility Is Non-Negotiable
A patient with a disability, limited vision, or reliance on assistive technology deserves the same experience as any other patient. Excluding any user is unacceptable.

---

## UX Philosophy

### One Clear Next Step
At every point on the site, there is one primary action the patient should take. The design makes that action obvious. We do not present competing calls to action at equal visual weight.

### No Friction for High-Intent Actions
Calling and booking are the two most important actions a patient can take. These must be reachable in the fewest possible taps or clicks. On mobile, the phone number is always one tap away — without scrolling, without searching.

### Progressive Disclosure
Patients have different information needs. Some want credentials first; others want services; others just need the phone number. The site presents the most essential information immediately and allows deeper exploration without forcing it.

### Honest Language
We do not use marketing language that overpromises. We do not use jargon that excludes. We write the way Dr. Garabo would speak to a patient in his office: clearly, warmly, and directly.

### Forms Are a Last Resort, Not a Barrier
Any form on this site exists to help the patient, not to capture data for its own sake. Forms are short, clearly labeled, and confirmed immediately. A patient who fills out a form must walk away knowing their message was received.

### Consistent, Calm Aesthetics
The visual experience should feel clean, professional, and calming — not clinical or cold. Color, spacing, and typography communicate that this is a trustworthy practice, not a faceless corporation. Patients in pain respond to warmth and clarity.

### Bilingual Without Compromise
Spanish-speaking patients receive an experience of identical quality to the English experience. There is no degraded or partial translation. Language is a signal of respect.

---

## Trust and Credibility Principles

### Credentials Must Be Specific and Prominent
Vague claims of experience are not trust signals. Dr. Garabo's credentials — Trauma Qualified, Palmer College graduate, 35+ years in practice, established 1991 — are specific, verifiable, and must appear where patients first form an impression of the practice.

### Social Proof Is Honest
Testimonials and trust indicators reflect genuine patient experiences. We do not fabricate, exaggerate, or selectively present feedback. Anonymization is applied appropriately to protect patient privacy.

### Contact Information Is Always Available
A patient should never have to search for the phone number, address, or hours. This information appears in the navigation, the footer, and wherever a patient is likely to make a decision. Hiding contact information to funnel patients into forms is forbidden.

### The Practice Is Accountable
The site presents the practice's full legal name, physical address, doctor's name, and credentials. There are no anonymous claims and no hidden affiliations. Patients can verify everything they read.

### Error States Are Honest
When something goes wrong — a form fails, a page cannot load — the patient is told directly and offered a clear alternative path (call, navigate back, try again). We never leave a patient in a broken state without guidance.

---

## Privacy Expectations

### Patient Data Is Handled With Gravity
Even basic contact information submitted via a form is treated as sensitive. The bar for what we collect, store, or transmit is set by: would a patient be comfortable if they knew exactly how this data is used?

### Collect Only What Is Necessary
Forms collect the minimum information required for the practice to respond or prepare for a patient's visit. We do not collect data speculatively.

### No Long-Term Storage of Health Information
Patient intake and appointment information is not retained on servers beyond the immediate operational need (transmission to the practice). Health-related data is never stored in a database or logged in plain text.

### Transparent by Default
Any form that collects patient information clearly states, in plain language, what will happen to that information. Privacy notices are written to be understood by a patient — not by a lawyer.

### Consent Is Always Active, Never Assumed
No patient consent is pre-checked. Patients opt in, not out. Electronic consent for intake or HIPAA acknowledgment is an explicit, deliberate action.

### No Tracking Without Purpose
We do not embed analytics or tracking tools for their own sake. Any measurement tool used must have a clear, stated purpose tied to improving the patient experience. Privacy-respecting analytics are preferred. Cookie consent banners are avoided by using tools that do not require them.

---

## Accessibility Standards

The site must be usable by every patient, including those with visual, motor, cognitive, or auditory differences.

### Minimum Standard
WCAG 2.1 Level AA compliance is the floor, not the ceiling. It is a non-negotiable baseline before any feature is considered complete.

### Specific Requirements
- All text meets minimum contrast ratios in both light and dark modes.
- All interactive elements are reachable and operable by keyboard alone.
- All images have meaningful alternative text; purely decorative images have empty alt attributes.
- All form fields are properly labeled; error messages are clear and associated with the relevant field.
- Focus states are always visible — removing the default focus ring without providing an equally visible replacement is not permitted.
- Page structure uses semantic, hierarchical HTML so screen readers can navigate meaningfully.
- A skip-to-main-content link is present on every page.
- Animations and transitions respect the user's `prefers-reduced-motion` setting.

### Cultural and Linguistic Accessibility
The bilingual experience (English and Spanish) is itself an accessibility requirement. It is not an optional enhancement.

---

## Performance Expectations

Performance is a patient experience metric, not an engineering metric. A patient on a mobile network in a moment of discomfort does not wait for a slow website.

### Non-Negotiable Targets
- The homepage must feel instantaneous. Perceived load time on mobile must be competitive with native apps.
- Large images — particularly the doctor's photo — must never delay the first meaningful content a patient sees.
- The site must function acceptably on a mid-range Android device on a 4G connection.
- Pages must not jump or shift after loading. Layout instability erodes trust.

### Philosophy
Performance budgets exist to protect the patient experience, not to satisfy audits. If a visual element or third-party integration cannot meet the performance targets, it does not belong in the product. No animation, widget, or design choice outweighs the patient's time.

---

## Maintainability Standards

This site serves a small, single-location practice. It must be maintainable by a small team — or a single developer — without heroic effort.

### Clarity Over Cleverness
Code and content structures are written to be understood by someone encountering them for the first time. Clever abstractions that save a few lines at the cost of comprehension are not welcome.

### Content Changes Must Be Easy
Updating office hours, phone numbers, or adding a new service should not require touching component logic. Content lives in a single, well-organized place.

### The Site Must Not Break Silently
Errors surface clearly during development. The product behaves predictably — errors are handled gracefully in production and never expose patients to broken states without guidance.

### Dependencies Are a Liability
Every added dependency is a future maintenance burden. A dependency is only introduced if it provides significant, irreplaceable value. The simplest solution that meets the product's requirements is always preferred.

### Documentation Is Part of the Work
A future maintainer must be able to understand the structure and intent of the site without reverse-engineering it. Key decisions, content locations, and deployment steps are documented clearly.

---

## Long-Term Vision

This product is the digital front door of a healthcare practice that has served the Clark, NJ community for over 35 years. Its long-term purpose is not to be a showcase of technology — it is to be a durable, reliable, trustworthy presence that grows with the practice.

### Five Years From Now
The site should still be fast, accessible, and easy to maintain. Technology choices made today must not create a migration crisis in three years. Stability and longevity are valued over novelty.

### As the Practice Grows
If Dr. Garabo adds services, accepts new insurance carriers, or adds providers, the site accommodates that growth without a rebuild. The content structure anticipates evolution.

### Patient Relationships First
The site may eventually support deeper patient engagement — appointment reminders, post-visit follow-up, expanded educational content. Any such expansion must remain patient-focused, privacy-respecting, and consistent with the trust principles in this document. Engagement for its own sake is not a goal.

### The Practice's Voice
As the site evolves, it remains Dr. Garabo's practice — not a generic healthcare website template. His specific credentials, his community presence, his philosophy of care, and his 35-year track record remain the core of the site's identity.

---

## Non-Goals

These are things this site explicitly does not aim to be, do, or become. Proposals that conflict with these non-goals should be rejected.

- **Not a patient portal.** This site does not manage ongoing patient records, lab results, or clinical communications. That is the domain of dedicated healthcare IT systems.
- **Not an e-commerce platform.** There are no products for sale. Payment processing is out of scope.
- **Not an entertainment product.** Videos, interactive animations, podcasts, and other engagement-first content are not appropriate for this context. Patients are here with a purpose.
- **Not a marketing platform for third parties.** The site does not carry advertising, affiliate links, or third-party promotional content.
- **Not a data business.** Patient information collected through forms is used exclusively to serve that patient's needs. It is not analyzed for marketing insights, sold, or shared beyond operational necessity.
- **Not a social media presence.** The site does not replicate the function of social media — no comment sections, no shareable user-generated content, no follower mechanics.
- **Not a demonstration of technical sophistication.** The technology serves the patient. If a simpler approach achieves the same patient outcome, the simpler approach wins. The site is not a portfolio piece.

---

**Version**: 2.0.0 | **Ratified**: 2026-03-05 | **Last Amended**: 2026-03-05

> This is a product document. It governs what the product is and what it stands for.
> For engineering decisions, architecture, features, and tasks, see the corresponding
> spec, plan, and tasks documents in `specs/<feature>/`.
