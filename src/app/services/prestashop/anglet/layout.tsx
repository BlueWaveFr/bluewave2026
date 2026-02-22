import { Metadata } from 'next'
import { localPrestashopSchemas } from '@/lib/schemas'

const schemas = localPrestashopSchemas['anglet']

export const metadata: Metadata = {
  title: 'Agence PrestaShop Anglet - Création Boutique E-commerce | Bluewave',
  description: 'Expert PrestaShop à Anglet. Création de boutiques e-commerce sur mesure, développement de modules et accompagnement pour les commerçants des Pyrénées-Atlantiques. Devis gratuit.',
  keywords: 'prestashop anglet, agence prestashop anglet, création boutique prestashop anglet, développeur prestashop anglet, e-commerce anglet',
  openGraph: {
    title: 'Agence PrestaShop Anglet - Création Boutique E-commerce',
    description: 'Expert PrestaShop à Anglet. Création de boutiques e-commerce sur mesure pour les commerçants des Pyrénées-Atlantiques.',
    url: 'https://bluewave.fr/services/prestashop/anglet',
    siteName: 'Bluewave',
    locale: 'fr_FR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://bluewave.fr/services/prestashop/anglet',
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
