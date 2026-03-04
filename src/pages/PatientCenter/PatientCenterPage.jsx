import { useState } from 'react'
import { Printer } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import styles from './PatientCenterPage.module.css'
import CtaBanner from '@/components/sections/CtaBanner/CtaBanner'
import StepsSection from '@/components/sections/StepsSection/StepsSection'
import InsuranceSection from '@/components/sections/InsuranceSection/InsuranceSection'
import ICON_MAP from '@/lib/icons'

export default function PatientCenterPage() {
  const { t } = useLanguage()
  const pc = t.patientCenter

  const [openFaq, setOpenFaq] = useState(null)

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <span className="section-tag">{pc.tag}</span>
          <h1 className={styles.heroTitle}>{pc.heroTitle}</h1>
          <p className={styles.heroSub}>{pc.heroSub}</p>
        </div>
      </section>

      <StepsSection />

      {/* Forms Download */}
      <section className={`section ${styles.formsSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className="section-tag">{pc.formsTag}</span>
            <h2 className="section-title">{pc.formsTitle}</h2>
            <div className="divider"></div>
            <p className="section-subtitle">
              {pc.formsSubtitle} <strong>(908) 497-9442</strong>.
            </p>
          </div>

          <div className={styles.formsGrid}>
            {pc.forms.map((f) => {
              const Icon = ICON_MAP[f.icon]
              return (
              <a key={f.title} href="#" className={styles.formCard} download aria-label={`Download ${f.title}`}>
                <div className={styles.formIcon} aria-hidden="true">{Icon && <Icon size={22} strokeWidth={1.5} />}</div>
                <div>
                  <h3 className={styles.formTitle}>{f.title}</h3>
                  <p className={styles.formDesc}>{f.desc}</p>
                </div>
                <span className={styles.downloadBtn}>{pc.downloadBtn}</span>
              </a>
            )})}
          </div>

          <div className={styles.faxNote}>
            <Printer size={18} color="var(--accent)" aria-hidden="true" />
            <span>{pc.faxNote} <strong>(908) 497-9442)</strong> {pc.faxOr} <a href="tel:9084979440">(908) 497-9440</a>.</span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={`section ${styles.faqSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className="section-tag">{pc.faqTag}</span>
            <h2 className="section-title">{pc.faqTitle}</h2>
            <div className="divider"></div>
          </div>

          <div className={styles.faqs}>
            {pc.faqs.map((f, i) => (
              <div key={i} className={`${styles.faq} ${openFaq === i ? styles.open : ''}`}>
                <button
                  className={styles.faqQ}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span>{f.q}</span>
                  <span className={styles.faqChevron}>{openFaq === i ? '▲' : '▼'}</span>
                </button>
                {openFaq === i && <div className={styles.faqA}>{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <InsuranceSection />
      <CtaBanner />
    </main>
  )
}
