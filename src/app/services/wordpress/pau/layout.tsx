import { Metadata } from 'next'
import { localWordpressSchemas } from '@/lib/schemas'

const schemas = localWordpressSchemas['pau']

export const metadata: Metadata = {
  title: 'Agence WordPress Pau - Création Site Vitrine | Bluewave',
  description: 'Expert WordPress à Pau. Création de sites vitrines sur mesure, développement de plugins et accompagnement pour les entreprises du Béarn. Devis gratuit.',
  keywords: 'wordpress pau, agence wordpress pau, création site wordpress pau, développeur wordpress pau, site vitrine pau',
  openGraph: {
    title: 'Agence WordPress Pau - Création Site Vitrine',
    description: 'Expert WordPress à Pau. Création de sites vitrines sur mesure pour les entreprises du Béarn.',
    url: 'https://bluewave.fr/services/wordpress/pau',
    siteName: 'Bluewave',
    locale: 'fr_FR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://bluewave.fr/services/wordpress/pau',
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
