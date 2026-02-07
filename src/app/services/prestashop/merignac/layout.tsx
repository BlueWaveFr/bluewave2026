import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Agence PrestaShop Mérignac - Création Boutique E-commerce | Bluewave',
  description: 'Expert PrestaShop à Mérignac. Création de boutiques e-commerce sur mesure, développement de modules et accompagnement pour les commerçants de Gironde. Devis gratuit.',
  keywords: 'prestashop mérignac, agence prestashop mérignac, création boutique prestashop mérignac, développeur prestashop mérignac, e-commerce mérignac',
  openGraph: {
    title: 'Agence PrestaShop Mérignac - Création Boutique E-commerce',
    description: 'Expert PrestaShop à Mérignac. Création de boutiques e-commerce sur mesure pour les commerçants de Gironde.',
    url: 'https://bluewave.fr/services/prestashop/merignac',
    siteName: 'Bluewave',
    locale: 'fr_FR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://bluewave.fr/services/prestashop/merignac',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
