const WORDPRESS_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://cms.bluewave.fr/graphql'

interface WPItem {
  title: string
  slug: string
}

async function fetchWPItems(type: 'posts' | 'guides' | 'realisations'): Promise<WPItem[]> {
  try {
    const queryMap = {
      posts: `query { posts(first: 100, where: { status: PUBLISH }) { nodes { title slug } } }`,
      guides: `query { guides(first: 100, where: { status: PUBLISH }) { nodes { title slug } } }`,
      realisations: `query { realisations(first: 100, where: { status: PUBLISH }) { nodes { title slug } } }`,
    }

    const res = await fetch(WORDPRESS_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: queryMap[type] }),
      next: { revalidate: 3600 }
    })

    const json = await res.json()
    return json.data?.[type]?.nodes || []
  } catch {
    return []
  }
}

export async function GET() {
  const [posts, guides, realisations] = await Promise.all([
    fetchWPItems('posts'),
    fetchWPItems('guides'),
    fetchWPItems('realisations'),
  ])

  const prestashopCities = ['bordeaux', 'merignac', 'pessac', 'libourne', 'arcachon', 'cognac', 'bayonne', 'biarritz', 'anglet', 'pau']
  const wordpressCities = ['bordeaux', 'merignac', 'pessac', 'libourne', 'arcachon', 'cognac', 'bayonne', 'biarritz', 'anglet', 'pau']

  const content = `# Bluewave - Agence Digitale

> Bluewave est une agence digitale francaise specialisee en developpement web sur mesure, e-commerce PrestaShop, creation de sites WordPress, SEO technique et solutions IA. Nous accompagnons les PME et grands comptes dans leur transformation digitale depuis Bordeaux.

## A propos

Bluewave - BW Design SARL est une agence digitale basee a Bordeaux, France. Nous proposons des services de developpement web sur mesure, de SEO technique et de consulting.

- Site web: https://bluewave.fr
- Contact: https://bluewave.fr/contact

## Services

### Developpement Web
- Applications React & Next.js
- Sites e-commerce (PrestaShop - Expert Niveau 2, WooCommerce)
- Plateformes SaaS
- API & Integrations
- Progressive Web Apps (PWA)
- Sites WordPress headless

En savoir plus: https://bluewave.fr/services/developpement

#### Sous-pages Developpement
- React & Next.js: https://bluewave.fr/services/developpement/react
- SaaS & Plateformes: https://bluewave.fr/services/developpement/saas
- API & Integrations: https://bluewave.fr/services/developpement/api
- Progressive Web Apps: https://bluewave.fr/services/developpement/pwa
- WordPress Headless: https://bluewave.fr/services/developpement/wordpress

### E-commerce PrestaShop
Expert PrestaShop Niveau 2. Creation de boutiques e-commerce performantes, modules sur mesure, migration et maintenance.
- Creation de boutique PrestaShop
- Modules et themes sur mesure
- Migration depuis autres plateformes
- Optimisation performance et SEO
- Maintenance et support

En savoir plus: https://bluewave.fr/services/prestashop

#### Agence PrestaShop par ville
${prestashopCities.map(city => `- PrestaShop ${city.charAt(0).toUpperCase() + city.slice(1)}: https://bluewave.fr/services/prestashop/${city}`).join('\n')}

### Sites WordPress
Creation de sites vitrines, blogs et portails sur mesure avec WordPress. Developpement de plugins, migration, optimisation et maintenance.
- Sites vitrines WordPress sur mesure
- Plugins et extensions personnalises
- Migration vers WordPress
- WordPress Headless (Next.js)
- Maintenance et support

En savoir plus: https://bluewave.fr/services/wordpress

#### Agence WordPress par ville
${wordpressCities.map(city => `- WordPress ${city.charAt(0).toUpperCase() + city.slice(1)}: https://bluewave.fr/services/wordpress/${city}`).join('\n')}

### Debugging & Optimisation
- Resolution de bugs
- Optimisation des performances
- Refactoring de code
- Optimisation SEO technique
- Migration & mise a jour

En savoir plus: https://bluewave.fr/services/debugging

### Consulting Technique
- Conseil en architecture
- Choix technologiques
- Accompagnement technique
- Formation
- Audit de code
- Direction technique (CTO as a Service)

En savoir plus: https://bluewave.fr/services/consulting

### Audit & Logs
- Audit de performance
- Audit SEO technique
- Audit de securite
- Audit de code
- Configuration de monitoring
- Analyse d'erreurs

En savoir plus: https://bluewave.fr/services/audit

#### Sous-pages Audit
- Audit SEO: https://bluewave.fr/services/audit/seo
- Audit Performance: https://bluewave.fr/services/audit/performance
- Audit Core Web Vitals: https://bluewave.fr/services/audit/core-web-vitals

## Realisations

Portfolio de nos projets : sites vitrines, e-commerce headless avec WordPress, WooCommerce et PrestaShop.
https://bluewave.fr/realisations

${realisations.length > 0 ? realisations.map(r => `- ${r.title}: https://bluewave.fr/realisations/${r.slug}`).join('\n') : ''}

## Contenu

### Blog
Articles techniques sur le developpement web, le SEO et les nouvelles technologies.
https://bluewave.fr/blog

${posts.length > 0 ? posts.map(p => `- ${p.title}: https://bluewave.fr/blog/${p.slug}`).join('\n') : ''}

### Guides
Guides techniques approfondis sur des sujets comme React, Next.js, PWA et l'IA dans le developpement web.
https://bluewave.fr/guides

${guides.length > 0 ? guides.map(g => `- ${g.title}: https://bluewave.fr/guides/${g.slug}`).join('\n') : ''}

## Equipe

### Steph
Fondateur & Lead Developer avec 15+ ans d'experience en developpement web.
Expertise: Architecture web, React/Next.js, SEO technique, WordPress, E-commerce PrestaShop.
https://bluewave.fr/equipe/steph

## Informations legales

- Raison sociale: BW Design SARL
- SIREN: 951 453 646
- SIRET: 951 453 646 00014
- TVA: FR53951453646
- RCS: Bordeaux
- Capital: 1 000,00 EUR

Mentions legales: https://bluewave.fr/mentions-legales
Politique de confidentialite: https://bluewave.fr/confidentialite

## Technologies utilisees

- Frontend: React, Next.js, TypeScript, Tailwind CSS
- Backend: Node.js, PHP, Python
- CMS: WordPress (headless avec WPGraphQL), PrestaShop
- E-commerce: PrestaShop (Expert Niveau 2), WooCommerce
- Hosting: Vercel
- Database: PostgreSQL, MongoDB
`

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
