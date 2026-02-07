import { Metadata } from 'next'
import { devWordpressSchemas, bluewaveOrganization } from '@/lib/schemas'

export const metadata: Metadata = {
  title: 'Developpement WordPress Headless - CMS + Next.js',
  description: 'Expert WordPress Headless avec WPGraphQL et Next.js. Sites ultra-rapides combines a la puissance du CMS WordPress pour la gestion de contenu.',
  keywords: [
    'wordpress headless',
    'wordpress next.js',
    'wpgraphql',
    'wordpress api',
    'developpeur wordpress',
    'wordpress jamstack',
    'wordpress decoupled',
    'cms headless',
    'wordpress moderne',
    'wordpress performant',
  ],
  openGraph: {
    title: 'Developpement WordPress Headless | Bluewave',
    description: 'Sites ultra-rapides avec WordPress en CMS headless et Next.js en frontend.',
    url: 'https://bluewave.fr/services/developpement/wordpress',
    siteName: 'Bluewave',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Developpement WordPress Headless | Bluewave',
    description: 'Sites ultra-rapides avec WordPress en CMS headless et Next.js en frontend.',
  },
  alternates: {
    canonical: 'https://bluewave.fr/services/developpement/wordpress',
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
            devWordpressSchemas.service,
            devWordpressSchemas.breadcrumb
          ])
        }}
      />
      {children}
    </>
  )
}
