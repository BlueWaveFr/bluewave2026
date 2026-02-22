import { Metadata } from 'next'
import { localWordpressSchemas } from '@/lib/schemas'

const schemas = localWordpressSchemas['bayonne']

export const metadata: Metadata = {
  title: 'Agence WordPress Bayonne - Création Site Vitrine | Bluewave',
  description: 'Expert WordPress à Bayonne. Création de sites vitrines sur mesure, développement de plugins et accompagnement pour les entreprises du Pays Basque. Devis gratuit.',
  keywords: 'wordpress bayonne, agence wordpress bayonne, création site wordpress bayonne, développeur wordpress bayonne, site vitrine bayonne',
  openGraph: {
    title: 'Agence WordPress Bayonne - Création Site Vitrine',
    description: 'Expert WordPress à Bayonne. Création de sites vitrines sur mesure pour les entreprises du Pays Basque.',
    url: 'https://bluewave.fr/services/wordpress/bayonne',
    siteName: 'Bluewave',
    locale: 'fr_FR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://bluewave.fr/services/wordpress/bayonne',
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
