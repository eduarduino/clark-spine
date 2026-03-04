import { useLanguage } from '@/context/LanguageContext'
import styles from './ServicesPage.module.css'
import CtaBanner from '@/components/sections/CtaBanner/CtaBanner'
import ICON_MAP from '@/lib/icons'

const SECTION_NUMS = ['01', '02', '03']

export default function ServicesPage() {
  const { t } = useLanguage()
  const sp = t.servicesPage

  return (
    <main className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <span className="section-tag">{sp.tag}</span>
          <h1 className={styles.heroTitle}>{sp.heroTitle}</h1>
          <p className={styles.heroSub}>{sp.heroSub}</p>
        </div>
      </section>

      {/* Sticky category nav */}
      <nav className={styles.catNav} aria-label="Service categories">
        <div className="container">
          <div className={styles.catNavInner}>
            {sp.categories.map((cat, i) => (
              <a key={cat.id} href={`#${cat.id}`} className={styles.catNavLink}>
                <span className={styles.catNavNum}>{SECTION_NUMS[i]}</span>
                {cat.title}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <div className={styles.body}>
        {/* ── CONDITIONS (3-col compact grid) ── */}
        {(() => {
          const cat = sp.categories[0]
          return (
            <section id={cat.id} className={styles.categorySection}>
              <div className="container">
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionNum}>{SECTION_NUMS[0]}</span>
                  <div>
                    <h2 className={styles.sectionTitle}>{cat.title}</h2>
                    <p className={styles.sectionDesc}>{cat.desc}</p>
                  </div>
                </div>
                <div className={styles.conditionsGrid}>
                  {cat.services.map((s) => {
                    const Icon = ICON_MAP[s.icon]
                    return (
                    <div key={s.title} className={styles.condCard}>
                      <div className={styles.condCardIcon}>{Icon && <Icon size={22} strokeWidth={1.5} />}</div>
                      <h3 className={styles.condCardTitle}>{s.title}</h3>
                      <p className={styles.condCardBody}>{s.body}</p>
                      <div className={styles.tags}>
                        {s.conditions.map((c) => (
                          <span key={c} className={styles.tag}>{c}</span>
                        ))}
                      </div>
                    </div>
                    )
                  })}
                </div>
              </div>
            </section>
          )
        })()}

        {/* ── TREATMENTS (full-width horizontal panels) ── */}
        {(() => {
          const cat = sp.categories[1]
          return (
            <section id={cat.id} className={`${styles.categorySection} ${styles.treatSection}`}>
              <div className="container">
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionNum}>{SECTION_NUMS[1]}</span>
                  <div>
                    <h2 className={styles.sectionTitle}>{cat.title}</h2>
                    <p className={styles.sectionDesc}>{cat.desc}</p>
                  </div>
                </div>
                <div className={styles.treatGrid}>
                  {cat.services.map((s, i) => {
                    const Icon = ICON_MAP[s.icon]
                    return (
                    <div key={s.title} className={`${styles.treatPanel} ${i % 2 === 1 ? styles.treatPanelReverse : ''}`}>
                      <div className={styles.treatIconCol}>
                        <span className={styles.treatIcon}>{Icon && <Icon size={36} strokeWidth={1.25} color="white" />}</span>
                      </div>
                      <div className={styles.treatContent}>
                        <h3 className={styles.treatTitle}>{s.title}</h3>
                        <p className={styles.treatBody}>{s.body}</p>
                        <div className={styles.tags}>
                          {s.conditions.map((c) => (
                            <span key={c} className={styles.tag}>{c}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    )
                  })}
                </div>
              </div>
            </section>
          )
        })()}

        {/* ── DIAGNOSTICS (3-col accent cards) ── */}
        {(() => {
          const cat = sp.categories[2]
          return (
            <section id={cat.id} className={styles.categorySection}>
              <div className="container">
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionNum}>{SECTION_NUMS[2]}</span>
                  <div>
                    <h2 className={styles.sectionTitle}>{cat.title}</h2>
                    <p className={styles.sectionDesc}>{cat.desc}</p>
                  </div>
                </div>
                <div className={styles.diagGrid}>
                  {cat.services.map((s) => {
                    const Icon = ICON_MAP[s.icon]
                    return (
                    <div key={s.title} className={styles.diagCard}>
                      <div className={styles.diagCardTop}>
                        <span className={styles.diagIcon}>{Icon && <Icon size={20} strokeWidth={1.5} />}</span>
                        <h3 className={styles.diagTitle}>{s.title}</h3>
                      </div>
                      <p className={styles.diagBody}>{s.body}</p>
                      <div className={styles.tags}>
                        {s.conditions.map((c) => (
                          <span key={c} className={styles.tag}>{c}</span>
                        ))}
                      </div>
                    </div>
                  )})}
                </div>
              </div>
            </section>
          )
        })()}

      </div>

      <CtaBanner />
    </main>
  )
}

