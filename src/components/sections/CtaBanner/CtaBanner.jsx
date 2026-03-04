import { Link } from 'react-router-dom'
import { Phone } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import styles from './CtaBanner.module.css'

export default function CtaBanner() {
  const { t } = useLanguage()
  const c = t.cta

  return (
    <section className={styles.banner} aria-label="Call to Action">
      <div className={`container ${styles.inner}`}>
        <div className={styles.text}>
          <h2>{c.title}</h2>
          <p>{c.sub}</p>
        </div>
        <div className={styles.actions}>
          <Link to="/contact" className="btn btn-outline-white">{c.bookBtn}</Link>
          <a href="tel:9084979440" className={`btn ${styles.phoneBtn}`}>
            <Phone size={16} aria-hidden="true" />
            {c.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
