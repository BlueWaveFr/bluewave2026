import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Agence PrestaShop Merignac - Creation Boutique E-commerce | Bluewave',
  description: 'Expert PrestaShop a Merignac. Creation de boutiques e-commerce sur mesure, developpement de modules et accompagnement pour les commercants de Gironde. Devis gratuit.',
  keywords: 'prestashop merignac, agence prestashop merignac, creation boutique prestashop merignac, developpeur prestashop merignac, e-commerce merignac',
  openGraph: {
    title: 'Agence PrestaShop Merignac - Creation Boutique E-commerce',
    description: 'Expert PrestaShop a Merignac. Creation de boutiques e-commerce sur mesure pour les commercants de Gironde.',
    url: 'https://bluewave.fr/services/prestashop/merignac',
    siteName: 'Bluewave',
    locale: 'fr_FR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://bluewave.fr/services/prestashop/merignac',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
