import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Agence PrestaShop Arcachon - Creation Boutique E-commerce | Bluewave',
  description: 'Expert PrestaShop a Arcachon. Creation de boutiques e-commerce sur mesure, developpement de modules et accompagnement pour les commercants du Bassin d\'Arcachon. Devis gratuit.',
  keywords: 'prestashop arcachon, agence prestashop arcachon, creation boutique prestashop arcachon, developpeur prestashop arcachon, e-commerce arcachon, bassin arcachon',
  openGraph: {
    title: 'Agence PrestaShop Arcachon - Creation Boutique E-commerce',
    description: 'Expert PrestaShop a Arcachon. Creation de boutiques e-commerce sur mesure pour les commercants du Bassin d\'Arcachon.',
    url: 'https://bluewave.fr/services/prestashop/arcachon',
    siteName: 'Bluewave',
    locale: 'fr_FR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://bluewave.fr/services/prestashop/arcachon',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
