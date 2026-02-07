import { Metadata } from 'next'
import { devPwaSchemas, bluewaveOrganization } from '@/lib/schemas'

export const metadata: Metadata = {
  title: 'Developpement Progressive Web App (PWA) - Applications Installables',
  description: 'Developpement de Progressive Web Apps : applications web installables, mode offline, notifications push. Experience native sur tous les appareils.',
  keywords: [
    'progressive web app',
    'pwa developpement',
    'application web installable',
    'mode offline',
    'notifications push',
    'service worker',
    'pwa next.js',
    'application mobile web',
    'pwa france',
    'developpeur pwa',
  ],
  openGraph: {
    title: 'Developpement Progressive Web App (PWA) | Bluewave',
    description: 'Applications web installables avec mode offline et notifications push.',
    url: 'https://bluewave.fr/services/developpement/pwa',
    siteName: 'Bluewave',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Developpement Progressive Web App (PWA) | Bluewave',
    description: 'Applications web installables avec mode offline et notifications push.',
  },
  alternates: {
    canonical: 'https://bluewave.fr/services/developpement/pwa',
  },
}

export default function PwaLayout({
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
            devPwaSchemas.service,
            devPwaSchemas.breadcrumb
          ])
        }}
      />
      {children}
    </>
  )
}
