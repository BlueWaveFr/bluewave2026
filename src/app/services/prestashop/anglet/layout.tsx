import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Agence PrestaShop Anglet - Creation Boutique E-commerce | Bluewave',
  description: 'Expert PrestaShop a Anglet. Creation de boutiques e-commerce sur mesure, developpement de modules et accompagnement pour les commercants des Pyrenees-Atlantiques. Devis gratuit.',
  keywords: 'prestashop anglet, agence prestashop anglet, creation boutique prestashop anglet, developpeur prestashop anglet, e-commerce anglet',
  openGraph: {
    title: 'Agence PrestaShop Anglet - Creation Boutique E-commerce',
    description: 'Expert PrestaShop a Anglet. Creation de boutiques e-commerce sur mesure pour les commercants des Pyrenees-Atlantiques.',
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
  return children
}
