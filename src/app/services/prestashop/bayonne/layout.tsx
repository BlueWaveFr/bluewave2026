import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Agence PrestaShop Bayonne - Creation Boutique E-commerce | Bluewave',
  description: 'Expert PrestaShop a Bayonne. Creation de boutiques e-commerce sur mesure, developpement de modules et accompagnement pour les commercants des Pyrenees-Atlantiques. Devis gratuit.',
  keywords: 'prestashop bayonne, agence prestashop bayonne, creation boutique prestashop bayonne, developpeur prestashop bayonne, e-commerce bayonne, pays basque',
  openGraph: {
    title: 'Agence PrestaShop Bayonne - Creation Boutique E-commerce',
    description: 'Expert PrestaShop a Bayonne. Creation de boutiques e-commerce sur mesure pour les commercants des Pyrenees-Atlantiques.',
    url: 'https://bluewave.fr/services/prestashop/bayonne',
    siteName: 'Bluewave',
    locale: 'fr_FR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://bluewave.fr/services/prestashop/bayonne',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
