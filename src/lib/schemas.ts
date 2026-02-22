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

// =====================================================
// SCHEMAS SEO LOCAL - PRESTASHOP VILLES
// =====================================================

interface LocalCityConfig {
  city: string
  slug: string
  region: string
  department: string
  description: string
  sectors: string[]
}

// Helper pour créer les schemas d'une page ville locale
export function createLocalPrestashopSchemas(config: LocalCityConfig) {
  const url = `https://bluewave.fr/services/prestashop/${config.slug}`

  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: `Agence PrestaShop ${config.city} - Bluewave`,
    description: `Creation de boutiques PrestaShop a ${config.city}. Expert e-commerce Niveau 2 en ${config.region}.`,
    url,
    logo: 'https://bluewave.fr/images/logo-full.jpg',
    image: 'https://bluewave.fr/og-image.jpg',
    email: 'contact@bluewave.fr',
    address: {
      '@type': 'PostalAddress',
      addressLocality: config.city,
      addressRegion: config.region,
      addressCountry: 'FR',
    },
    areaServed: {
      '@type': 'City',
      name: config.city,
    },
    priceRange: '€€€',
    sameAs: [
      'https://www.linkedin.com/company/bluewave-fr',
      'https://github.com/BlueWaveFr'
    ],
  }

  const service = createServiceSchema(
    `Agence PrestaShop ${config.city}`,
    `Expert PrestaShop Niveau 2 a ${config.city}. Creation de boutiques e-commerce, modules sur mesure et accompagnement pour les commercants de ${config.region}.`,
    url,
    'E-commerce Development',
    [
      { name: 'Creation boutique PrestaShop', description: `Developpement de boutiques e-commerce sur mesure a ${config.city}.` },
      { name: 'Modules PrestaShop sur mesure', description: `Modules personnalises pour les commercants de ${config.city}.` },
      { name: `SEO Local ${config.city}`, description: `Optimisation du referencement local a ${config.city} et en ${config.region}.` },
      { name: 'Integration Click & Collect', description: `Solutions Click & Collect pour vos clients a ${config.city}.` },
      { name: 'Formation PrestaShop', description: `Sessions de formation PrestaShop a ${config.city}.` },
      { name: 'Maintenance & Support', description: `Support reactif pour les e-commercants de ${config.city}.` },
    ]
  )

  const faq = createFAQSchema([
    { question: `Pourquoi choisir une agence PrestaShop a ${config.city} ?`, answer: `Travailler avec une agence locale a ${config.city} vous permet de beneficier d'un accompagnement de proximite, de reunions en presentiel et d'une parfaite connaissance du tissu economique de ${config.region}.` },
    { question: `Combien coute la creation d'une boutique PrestaShop a ${config.city} ?`, answer: `Les tarifs pour une boutique PrestaShop a ${config.city} demarrent a 3 000 EUR pour une boutique standard. Les projets sur mesure avec modules personnalises peuvent aller de 8 000 EUR a 25 000 EUR. Devis gratuit sous 48h.` },
    { question: `Proposez-vous des rendez-vous en presentiel a ${config.city} ?`, answer: `Oui, nous nous deplacons regulierement a ${config.city} et dans toute la ${config.region}. Nous pouvons organiser des reunions dans vos locaux pour discuter de votre projet e-commerce.` },
    { question: `Quels secteurs accompagnez-vous a ${config.city} ?`, answer: `Nous accompagnons tous les secteurs d'activite a ${config.city}, avec une expertise particuliere dans : ${config.sectors.join(', ')}.` },
  ])

  const breadcrumb = createBreadcrumbSchema([
    { name: 'Accueil', url: 'https://bluewave.fr' },
    { name: 'Services', url: 'https://bluewave.fr/services' },
    { name: 'PrestaShop', url: 'https://bluewave.fr/services/prestashop' },
    { name: config.city, url },
  ])

  return { localBusiness, service, faq, breadcrumb }
}

