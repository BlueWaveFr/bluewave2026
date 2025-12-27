import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const GTM_ID = 'GTM-TTWNDNWF'

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
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Header />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
