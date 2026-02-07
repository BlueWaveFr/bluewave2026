import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Agence PrestaShop Arcachon - Création Boutique E-commerce | Bluewave',
  description: 'Expert PrestaShop à Arcachon. Création de boutiques e-commerce sur mesure, développement de modules et accompagnement pour les commerçants du Bassin d\'Arcachon. Devis gratuit.',
  keywords: 'prestashop arcachon, agence prestashop arcachon, création boutique prestashop arcachon, développeur prestashop arcachon, e-commerce arcachon, bassin arcachon',
  openGraph: {
    title: 'Agence PrestaShop Arcachon - Création Boutique E-commerce',
    description: 'Expert PrestaShop à Arcachon. Création de boutiques e-commerce sur mesure pour les commerçants du Bassin d\'Arcachon.',
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
