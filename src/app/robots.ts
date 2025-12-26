import { MetadataRoute } from 'next'
import { headers } from 'next/headers'

export default async function robots(): Promise<MetadataRoute.Robots> {
  const headersList = await headers()
  const host = headersList.get('host') || ''

  // Bloquer l'indexation des domaines Vercel
  if (host.includes('vercel.app')) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
    }
  }

  // Domaine principal : autoriser l'indexation
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: 'https://bluewave.fr/sitemap.xml',
  }
}
