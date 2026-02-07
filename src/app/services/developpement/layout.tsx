import { Metadata } from 'next'
import { developpementSchemas, bluewaveOrganization } from '@/lib/schemas'

export const metadata: Metadata = {
  title: 'Developpement Web Sur Mesure',
  description: 'Developpement d\'applications web, sites e-commerce Prestashop et plateformes SaaS. Expert Prestashop. Solutions robustes et evolutives avec les dernieres technologies.',
  alternates: {
    canonical: 'https://bluewave.fr/services/developpement',
  },
}

export default function DeveloppementLayout({
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
            developpementSchemas.service,
            developpementSchemas.breadcrumb
          ])
        }}
      />
      {children}
    </>
  )
}
