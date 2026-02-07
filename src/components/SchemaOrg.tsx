import Script from 'next/script'

// Types pour les différents schemas
interface LocalBusinessSchema {
  '@type': 'LocalBusiness' | 'ProfessionalService'
  name: string
  description: string
  url: string
  logo: string
  image?: string
  telephone?: string
  email?: string
  address: {
    '@type': 'PostalAddress'
    streetAddress?: string
    addressLocality: string
    addressRegion?: string
    postalCode?: string
    addressCountry: string
  }
  geo?: {
    '@type': 'GeoCoordinates'
    latitude: number
    longitude: number
  }
  openingHoursSpecification?: {
    '@type': 'OpeningHoursSpecification'
    dayOfWeek: string[]
    opens: string
    closes: string
  }[]
  sameAs?: string[]
  priceRange?: string
  areaServed?: string | string[]
}

interface ServiceSchema {
  '@type': 'Service'
  name: string
  description: string
  provider: {
    '@type': 'Organization'
    name: string
    url: string
  }
  serviceType: string
  areaServed?: string | string[]
  hasOfferCatalog?: {
    '@type': 'OfferCatalog'
    name: string
    itemListElement: {
      '@type': 'Offer'
      itemOffered: {
        '@type': 'Service'
        name: string
        description: string
      }
    }[]
  }
}

interface FAQSchema {
  '@type': 'FAQPage'
  mainEntity: {
    '@type': 'Question'
    name: string
    acceptedAnswer: {
      '@type': 'Answer'
      text: string
    }
  }[]
}

interface BreadcrumbSchema {
  '@type': 'BreadcrumbList'
  itemListElement: {
    '@type': 'ListItem'
    position: number
    name: string
    item: string
  }[]
}

interface WebPageSchema {
  '@type': 'WebPage'
  name: string
  description: string
  url: string
  isPartOf: {
    '@type': 'WebSite'
    name: string
    url: string
  }
  breadcrumb?: BreadcrumbSchema
}

type SchemaType = LocalBusinessSchema | ServiceSchema | FAQSchema | BreadcrumbSchema | WebPageSchema

interface SchemaOrgProps {
  schemas: SchemaType[]
}

export default function SchemaOrg({ schemas }: SchemaOrgProps) {
  const jsonLd = schemas.map(schema => ({
    '@context': 'https://schema.org',
    ...schema
  }))

  return (
    <Script
      id="schema-org"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd.length === 1 ? jsonLd[0] : jsonLd)
      }}
      strategy="afterInteractive"
    />
  )
}

// Schemas prédéfinis pour Bluewave
export const bluewaveLocalBusiness: LocalBusinessSchema = {
  '@type': 'ProfessionalService',
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
  areaServed: ['France', 'Europe'],
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
  serviceType: string,
  offers?: { name: string; description: string }[]
): ServiceSchema {
  const schema: ServiceSchema = {
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
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
export function createFAQSchema(
  faqs: { question: string; answer: string }[]
): FAQSchema {
  return {
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
export function createBreadcrumbSchema(
  items: { name: string; url: string }[]
): BreadcrumbSchema {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  }
}
