import { Metadata } from 'next'
import { localWordpressSchemas } from '@/lib/schemas'

const schemas = localWordpressSchemas['libourne']

export const metadata: Metadata = {
  title: 'Agence WordPress Libourne - Création Site Vitrine | Bluewave',
  description: 'Expert WordPress à Libourne. Création de sites vitrines sur mesure, développement de plugins et accompagnement pour les entreprises de Gironde. Devis gratuit.',
  keywords: 'wordpress libourne, agence wordpress libourne, création site wordpress libourne, développeur wordpress libourne, site vitrine libourne',
  openGraph: {
    title: 'Agence WordPress Libourne - Création Site Vitrine',
    description: 'Expert WordPress à Libourne. Création de sites vitrines sur mesure pour les entreprises de Gironde.',
    url: 'https://bluewave.fr/services/wordpress/libourne',
    siteName: 'Bluewave',
    locale: 'fr_FR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://bluewave.fr/services/wordpress/libourne',
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
