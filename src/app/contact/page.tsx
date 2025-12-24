import { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contactez Bluewave pour discuter de votre projet web. Developpement sur mesure, SEO technique et solutions digitales pour PME et grands comptes.',
  alternates: {
    canonical: 'https://bluewave.fr/contact',
  },
}

export default function ContactPage() {
  return (
    <main className="pt-20">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>
    </main>
  )
}
