import { Metadata } from 'next'
import { localWordpressSchemas } from '@/lib/schemas'

const schemas = localWordpressSchemas['biarritz']

export const metadata: Metadata = {
  title: 'Agence WordPress Biarritz - Création Site Vitrine | Bluewave',
  description: 'Expert WordPress à Biarritz. Création de sites vitrines sur mesure, développement de plugins et accompagnement pour les entreprises du Pays Basque. Devis gratuit.',
  keywords: 'wordpress biarritz, agence wordpress biarritz, création site wordpress biarritz, développeur wordpress biarritz, site vitrine biarritz',
  openGraph: {
    title: 'Agence WordPress Biarritz - Création Site Vitrine',
    description: 'Expert WordPress à Biarritz. Création de sites vitrines sur mesure pour les entreprises du Pays Basque.',
    url: 'https://bluewave.fr/services/wordpress/biarritz',
    siteName: 'Bluewave',
    locale: 'fr_FR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://bluewave.fr/services/wordpress/biarritz',
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
