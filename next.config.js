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
}

module.exports = nextConfig
