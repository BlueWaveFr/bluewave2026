import { Metadata } from 'next'
import { devReactSchemas, bluewaveOrganization } from '@/lib/schemas'

export const metadata: Metadata = {
  title: 'Developpement React & Next.js - Applications Web Modernes',
  description: 'Expert React et Next.js. Developpement d\'applications web performantes avec SSR, SSG et App Router. Interfaces modernes et optimisees SEO.',
  keywords: [
    'developpeur react',
    'developpeur next.js',
    'agence react',
    'freelance react',
    'application react',
    'next.js app router',
    'ssr next.js',
    'developpement frontend',
    'react typescript',
    'expert react',
  ],
  openGraph: {
    title: 'Developpement React & Next.js | Bluewave',
    description: 'Expert React et Next.js pour applications web performantes et modernes.',
    url: 'https://bluewave.fr/services/developpement/react',
    siteName: 'Bluewave',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Developpement React & Next.js | Bluewave',
    description: 'Expert React et Next.js pour applications web performantes et modernes.',
  },
  alternates: {
    canonical: 'https://bluewave.fr/services/developpement/react',
  },
}

export default function ReactLayout({
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
            devReactSchemas.service,
            devReactSchemas.breadcrumb
          ])
        }}
      />
      {children}
    </>
  )
}
