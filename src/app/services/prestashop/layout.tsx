import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Agence PrestaShop - Creation Boutique E-commerce Sur Mesure | Bluewave',
  description: 'Expert PrestaShop certifie. Creation de boutiques e-commerce, developpement de modules sur mesure, migration et maintenance. Devis gratuit sous 48h.',
  keywords: [
    'agence prestashop',
    'creation boutique prestashop',
    'developpeur prestashop',
    'expert prestashop',
    'module prestashop sur mesure',
    'migration prestashop',
    'maintenance prestashop',
    'e-commerce prestashop',
  ],
  openGraph: {
    title: 'Agence PrestaShop - Creation Boutique E-commerce | Bluewave',
    description: 'Expert PrestaShop certifie. Creation de boutiques e-commerce sur mesure, modules personnalises et accompagnement complet.',
    url: 'https://bluewave.fr/services/prestashop',
    siteName: 'Bluewave',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agence PrestaShop - Creation Boutique E-commerce | Bluewave',
    description: 'Expert PrestaShop certifie. Creation de boutiques e-commerce sur mesure, modules personnalises et accompagnement complet.',
  },
  alternates: {
    canonical: 'https://bluewave.fr/services/prestashop',
  },
}

export default function PrestashopLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