// Configurations des 10 villes
export const localCities: Record<string, LocalCityConfig> = {
  bordeaux: {
    city: 'Bordeaux', slug: 'bordeaux', region: 'Gironde', department: '33',
    description: 'capitale mondiale du vin et metropole dynamique du Sud-Ouest',
    sectors: ['Negoce de vins', 'Gastronomie', 'Mode et pret-a-porter', 'Artisanat local', 'Tourisme'],
  },
  merignac: {
    city: 'Merignac', slug: 'merignac', region: 'Gironde', department: '33',
    description: 'deuxieme ville de Gironde et pole economique de la metropole bordelaise',
    sectors: ['Aeronautique', 'Commerce de proximite', 'Services aux entreprises', 'Artisanat', 'Restauration'],
  },
  pessac: {
    city: 'Pessac', slug: 'pessac', region: 'Gironde', department: '33',
    description: 'ville universitaire et viticole aux portes de Bordeaux',
    sectors: ['Viticulture', 'Commerce de proximite', 'Education', 'Artisanat', 'Services'],
  },
  libourne: {
    city: 'Libourne', slug: 'libourne', region: 'Gironde', department: '33',
    description: 'capitale du Libournais et porte d\'entree de Saint-Emilion',
    sectors: ['Viticulture et negoce', 'Tourisme oenotouristique', 'Commerce de centre-ville', 'Artisanat', 'Gastronomie'],
  },
  arcachon: {
    city: 'Arcachon', slug: 'arcachon', region: 'Gironde', department: '33',
    description: 'station balneaire prestigieuse du Bassin d\'Arcachon',
    sectors: ['Tourisme et hotellerie', 'Ostreiculture', 'Immobilier de luxe', 'Nautisme', 'Gastronomie'],
  },
  cognac: {
    city: 'Cognac', slug: 'cognac', region: 'Charente', department: '16',
    description: 'capitale mondiale du cognac et ville d\'art et d\'histoire',
    sectors: ['Maisons de cognac', 'Viticulture', 'Tourisme', 'Gastronomie', 'Artisanat de luxe'],
  },
  bayonne: {
    city: 'Bayonne', slug: 'bayonne', region: 'Pays Basque', department: '64',
    description: 'capitale du Pays Basque et ville de tradition commercante',
    sectors: ['Chocolaterie', 'Gastronomie basque', 'Artisanat', 'Tourisme', 'Commerce de centre-ville'],
  },
  biarritz: {
    city: 'Biarritz', slug: 'biarritz', region: 'Pays Basque', department: '64',
    description: 'station balneaire de renommee internationale et capitale du surf',
    sectors: ['Tourisme et hotellerie', 'Surf et sports nautiques', 'Mode et luxe', 'Bien-etre et spa', 'Gastronomie'],
  },
  anglet: {
    city: 'Anglet', slug: 'anglet', region: 'Pays Basque', department: '64',
    description: 'ville dynamique entre ocean et forets au coeur du BAB',
    sectors: ['Commerce de proximite', 'Surf et loisirs', 'Restauration', 'Artisanat', 'Services'],
  },
  pau: {
    city: 'Pau', slug: 'pau', region: 'Bearn', department: '64',
    description: 'prefecture des Pyrenees-Atlantiques et ville royale au pied des Pyrenees',
    sectors: ['Commerce de centre-ville', 'Tourisme pyreneeen', 'Gastronomie bearnaise', 'Artisanat', 'Services aux entreprises'],
  },
}

// Génération automatique des schemas pour chaque ville
export const localPrestashopSchemas = Object.fromEntries(
  Object.entries(localCities).map(([slug, config]) => [
    slug,
    createLocalPrestashopSchemas(config)
  ])
)

