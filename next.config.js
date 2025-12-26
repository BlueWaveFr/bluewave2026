/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cms.bluewave.fr',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
  },
  async headers() {
    // Bloquer l'indexation sur les domaines Vercel
    const isVercelPreview = process.env.VERCEL_ENV === 'preview'
    const isVercelDev = process.env.VERCEL_URL?.includes('vercel.app')

    if (isVercelPreview || isVercelDev) {
      return [
        {
          source: '/:path*',
          headers: [
            {
              key: 'X-Robots-Tag',
              value: 'noindex, nofollow',
            },
          ],
        },
      ]
    }
    return []
  },
  async redirects() {
    return [
      // Redirections 301 : anciens articles -> guides
      {
        source: '/blog/pwa-react-next-js-guide-developpement-complet',
        destination: '/guides/pwa-avec-react-et-next-js-guide-de-developpement-complet',
        permanent: true,
      },
      {
        source: '/blog/guide-complet-integrer-lia-dans-le-developpement-web-en-2026',
        destination: '/guides/guide-complet-integrer-ia-dans-le-developpement-web',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
