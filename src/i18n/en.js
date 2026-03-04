const en = {
  // ===== NAVBAR =====
  nav: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    autoAccidents: 'Auto Accidents',
    patientCenter: 'Patient Center',
    contact: 'Contact',
    phone: '(908) 497-9440',
  },

  // ===== FOOTER =====
  footer: {
    tagline: 'Garabo Chiropractic Health Center, PC',
    desc: 'Motor vehicle accident specialists and Trauma Qualified chiropractic care in Clark, NJ since 1991.',
    innerCircle: '"Inner Circle" provider for\nHackensack Meridian employees',
    quickLinks: 'Quick Links',
    officeHours: 'Office Hours',
    contact: 'Contact Us',
    days: {
      monday: 'Monday',
      tuesday: 'Tuesday',
      wednesday: 'Wednesday',
      thursday: 'Thursday',
      friday: 'Friday',
      saturday: 'Saturday',
      sunday: 'Sunday',
    },
    times: {
      monday: '8:30 AM – 6:00 PM',
      tuesday: '8:30 AM – 12:30 PM',
      wednesday: '8:30 AM – 6:00 PM',
      thursday: 'Closed',
      friday: '8:30 AM – 6:00 PM',
      saturday: '8:30 AM – Noon',
      sunday: 'Closed',
    },
    copyright: (year) => `© ${year} Clark Spine and Pain Relief · Garabo Chiropractic Health Center, PC · Clark, NJ`,
    copyrightSub: '118 Westfield Avenue, Suites 3 & 4, Clark, NJ 07066 ·',
  },

  // ===== HERO =====
  hero: {
    badge: 'Accepting New Patients · Clark, NJ',
    headline1: 'Back•Neck•Sciatica',
    headline2: 'Pain Relief',
    headline3: 'Without Medication',
    sub: 'Dr. James Garabo, DC — Trauma Qualified chiropractor with over 35\u00a0years of experience specializing in motor vehicle accident injuries and the diagnosis and management of mechanical spine pain.',
    bookBtn: 'Book an Appointment',
    servicesBtn: 'Our Services',
    pill1: '✓ Medicare Accepted',
    pill2: '✓ Horizon BC/BS Tier 1',
    pill3: '✓ Auto Accident Specialist',
    stat1Num: '35+',
    stat1Label: 'Years Experience',
    stat2Num: '1991',
    stat2Label: 'Est. in Clark, NJ',
    stat3Num: 'Palmer',
    stat3Label: 'College Grad',
    drName: 'Dr. James Garabo, DC',
    traumaQualified: 'Trauma Qualified',
  },

  // ===== AUTO ACCIDENTS PAGE =====
  autoAccidents: {
    tag: 'MVA Specialist',
    heroTitle: 'Auto Accident Injury Care',
    heroSub: 'Trauma Qualified chiropractic treatment and medical-legal documentation — from day one through case resolution.',
    ctaBook: 'Book an Appointment',
    ctaCall: 'Call (908) 497-9440',

    urgencyTag: 'Why Act Fast',
    urgencyTitle: "Don't Wait to Seek Care",
    urgencySub: 'Symptoms after a collision can be delayed by days. Early evaluation protects both your health and your legal claim.',
    urgencyItems: [
      { icon: 'delayed', title: 'Symptoms Are Often Delayed', desc: 'Adrenaline and inflammation can mask injury pain for days or weeks. Many serious injuries are invisible without a proper clinical evaluation.' },
      { icon: 'legal_doc', title: 'Legal Documentation Starts Now', desc: 'A prompt medical record establishes the direct link between the accident and your injuries — critical for any insurance or legal claim.' },
      { icon: 'early_care', title: 'Early Care Means Better Outcomes', desc: 'Spinal injuries addressed early are far less likely to become chronic. Our team gets you on a focused care plan right away.' },
    ],

    injuriesTag: 'What We Treat',
    injuriesTitle: 'Common Auto Accident Injuries',
    injuriesSub: 'Our team is trained to identify and treat the full spectrum of motor vehicle accident injuries.',
    injuries: [
      { icon: 'whiplash', title: 'Whiplash (WAD)', desc: 'Cervical acceleration-deceleration injury — the most common MVA injury. We diagnose and treat all grades of WAD.' },
      { icon: 'disc', title: 'Disc Herniation', desc: 'Traumatic disc herniation in the cervical or lumbar spine caused by impact forces.' },
      { icon: 'soft_tissue', title: 'Soft Tissue Injuries', desc: 'Muscle, ligament, and tendon injuries throughout the spine and extremities.' },
      { icon: 'radicular', title: 'Radiculopathy', desc: 'Nerve root compression causing radiating pain, numbness, or weakness into the arms or legs.' },
      { icon: 'headache', title: 'Post-Concussion Headaches', desc: 'Head pain and cervicogenic headaches following head trauma or sudden deceleration.' },
      { icon: 'subluxation', title: 'Spinal Subluxations', desc: 'Vertebral misalignments disrupting normal joint motion and nerve function following trauma.' },
    ],

    processTag: 'Our Process',
    processTitle: 'What to Expect as an Accident Patient',
    processSteps: [
      { num: '01', title: 'We Prioritize Accident Patients', desc: 'Call and we will get you in as quickly as possible — often same day or next day.' },
      { num: '02', title: 'Comprehensive Evaluation', desc: 'Our doctor performs a full orthopedic and neurological exam, including on-site X-rays if clinically indicated.' },
      { num: '03', title: 'Diagnosis & Treatment Plan', desc: 'You receive an accurate diagnosis and a focused care plan — spinal manipulation, soft tissue therapy, and shock wave therapy if indicated.' },
      { num: '04', title: 'Documentation Throughout', desc: 'We generate thorough, legally sound medical records and reports for your insurer, attorney, or referring physician from visit one.' },
    ],

    legalTag: 'Medical-Legal Services',
    legalTitle: 'Complete Documentation for Your Case',
    legalBody: 'Our practice has served auto accident patients and the legal community of New Jersey for over three decades. We understand exactly what insurance adjusters, defense attorneys, and personal injury attorneys need from a treating provider.',
    legalItems: [
      'Initial injury evaluation reports',
      'Narrative medical reports',
      'MRI interpretation and age-dating reports',
      'Expert testimony and depositions',
      'Progress and final status reports',
      'IME rebuttal support',
    ],

    ctaTitle: 'Involved in an Accident?',
    ctaSub: "Don't delay. Call us today for a prompt evaluation and start your road to recovery.",
  },

  // ===== SERVICES PREVIEW =====
  servicesPreview: {
    tag: 'What We Treat',
    title: 'Comprehensive Spine & Pain Care',
    subtitle: 'We provide expert chiropractic care for a wide range of spinal conditions and musculoskeletal injuries — including auto accident recovery, chronic back and neck pain, herniated discs, sciatica, and more.',
    exploreBtn: 'Explore All Services',
    featuredBadge: '★  Primary Specialty',
    featuredInjuriesTitle: 'Commonly Treated Injuries:',
    services: [
      { icon: 'mva', title: 'Auto Accident Injuries', desc: 'Whiplash, disc injuries & spinal trauma' },
      { icon: 'back', title: 'Back Pain', desc: 'Upper, mid & lower back conditions' },
      { icon: 'neck', title: 'Neck Pain', desc: 'Cervical spine pain & stiffness' },
      { icon: 'sciatica', title: 'Sciatica', desc: 'Sciatic nerve pain & radiculopathy' },
      { icon: 'shockwave', title: 'Shock Wave Therapy', desc: 'FDA-cleared soft tissue healing' },
      { icon: 'mri', title: 'MRI Interpretation', desc: 'Advanced imaging analysis & reporting' },
    ],
  },

  // ===== DR PREVIEW =====
  drPreview: {
    tag: 'Meet Dr. Garabo',
    title: '35+ Years of Expert Chiropractic Care',
    p1: 'Dr. James Garabo, DC has been the Clinic Director of Garabo Chiropractic Health Center (Clark Spine and Pain Relief) since 1991. He is a Palmer College of Chiropractic graduate and holds an active New Jersey license (MCO-3710).',
    p2: 'Dr. Garabo is highly experienced in motor vehicle accident injuries and provides diagnosis, treatment, and medical-legal documentation for post-traumatic spinal cases. Our office features on-site X-rays, spinal manipulation, and shock wave therapy — comprehensive care under one roof.',
    creds: [
      'Doctor of Chiropractic – Palmer College, 1988',
      'NJ Licensed Active, License # MCO-3710',
      'Trauma Qualified Chiropractor',
      'Expert MRI Interpretation',
      'Medical-Legal Documentation Specialist',
    ],
    cvBtn: 'Full CV & Credentials',
    badgeTitle: 'Trauma Qualified',
    badgeSub: 'Chiropractor',
    drName: 'Dr. James Garabo',
  },

  // ===== STEPS =====
  steps: {
    tag: 'Getting Started',
    title: '4 Steps to Pain Relief',
    subtitle: 'Our straightforward process gets you from pain to relief as quickly as possible.',
    bookBtn: 'Request an Appointment',
    formsBtn: 'Download Patient Forms',
    items: [
      { num: '01', title: 'Book Your Appointment', desc: 'Call our office or use the contact form to schedule. New patients are always welcome.' },
      { num: '02', title: 'Complete Patient Forms', desc: 'Download and complete your intake forms in advance to save time at your first visit.' },
      { num: '03', title: 'In-Office Health Assessment', desc: 'Our doctor performs a thorough examination, reviews any imaging, and determines an accurate diagnosis.' },
      { num: '04', title: 'Start Your Care Plan', desc: 'Receive a short-term, individualized treatment plan to eliminate pain and restore your quality of life.' },
    ],
  },

  // ===== TESTIMONIALS =====
  testimonials: {
    tag: 'Patient Stories',
    title: 'What Our Patients Say',
    items: [
      { quote: 'Dr. Garabo is exceptional. After years of chronic back pain I was finally able to get relief. His diagnosis was accurate, his treatment was effective, and his staff is incredibly welcoming.', name: 'Maria T.', location: 'Clark, NJ' },
      { quote: 'I came in barely able to walk due to sciatica. Within a few weeks of treatment I was back on my feet. I can\'t recommend Dr. Garabo enough — truly life-changing care.', name: 'Robert K.', location: 'Westfield, NJ' },
      { quote: 'I\'ve been a patient since 1998. The level of expertise and the thoroughness of his examinations and documentation is unmatched. The go-to chiropractor in the area.', name: 'Sandra P.', location: 'Cranford, NJ' },
    ],
  },

  // ===== INSURANCE =====
  insurance: {
    tag: 'Insurance & Payment',
    title: 'We Make Access to Care Easy',
    subtitle: 'Clark Spine and Pain Relief accepts most major insurance including Medicare. We also offer convenient payment plans for uninsured or underinsured patients.',
    items: [
      { name: 'Medicare', icon: 'medicare' },
      { name: 'Horizon BC/BS NJ\n(Tier 1 Provider)', icon: 'bcbs' },
      { name: 'Most Major\nInsurance Plans', icon: 'insurance_major' },
      { name: 'Uninsured &\nUnderinsured Plans', icon: 'uninsured' },
      { name: 'Hackensack Meridian\n"Inner Circle"', icon: 'hackensack' },
      { name: 'Personal Injury\nCases', icon: 'pi_cases' },
    ],
  },

  // ===== CTA BANNER =====
  cta: {
    title: 'Ready to Get Relief?',
    sub: 'Schedule your first appointment today. Dr. Garabo and his team are here to help.',
    bookBtn: 'Book an Appointment',
    phone: '(908) 497-9440',
  },

  // ===== ABOUT PAGE =====
  about: {
    tag: 'About Our Practice',
    heroTitle: 'Our Practice',
    heroSub: 'Serving Clark, NJ and surrounding communities since 1991',
    bioTag: 'Biography',
    bioTitle: 'Clark Spine and Pain Relief',
    p1: 'Clark Spine and Pain Relief (also known as Garabo Chiropractic Health Center, PC) has been serving patients in Clark, New Jersey and the surrounding communities since 1991. Under the direction of Dr. James Garabo, DC, the practice strives for the most accurate diagnosis, prognosis, and treatment plan for every patient.',
    p2: 'Dr. Garabo is a Palmer College of Chiropractic graduate and a Trauma Qualified chiropractor whose expertise spans the diagnosis and management of mechanical spine pain, MRI interpretation, and medical-legal documentation. He is trusted by patients, referring physicians, and attorneys throughout New Jersey.',
    p3: 'We offer gentle, safe, fast, and effective relief for back pain, sciatica, neck pain, headaches, and radicular pain. Our treatment plans are short-term and allow you to get the correction you need to start living the life you want to live.',
    p4highlight1: '"Inner Circle" provider for Hackensack Meridian employees',
    p4and: ' and a ',
    p4highlight2: 'Tier 1 provider for Horizon BC/BS of NJ',
    p4end: '.',
    credTag: 'Qualifications',
    credTitle: 'Education & Licensure',
    edu: {
      title: 'Education',
      items: [
        { main: 'Doctor of Chiropractic', sub: 'Palmer College of Chiropractic\nDavenport, IA · 1988' },
        { main: 'National Board of Chiropractic Examiners, Part 1 · 1986' },
        { main: 'National Board of Chiropractic Examiners, Part 2 · 1987' },
      ],
    },
    lic: {
      title: 'Licensure',
      items: [
        { main: 'New Jersey License # MCO-3710', sub: '1989 – Present (Active)' },
        { main: 'Pennsylvania License · 1988 (Inactive)' },
        { main: 'Massachusetts License · 1989 (Inactive)' },
      ],
    },
    occ: {
      title: 'Occupational History',
      items: [
        { main: 'Clinic Director', sub: 'Garabo Chiropractic Health Center, PC\nClark Spine and Pain Relief\nClark, NJ · 1991 – Present', em: 'Trauma Qualified' },
        { main: 'Associate Doctor', sub: 'Delano Family Chiropractic Center\nBloomfield, NJ · 1989 – 1991' },
      ],
    },
    postGrad: {
      title: 'Selected Post-Graduate Education',
      items: [
        'Medical-Legal Ethical Relationships, Documentation & Legal Testimony',
        'Interprofessional Hospital Based Spine Care',
        'Chiropractic Rehab and the Functional Paradigm',
        'MRI Age-Dating of Herniated Discs',
        'Trends in Spinal Treatment',
        'Neurology of Spinal Biomechanics',
        'Identifying Spinal Pathology on MRI',
        'Central Innervation of Spinal Biomechanical Engineering',
      ],
      source: 'Academy of Chiropractic Post-Doctoral Division / Cleveland University Kansas City · Long Island, NY · 2019',
    },
    contactCard: {
      orgName: 'Garabo Chiropractic Health Center, PC',
      address: '118 Westfield Avenue, Suites 3 & 4\nClark, New Jersey 07066',
    },
  },

  // ===== SERVICES PAGE =====
  servicesPage: {
    tag: 'What We Do',
    heroTitle: 'Our Services',
    heroSub: 'Comprehensive chiropractic care — all under one roof.',
    conditionsLabel: 'Conditions Treated:',
    ctaText: 'Involved in an accident or struggling with chronic pain? Call us — we can help.',
    bookBtn: 'Book an Appointment',
    categories: [
      {
        id: 'conditions',
        title: 'Conditions We Treat',
        desc: 'From acute injuries to chronic spinal conditions, we offer targeted, expert care for a wide range of musculoskeletal diagnoses.',
        services: [
          { icon: 'mva', title: 'Motor Vehicle Accidents', body: 'Collisions — even at low speeds — can cause lasting spinal injuries that, left untreated, lead to chronic pain and disability. Our team is Trauma Qualified and specializes in the evaluation, diagnosis, treatment, and medical-legal documentation of MVA-related injuries. We provide comprehensive injury reports for insurance carriers, legal offices, and referring physicians.', conditions: ['Whiplash (WAD)', 'Cervical disc herniation', 'Lumbar disc herniation', 'Soft tissue injuries', 'Radiculopathy from trauma', 'Spinal fractures / subluxations', 'Post-concussion headaches'] },
          { icon: 'back', title: 'Back Pain', body: 'Upper, mid, and lower back pain are among the most common reasons patients come to us for care. Our team employs spinal adjustments, soft tissue therapies, and rehabilitation strategies to reduce pain, restore mobility, and prevent recurrence.', conditions: ['Disc herniations', 'Lumbar sprain/strain', 'Facet syndrome', 'Spinal stenosis', 'Post-surgical pain management'] },
          { icon: 'neck', title: 'Neck Pain', body: 'Cervical spine pain can be debilitating. Our team specializes in the diagnosis and management of cervical mechanical pain, including whiplash injuries from auto accidents. Our treatments address the root cause — not just the symptom.', conditions: ['Cervical disc herniation', 'Whiplash (WAD)', 'Cervical radiculopathy', 'Cervicogenic headaches', 'Muscle spasm and tension'] },
          { icon: 'sciatica', title: 'Sciatica', body: 'Sciatica causes sharp, burning pain that radiates from the lower back through the buttock and down the leg. Our team accurately identifies the source — whether a disc herniation, piriformis syndrome, or spinal stenosis — and creates a targeted treatment plan.', conditions: ['Lumbar disc herniation', 'Piriformis syndrome', 'Spinal stenosis', 'Spondylolisthesis', 'Nerve root compression'] },
          { icon: 'headache', title: 'Headaches', body: 'Many headaches have a spinal component. Our team is trained to diagnose and manage cervicogenic headaches, tension headaches, and supports migraine patients with conservative chiropractic care.', conditions: ['Cervicogenic headaches', 'Tension headaches', 'Post-concussion headaches', 'Occipital neuralgia'] },
          { icon: 'radicular', title: 'Radicular Pain', body: 'Radicular pain — pain, numbness, or weakness that radiates from the spine into the limbs — can be caused by disc pathology, nerve root compression, or spinal degeneration. Our team correlates clinical findings with MRI imaging for accurate diagnosis.', conditions: ['Upper extremity radiculopathy', 'Lower extremity radiculopathy', 'Carpal tunnel syndrome', 'Thoracic outlet syndrome'] },
        ],
      },
      {
        id: 'treatments',
        title: 'Treatments & Therapies',
        desc: "Hands-on, evidence-based treatments designed to relieve pain, restore function, and support the body's natural healing process.",
        services: [
          { icon: 'adjustment', title: 'Spinal Manipulation', body: "Spinal manipulation (chiropractic adjustment) is the cornerstone of chiropractic care. Our team uses precise, controlled force to restore proper joint motion, reduce pain, decrease inflammation, and improve nervous system function. Techniques are tailored to each patient's condition, age, and comfort level.", conditions: ['Cervical adjustments', 'Thoracic adjustments', 'Lumbar adjustments', 'Sacroiliac joint manipulation', 'Low-force alternatives for sensitive patients'] },
          { icon: 'shockwave', title: 'Shock Wave Therapy', body: 'Extracorporeal shockwave therapy (ESWT) uses acoustic pressure waves to stimulate healing in injured soft tissues. This FDA-cleared, non-invasive treatment accelerates tissue repair, reduces chronic pain, and improves blood circulation — particularly effective for conditions that have not responded to conventional therapies.', conditions: ['Chronic tendinopathy', 'Plantar fasciitis', 'Calcific deposits', 'Muscle trigger points', 'Post-traumatic soft tissue injuries'] },
        ],
      },
      {
        id: 'diagnostics',
        title: 'Diagnostics & Evaluation',
        desc: 'Comprehensive in-office diagnostic capabilities to ensure an accurate diagnosis from your very first visit.',
        services: [
          { icon: 'xray', title: 'On-Site X-Rays', body: 'Our office is equipped with digital X-ray technology, allowing our team to perform immediate on-site imaging during your visit. X-rays help identify spinal misalignments, fractures, disc space narrowing, and structural abnormalities — critical for accurate diagnosis, especially in post-accident evaluations.', conditions: ['Spinal alignment assessment', 'Fracture identification', 'Disc space evaluation', 'Spondylolisthesis detection', 'Structural biomechanics analysis'] },
          { icon: 'exam', title: 'Physical Examinations', body: 'Every new patient receives a thorough physical and neurological examination before treatment begins. Our examinations include orthopedic testing, neurological assessment, range of motion evaluation, and muscle strength testing to build an accurate clinical picture and legally sound medical record.', conditions: ['Orthopedic testing', 'Neurological assessment', 'Range of motion evaluation', 'Muscle strength testing', 'Post-accident trauma evaluations'] },
          { icon: 'mri', title: 'MRI Interpretation', body: 'Our team is trained in expert MRI interpretation of the spine, including disc pathology identification, age-dating of herniated discs, and correlating imaging findings with clinical symptoms. We provide comprehensive reports for medical-legal cases.', conditions: ['Disc herniation analysis (T1, T2, STIR, Gradient)', 'MRI age-dating', 'Spinal cord pathology', 'Myelomalacia identification', 'Medical-legal reporting'] },
        ],
      },
    ],
  },

  // ===== PATIENT CENTER =====
  patientCenter: {
    tag: 'Patient Center',
    heroTitle: 'Patient Center',
    heroSub: 'Forms, information, and everything you need before your first visit.',
    formsTag: 'Patient Paperwork',
    formsTitle: 'Download Patient Forms',
    formsSubtitle: 'Complete forms in the comfort of your home and bring them to your appointment — or fax them to',
    faxNote: 'Fax completed forms to',
    faxOr: ' or bring them to your appointment. Questions? Call',
    downloadBtn: '⬇ Download PDF',
    onlineTag: 'Online Request',
    onlineTitle: 'Send Us a Message',
    onlineDesc: 'Use this form to request an appointment, ask a question, or send us any additional information before your visit.',
    callUs: 'Call Us',
    emailUs: 'Email Us',
    faxFormsTo: 'Fax Forms To',
    formTitle: '',
    name: 'Full Name',
    nameRequired: 'Full Name *',
    namePlaceholder: 'Jane Smith',
    email: 'Email Address',
    emailRequired: 'Email Address *',
    emailPlaceholder: 'jane@example.com',
    phone: 'Phone Number',
    phonePlaceholder: '(908) 000-0000',
    subject: 'Subject',
    subjectPlaceholder: 'Appointment Request',
    message: 'Message',
    messageRequired: 'Message *',
    messagePlaceholder: 'Tell us about your condition or ask a question...',
    sendBtn: 'Send Message',
    successTitle: 'Message Sent!',
    successMsg: "Thank you for reaching out. We'll get back to you within one business day.",
    sendAnotherBtn: 'Send Another Message',
    faqTag: 'FAQs',
    faqTitle: 'Common Questions',
    forms: [
      { icon: 'form_intake', title: 'New Patient Intake Form', desc: 'Complete this form before your first visit. Covers personal information, medical history, and current symptoms.' },
      { icon: 'form_pi', title: 'Personal Injury Questionnaire', desc: 'For patients involved in auto accidents or personal injury cases. Documents mechanism of injury and symptom onset.' },
      { icon: 'form_insurance', title: 'Insurance Patient Form', desc: 'Covers your health insurance information and authorizations for billing. Required for all insured patients.' },
      { icon: 'form_financial', title: 'Financial Policy & HIPAA Notice', desc: 'Our office financial policy and HIPAA privacy practices notice. Required for all new patients.' },
    ],
    faqs: [
      { q: 'What should I bring to my first appointment?', a: 'Please bring your completed intake forms, a valid photo ID, your insurance card, and any imaging (X-ray, MRI) films or reports related to your condition.' },
      { q: 'Do you accept my insurance?', a: 'We accept most major insurance plans including Medicare. We are a Tier 1 provider for Horizon BC/BS of NJ and an "Inner Circle" provider for Hackensack Meridian employees. Call us at (908) 497-9440 to verify your specific plan.' },
      { q: 'How long are treatment plans?', a: 'We advocate for short-term, focused treatment plans designed to get you relief and correction as efficiently as possible. Most patients see significant improvement within a few weeks.' },
      { q: 'Can I fax my forms before the appointment?', a: 'Yes! You can fax completed forms to (908) 497-9442, or bring them with you on the day of your appointment.' },
    ],
  },

  // ===== CONTACT PAGE =====
  contact: {
    tag: 'Get In Touch',
    heroTitle: "We'd Love to Hear From You",
    heroSub: 'Request an appointment or ask us anything.',
    ourLocation: 'Our Location',
    locationTitle: 'Clark, New Jersey',
    addressLabel: 'Address',
    phoneLabel: 'Phone',
    faxLabel: 'Fax',
    cellLabel: 'Cell',
    emailLabel: 'Email',
    officeHours: 'Office Hours',
    closed: 'Closed',
    formTitle: 'Request an Appointment',
    formSub: "Fill out the form below and we'll be in touch to confirm your visit.",
    firstNameLabel: 'First Name *',
    firstNamePlaceholder: 'Jane',
    lastNameLabel: 'Last Name *',
    lastNamePlaceholder: 'Smith',
    errors: {
      firstName: 'First name must be 2–50 characters (letters, hyphens, apostrophes only).',
      lastName:  'Last name must be 2–50 characters (letters, hyphens, apostrophes only).',
      email:     'Please enter a valid email address.',
      phone:     'Please enter a complete 10-digit US phone number.',
      message:   'Please write a message (at least 10 characters).',
      rateLimit: (s) => `Please wait ${s} second${s !== 1 ? 's' : ''} before submitting again.`,
    },
    emailLabel2: 'Email Address *',
    emailPlaceholder: 'jane@example.com',
    phoneLabel2: 'Phone Number',
    phonePlaceholder: '(908) 000-0000',
    subjectLabel: 'Subject',
    subjectPlaceholder: 'New Patient Appointment',
    messageLabel: 'Message *',
    messagePlaceholder: 'Describe your condition or what you\'d like to discuss...',
    sendBtn: 'Send Message',
    successTitle: 'Message Received!',
    successMsg: 'Thank you for contacting Clark Spine and Pain Relief. We will respond within one business day.',
    sendAnotherBtn: 'Send Another Message',
    days: {
      monday: 'Monday', tuesday: 'Tuesday', wednesday: 'Wednesday',
      thursday: 'Thursday', friday: 'Friday', saturday: 'Saturday', sunday: 'Sunday',
    },
    times: {
      monday: '8:30 AM – 6:00 PM', tuesday: '8:30 AM – 12:30 PM',
      wednesday: '8:30 AM – 6:00 PM', thursday: 'Closed',
      friday: '8:30 AM – 6:00 PM', saturday: '8:30 AM – Noon', sunday: 'Closed',
    },
  },
}

export default en
