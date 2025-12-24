import { Metadata } from 'next'
import ServicesContent from '@/components/ServicesContent'

export const metadata: Metadata = {
  title: 'Nos Services',
  description: 'Services de developpement web, debugging, consulting technique et audit SEO. Expertise technique pour PME et grands comptes.',
  alternates: {
    canonical: 'https://bluewave.fr/services',
  },
}

export default function ServicesPage() {
  return (
    <main className="pt-20">
      <ServicesContent />
    </main>
  )
}
