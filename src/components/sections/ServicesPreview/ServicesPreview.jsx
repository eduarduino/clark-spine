import { Link } from 'react-router-dom'
import { useLanguage } from '@/context/LanguageContext'
import styles from './ServicesPreview.module.css'
import ICON_MAP from '@/lib/icons'

export default function ServicesPreview() {
  const { t } = useLanguage()
  const sp = t.servicesPreview

  return (
    <section className={`section ${styles.section}`} aria-label="Services Overview">
      <div className="container">
        <div className={styles.header}>
          <span className="section-tag">{sp.tag}</span>
          <h2 className="section-title">{sp.title}</h2>
          <div className="divider"></div>
          <p className="section-subtitle">{sp.subtitle}</p>
        </div>
        <div className={styles.grid}>
          {sp.services.map((s) => {
            const Icon = ICON_MAP[s.icon]
            return (
            <div key={s.title} className={`card ${styles.card}`}>
              <div className={styles.iconWrap} aria-hidden="true">{Icon && <Icon size={24} strokeWidth={1.5} />}</div>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
            </div>
          )})}
        </div>
        <div className={styles.cta}>
          <Link to="/services" className="btn btn-primary">{sp.exploreBtn}</Link>
        </div>
      </div>
    </section>
  )
}
