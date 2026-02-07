import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Agence PrestaShop Pau - Création Boutique E-commerce | Bluewave',
  description: 'Expert PrestaShop à Pau. Création de boutiques e-commerce sur mesure, développement de modules et accompagnement pour les commerçants des Pyrénées-Atlantiques. Devis gratuit.',
  keywords: 'prestashop pau, agence prestashop pau, création boutique prestashop pau, développeur prestashop pau, e-commerce pau, prestashop pyrénées-atlantiques',
  openGraph: {
    title: 'Agence PrestaShop Pau - Création Boutique E-commerce',
    description: 'Expert PrestaShop à Pau. Création de boutiques e-commerce sur mesure pour les commerçants des Pyrénées-Atlantiques.',
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
