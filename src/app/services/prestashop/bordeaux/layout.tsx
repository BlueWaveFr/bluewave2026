import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Agence PrestaShop Bordeaux - Creation Boutique E-commerce | Bluewave',
  description: 'Expert PrestaShop a Bordeaux. Creation de boutiques e-commerce sur mesure, developpement de modules et accompagnement pour les commercants de Gironde. Devis gratuit.',
  keywords: 'prestashop bordeaux, agence prestashop bordeaux, creation boutique prestashop bordeaux, developpeur prestashop bordeaux, e-commerce bordeaux',
  openGraph: {
    title: 'Agence PrestaShop Bordeaux - Creation Boutique E-commerce',
    description: 'Expert PrestaShop a Bordeaux. Creation de boutiques e-commerce sur mesure pour les commercants de Gironde.',
    url: 'https://bluewave.fr/services/prestashop/bordeaux',
    siteName: 'Bluewave',
    locale: 'fr_FR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://bluewave.fr/services/prestashop/bordeaux',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
