import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Phone, Menu, X } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const { lang, toggle, t } = useLanguage()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo(0, 0)
  }, [location])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>
          <div className={styles.logoText}>
            <span className={styles.logoMain}>
              <span className={styles.logoWord1}>Clark</span>
              <span className={styles.logoWord2}> Spine</span>
            </span>
            <span className={styles.logoSub}>and Pain Relief</span>
          </div>
        </Link>

        <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`} aria-label="Main navigation">
          <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ''} end>{t.nav.home}</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? styles.active : ''}>{t.nav.about}</NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? styles.active : ''}>{t.nav.services}</NavLink>
          <NavLink to="/auto-accidents" className={({ isActive }) => `${styles.accentLink} ${isActive ? styles.active : ''}`}>{t.nav.autoAccidents}</NavLink>
          <NavLink to="/patient-center" className={({ isActive }) => isActive ? styles.active : ''}>{t.nav.patientCenter}</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? styles.active : ''}>{t.nav.contact}</NavLink>
        </nav>

        <button
          className={styles.langToggle}
          onClick={toggle}
          aria-label={lang === 'en' ? 'Cambiar a Español' : 'Switch to English'}
          title={lang === 'en' ? 'Español' : 'English'}
        >
          <span className={styles.langFlag}>{lang === 'en' ? '🇪🇸' : '🇺🇸'}</span>
          <span className={styles.langLabel}>{lang === 'en' ? 'ES' : 'EN'}</span>
        </button>

        <a href="tel:9084979440" className={styles.phoneBtn}>
          <Phone size={15} aria-hidden="true" />
          <span>(908) 497-9440</span>
        </a>

        <button
          className={styles.burger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && <div className={styles.overlay} onClick={() => setMenuOpen(false)} aria-hidden="true" />}
    </header>
  )
}
