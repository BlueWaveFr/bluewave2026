// Schemas SEO Schema.org pour toutes les pages services
// =====================================================

// Schema LocalBusiness global pour Bluewave
export const bluewaveOrganization = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://bluewave.fr/#organization',
  name: 'Bluewave',
  description: 'Agence digitale specialisee en developpement web, applications sur mesure, e-commerce PrestaShop, SEO technique et solutions IA.',
  url: 'https://bluewave.fr',
  logo: 'https://bluewave.fr/images/logo-full.jpg',
  image: 'https://bluewave.fr/og-image.jpg',
  email: 'contact@bluewave.fr',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'France',
    addressCountry: 'FR'
  },
  areaServed: ['France', 'Europe', 'Monde'],
  priceRange: '€€€',
  sameAs: [
    'https://www.linkedin.com/company/bluewave-fr',
    'https://github.com/BlueWaveFr'
  ]
}

// Helper pour créer un schema Service
export function createServiceSchema(
  name: string,
  description: string,
  url: string,
  serviceType: string,
  offers?: { name: string; description: string }[]
) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    provider: {
      '@type': 'Organization',
      '@id': 'https://bluewave.fr/#organization',
      name: 'Bluewave',
      url: 'https://bluewave.fr'
    },
    serviceType,
    areaServed: ['France', 'Europe']
  }

  if (offers && offers.length > 0) {
    schema.hasOfferCatalog = {
      '@type': 'OfferCatalog',
      name: `Services ${name}`,
      itemListElement: offers.map(offer => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: offer.name,
          description: offer.description
        }
      }))
    }
  }

  return schema
}

// Helper pour créer un schema FAQ
export function createFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }
}

// Helper pour créer un breadcrumb
export function createBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  }
}

// =====================================================
// SCHEMAS PREDEFINIES PAR PAGE
// =====================================================

// PrestaShop
export const prestashopSchemas = {
  service: createServiceSchema(
    'Creation Boutique PrestaShop',
    'Expert PrestaShop Niveau 2. Creation de boutiques e-commerce, developpement de modules sur mesure, migration et maintenance.',
    'https://bluewave.fr/services/prestashop',
    'E-commerce Development',
    [
      { name: 'Creation de boutique PrestaShop', description: 'Developpement de boutiques e-commerce sur mesure avec PrestaShop 8 & 9.' },
      { name: 'Modules PrestaShop sur mesure', description: 'Developpement de modules personnalises pour etendre les fonctionnalites.' },
      { name: 'Migration vers PrestaShop', description: 'Migration depuis WooCommerce, Magento, Shopify vers PrestaShop.' },
      { name: 'Optimisation & Performance', description: 'Amelioration des temps de chargement, SEO technique, Core Web Vitals.' },
      { name: 'Integration paiement & logistique', description: 'Integration Stripe, PayPal, Colissimo, Mondial Relay, etc.' },
      { name: 'Maintenance & Support', description: 'Contrats de maintenance, mises a jour et support reactif.' }
    ]
  ),
  faq: createFAQSchema([
    { question: 'Combien coute la creation d\'une boutique PrestaShop ?', answer: 'Le cout varie selon la complexite du projet. Une boutique standard demarre aux alentours de 3 000 EUR, tandis qu\'un projet sur mesure avec modules personnalises peut aller de 8 000 EUR a 25 000 EUR. Nous etablissons un devis precis apres etude de vos besoins.' },
    { question: 'Quelle est la duree de developpement d\'une boutique PrestaShop ?', answer: 'Une boutique PrestaShop standard peut etre livree en 4 a 6 semaines. Les projets plus complexes avec des fonctionnalites sur mesure necessitent generalement 2 a 4 mois de developpement.' },
    { question: 'PrestaShop ou WooCommerce, que choisir ?', answer: 'PrestaShop est plus adapte pour les boutiques e-commerce dediees avec un catalogue important. WooCommerce convient mieux pour un site WordPress existant avec une dimension e-commerce secondaire.' },
    { question: 'Proposez-vous la maintenance apres livraison ?', answer: 'Oui, nous proposons des contrats de maintenance incluant les mises a jour de securite, la surveillance des performances, les sauvegardes automatiques et un support prioritaire. Les tarifs demarrent a 200 EUR/mois.' },
    { question: 'Pouvez-vous migrer ma boutique existante vers PrestaShop ?', answer: 'Oui, nous realisons des migrations depuis WooCommerce, Magento, Shopify, OpenCart et autres plateformes. Nous preservons vos produits, clients, commandes et le referencement existant.' },
    { question: 'Est-ce que PrestaShop est adapte pour le B2B ?', answer: 'PrestaShop dispose de fonctionnalites B2B natives (groupes clients, tarifs personnalises, devis). Nous pouvons egalement developper des modules sur mesure pour des besoins specifiques.' }
  ]),
  breadcrumb: createBreadcrumbSchema([
    { name: 'Accueil', url: 'https://bluewave.fr' },
    { name: 'Services', url: 'https://bluewave.fr/services' },
    { name: 'PrestaShop', url: 'https://bluewave.fr/services/prestashop' }
  ])
}

