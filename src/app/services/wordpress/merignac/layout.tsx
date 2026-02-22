import { Metadata } from 'next'
import { localWordpressSchemas } from '@/lib/schemas'

const schemas = localWordpressSchemas['merignac']

export const metadata: Metadata = {
  title: 'Agence WordPress Mérignac - Création Site Vitrine | Bluewave',
  description: 'Expert WordPress à Mérignac. Création de sites vitrines sur mesure, développement de plugins et accompagnement pour les entreprises de Gironde. Devis gratuit.',
  keywords: 'wordpress mérignac, agence wordpress mérignac, création site wordpress mérignac, développeur wordpress mérignac, site vitrine mérignac',
  openGraph: {
    title: 'Agence WordPress Mérignac - Création Site Vitrine',
    description: 'Expert WordPress à Mérignac. Création de sites vitrines sur mesure pour les entreprises de Gironde.',
    url: 'https://bluewave.fr/services/wordpress/merignac',
    siteName: 'Bluewave',
    locale: 'fr_FR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://bluewave.fr/services/wordpress/merignac',
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
