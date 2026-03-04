import { Link } from 'react-router-dom'
import { Phone, Printer, Mail, MapPin } from 'lucide-react'
import styles from './Footer.module.css'
import { useLanguage } from '@/context/LanguageContext'

export default function Footer() {
  const year = new Date().getFullYear()
  const { t } = useLanguage()
  const f = t.footer

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className="container">
          <div className={styles.grid}>
            {/* Brand */}
            <div className={styles.brand}>
              <h3 className={styles.name}>Clark Spine<br />and Pain Relief</h3>
              <p className={styles.tagline}>{f.tagline}</p>
              <p className={styles.desc}>{f.desc}</p>
              <p className={styles.inner}>{f.innerCircle}</p>
            </div>

            {/* Quick Links */}
            <div className={styles.col}>
              <h4 className={styles.colTitle}>{f.quickLinks}</h4>
              <ul className={styles.links}>
                <li><Link to="/">{t.nav.home}</Link></li>
                <li><Link to="/about">{t.nav.about}</Link></li>
                <li><Link to="/services">{t.nav.services}</Link></li>
                <li><Link to="/patient-center">{t.nav.patientCenter}</Link></li>
                <li><Link to="/contact">{t.nav.contact}</Link></li>
              </ul>
            </div>

            {/* Office Hours */}
            <div className={styles.col}>
              <h4 className={styles.colTitle}>{f.officeHours}</h4>
              <ul className={styles.hours}>
                <li><span>{f.days.monday}</span><span>{f.times.monday}</span></li>
                <li><span>{f.days.tuesday}</span><span>{f.times.tuesday}</span></li>
                <li><span>{f.days.wednesday}</span><span>{f.times.wednesday}</span></li>
                <li><span>{f.days.thursday}</span><span>{f.times.thursday}</span></li>
                <li><span>{f.days.friday}</span><span>{f.times.friday}</span></li>
                <li><span>{f.days.saturday}</span><span>{f.times.saturday}</span></li>
                <li><span>{f.days.sunday}</span><span>{f.times.sunday}</span></li>
              </ul>
            </div>

            {/* Contact */}
            <div className={styles.col}>
              <h4 className={styles.colTitle}>{f.contact}</h4>
              <ul className={styles.contact}>
                <li>
                  <MapPin size={15} aria-hidden="true" />
                  <a
                    href="https://maps.google.com/?q=118+Westfield+Avenue+Clark+NJ+07066"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    118 Westfield Avenue<br />Suites 3 &amp; 4<br />Clark, NJ 07066
                  </a>
                </li>
                <li>
                  <Phone size={15} aria-hidden="true" />
                  <a href="tel:9084979440">(908) 497-9440</a>
                </li>
                <li>
                  <Printer size={15} aria-hidden="true" />
                  <span>Fax: (908) 497-9442</span>
                </li>
                <li>
                  <Mail size={15} aria-hidden="true" />
                  <a href="mailto:garabochiro@gmail.com">garabochiro@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <p>{f.copyright(year)}</p>
          <p>{f.copyrightSub} <a href="tel:9084979440">(908) 497-9440</a></p>
        </div>
      </div>
    </footer>
  )
}
