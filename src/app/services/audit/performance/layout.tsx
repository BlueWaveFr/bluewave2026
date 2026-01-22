import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Audit de Performance Web - Optimisation Vitesse Site',
  description: 'Audit de performance web complet : temps de chargement, optimisation assets, analyse bundle et recommandations pour accelerer votre site.',
  keywords: [
    'audit performance web',
    'optimisation vitesse site',
    'temps de chargement',
    'lighthouse audit',
    'optimisation images',
    'bundle analysis',
    'performance web',
    'site lent',
    'accelerer site web',
    'web performance',
  ],
  openGraph: {
    title: 'Audit de Performance Web - Optimisation Vitesse | Bluewave',
    description: 'Audit de performance web complet pour identifier les causes de lenteur et accelerer votre site.',
    url: 'https://bluewave.fr/services/audit/performance',
    siteName: 'Bluewave',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Audit de Performance Web - Optimisation Vitesse | Bluewave',
    description: 'Audit de performance web complet pour identifier les causes de lenteur et accelerer votre site.',
  },
  alternates: {
    canonical: 'https://bluewave.fr/services/audit/performance',
  },
}

export default function PerformanceAuditLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
