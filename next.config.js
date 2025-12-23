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
  // Activer si tu veux un export statique (sans SSR)
  // output: 'export',
}

module.exports = nextConfig
