import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Agence PrestaShop Bordeaux - Création Boutique E-commerce | Bluewave',
  description: 'Expert PrestaShop à Bordeaux. Création de boutiques e-commerce sur mesure, développement de modules et accompagnement pour les commerçants de Gironde. Devis gratuit.',
  keywords: 'prestashop bordeaux, agence prestashop bordeaux, création boutique prestashop bordeaux, développeur prestashop bordeaux, e-commerce bordeaux',
  openGraph: {
    title: 'Agence PrestaShop Bordeaux - Création Boutique E-commerce',
    description: 'Expert PrestaShop à Bordeaux. Création de boutiques e-commerce sur mesure pour les commerçants de Gironde.',
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