// Developpement
export const developpementSchemas = {
  service: createServiceSchema(
    'Developpement Web Sur Mesure',
    'Developpement d\'applications web, sites e-commerce et plateformes SaaS. Solutions robustes et evolutives avec React, Next.js et les dernieres technologies.',
    'https://bluewave.fr/services/developpement',
    'Web Development',
    [
      { name: 'Applications React & Next.js', description: 'Interfaces modernes et performantes avec SSR, SSG et ISR.' },
      { name: 'E-commerce PrestaShop', description: 'Boutiques en ligne performantes, modules sur mesure.' },
      { name: 'SaaS & Plateformes', description: 'Applications multi-utilisateurs avec authentification et abonnements.' },
      { name: 'API & Integrations', description: 'APIs RESTful et GraphQL, integrations tierces.' },
      { name: 'Progressive Web Apps', description: 'Applications web installables fonctionnant hors ligne.' },
      { name: 'Sites WordPress', description: 'WordPress headless, themes sur mesure et optimisation SEO.' }
    ]
  ),
  breadcrumb: createBreadcrumbSchema([
    { name: 'Accueil', url: 'https://bluewave.fr' },
    { name: 'Services', url: 'https://bluewave.fr/services' },
    { name: 'Developpement', url: 'https://bluewave.fr/services/developpement' }
  ])
}

// Debugging
export const debuggingSchemas = {
  service: createServiceSchema(
    'Debugging & Optimisation',
    'Resolution de bugs critiques et optimisation des performances. Analyse approfondie, refactoring et amelioration des Core Web Vitals.',
    'https://bluewave.fr/services/debugging',
    'Software Debugging',
    [
      { name: 'Resolution de bugs critiques', description: 'Analyse et correction des erreurs bloquantes.' },
      { name: 'Optimisation des performances', description: 'Amelioration des Core Web Vitals et temps de chargement.' },
      { name: 'Audit de securite', description: 'Detection et correction des vulnerabilites.' },
      { name: 'Refactoring', description: 'Amelioration de la qualite du code et reduction de la dette technique.' }
    ]
  ),
  breadcrumb: createBreadcrumbSchema([
    { name: 'Accueil', url: 'https://bluewave.fr' },
    { name: 'Services', url: 'https://bluewave.fr/services' },
    { name: 'Debugging', url: 'https://bluewave.fr/services/debugging' }
  ])
}

