import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Developpement SaaS & Plateformes - Applications Metier Sur Mesure',
  description: 'Developpement de plateformes SaaS et applications metier : multi-tenant, abonnements Stripe, dashboards temps reel. De l\'idee au produit scalable.',
  keywords: [
    'developpement saas',
    'plateforme saas',
    'application metier',
    'multi-tenant',
    'stripe abonnements',
    'dashboard temps reel',
    'mvp saas',
    'startup tech',
    'application cloud',
    'logiciel sur mesure',
  ],
  openGraph: {
    title: 'Developpement SaaS & Plateformes | Bluewave',
    description: 'Applications metier scalables avec authentification, abonnements et dashboards.',
    url: 'https://bluewave.fr/services/developpement/saas',
    siteName: 'Bluewave',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Developpement SaaS & Plateformes | Bluewave',
    description: 'Applications metier scalables avec authentification, abonnements et dashboards.',
  },
  alternates: {
    canonical: 'https://bluewave.fr/services/developpement/saas',
  },
}

export default function SaasLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
