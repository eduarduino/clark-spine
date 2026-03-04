import { useLanguage } from '@/context/LanguageContext'
import styles from './InsuranceSection.module.css'
import ICON_MAP from '@/lib/icons'

export default function InsuranceSection() {
  const { t } = useLanguage()
  const ins = t.insurance

  return (
    <section className={`section ${styles.section}`} aria-label="Insurance Accepted">
      <div className="container">
        <div className={styles.header}>
          <span className="section-tag">{ins.tag}</span>
          <h2 className="section-title">{ins.title}</h2>
          <div className="divider"></div>
          <p className="section-subtitle">{ins.subtitle}</p>
        </div>

        <div className={styles.grid}>
          {ins.items.map((item) => {
            const Icon = ICON_MAP[item.icon]
            return (
            <div key={item.name} className={styles.card}>
              <span className={styles.icon} aria-hidden="true">{Icon && <Icon size={22} strokeWidth={1.5} />}</span>
              <span className={styles.name}>{item.name}</span>
            </div>
          )})}
        </div>
      </div>
    </section>
  )
}
