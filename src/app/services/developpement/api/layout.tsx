import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Developpement API REST & GraphQL - Backend Sur Mesure',
  description: 'Developpement d\'APIs RESTful et GraphQL performantes. Integrations tierces, webhooks et architectures microservices pour vos applications.',
  keywords: [
    'developpement api',
    'api rest',
    'api graphql',
    'backend developpement',
    'integration api',
    'webhooks',
    'microservices',
    'node.js api',
    'api sur mesure',
    'developpeur backend',
  ],
  openGraph: {
    title: 'Developpement API REST & GraphQL | Bluewave',
    description: 'APIs performantes et securisees pour connecter vos applications et services.',
    url: 'https://bluewave.fr/services/developpement/api',
    siteName: 'Bluewave',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Developpement API REST & GraphQL | Bluewave',
    description: 'APIs performantes et securisees pour connecter vos applications et services.',
  },
  alternates: {
    canonical: 'https://bluewave.fr/services/developpement/api',
  },
}

export default function ApiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
