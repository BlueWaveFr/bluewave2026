import { Metadata } from 'next'
import { wordpressSchemas, bluewaveOrganization } from '@/lib/schemas'

export const metadata: Metadata = {
  title: 'Agence WordPress - Création Site Vitrine Sur Mesure | Bluewave',
  description: 'Agence WordPress experte. Création de sites vitrines, blogs et portails sur mesure. Développement de plugins, migration, optimisation et maintenance. Devis gratuit sous 48h.',
  keywords: [
    'agence wordpress',
    'création site wordpress',
    'développeur wordpress',
    'site vitrine wordpress',
    'plugin wordpress sur mesure',
    'migration wordpress',
    'maintenance wordpress',
    'wordpress headless',
  ],
  openGraph: {
    title: 'Agence WordPress - Création Site Vitrine Sur Mesure | Bluewave',
    description: 'Agence WordPress experte. Création de sites vitrines sur mesure, plugins personnalisés et accompagnement complet.',
    url: 'https://bluewave.fr/services/wordpress',
    siteName: 'Bluewave',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agence WordPress - Création Site Vitrine | Bluewave',
    description: 'Agence WordPress experte. Création de sites vitrines sur mesure, plugins personnalisés et accompagnement complet.',
  },
  alternates: {
    canonical: 'https://bluewave.fr/services/wordpress',
  },
}

export default function WordPressLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            bluewaveOrganization,
            wordpressSchemas.service,
            wordpressSchemas.faq,
            wordpressSchemas.breadcrumb
          ])
        }}
      />
      {children}
    </>
  )
}
