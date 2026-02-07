import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Agence PrestaShop Cognac - Creation Boutique E-commerce | Bluewave',
  description: 'Expert PrestaShop a Cognac. Creation de boutiques e-commerce sur mesure, developpement de modules et accompagnement pour les commercants de Charente. Devis gratuit.',
  keywords: 'prestashop cognac, agence prestashop cognac, creation boutique prestashop cognac, developpeur prestashop cognac, e-commerce cognac, charente',
  openGraph: {
    title: 'Agence PrestaShop Cognac - Creation Boutique E-commerce',
    description: 'Expert PrestaShop a Cognac. Creation de boutiques e-commerce sur mesure pour les commercants de Charente.',
    url: 'https://bluewave.fr/services/prestashop/cognac',
    siteName: 'Bluewave',
    locale: 'fr_FR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://bluewave.fr/services/prestashop/cognac',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
