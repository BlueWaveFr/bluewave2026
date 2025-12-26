import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const WORDPRESS_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://cms.bluewave.fr/graphql'

interface Guide {
  id: string
  title: string
  slug: string
  date: string
  modified: string
  content: string
  featuredImage?: {
    node: {
      sourceUrl: string
      altText?: string
    }
  }
  guideCategories?: {
    nodes: Array<{
      name: string
      slug: string
    }>
  }
  author?: {
    node: {
      name: string
      slug: string
      avatar?: {
        url: string
      }
      description?: string
    }
  }
  seo?: {
    title: string
    metaDesc: string
    opengraphTitle: string
    opengraphDescription: string
    opengraphImage?: {
      sourceUrl: string
    }
    canonical: string
  }
}

async function getGuide(slug: string): Promise<Guide | null> {
  try {
    const res = await fetch(WORDPRESS_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
          query GetGuide($slug: [String]!) {
            guides(where: { nameIn: $slug }, first: 1) {
              nodes {
                id
                title
                slug
                date
                modified
                content
                featuredImage {
                  node {
                    sourceUrl
                    altText
                  }
                }
                guideCategories {
                  nodes {
                    name
                    slug
                  }
                }
                author {
                  node {
                    name
                    slug
                    avatar {
                      url
                    }
                    description
                  }
                }
                seo {
                  title
                  metaDesc
                  opengraphTitle
                  opengraphDescription
                  opengraphImage {
                    sourceUrl
                  }
                  canonical
                }
              }
            }
          }
        `,
        variables: { slug: [slug] }
      }),
      cache: 'no-store'
    })

    const json = await res.json()
    return json.data?.guides?.nodes?.[0] || null
  } catch (error) {
    console.error('Error fetching guide:', error)
    return null
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const guide = await getGuide(slug)

  if (!guide) {
    return {
      title: 'Guide non trouve | Bluewave',
    }
  }

  const seo = guide.seo
  const title = seo?.title || `${guide.title} | Guides Bluewave`
  const description = seo?.metaDesc || guide.content?.replace(/<[^>]*>/g, '').slice(0, 160)
  const ogImage = seo?.opengraphImage?.sourceUrl || guide.featuredImage?.node?.sourceUrl

  return {
    title,
    description,
    openGraph: {
      title: seo?.opengraphTitle || title,
      description: seo?.opengraphDescription || description,
      type: 'article',
      publishedTime: guide.date,
      modifiedTime: guide.modified,
      url: `https://bluewave.fr/guides/${guide.slug}`,
      images: ogImage ? [{ url: ogImage }] : [],
    },
    alternates: {
      canonical: seo?.canonical || `https://bluewave.fr/guides/${guide.slug}`,
    },
  }
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

function estimateReadTime(content: string): number {
  const wordsPerMinute = 200
  const text = content.replace(/<[^>]*>/g, '')
  const wordCount = text.split(/\s+/).length
  return Math.ceil(wordCount / wordsPerMinute)
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const guide = await getGuide(slug)

  if (!guide) {
    notFound()
  }

  const readTime = estimateReadTime(guide.content || '')
  const category = guide.guideCategories?.nodes?.[0]

  return (
    <main className="pt-20">
      <article>
        {/* Header */}
        <header className="section-padding-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <ol className="flex items-center gap-2 text-sm text-dark-400">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
                </li>
                <li>/</li>
                <li>
                  <Link href="/guides" className="hover:text-white transition-colors">Guides</Link>
                </li>
                <li>/</li>
                <li className="text-dark-300 truncate max-w-[200px]">{guide.title}</li>
              </ol>
            </nav>

            {/* Category & Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              {category && (
                <span className="badge">{category.name}</span>
              )}
              <span className="text-dark-500 text-sm">{formatDate(guide.date)}</span>
              <span className="text-dark-500 text-sm">{readTime} min de lecture</span>
            </div>

            {/* Title */}
            <h1 className="heading-lg text-white mb-6">
              {guide.title}
            </h1>

            {/* Author - Important pour E-E-A-T */}
            {guide.author?.node && (
              <Link href={`/equipe/${guide.author.node.slug}`} className="flex items-center gap-4 mb-8 group">
                {guide.author.node.avatar?.url && (
                  <img
                    src={guide.author.node.avatar.url}
                    alt={guide.author.node.name}
                    className="w-12 h-12 rounded-full bg-dark-800"
                  />
                )}
                <div>
                  <p className="text-white font-medium group-hover:text-accent-400 transition-colors">
                    {guide.author.node.name}
                  </p>
                  <p className="text-dark-400 text-sm">Expert Bluewave</p>
                </div>
              </Link>
            )}
          </div>
        </header>

        {/* Featured Image */}
        {guide.featuredImage?.node?.sourceUrl && (
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
            <div className="aspect-video rounded-2xl overflow-hidden bg-dark-800">
              <img
                src={guide.featuredImage.node.sourceUrl}
                alt={guide.featuredImage.node.altText || guide.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="prose-dark"
            dangerouslySetInnerHTML={{ __html: guide.content }}
          />
        </div>

        {/* Author Box - E-E-A-T */}
        {guide.author?.node && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-12 border-t border-dark-800/50">
            <div className="card p-8">
              <div className="flex items-start gap-6">
                {guide.author.node.avatar?.url && (
                  <img
                    src={guide.author.node.avatar.url}
                    alt={guide.author.node.name}
                    className="w-20 h-20 rounded-full bg-dark-800 flex-shrink-0"
                  />
                )}
                <div>
                  <p className="text-dark-400 text-sm mb-1">Redige par</p>
                  <Link
                    href={`/equipe/${guide.author.node.slug}`}
                    className="text-xl font-semibold text-white hover:text-accent-400 transition-colors"
                  >
                    {guide.author.node.name}
                  </Link>
                  {guide.author.node.description && (
                    <p className="text-dark-400 mt-2 leading-relaxed">
                      {guide.author.node.description}
                    </p>
                  )}
                  <Link
                    href={`/equipe/${guide.author.node.slug}`}
                    className="inline-flex items-center text-accent-400 text-sm font-medium mt-4 hover:text-accent-300"
                  >
                    Voir le profil complet
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="card p-12 text-center">
              <h2 className="heading-md text-white mb-4">
                Besoin d'aide pour implementer ces conseils ?
              </h2>
              <p className="text-dark-300 text-lg mb-8 max-w-xl mx-auto">
                Notre equipe d'experts peut vous accompagner dans la mise en place.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-accent-500 text-white font-medium rounded-xl hover:bg-accent-600 transition-all"
              >
                Contactez-nous
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </article>
    </main>
  )
}
