import Hero from '@/components/sections/Hero/Hero'
import ServicesPreview from '@/components/sections/ServicesPreview/ServicesPreview'
import TestimonialsSection from '@/components/sections/TestimonialsSection/TestimonialsSection'
import CtaBanner from '@/components/sections/CtaBanner/CtaBanner'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ServicesPreview />
      <TestimonialsSection />
      <CtaBanner />
    </main>
  )
}
