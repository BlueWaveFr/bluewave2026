import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Agence PrestaShop Cognac - Création Boutique E-commerce | Bluewave',
  description: 'Expert PrestaShop à Cognac. Création de boutiques e-commerce sur mesure, développement de modules et accompagnement pour les commerçants de Charente. Devis gratuit.',
  keywords: 'prestashop cognac, agence prestashop cognac, création boutique prestashop cognac, développeur prestashop cognac, e-commerce cognac, charente',
  openGraph: {
    title: 'Agence PrestaShop Cognac - Création Boutique E-commerce',
    description: 'Expert PrestaShop à Cognac. Création de boutiques e-commerce sur mesure pour les commerçants de Charente.',
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
