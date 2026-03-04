import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from '@/context/LanguageContext'
import { ThemeProvider } from '@/context/ThemeContext'
import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary'
import Navbar from '@/components/layout/Navbar/Navbar'
import Footer from '@/components/layout/Footer/Footer'
import HomePage from '@/pages/Home/HomePage'
import AboutPage from '@/pages/About/AboutPage'
import ServicesPage from '@/pages/Services/ServicesPage'
import AutoAccidentsPage from '@/pages/AutoAccidents/AutoAccidentsPage'
import PatientCenterPage from '@/pages/PatientCenter/PatientCenterPage'
import ContactPage from '@/pages/Contact/ContactPage'
import NotFoundPage from '@/pages/NotFound/NotFoundPage'
import './App.css'

export default function App() {
  return (
    <ErrorBoundary>
    <ThemeProvider>
    <LanguageProvider>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="app-root">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/auto-accidents" element={<AutoAccidentsPage />} />
          <Route path="/patient-center" element={<PatientCenterPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
    </LanguageProvider>
    </ThemeProvider>
    </ErrorBoundary>
  )
}
