import { Metadata } from 'next'
import GuidesContent from '@/components/GuidesContent'

export const metadata: Metadata = {
  title: 'Guides Techniques',
  description: 'Guides techniques approfondis sur le developpement web, SEO, performance et bonnes pratiques. Ressources pour developeurs et equipes techniques.',
  alternates: {
    canonical: 'https://bluewave.fr/guides',
  },
}

export default function GuidesPage() {
  return (
    <main className="pt-20">
      <GuidesContent />
    </main>
  )
}
