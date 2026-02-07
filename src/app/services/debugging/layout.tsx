import { Metadata } from 'next'
import { debuggingSchemas, bluewaveOrganization } from '@/lib/schemas'

export const metadata: Metadata = {
  title: 'Debugging & Optimisation',
  description: 'Service de debugging et optimisation de vos applications web. Resolution de bugs critiques, amelioration des performances et refactoring de code.',
  alternates: {
    canonical: 'https://bluewave.fr/services/debugging',
  },
}

export default function DebuggingLayout({
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
            debuggingSchemas.service,
            debuggingSchemas.breadcrumb
          ])
        }}
      />
      {children}
    </>
  )
}
