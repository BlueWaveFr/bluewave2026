import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Agence PrestaShop Biarritz - Création Boutique E-commerce | Bluewave',
  description: 'Expert PrestaShop à Biarritz. Création de boutiques e-commerce sur mesure, développement de modules et accompagnement pour les commerçants des Pyrénées-Atlantiques. Devis gratuit.',
  keywords: 'prestashop biarritz, agence prestashop biarritz, création boutique prestashop biarritz, développeur prestashop biarritz, e-commerce biarritz',
  openGraph: {
    title: 'Agence PrestaShop Biarritz - Création Boutique E-commerce',
    description: 'Expert PrestaShop à Biarritz. Création de boutiques e-commerce sur mesure pour les commerçants des Pyrénées-Atlantiques.',
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