// WordPress
export const wordpressSchemas = {
  service: createServiceSchema(
    'Création Site WordPress',
    'Agence WordPress experte. Création de sites vitrines, blogs et portails sur mesure. Développement de plugins, migration et maintenance.',
    'https://bluewave.fr/services/wordpress',
    'Web Development',
    [
      { name: 'Création de site vitrine WordPress', description: 'Sites vitrines professionnels, responsive et optimisés SEO avec WordPress.' },
      { name: 'Développement de plugins WordPress', description: 'Plugins sur mesure pour étendre les fonctionnalités de votre site.' },
      { name: 'Migration vers WordPress', description: 'Migration depuis Wix, Squarespace, Joomla, Drupal ou tout autre CMS.' },
      { name: 'Optimisation & Performance', description: 'Amélioration des temps de chargement, SEO technique, Core Web Vitals.' },
      { name: 'WordPress Headless', description: 'Architecture découplée avec Next.js pour des performances maximales.' },
      { name: 'Maintenance & Support', description: 'Mises à jour, sécurité, sauvegardes et support réactif.' }
    ]
  ),
  faq: createFAQSchema([
    { question: 'Combien coûte la création d\'un site WordPress ?', answer: 'Le coût varie selon la complexité. Un site vitrine standard démarre à 2 000 EUR, un site sur mesure avec fonctionnalités avancées peut aller de 5 000 EUR à 20 000 EUR. Devis gratuit après étude de vos besoins.' },
    { question: 'Quelle est la durée de création d\'un site WordPress ?', answer: 'Un site vitrine standard peut être livré en 3 à 4 semaines. Les projets plus complexes avec des fonctionnalités sur mesure nécessitent généralement 2 à 3 mois de développement.' },
    { question: 'WordPress ou PrestaShop, que choisir ?', answer: 'WordPress est idéal pour les sites vitrines, blogs, portails et sites institutionnels. PrestaShop est plus adapté pour les boutiques e-commerce dédiées avec un catalogue important. Nous vous conseillons selon votre projet.' },
    { question: 'Proposez-vous la maintenance après livraison ?', answer: 'Oui, nous proposons des contrats de maintenance incluant les mises à jour WordPress et plugins, la surveillance de sécurité, les sauvegardes automatiques et un support prioritaire à partir de 150 EUR/mois.' },
    { question: 'Pouvez-vous migrer mon site existant vers WordPress ?', answer: 'Oui, nous réalisons des migrations depuis Wix, Squarespace, Joomla, Drupal et autres CMS. Nous préservons votre contenu, vos médias et votre référencement existant.' },
    { question: 'Qu\'est-ce que WordPress Headless ?', answer: 'WordPress Headless utilise WordPress comme CMS pour gérer le contenu, avec un frontend moderne (Next.js) pour l\'affichage. Résultat : des performances exceptionnelles tout en gardant la facilité de gestion de WordPress.' }
  ]),
  breadcrumb: createBreadcrumbSchema([
    { name: 'Accueil', url: 'https://bluewave.fr' },
    { name: 'Services', url: 'https://bluewave.fr/services' },
    { name: 'WordPress', url: 'https://bluewave.fr/services/wordpress' }
  ])
}

// =====================================================
// SCHEMAS SEO LOCAL - WORDPRESS VILLES
// =====================================================

interface LocalWordpressCityConfig {
  city: string
  slug: string
  region: string
  department: string
  description: string
  sectors: string[]
}

// Helper pour créer les schemas d'une page ville locale WordPress
export function createLocalWordpressSchemas(config: LocalWordpressCityConfig) {
  const url = `https://bluewave.fr/services/wordpress/${config.slug}`

  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: `Agence WordPress ${config.city} - Bluewave`,
    description: `Création de sites WordPress à ${config.city}. Expert web en ${config.region}.`,
    url,
    logo: 'https://bluewave.fr/images/logo-full.jpg',
    image: 'https://bluewave.fr/og-image.jpg',
    email: 'contact@bluewave.fr',
    address: {
      '@type': 'PostalAddress',
      addressLocality: config.city,
      addressRegion: config.region,
      addressCountry: 'FR',
    },
    areaServed: {
      '@type': 'City',
      name: config.city,
    },
    priceRange: '€€€',
    sameAs: [
      'https://www.linkedin.com/company/bluewave-fr',
      'https://github.com/BlueWaveFr'
    ],
  }

  const service = createServiceSchema(
    `Agence WordPress ${config.city}`,
    `Expert WordPress à ${config.city}. Création de sites vitrines, blogs et portails sur mesure pour les entreprises de ${config.region}.`,
    url,
    'Web Development',
    [
      { name: 'Création site vitrine WordPress', description: `Sites vitrines professionnels sur mesure à ${config.city}.` },
      { name: 'Plugins WordPress sur mesure', description: `Développement de plugins personnalisés pour les entreprises de ${config.city}.` },
      { name: `SEO Local ${config.city}`, description: `Optimisation du référencement local à ${config.city} et en ${config.region}.` },
      { name: 'WordPress Headless', description: `Architecture moderne et performante pour les entreprises de ${config.city}.` },
      { name: 'Formation WordPress', description: `Sessions de formation WordPress à ${config.city}.` },
      { name: 'Maintenance & Support', description: `Support réactif pour les sites WordPress de ${config.city}.` },
    ]
  )

  const faq = createFAQSchema([
    { question: `Pourquoi choisir une agence WordPress à ${config.city} ?`, answer: `Travailler avec une agence locale à ${config.city} vous permet de bénéficier d'un accompagnement de proximité, de réunions en présentiel et d'une parfaite connaissance du tissu économique de ${config.region}.` },
    { question: `Combien coûte la création d'un site WordPress à ${config.city} ?`, answer: `Les tarifs pour un site WordPress à ${config.city} démarrent à 2 000 EUR pour un site vitrine standard. Les projets sur mesure avec fonctionnalités avancées peuvent aller de 5 000 EUR à 20 000 EUR. Devis gratuit sous 48h.` },
    { question: `Proposez-vous des rendez-vous en présentiel à ${config.city} ?`, answer: `Oui, nous nous déplaçons régulièrement à ${config.city} et dans toute la ${config.region}. Nous pouvons organiser des réunions dans vos locaux pour discuter de votre projet web.` },
    { question: `Quels types de sites réalisez-vous à ${config.city} ?`, answer: `Nous réalisons tous types de sites WordPress à ${config.city} : sites vitrines, blogs, portails, sites institutionnels, WordPress Headless avec Next.js, avec une expertise particulière pour : ${config.sectors.join(', ')}.` },
  ])

  const breadcrumb = createBreadcrumbSchema([
    { name: 'Accueil', url: 'https://bluewave.fr' },
    { name: 'Services', url: 'https://bluewave.fr/services' },
    { name: 'WordPress', url: 'https://bluewave.fr/services/wordpress' },
    { name: config.city, url },
  ])

  return { localBusiness, service, faq, breadcrumb }
}

