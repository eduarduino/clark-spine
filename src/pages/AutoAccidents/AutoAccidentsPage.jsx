import { Link } from 'react-router-dom'
import { useLanguage } from '@/context/LanguageContext'
import styles from './AutoAccidentsPage.module.css'
import CtaBanner from '@/components/sections/CtaBanner/CtaBanner'
import ICON_MAP from '@/lib/icons'

export default function AutoAccidentsPage() {
  const { t } = useLanguage()
  const aa = t.autoAccidents

  return (
    <main className={styles.page}>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.heroTag}>{aa.tag}</span>
          <h1 className={styles.heroTitle}>{aa.heroTitle}</h1>
          <p className={styles.heroSub}>{aa.heroSub}</p>
          <div className={styles.heroActions}>
            <Link to="/contact" className="btn btn-outline-white">{aa.ctaBook}</Link>
            <a href="tel:9084979440" className={styles.callBtn}>{aa.ctaCall}</a>
          </div>
        </div>
        <div className={styles.wave} aria-hidden="true">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 30C240 60 480 0 720 30C960 60 1200 0 1440 30V60H0V30Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* ── Why Act Fast ── */}
      <section className={`section ${styles.urgencySection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className="section-tag">{aa.urgencyTag}</span>
            <h2 className="section-title">{aa.urgencyTitle}</h2>
            <div className="divider"></div>
            <p className="section-subtitle">{aa.urgencySub}</p>
          </div>
          <div className={styles.urgencyGrid}>
            {aa.urgencyItems.map((item) => {
              const Icon = ICON_MAP[item.icon]
              return (
              <div key={item.title} className={styles.urgencyCard}>
                <div className={styles.urgencyIcon} aria-hidden="true">{Icon && <Icon size={28} strokeWidth={1.5} />}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            )})}
          </div>
        </div>
      </section>

      {/* ── Injuries Treated ── */}
      <section className={`section ${styles.injuriesSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className="section-tag">{aa.injuriesTag}</span>
            <h2 className="section-title">{aa.injuriesTitle}</h2>
            <div className="divider"></div>
            <p className="section-subtitle">{aa.injuriesSub}</p>
          </div>
          <div className={styles.injuriesGrid}>
            {aa.injuries.map((inj) => {
              const Icon = ICON_MAP[inj.icon]
              return (
              <div key={inj.title} className={`card ${styles.injuryCard}`}>
                <div className={styles.injuryIcon} aria-hidden="true">{Icon && <Icon size={24} strokeWidth={1.5} />}</div>
                <h3>{inj.title}</h3>
                <p>{inj.desc}</p>
              </div>
            )})}
          </div>
        </div>
      </section>

      {/* ── Our Process ── */}
      <section className={`section ${styles.processSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.processTag}>{aa.processTag}</span>
            <h2 className={styles.processTitle}>{aa.processTitle}</h2>
            <div className={styles.processDivider}></div>
          </div>
          <div className={styles.processGrid}>
            {aa.processSteps.map((step, i) => (
              <div key={step.num} className={styles.processStep}>
                <div className={styles.stepNumWrap}>
                  <span className={styles.stepNum}>{step.num}</span>
                  {i < aa.processSteps.length - 1 && <div className={styles.stepConnector} aria-hidden="true"></div>}
                </div>
                <div className={styles.stepContent}>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Medical-Legal Documentation ── */}
      <section className={`section ${styles.legalSection}`}>
        <div className="container">
          <div className={styles.legalGrid}>
            <div className={styles.legalText}>
              <span className="section-tag">{aa.legalTag}</span>
              <h2 className="section-title">{aa.legalTitle}</h2>
              <div className="divider"></div>
              <p>{aa.legalBody}</p>
            </div>
            <div className={styles.legalDocs}>
              <h4 className={styles.legalDocsTitle}>Documentation We Provide:</h4>
              {aa.legalItems.map((item) => (
                <div key={item} className={styles.legalItem}>
                  <span className={styles.legalCheck}>✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </main>
  )
}
