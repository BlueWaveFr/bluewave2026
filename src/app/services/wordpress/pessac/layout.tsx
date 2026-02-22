import { Metadata } from 'next'
import { localWordpressSchemas } from '@/lib/schemas'

const schemas = localWordpressSchemas['pessac']

export const metadata: Metadata = {
  title: 'Agence WordPress Pessac - Création Site Vitrine | Bluewave',
  description: 'Expert WordPress à Pessac. Création de sites vitrines sur mesure, développement de plugins et accompagnement pour les entreprises de Gironde. Devis gratuit.',
  keywords: 'wordpress pessac, agence wordpress pessac, création site wordpress pessac, développeur wordpress pessac, site vitrine pessac',
  openGraph: {
    title: 'Agence WordPress Pessac - Création Site Vitrine',
    description: 'Expert WordPress à Pessac. Création de sites vitrines sur mesure pour les entreprises de Gironde.',
    url: 'https://bluewave.fr/services/wordpress/pessac',
    siteName: 'Bluewave',
    locale: 'fr_FR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://bluewave.fr/services/wordpress/pessac',
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
