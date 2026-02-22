import { Metadata } from 'next'
import { localWordpressSchemas } from '@/lib/schemas'

const schemas = localWordpressSchemas['cognac']

export const metadata: Metadata = {
  title: 'Agence WordPress Cognac - Création Site Vitrine | Bluewave',
  description: 'Expert WordPress à Cognac. Création de sites vitrines sur mesure, développement de plugins et accompagnement pour les entreprises de Charente. Devis gratuit.',
  keywords: 'wordpress cognac, agence wordpress cognac, création site wordpress cognac, développeur wordpress cognac, site vitrine cognac',
  openGraph: {
    title: 'Agence WordPress Cognac - Création Site Vitrine',
    description: 'Expert WordPress à Cognac. Création de sites vitrines sur mesure pour les entreprises de Charente.',
    url: 'https://bluewave.fr/services/wordpress/cognac',
    siteName: 'Bluewave',
    locale: 'fr_FR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://bluewave.fr/services/wordpress/cognac',
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
