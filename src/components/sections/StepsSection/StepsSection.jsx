import { Link } from 'react-router-dom'
import { useLanguage } from '@/context/LanguageContext'
import styles from './StepsSection.module.css'

export default function StepsSection() {
  const { t } = useLanguage()
  const s = t.steps

  return (
    <section className={`section ${styles.section}`} aria-label="Steps to Pain Relief">
      <div className="container">
        <div className={styles.header}>
          <span className="section-tag">{s.tag}</span>
          <h2 className="section-title">{s.title}</h2>
          <div className="divider"></div>
          <p className="section-subtitle">{s.subtitle}</p>
        </div>

        <div className={styles.steps}>
          {s.items.map((step, i) => (
            <div key={step.num} className={styles.step}>
              <div className={styles.numWrap}>
                <span className={styles.num}>{step.num}</span>
                {i < s.items.length - 1 && <div className={styles.connector} aria-hidden="true"></div>}
              </div>
              <div className={styles.content}>
                <h3 className={styles.title}>{step.title}</h3>
                <p className={styles.desc}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <Link to="/contact" className="btn btn-primary">{s.bookBtn}</Link>
          <Link to="/patient-center" className="btn btn-outline">{s.formsBtn}</Link>
        </div>
      </div>
    </section>
  )
}
