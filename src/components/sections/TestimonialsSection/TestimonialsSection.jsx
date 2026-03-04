import { useLanguage } from '@/context/LanguageContext'
import styles from './TestimonialsSection.module.css'

export default function TestimonialsSection() {
  const { t } = useLanguage()
  const tm = t.testimonials

  return (
    <section className={`section ${styles.section}`} aria-label="Patient Testimonials">
      <div className="container">
        <div className={styles.header}>
          <span className="section-tag">{tm.tag}</span>
          <h2 className="section-title">{tm.title}</h2>
          <div className="divider"></div>
        </div>

        <div className={styles.grid}>
          {tm.items.map((item) => (
            <div key={item.name} className={styles.card}>
              <div className={styles.stars} aria-label="5 stars">★★★★★</div>
              <blockquote className={styles.quote}>"{item.quote}"</blockquote>
              <div className={styles.author}>
                <div className={styles.avatar} aria-hidden="true">{item.name[0]}</div>
                <div>
                  <span className={styles.name}>{item.name}</span>
                  <span className={styles.loc}>{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
