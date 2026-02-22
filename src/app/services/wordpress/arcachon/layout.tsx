import { Metadata } from 'next'
import { localWordpressSchemas } from '@/lib/schemas'

const schemas = localWordpressSchemas['arcachon']

export const metadata: Metadata = {
  title: 'Agence WordPress Arcachon - Création Site Vitrine | Bluewave',
  description: 'Expert WordPress à Arcachon. Création de sites vitrines sur mesure, développement de plugins et accompagnement pour les entreprises de Gironde. Devis gratuit.',
  keywords: 'wordpress arcachon, agence wordpress arcachon, création site wordpress arcachon, développeur wordpress arcachon, site vitrine arcachon',
  openGraph: {
    title: 'Agence WordPress Arcachon - Création Site Vitrine',
    description: 'Expert WordPress à Arcachon. Création de sites vitrines sur mesure pour les entreprises de Gironde.',
    url: 'https://bluewave.fr/services/wordpress/arcachon',
    siteName: 'Bluewave',
    locale: 'fr_FR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://bluewave.fr/services/wordpress/arcachon',
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
