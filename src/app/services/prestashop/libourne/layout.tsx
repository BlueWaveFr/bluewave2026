import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Agence PrestaShop Libourne - Création Boutique E-commerce | Bluewave',
  description: 'Expert PrestaShop à Libourne. Création de boutiques e-commerce sur mesure, développement de modules et accompagnement pour les commerçants du Libournais. Devis gratuit.',
  keywords: 'prestashop libourne, agence prestashop libourne, création boutique prestashop libourne, développeur prestashop libourne, e-commerce libourne, saint-émilion',
  openGraph: {
    title: 'Agence PrestaShop Libourne - Création Boutique E-commerce',
    description: 'Expert PrestaShop à Libourne. Création de boutiques e-commerce sur mesure pour les commerçants du Libournais.',
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
