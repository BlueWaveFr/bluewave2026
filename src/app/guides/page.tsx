import { Metadata } from 'next'
import Link from 'next/link'

// Forcer le rendu dynamique pour récupérer les guides WordPress
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Guides Techniques',
  description: 'Guides techniques approfondis sur le developpement web, SEO, performance et bonnes pratiques. Ressources pour developeurs et equipes techniques.',
  alternates: {
    canonical: 'https://bluewave.fr/guides',
  },
}

const WORDPRESS_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://cms.bluewave.fr/graphql'

interface Guide {
  id: string
  title: string
  slug: string
  date: string
  excerpt: string
  content: string
  featuredImage?: {
    node: {
      sourceUrl: string
    }
  }
  guideCategories?: {
    nodes: Array<{
      name: string
      slug: string
    }>
  }
}

interface Category {
  name: string
  slug: string
  count: number
}

async function getGuides(): Promise<Guide[]> {
  try {
    const res = await fetch(WORDPRESS_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
          query GetAllGuides {
            guides(first: 100, where: { status: PUBLISH }) {
              nodes {
                id
                title
                slug
                date
                excerpt
                content
                featuredImage {
                  node {
                    sourceUrl
                  }
                }
                guideCategories {
                  nodes {
                    name
                    slug
                  }
                }
              }
            }
          }
        `
      }),
      next: { revalidate: 10 }
    })

    const json = await res.json()
    return json.data?.guides?.nodes || []
  } catch (error) {
    console.error('Error fetching guides:', error)
    return []
  }
}

async function getGuideCategories(): Promise<Category[]> {
  try {
    const res = await fetch(WORDPRESS_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
          query GetGuideCategories {
            guideCategories(first: 50) {
              nodes {
                name
                slug
                count
              }
            }
          }
        `
      }),
      next: { revalidate: 10 }
    })

    const json = await res.json()
    return json.data?.guideCategories?.nodes || []
  } catch (error) {
    console.error('Error fetching guide categories:', error)
    return []
  }
}

function estimateReadTime(content: string): number {
  const wordsPerMinute = 200
  const text = content?.replace(/<[^>]*>/g, '') || ''
  const wordCount = text.split(/\s+/).length
  return Math.ceil(wordCount / wordsPerMinute)
}

export default async function GuidesPage() {
  const [guides, categories] = await Promise.all([
    getGuides(),
    getGuideCategories()
  ])

  const hasGuides = guides.length > 0

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="badge mb-6">Guides</span>
            <h1 className="heading-xl text-white mb-6">
              Ressources pour{' '}
              <span className="gradient-text">developeurs</span>
            </h1>
            <p className="text-xl text-dark-300 leading-relaxed">
              Des guides techniques approfondis pour vous aider a maitriser les meilleures
              pratiques du developpement web moderne.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      {categories.length > 0 && (
        <section className="border-y border-dark-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-wrap gap-2">
              <span className="px-4 py-2 rounded-lg text-sm font-medium bg-accent-500 text-white">
                Tous
              </span>
              {categories.map((category) => (
                <span
                  key={category.slug}
                  className="px-4 py-2 rounded-lg text-sm font-medium bg-dark-800/50 text-dark-300 hover:text-white hover:bg-dark-700 transition-all cursor-pointer"
                >
                  {category.name}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Guides Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {hasGuides ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {guides.map((guide) => {
                const category = guide.guideCategories?.nodes?.[0]
                const readTime = estimateReadTime(guide.content)

                return (
                  <article key={guide.id}>
                    <Link href={`/guides/${guide.slug}`}>
                      <div className="group h-full p-8 card-interactive">
                        <div className="flex items-center gap-3 mb-4">
                          {category && (
                            <span className="badge">{category.name}</span>
                          )}
                          <span className="text-dark-500 text-sm">{readTime} min</span>
                        </div>
                        <h2 className="text-xl font-semibold text-white mb-3 group-hover:text-accent-400 transition-colors">
                          {guide.title}
                        </h2>
                        <div
                          className="text-dark-400 mb-6 line-clamp-3"
                          dangerouslySetInnerHTML={{ __html: guide.excerpt }}
                        />
                        <span className="inline-flex items-center text-accent-400 text-sm font-medium group-hover:text-accent-300">
                          Lire le guide
                          <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                      </div>
                    </Link>
                  </article>
                )
              })}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full bg-dark-800/50 border border-dark-700/50 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-dark-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Guides en preparation</h3>
              <p className="text-dark-400 max-w-md mx-auto">
                Nos guides techniques sont en cours de redaction. Revenez bientot pour decouvrir nos ressources.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding border-t border-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card p-12 text-center">
            <h2 className="heading-md text-white mb-4">
              Restez informe
            </h2>
            <p className="text-dark-300 text-lg mb-8 max-w-xl mx-auto">
              Recevez nos derniers guides et articles techniques directement dans votre boite mail.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="votre@email.com"
                className="input flex-1"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-accent-500 text-white font-medium rounded-lg hover:bg-accent-600 transition-all"
              >
                S'inscrire
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
