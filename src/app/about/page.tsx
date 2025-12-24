import { Metadata } from 'next'
import AboutContent from '@/components/AboutContent'

export const metadata: Metadata = {
  title: 'A propos',
  description: 'Decouvrez Bluewave, agence digitale specialisee en developpement web et SEO technique. Une equipe passionnee au service de votre croissance digitale.',
  alternates: {
    canonical: 'https://bluewave.fr/about',
  },
}

export default function AboutPage() {
  return (
    <main className="pt-20">
      <AboutContent />
    </main>
  )
}
