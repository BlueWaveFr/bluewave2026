import { Metadata } from 'next'
import { localWordpressSchemas } from '@/lib/schemas'

const schemas = localWordpressSchemas['anglet']

export const metadata: Metadata = {
  title: 'Agence WordPress Anglet - Création Site Vitrine | Bluewave',
  description: 'Expert WordPress à Anglet. Création de sites vitrines sur mesure, développement de plugins et accompagnement pour les entreprises du Pays Basque. Devis gratuit.',
  keywords: 'wordpress anglet, agence wordpress anglet, création site wordpress anglet, développeur wordpress anglet, site vitrine anglet',
  openGraph: {
    title: 'Agence WordPress Anglet - Création Site Vitrine',
    description: 'Expert WordPress à Anglet. Création de sites vitrines sur mesure pour les entreprises du Pays Basque.',
    url: 'https://bluewave.fr/services/wordpress/anglet',
    siteName: 'Bluewave',
    locale: 'fr_FR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://bluewave.fr/services/wordpress/anglet',
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
