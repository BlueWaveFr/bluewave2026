import { Metadata } from 'next'
import AboutContent from '@/components/AboutContent'

export const metadata: Metadata = {
  title: 'La Societe',
  description: 'Decouvrez Bluewave, agence digitale specialisée en developpement web et SEO technique. Une équipe passionnée au service de votre croissance digitale.',
  alternates: {
    canonical: 'https://bluewave.fr/societe',
  },
}

export default function SocietePage() {
  return (
    <main className="pt-20">
      <AboutContent />
    </main>
  )
}
