import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://bluewave.fr'),
  title: {
    default: 'Bluewave - Votre titre accrocheur',
    template: '%s | Bluewave',
  },
  description: 'Description SEO de Bluewave - environ 155 caractères pour un affichage optimal dans les résultats de recherche Google.',
  keywords: ['mot-clé 1', 'mot-clé 2', 'mot-clé 3'],
  authors: [{ name: 'Bluewave' }],
  creator: 'Bluewave',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://bluewave.fr',
    siteName: 'Bluewave',
    title: 'Bluewave - Votre titre accrocheur',
    description: 'Description pour les réseaux sociaux',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bluewave',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bluewave',
    description: 'Description pour Twitter',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'votre-code-google-search-console',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  )
}
