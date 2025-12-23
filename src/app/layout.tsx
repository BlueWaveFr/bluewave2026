import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://bluewave.fr'),
  title: {
    default: 'Bluewave - Agence Developpement Web & SEO Technique',
    template: '%s | Bluewave',
  },
  description: 'Agence digitale specialisee en developpement web, applications sur mesure, e-commerce, SEO technique et solutions IA. Expertise technique pour PME et grands comptes.',
  keywords: [
    'developpement web',
    'agence digitale',
    'SEO technique',
    'application web',
    'e-commerce',
    'audit technique',
    'consulting digital',
    'Next.js',
    'React',
    'WordPress',
  ],
  authors: [{ name: 'Bluewave' }],
  creator: 'Bluewave',
  publisher: 'Bluewave',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://bluewave.fr',
    siteName: 'Bluewave',
    title: 'Bluewave - Agence Developpement Web & SEO Technique',
    description: 'Agence digitale specialisee en developpement web, applications sur mesure, e-commerce, SEO technique et solutions IA.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bluewave - Agence Developpement Web',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bluewave - Agence Developpement Web & SEO Technique',
    description: 'Agence digitale specialisee en developpement web, applications sur mesure, e-commerce, SEO technique et solutions IA.',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
