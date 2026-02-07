import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Agence PrestaShop Libourne - Creation Boutique E-commerce | Bluewave',
  description: 'Expert PrestaShop a Libourne. Creation de boutiques e-commerce sur mesure, developpement de modules et accompagnement pour les commercants du Libournais. Devis gratuit.',
  keywords: 'prestashop libourne, agence prestashop libourne, creation boutique prestashop libourne, developpeur prestashop libourne, e-commerce libourne, saint-emilion',
  openGraph: {
    title: 'Agence PrestaShop Libourne - Creation Boutique E-commerce',
    description: 'Expert PrestaShop a Libourne. Creation de boutiques e-commerce sur mesure pour les commercants du Libournais.',
    url: 'https://bluewave.fr/services/prestashop/libourne',
    siteName: 'Bluewave',
    locale: 'fr_FR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://bluewave.fr/services/prestashop/libourne',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
