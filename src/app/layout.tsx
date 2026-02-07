import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CookieConsent from '@/components/CookieConsent'
import { GoogleTagManager } from '@/components/GoogleTagManager'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://bluewave.fr'),
  icons: {
    icon: '/images/logo-icon.jpg',
    apple: '/images/logo-icon.jpg',
  },
  title: {
    default: 'Bluewave - Agence Développement Web & SEO Technique',
    template: '%s | Bluewave',
  },
  description: 'Agence digitale spécialisée en développement web, applications sur mesure, e-commerce, SEO technique et solutions IA. Expertise technique pour PME et grands comptes.',
  authors: [{ name: 'Bluewave' }],
  creator: 'Bluewave',
  publisher: 'Bluewave',
  alternates: {
    canonical: 'https://bluewave.fr',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://bluewave.fr',
    siteName: 'Bluewave',
    title: 'Bluewave - Agence Développement Web & SEO Technique',
    description: 'Agence digitale spécialisée en développement web, applications sur mesure, e-commerce, SEO technique et solutions IA.',
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
    title: 'Bluewave - Agence Développement Web & SEO Technique',
    description: 'Agence digitale spécialisée en développement web, applications sur mesure, e-commerce, SEO technique et solutions IA.',
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
      <head>
        {/* Preconnect pour optimiser le LCP - SST GTM */}
        <link rel="preconnect" href="https://sst.waverank.io" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://sst.waverank.io" />
        {/* Preconnect Google reCAPTCHA */}
        <link rel="preconnect" href="https://www.google.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen flex flex-col">
        <GoogleTagManager />
        <Header />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  )
}
