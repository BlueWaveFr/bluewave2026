import { Metadata } from 'next'
import { auditCoreWebVitalsSchemas, bluewaveOrganization } from '@/lib/schemas'

export const metadata: Metadata = {
  title: 'Audit Core Web Vitals - LCP, CLS, INP | Optimisation Google',
  description: 'Audit Core Web Vitals complet : analyse LCP, CLS et INP. Ameliorez vos scores Google et boostez votre SEO avec des optimisations concretes.',
  keywords: [
    'core web vitals',
    'audit core web vitals',
    'LCP',
    'largest contentful paint',
    'CLS',
    'cumulative layout shift',
    'INP',
    'interaction to next paint',
    'FID',
    'first input delay',
    'optimisation core web vitals',
    'google page experience',
  ],
  openGraph: {
    title: 'Audit Core Web Vitals - LCP, CLS, INP | Bluewave',
    description: 'Audit Core Web Vitals complet pour ameliorer vos scores Google et booster votre SEO.',
    url: 'https://bluewave.fr/services/audit/core-web-vitals',
    siteName: 'Bluewave',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Audit Core Web Vitals - LCP, CLS, INP | Bluewave',
    description: 'Audit Core Web Vitals complet pour ameliorer vos scores Google et booster votre SEO.',
  },
  alternates: {
    canonical: 'https://bluewave.fr/services/audit/core-web-vitals',
  },
}

export default function CoreWebVitalsAuditLayout({
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
            auditCoreWebVitalsSchemas.service,
            auditCoreWebVitalsSchemas.breadcrumb
          ])
        }}
      />
      {children}
    </>
  )
}
