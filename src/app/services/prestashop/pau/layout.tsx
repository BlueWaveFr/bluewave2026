import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Agence PrestaShop Pau - Creation Boutique E-commerce | Bluewave',
  description: 'Expert PrestaShop a Pau. Creation de boutiques e-commerce sur mesure, developpement de modules et accompagnement pour les commercants des Pyrenees-Atlantiques. Devis gratuit.',
  keywords: 'prestashop pau, agence prestashop pau, creation boutique prestashop pau, developpeur prestashop pau, e-commerce pau, prestashop pyrenees-atlantiques',
  openGraph: {
    title: 'Agence PrestaShop Pau - Creation Boutique E-commerce',
    description: 'Expert PrestaShop a Pau. Creation de boutiques e-commerce sur mesure pour les commercants des Pyrenees-Atlantiques.',
    url: 'https://bluewave.fr/services/prestashop/pau',
    siteName: 'Bluewave',
    locale: 'fr_FR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://bluewave.fr/services/prestashop/pau',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
