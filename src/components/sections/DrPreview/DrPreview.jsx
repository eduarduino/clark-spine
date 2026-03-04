import { Link } from 'react-router-dom'
import { useLanguage } from '@/context/LanguageContext'
import styles from './DrPreview.module.css'
import drGarabo from '@/assets/images/dr-garabo.jpg'

export default function DrPreview() {
  const { t } = useLanguage()
  const dr = t.drPreview

  return (
    <section className={`section ${styles.section}`} aria-label="About Dr. Garabo">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.imageCol}>
            <div className={styles.imageFrame}>
              <img
                src={drGarabo}
                alt={dr.drName}
                className={styles.photo}
              />
              <div className={styles.badge}>
                <strong>{dr.badgeTitle}</strong>
                <span>{dr.badgeSub}</span>
              </div>
            </div>
          </div>

          <div className={styles.textCol}>
            <span className="section-tag">{dr.tag}</span>
            <h2 className="section-title">{dr.title}</h2>
            <div className="divider"></div>

            <p>{dr.p1}</p>
            <p>{dr.p2}</p>

            <ul className={styles.credentials}>
              {dr.creds.map((c) => (
                <li key={c}><span className={styles.check}>✓</span> {c}</li>
              ))}
            </ul>

            <Link to="/about" className="btn btn-primary">{dr.cvBtn}</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
