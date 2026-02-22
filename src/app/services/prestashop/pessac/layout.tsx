import { Metadata } from 'next'
import { localPrestashopSchemas } from '@/lib/schemas'

const schemas = localPrestashopSchemas['pessac']

export const metadata: Metadata = {
  title: 'Agence PrestaShop Pessac - Création Boutique E-commerce | Bluewave',
  description: 'Expert PrestaShop à Pessac. Création de boutiques e-commerce sur mesure, développement de modules et accompagnement pour les commerçants de Gironde. Devis gratuit.',
  keywords: 'prestashop pessac, agence prestashop pessac, création boutique prestashop pessac, développeur prestashop pessac, e-commerce pessac',
  openGraph: {
    title: 'Agence PrestaShop Pessac - Création Boutique E-commerce',
    description: 'Expert PrestaShop à Pessac. Création de boutiques e-commerce sur mesure pour les commerçants de Gironde.',
    url: 'https://bluewave.fr/services/prestashop/pessac',
    siteName: 'Bluewave',
    locale: 'fr_FR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://bluewave.fr/services/prestashop/pessac',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.service) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }}
      />
      {children}
    </>
  )
}
