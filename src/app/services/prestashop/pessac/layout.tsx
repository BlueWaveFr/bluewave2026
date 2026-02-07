import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Agence PrestaShop Pessac - Creation Boutique E-commerce | Bluewave',
  description: 'Expert PrestaShop a Pessac. Creation de boutiques e-commerce sur mesure, developpement de modules et accompagnement pour les commercants de Gironde. Devis gratuit.',
  keywords: 'prestashop pessac, agence prestashop pessac, creation boutique prestashop pessac, developpeur prestashop pessac, e-commerce pessac',
  openGraph: {
    title: 'Agence PrestaShop Pessac - Creation Boutique E-commerce',
    description: 'Expert PrestaShop a Pessac. Creation de boutiques e-commerce sur mesure pour les commercants de Gironde.',
    url: 'https://bluewave.fr/services/prestashop/pessac',
    siteName: 'Bluewave',
    locale: 'fr_FR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://bluewave.fr/services/prestashop/pessac',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
