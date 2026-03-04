import { Link } from 'react-router-dom'
import { useLanguage } from '@/context/LanguageContext'
import drPhoto from '@/assets/images/dr-garabo.jpg'
import styles from './Hero.module.css'

export default function Hero() {
  const { t } = useLanguage()
  const h = t.hero

  return (
    <section className={styles.hero} aria-label="Hero">
      <div className={styles.decorBg} aria-hidden="true"></div>
      <div className="container">
        <div className={styles.heroInner}>
          <div className={styles.content}>
            <div className={styles.eyebrow}>
              <span className={styles.dot}></span>
              {h.badge}
            </div>
            <h1 className={styles.headline}>
              {h.headline1}{' '}
              <span className={styles.highlight}>{h.headline2}</span>{' '}
              {h.headline3}
            </h1>
            <p className={styles.sub}>{h.sub}</p>
            <div className={styles.actions}>
              <Link to="/contact" className="btn btn-primary">{h.bookBtn}</Link>
              <Link to="/services" className="btn btn-outline">{h.servicesBtn}</Link>
            </div>
          </div>
          <div className={styles.photoCol} aria-hidden="true">
            <img
              src={drPhoto}
              alt="Dr. James Garabo, DC"
              className={styles.heroPhoto}
            />
          </div>
        </div>
      </div>
      <div className={styles.statsBar}>
        <div className="container">
          <div className={styles.statsInner}>
            <div className={styles.stat}>
              <strong>{h.stat1Num}</strong>
              <span>{h.stat1Label}</span>
            </div>
            <div className={styles.statDiv}></div>
            <div className={styles.stat}>
              <strong>{h.stat2Num}</strong>
              <span>{h.stat2Label}</span>
            </div>
            <div className={styles.statDiv}></div>
            <div className={styles.stat}>
              <strong>{h.stat3Num}</strong>
              <span>{h.stat3Label}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