// Audit SEO
export const auditSeoSchemas = {
  service: createServiceSchema(
    'Audit SEO Technique',
    'Audit SEO technique complet pour identifier les problemes de referencement et optimiser votre visibilite sur Google.',
    'https://bluewave.fr/services/audit/seo',
    'SEO Audit',
    [
      { name: 'Analyse technique', description: 'Crawl complet, indexation, structure du site.' },
      { name: 'Audit on-page', description: 'Balises, contenu, maillage interne.' },
      { name: 'Audit off-page', description: 'Backlinks, autorite de domaine.' },
      { name: 'Recommandations', description: 'Plan d\'action priorise avec quick wins.' }
    ]
  ),
  breadcrumb: createBreadcrumbSchema([
    { name: 'Accueil', url: 'https://bluewave.fr' },
    { name: 'Services', url: 'https://bluewave.fr/services' },
    { name: 'Audit', url: 'https://bluewave.fr/services/audit' },
    { name: 'SEO', url: 'https://bluewave.fr/services/audit/seo' }
  ])
}

// Audit Performance
export const auditPerformanceSchemas = {
  service: createServiceSchema(
    'Audit Performance Web',
    'Audit de performance web complet. Analyse des temps de chargement, optimisation des ressources et amelioration de l\'experience utilisateur.',
    'https://bluewave.fr/services/audit/performance',
    'Performance Audit',
    [
      { name: 'Analyse Lighthouse', description: 'Audit complet avec Google Lighthouse.' },
      { name: 'Optimisation ressources', description: 'Images, CSS, JavaScript, fonts.' },
      { name: 'Strategie de cache', description: 'Configuration optimale du cache.' },
      { name: 'CDN & Hosting', description: 'Recommandations infrastructure.' }
    ]
  ),
  breadcrumb: createBreadcrumbSchema([
    { name: 'Accueil', url: 'https://bluewave.fr' },
    { name: 'Services', url: 'https://bluewave.fr/services' },
    { name: 'Audit', url: 'https://bluewave.fr/services/audit' },
    { name: 'Performance', url: 'https://bluewave.fr/services/audit/performance' }
  ])
}

// Audit Core Web Vitals
export const auditCoreWebVitalsSchemas = {
  service: createServiceSchema(
    'Audit Core Web Vitals',
    'Audit Core Web Vitals pour ameliorer votre score Google. Analyse LCP, FID, CLS et optimisations specifiques.',
    'https://bluewave.fr/services/audit/core-web-vitals',
    'Core Web Vitals Audit',
    [
      { name: 'Analyse LCP', description: 'Largest Contentful Paint - temps de chargement.' },
      { name: 'Analyse INP', description: 'Interaction to Next Paint - reactivite.' },
      { name: 'Analyse CLS', description: 'Cumulative Layout Shift - stabilite visuelle.' },
      { name: 'Optimisations', description: 'Corrections et ameliorations specifiques.' }
    ]
  ),
  breadcrumb: createBreadcrumbSchema([
    { name: 'Accueil', url: 'https://bluewave.fr' },
    { name: 'Services', url: 'https://bluewave.fr/services' },
    { name: 'Audit', url: 'https://bluewave.fr/services/audit' },
    { name: 'Core Web Vitals', url: 'https://bluewave.fr/services/audit/core-web-vitals' }
  ])
}

// Developpement React
export const devReactSchemas = {
  service: createServiceSchema(
    'Developpement React & Next.js',
    'Developpement d\'applications React et Next.js performantes. SSR, SSG, ISR et optimisations avancees.',
    'https://bluewave.fr/services/developpement/react',
    'React Development',
    [
      { name: 'Applications React', description: 'Interfaces modernes avec React 18+.' },
      { name: 'Sites Next.js', description: 'SSR, SSG, ISR pour des performances optimales.' },
      { name: 'TypeScript', description: 'Code type-safe et maintenable.' },
      { name: 'State Management', description: 'Redux, Zustand, React Query.' }
    ]
  ),
  breadcrumb: createBreadcrumbSchema([
    { name: 'Accueil', url: 'https://bluewave.fr' },
    { name: 'Services', url: 'https://bluewave.fr/services' },
    { name: 'Developpement', url: 'https://bluewave.fr/services/developpement' },
    { name: 'React', url: 'https://bluewave.fr/services/developpement/react' }
  ])
}