// Configurations des 10 villes WordPress (same cities as PrestaShop)
export const localWordpressCities: Record<string, LocalWordpressCityConfig> = {
  bordeaux: {
    city: 'Bordeaux', slug: 'bordeaux', region: 'Gironde', department: '33',
    description: 'capitale mondiale du vin et métropole dynamique du Sud-Ouest',
    sectors: ['Négoce de vins', 'Gastronomie', 'Tourisme', 'Immobilier', 'Services aux entreprises'],
  },
  merignac: {
    city: 'Mérignac', slug: 'merignac', region: 'Gironde', department: '33',
    description: 'deuxième ville de Gironde et pôle économique de la métropole bordelaise',
    sectors: ['Aéronautique', 'Commerce de proximité', 'Services aux entreprises', 'Santé', 'Restauration'],
  },
  pessac: {
    city: 'Pessac', slug: 'pessac', region: 'Gironde', department: '33',
    description: 'ville universitaire et viticole aux portes de Bordeaux',
    sectors: ['Viticulture', 'Éducation', 'Commerce de proximité', 'Artisanat', 'Services'],
  },
  libourne: {
    city: 'Libourne', slug: 'libourne', region: 'Gironde', department: '33',
    description: 'capitale du Libournais et porte d\'entrée de Saint-Émilion',
    sectors: ['Viticulture et négoce', 'Tourisme œnotouristique', 'Commerce de centre-ville', 'Artisanat', 'Gastronomie'],
  },
  arcachon: {
    city: 'Arcachon', slug: 'arcachon', region: 'Gironde', department: '33',
    description: 'station balnéaire prestigieuse du Bassin d\'Arcachon',
    sectors: ['Tourisme et hôtellerie', 'Ostréiculture', 'Immobilier', 'Nautisme', 'Gastronomie'],
  },
  cognac: {
    city: 'Cognac', slug: 'cognac', region: 'Charente', department: '16',
    description: 'capitale mondiale du cognac et ville d\'art et d\'histoire',
    sectors: ['Maisons de cognac', 'Viticulture', 'Tourisme', 'Gastronomie', 'Artisanat de luxe'],
  },
  bayonne: {
    city: 'Bayonne', slug: 'bayonne', region: 'Pays Basque', department: '64',
    description: 'capitale du Pays Basque et ville de tradition commerçante',
    sectors: ['Chocolaterie', 'Gastronomie basque', 'Artisanat', 'Tourisme', 'Commerce de centre-ville'],
  },
  biarritz: {
    city: 'Biarritz', slug: 'biarritz', region: 'Pays Basque', department: '64',
    description: 'station balnéaire de renommée internationale et capitale du surf',
    sectors: ['Tourisme et hôtellerie', 'Surf et sports nautiques', 'Bien-être et spa', 'Mode et luxe', 'Gastronomie'],
  },
  anglet: {
    city: 'Anglet', slug: 'anglet', region: 'Pays Basque', department: '64',
    description: 'ville dynamique entre océan et forêts au cœur du BAB',
    sectors: ['Commerce de proximité', 'Surf et loisirs', 'Restauration', 'Artisanat', 'Services'],
  },
  pau: {
    city: 'Pau', slug: 'pau', region: 'Béarn', department: '64',
    description: 'préfecture des Pyrénées-Atlantiques et ville royale au pied des Pyrénées',
    sectors: ['Commerce de centre-ville', 'Tourisme pyrénéen', 'Gastronomie béarnaise', 'Artisanat', 'Services aux entreprises'],
  },
}

// Génération automatique des schemas pour chaque ville WordPress
export const localWordpressSchemas = Object.fromEntries(
  Object.entries(localWordpressCities).map(([slug, config]) => [
    slug,
    createLocalWordpressSchemas(config)
  ])
)

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
