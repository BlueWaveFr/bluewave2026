import { Metadata } from 'next'
import { localWordpressSchemas } from '@/lib/schemas'

const schemas = localWordpressSchemas['bordeaux']

export const metadata: Metadata = {
  title: 'Agence WordPress Bordeaux - Création Site Vitrine | Bluewave',
  description: 'Expert WordPress à Bordeaux. Création de sites vitrines sur mesure, développement de plugins et accompagnement pour les entreprises de Gironde. Devis gratuit.',
  keywords: 'wordpress bordeaux, agence wordpress bordeaux, création site wordpress bordeaux, développeur wordpress bordeaux, site vitrine bordeaux',
  openGraph: {
    title: 'Agence WordPress Bordeaux - Création Site Vitrine',
    description: 'Expert WordPress à Bordeaux. Création de sites vitrines sur mesure pour les entreprises de Gironde.',
    url: 'https://bluewave.fr/services/wordpress/bordeaux',
    siteName: 'Bluewave',
    locale: 'fr_FR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://bluewave.fr/services/wordpress/bordeaux',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.localBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }} />
      {children}
    </>
  )
}
