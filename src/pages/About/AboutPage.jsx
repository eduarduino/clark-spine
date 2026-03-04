import styles from './AboutPage.module.css'
import CtaBanner from '@/components/sections/CtaBanner/CtaBanner'
import { useLanguage } from '@/context/LanguageContext'
import { GraduationCap, ShieldCheck, BadgeCheck, Clock, BookOpen, MapPin, Phone, Mail } from 'lucide-react'
import drGarabo from '@/assets/images/dr-garabo.jpg'

export default function AboutPage() {
  const { t } = useLanguage()
  const a = t.about

  return (
    <main className={styles.page}>

      {/* ── Intro: merged hero + bio ── */}
      <section className={styles.intro}>
        <div className={styles.introBlobA} aria-hidden="true" />
        <div className={styles.introBlobB} aria-hidden="true" />
        <div className="container">
          <div className={styles.introGrid}>

            <div className={styles.introContent}>
              <span className={styles.eyebrow}>{a.tag}</span>
              <h1 className={styles.introHeadline}>{a.heroTitle}</h1>
              <p className={styles.introLead}>{a.heroSub}</p>
              <div className={styles.accentRule} />
              <p className={styles.introPara}>{a.p1}</p>
              <p className={styles.introPara}>{a.p2}</p>
              <div className={styles.chips}>
                <span className={styles.chip}>35+ Years Experience</span>
                <span className={styles.chip}>Palmer Graduate</span>
                <span className={styles.chip}>Trauma Qualified</span>
                <span className={styles.chip}>Est. 1991</span>
              </div>
              <p className={styles.introPara}>{a.p3}</p>
              <p className={styles.introPara}>
                We are an <strong>{a.p4highlight1}</strong>{a.p4and}<strong>{a.p4highlight2}</strong>{a.p4end}
              </p>
            </div>

            <div className={styles.photoCol}>
              <div className={styles.photoCard}>
                <img src={drGarabo} alt="Dr. James Garabo, DC" className={styles.photo} />
                <div className={styles.photoCaption}>
                  <strong>Dr. James Garabo, DC</strong>
                  <span>Trauma Qualified · Palmer Graduate</span>
                </div>
              </div>
              <div className={styles.photoBadge}>
                <strong>35+</strong>
                <span>Years in Practice</span>
              </div>
              <div className={styles.photoContact}>
                <div className={styles.photoContactItem}>
                  <MapPin size={15} className={styles.photoContactIcon} />
                  <div className={styles.photoContactText}>
                    <strong>{a.contactCard.orgName}</strong>
                    <span>{a.contactCard.address.split('\n')[0]}, {a.contactCard.address.split('\n')[1]}</span>
                  </div>
                </div>
                <div className={styles.photoContactItem}>
                  <Phone size={15} className={styles.photoContactIcon} />
                  <div className={styles.photoContactText}>
                    <a href="tel:9084979440">(908) 497-9440</a>
                    <a href="tel:9087970077">(908) 797-0077 <em>mobile</em></a>
                  </div>
                </div>
                <div className={styles.photoContactItem}>
                  <Mail size={15} className={styles.photoContactIcon} />
                  <div className={styles.photoContactText}>
                    <a href="mailto:garabochiro@gmail.com">garabochiro@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className={`section ${styles.credSection}`}>
        <div className="container">
          <div className={styles.credHeader}>
            <span className="section-tag">{a.credTag}</span>
            <h2 className="section-title">{a.credTitle}</h2>
            <div className="divider"></div>
          </div>

          {/* Highlight cards */}
          <div className={styles.credHighlights}>
            <div className={styles.credHighlight}>
              <span className={styles.credHighlightIcon}><GraduationCap size={22} /></span>
              <strong>Palmer Graduate</strong>
              <span>Doctor of Chiropractic · 1988</span>
            </div>
            <div className={styles.credHighlight}>
              <span className={styles.credHighlightIcon}><ShieldCheck size={22} /></span>
              <strong>Trauma Qualified</strong>
              <span>Chiropractic Trauma Specialist</span>
            </div>
            <div className={styles.credHighlight}>
              <span className={styles.credHighlightIcon}><BadgeCheck size={22} /></span>
              <strong>NJ Licensed</strong>
              <span>Since 1989 · Active</span>
            </div>
            <div className={styles.credHighlight}>
              <span className={styles.credHighlightIcon}><Clock size={22} /></span>
              <strong>35+ Years</strong>
              <span>In Practice Since 1991</span>
            </div>
          </div>

          {/* Career + Education/Licensure timelines */}
          <div className={styles.credDetail}>

            <div className={styles.credCol}>
              <h3 className={styles.credColTitle}>{a.occ.title}</h3>
              <div className={styles.timeline}>
                {a.occ.items.map((item, i) => (
                  <div key={i} className={styles.timelineItem}>
                    <div className={styles.timelineDot} />
                    <div className={styles.timelineBody}>
                      <strong>{item.main}</strong>
                      {item.sub.split('\n').map((line, j) => <span key={j}>{line}</span>)}
                      {item.em && <em className={styles.timelineTag}>{item.em}</em>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.credCol}>
              <h3 className={styles.credColTitle}>{a.edu.title}</h3>
              <div className={styles.timeline}>
                {a.edu.items.map((item, i) => (
                  <div key={i} className={styles.timelineItem}>
                    <div className={styles.timelineDot} />
                    <div className={styles.timelineBody}>
                      <strong>{item.main}</strong>
                      {item.sub && item.sub.split('\n').map((line, j) => <span key={j}>{line}</span>)}
                    </div>
                  </div>
                ))}
              </div>
              <h3 className={`${styles.credColTitle} ${styles.credColTitleSpaced}`}>{a.lic.title}</h3>
              <div className={styles.timeline}>
                {a.lic.items.map((item, i) => (
                  <div key={i} className={styles.timelineItem}>
                    <div className={styles.timelineDot} />
                    <div className={styles.timelineBody}>
                      <strong>{item.main}</strong>
                      {item.sub && <span>{item.sub}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Post-grad callout */}
          <div className={styles.postGrad}>
            <div className={styles.postGradHeader}>
              <BookOpen size={20} />
              <h3>{a.postGrad.title}</h3>
            </div>
            <p className={styles.postGradSource}>{a.postGrad.source}</p>
            <div className={styles.topicTags}>
              {a.postGrad.items.map((item, i) => (
                <span key={i} className={styles.topicTag}>{item}</span>
              ))}
            </div>
          </div>

        </div>
      </section>

      <CtaBanner />
    </main>
  )
}
