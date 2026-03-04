import styles from './AboutPage.module.css'
import CtaBanner from '@/components/sections/CtaBanner/CtaBanner'
import { useLanguage } from '@/context/LanguageContext'
import drGarabo from '@/assets/images/dr-garabo.jpg'

export default function AboutPage() {
  const { t } = useLanguage()
  const a = t.about

  return (
    <main className={styles.page}>
      {/* Page Hero */}
      <section className={styles.hero}>
        <div className="container">
          <span className="section-tag">{a.tag}</span>
          <h1 className={styles.heroTitle}>{a.heroTitle}</h1>
          <p className={styles.heroSub}>{a.heroSub}</p>
        </div>
      </section>

      {/* Profile */}
      <section className={`section ${styles.profileSection}`}>
        <div className="container">
          <div className={styles.profileGrid}>

            {/* Photo col */}
            <div className={styles.photoCol}>
              <div className={styles.photoWrap}>
                <img src={drGarabo} alt="Dr. James Garabo, DC" className={styles.photo} />
                <div className={styles.photoOverlay}>
                  <strong>Dr. James Garabo, DC</strong>
                  <span>Trauma Qualified · Palmer Graduate</span>
                </div>
              </div>
            </div>

            {/* Bio col */}
            <div className={styles.bioCol}>
              <span className="section-tag">{a.bioTag}</span>
              <h2 className="section-title">{a.bioTitle}</h2>
              <div className="divider"></div>
              <p>{a.p1}</p>
              <p>{a.p2}</p>
              <div className={styles.chips}>
                <span className={styles.chip}>35+ Years Experience</span>
                <span className={styles.chip}>Palmer Graduate</span>
                <span className={styles.chip}>Trauma Qualified</span>
                <span className={styles.chip}>Est. 1991</span>
              </div>
              <p>{a.p3}</p>
              <p>
                We are an <strong>{a.p4highlight1}</strong>{a.p4and}<strong>{a.p4highlight2}</strong>{a.p4end}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Contact strip */}
      <div className={styles.contactStrip}>
        <div className="container">
          <div className={styles.contactGrid}>
            <div className={styles.contactItem}>
              <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
              <div className={styles.contactText}>
                <strong>{a.contactCard.orgName}</strong>
                <span>{a.contactCard.address.split('\n')[0]}<br />{a.contactCard.address.split('\n')[1]}</span>
              </div>
            </div>
            <div className={styles.contactItem}>
              <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.86 19.86 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <div className={styles.contactText}>
                <strong>Phone</strong>
                <a href="tel:9084979440">(908) 497-9440</a>
                <a href="tel:9087970077">(908) 797-0077 <em>mobile</em></a>
                <span>(908) 497-9442 <em>fax</em></span>
              </div>
            </div>
            <div className={styles.contactItem}>
              <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              <div className={styles.contactText}>
                <strong>Email</strong>
                <a href="mailto:garabochiro@gmail.com">garabochiro@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Credentials */}
      <section className={`section ${styles.credSection}`}>
        <div className="container">
          <div className={styles.credHeader}>
            <span className="section-tag">{a.credTag}</span>
            <h2 className="section-title">{a.credTitle}</h2>
            <div className="divider"></div>
          </div>

          <div className={styles.credGrid}>
            <div className={styles.credCard}>
              <h3>{a.edu.title}</h3>
              <ul className={styles.credList}>
                {a.edu.items.map((item, i) => (
                  <li key={i}>
                    {item.main && <strong>{item.main}</strong>}
                    {item.sub && <><br />{item.sub.split('\n').map((line, j) => <span key={j}>{line}<br /></span>)}</>}
                    {!item.sub && !item.main && item}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.credCard}>
              <h3>{a.lic.title}</h3>
              <ul className={styles.credList}>
                {a.lic.items.map((item, i) => (
                  <li key={i}>
                    {item.sub ? <><strong>{item.main}</strong><br />{item.sub}</> : item.main}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.credCard}>
              <h3>{a.occ.title}</h3>
              <ul className={styles.credList}>
                {a.occ.items.map((item, i) => (
                  <li key={i}>
                    <strong>{item.main}</strong><br />
                    {item.sub.split('\n').map((line, j) => <span key={j}>{line}<br /></span>)}
                    {item.em && <em>{item.em}</em>}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.credCard}>
              <h3>{a.postGrad.title}</h3>
              <ul className={styles.credList}>
                {a.postGrad.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
                <li className={styles.credSource}>{a.postGrad.source}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </main>
  )
}
