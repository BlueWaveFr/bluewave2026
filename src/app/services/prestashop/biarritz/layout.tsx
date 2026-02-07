import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Agence PrestaShop Biarritz - Creation Boutique E-commerce | Bluewave',
  description: 'Expert PrestaShop a Biarritz. Creation de boutiques e-commerce sur mesure, developpement de modules et accompagnement pour les commercants des Pyrenees-Atlantiques. Devis gratuit.',
  keywords: 'prestashop biarritz, agence prestashop biarritz, creation boutique prestashop biarritz, developpeur prestashop biarritz, e-commerce biarritz',
  openGraph: {
    title: 'Agence PrestaShop Biarritz - Creation Boutique E-commerce',
    description: 'Expert PrestaShop a Biarritz. Creation de boutiques e-commerce sur mesure pour les commercants des Pyrenees-Atlantiques.',
    url: 'https://bluewave.fr/services/prestashop/biarritz',
    siteName: 'Bluewave',
    locale: 'fr_FR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://bluewave.fr/services/prestashop/biarritz',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
