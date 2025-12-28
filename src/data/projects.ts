export interface Project {
  slug: string
  title: string
  shortDescription: string
  description: string
  category: string
  technologies: string[]
  url: string
  image: string
  features: string[]
  results?: string[]
}

export const projects: Project[] = [
  {
    slug: 'demo-vitrine-wordpress-headless',
    title: 'Site Vitrine WordPress Headless',
    shortDescription: 'Site vitrine moderne avec WordPress comme CMS headless et Next.js en frontend.',
    description: `Cette demonstration illustre la puissance d'une architecture WordPress Headless couplee a un frontend Next.js moderne. Le backend WordPress gere le contenu via WPGraphQL, tandis que le frontend React offre une experience utilisateur fluide et performante.

L'approche headless permet de beneficier du meilleur des deux mondes : la facilite de gestion de contenu de WordPress et les performances exceptionnelles de Next.js avec le rendu statique (SSG) et la regeneration incrementale (ISR).`,
    category: 'Site Vitrine',
    technologies: ['Next.js 16', 'React 19', 'WordPress', 'WPGraphQL', 'Tailwind CSS', 'TypeScript'],
    url: 'https://demo-vitrine.bluewave.fr',
    image: '/images/projects/demo-vitrine.jpg',
    features: [
      'Architecture WordPress Headless',
      'Frontend Next.js avec App Router',
      'Rendu statique (SSG) pour des performances optimales',
      'Regeneration incrementale (ISR) toutes les 60 secondes',
      'API GraphQL via WPGraphQL',
      'Design responsive et moderne',
      'Optimisation SEO native',
    ],
    results: [
      'Score Lighthouse 95+',
      'Temps de chargement < 1s',
      'Deploiement automatise via Coolify',
    ],
  },
  {
    slug: 'demo-ecommerce-woocommerce-headless',
    title: 'E-commerce WooCommerce Headless',
    shortDescription: 'Boutique e-commerce performante avec WooCommerce headless et frontend Next.js.',
    description: `Cette demonstration presente une boutique e-commerce moderne utilisant WooCommerce comme backend headless. Le frontend Next.js consomme l'API GraphQL via WooGraphQL pour afficher les produits, gerer le panier et offrir une experience d'achat fluide.

L'architecture headless permet d'obtenir des performances superieures aux themes WooCommerce traditionnels tout en conservant toute la puissance de gestion de WooCommerce : produits, variations, stocks, promotions, etc.`,
    category: 'E-commerce',
    technologies: ['Next.js 16', 'React 19', 'WooCommerce', 'WooGraphQL', 'Tailwind CSS', 'TypeScript'],
    url: 'https://demo-woo.bluewave.fr',
    image: '/images/projects/demo-woo.jpg',
    features: [
      'WooCommerce comme backend e-commerce',
      'API GraphQL via WooGraphQL',
      'Catalogue produits avec filtres',
      'Panier interactif cote client',
      'Pages produits dynamiques',
      'Gestion des categories',
      'Design e-commerce moderne',
    ],
    results: [
      'Navigation instantanee entre les pages',
      'Experience utilisateur fluide',
      'Gestion des stocks en temps reel',
    ],
  },
  {
    slug: 'demo-ecommerce-prestashop-headless',
    title: 'E-commerce PrestaShop Headless',
    shortDescription: 'Boutique e-commerce innovante avec PrestaShop headless et design moderne.',
    description: `Cette demonstration illustre les capacites d'une architecture PrestaShop Headless couplee a un frontend Next.js au design innovant. Le backend PrestaShop gere les produits, les categories et les stocks via son API Webservice REST, tandis que le frontend React offre une experience utilisateur moderne et performante.

Le design se demarque par ses gradients violet/fuchsia, ses animations fluides et son interface utilisateur soignee qui rompt avec les templates PrestaShop classiques.`,
    category: 'E-commerce',
    technologies: ['Next.js 16', 'React 19', 'PrestaShop 8', 'REST API', 'Tailwind CSS', 'TypeScript'],
    url: 'https://demo-presta.bluewave.fr',
    image: '/images/projects/demo-presta.jpg',
    features: [
      'PrestaShop 8 comme backend e-commerce',
      'API REST Webservice PrestaShop',
      'Design innovant avec gradients et animations',
      'Catalogue produits avec categories',
      'Panier slide-out interactif',
      'Proxy d\'images pour authentification transparente',
      'Support multilingue (francais)',
    ],
    results: [
      'Design 100% personnalise',
      'Performance optimale avec SSG',
      'Backend PrestaShop non expose publiquement',
    ],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug)
}

export function getAllProjects(): Project[] {
  return projects
}
