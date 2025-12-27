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
      // Redirections 301 : anciennes URLs WordPress -> services
      {
        source: '/index.php/:path*',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/projects/:path*',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/projects_cat/:path*',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/about/:path*',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/portfolio-four-columns',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/create-the-lifestyle-you-really-desire-this-world',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/list-of-the-best-investment-projects',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/2019/:path*',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/2020/:path*',
        destination: '/services',
        permanent: true,
      },
      // Redirection query strings WordPress (doing_wp_cron)
      {
        source: '/',
        has: [
          {
            type: 'query',
            key: 'doing_wp_cron',
          },
        ],
        destination: '/',
        permanent: true,
      },
      // Redirections equipe
      {
        source: '/equipe/stephane-geraut',
        destination: '/equipe/steph',
        permanent: true,
      },
      // Redirection about -> societe
      {
        source: '/about',
        destination: '/societe',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
