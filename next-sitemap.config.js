/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://bluewave.fr',
  generateRobotsTxt: true,
  generateIndexSitemap: false, // Pas d'index, un seul sitemap simple
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/icon.svg', '/api/*', '/admin/*'], // Exclure fichiers non-pages
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://blog.bluewave.fr/sitemap_index.xml', // Sitemap Yoast WordPress
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/*', '/admin/*'],
      },
    ],
  },
}