// Developpement API
export const devApiSchemas = {
  service: createServiceSchema(
    'Developpement API',
    'Developpement d\'APIs RESTful et GraphQL. Integrations tierces, automatisations et architectures microservices.',
    'https://bluewave.fr/services/developpement/api',
    'API Development',
    [
      { name: 'APIs RESTful', description: 'Conception et developpement d\'APIs REST.' },
      { name: 'GraphQL', description: 'APIs flexibles avec GraphQL.' },
      { name: 'Integrations', description: 'CRM, ERP, paiement, shipping.' },
      { name: 'Documentation', description: 'OpenAPI/Swagger, documentation interactive.' }
    ]
  ),
  breadcrumb: createBreadcrumbSchema([
    { name: 'Accueil', url: 'https://bluewave.fr' },
    { name: 'Services', url: 'https://bluewave.fr/services' },
    { name: 'Developpement', url: 'https://bluewave.fr/services/developpement' },
    { name: 'API', url: 'https://bluewave.fr/services/developpement/api' }
  ])
}

// Developpement WordPress
export const devWordpressSchemas = {
  service: createServiceSchema(
    'Developpement WordPress',
    'Developpement WordPress headless et themes sur mesure. Optimisation SEO et performances avancees.',
    'https://bluewave.fr/services/developpement/wordpress',
    'WordPress Development',
    [
      { name: 'WordPress Headless', description: 'Decouplage front-end avec Next.js.' },
      { name: 'Themes sur mesure', description: 'Design et developpement de themes.' },
      { name: 'Plugins custom', description: 'Fonctionnalites specifiques.' },
      { name: 'Optimisation SEO', description: 'Structure et performances optimisees.' }
    ]
  ),
  breadcrumb: createBreadcrumbSchema([
    { name: 'Accueil', url: 'https://bluewave.fr' },
    { name: 'Services', url: 'https://bluewave.fr/services' },
    { name: 'Developpement', url: 'https://bluewave.fr/services/developpement' },
    { name: 'WordPress', url: 'https://bluewave.fr/services/developpement/wordpress' }
  ])
}

// Developpement PWA
export const devPwaSchemas = {
  service: createServiceSchema(
    'Developpement Progressive Web Apps',
    'Developpement de Progressive Web Apps. Applications installables, mode hors ligne et notifications push.',
    'https://bluewave.fr/services/developpement/pwa',
    'PWA Development',
    [
      { name: 'Service Workers', description: 'Cache et fonctionnement hors ligne.' },
      { name: 'Manifest', description: 'Installation sur l\'ecran d\'accueil.' },
      { name: 'Notifications Push', description: 'Engagement utilisateur.' },
      { name: 'Experience native', description: 'Performance et UX optimisees.' }
    ]
  ),
  breadcrumb: createBreadcrumbSchema([
    { name: 'Accueil', url: 'https://bluewave.fr' },
    { name: 'Services', url: 'https://bluewave.fr/services' },
    { name: 'Developpement', url: 'https://bluewave.fr/services/developpement' },
    { name: 'PWA', url: 'https://bluewave.fr/services/developpement/pwa' }
  ])
}

// Developpement SaaS
export const devSaasSchemas = {
  service: createServiceSchema(
    'Developpement SaaS',
    'Developpement de plateformes SaaS. Applications multi-tenants, abonnements Stripe et tableaux de bord.',
    'https://bluewave.fr/services/developpement/saas',
    'SaaS Development',
    [
      { name: 'Multi-tenancy', description: 'Architecture multi-utilisateurs.' },
      { name: 'Authentification', description: 'SSO, OAuth, roles et permissions.' },
      { name: 'Abonnements', description: 'Integration Stripe, gestion des plans.' },
      { name: 'Tableaux de bord', description: 'Analytics et reporting temps reel.' }
    ]
  ),
  breadcrumb: createBreadcrumbSchema([
    { name: 'Accueil', url: 'https://bluewave.fr' },
    { name: 'Services', url: 'https://bluewave.fr/services' },
    { name: 'Developpement', url: 'https://bluewave.fr/services/developpement' },
    { name: 'SaaS', url: 'https://bluewave.fr/services/developpement/saas' }
  ])
}
