import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Audit SEO Technique - Analyse Complete de Votre Referencement',
  description: 'Audit SEO technique approfondi : crawlabilite, indexation, structure, performances et opportunites d\'optimisation. Rapport detaille et plan d\'action concret.',
  keywords: [
    'audit seo',
    'audit seo technique',
    'analyse seo',
    'audit referencement',
    'audit indexation',
    'audit crawl',
    'optimisation seo',
    'consultant seo',
    'expert seo technique',
    'diagnostic seo',
  ],
  openGraph: {
    title: 'Audit SEO Technique - Analyse Complete | Bluewave',
    description: 'Audit SEO technique approfondi pour identifier les freins a votre referencement et les opportunites d\'optimisation.',
    url: 'https://bluewave.fr/services/audit/seo',
    siteName: 'Bluewave',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Audit SEO Technique - Analyse Complete | Bluewave',
    description: 'Audit SEO technique approfondi pour identifier les freins a votre referencement et les opportunites d\'optimisation.',
  },
  alternates: {
    canonical: 'https://bluewave.fr/services/audit/seo',
  },
}

export default function SeoAuditLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
