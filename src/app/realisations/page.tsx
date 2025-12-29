import { Metadata } from 'next'
import Link from 'next/link'

const WORDPRESS_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://cms.bluewave.fr/graphql'

export const metadata: Metadata = {
  title: 'Realisations | Bluewave - Nos projets et demonstrations',
  description: 'Decouvrez nos realisations : sites vitrines, e-commerce headless avec WordPress, WooCommerce et PrestaShop. Des architectures modernes et performantes.',
  openGraph: {
    title: 'Realisations | Bluewave',
    description: 'Nos projets et demonstrations techniques : WordPress Headless, WooCommerce, PrestaShop.',
    url: 'https://bluewave.fr/realisations',
  },
  alternates: {
    canonical: 'https://bluewave.fr/realisations',
  },
}

interface Realisation {
  id: string
  title: string
  slug: string
  excerpt: string
  featuredImage: {
    node: {
      sourceUrl: string
    }
  } | null
  realisationCategories: {
    nodes: Array<{
      name: string
      slug: string
    }>
  }
  projectUrl: string
  technologies: string
  features: string
  results: string
}

async function getRealisations(): Promise<Realisation[]> {
  try {
    const res = await fetch(WORDPRESS_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
          query GetRealisations {
            realisations(first: 50, where: { orderby: { field: DATE, order: DESC } }) {
              nodes {
                id
                title
                slug
                excerpt
                featuredImage {
                  node {
                    sourceUrl
                  }
                }
                realisationCategories {
                  nodes {
                    name
                    slug
                  }
                }
                projectUrl
                technologies
                features
                results
              }
            }
          }
        `
      }),
      next: { revalidate: 60 }
    })

    const json = await res.json()
    return json.data?.realisations?.nodes || []
  } catch (error) {
    console.error('Error fetching realisations:', error)
    return []
  }
}

function parseTechnologies(techString: string): string[] {
  if (!techString) return []
  return techString.split(',').map(t => t.trim()).filter(Boolean)
}

export default async function RealisationsPage() {
  const realisations = await getRealisations()

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="badge mb-6">Portfolio</span>
            <h1 className="heading-xl text-white mb-6">
              Nos{' '}
              <span className="gradient-text">realisations</span>
            </h1>
            <p className="text-xl text-dark-300 leading-relaxed">
              Decouvrez nos demonstrations techniques et projets clients.
              Des architectures modernes, performantes et sur-mesure.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding border-t border-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {realisations.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-16 h-16 rounded-2xl bg-dark-800 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-dark-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-white mb-2">Aucune realisation pour le moment</h2>
              <p className="text-dark-400">Nos premieres realisations arrivent bientot !</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {realisations.map((project) => {
                const category = project.realisationCategories?.nodes?.[0]?.name || 'Projet'
                const technologies = parseTechnologies(project.technologies)

                return (
                  <article key={project.id} className="group">
                    <Link href={`/realisations/${project.slug}`}>
                      <div className="card-interactive overflow-hidden h-full flex flex-col">
                        {/* Image */}
                        <div className="aspect-video bg-gradient-to-br from-dark-800 to-dark-900 relative overflow-hidden">
                          {project.featuredImage?.node?.sourceUrl ? (
                            <img
                              src={project.featuredImage.node.sourceUrl}
                              alt={project.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="text-center">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-500/20 to-cyan-500/20 flex items-center justify-center mx-auto mb-3">
                                  {category === 'E-commerce' ? (
                                    <svg className="w-8 h-8 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                    </svg>
                                  ) : (
                                    <svg className="w-8 h-8 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                    </svg>
                                  )}
                                </div>
                                <span className="text-dark-500 text-sm font-medium">{category}</span>
                              </div>
                            </div>
                          )}
                          {/* Hover overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-accent-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>

                        {/* Content */}
                        <div className="p-6 flex-1 flex flex-col">
                          {/* Category & Tech badges */}
                          <div className="flex items-center gap-2 mb-4 flex-wrap">
                            <span className="badge">{category}</span>
                            {technologies.length > 0 && (
                              <span className="text-dark-500 text-xs">
                                {technologies.slice(0, 2).join(' + ')}
                              </span>
                            )}
                          </div>

                          {/* Title */}
                          <h2 className="text-xl font-semibold text-white mb-3 group-hover:text-accent-400 transition-colors">
                            {project.title}
                          </h2>

                          {/* Description */}
                          {project.excerpt && (
                            <div
                              className="text-dark-400 text-sm mb-4 line-clamp-3 flex-1"
                              dangerouslySetInnerHTML={{ __html: project.excerpt }}
                            />
                          )}

                          {/* Technologies */}
                          {technologies.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-4">
                              {technologies.slice(0, 3).map((tech) => (
                                <span
                                  key={tech}
                                  className="px-2 py-1 text-xs bg-dark-800 text-dark-300 rounded-md"
                                >
                                  {tech}
                                </span>
                              ))}
                              {technologies.length > 3 && (
                                <span className="px-2 py-1 text-xs bg-dark-800 text-dark-500 rounded-md">
                                  +{technologies.length - 3}
                                </span>
                              )}
                            </div>
                          )}

                          {/* Link */}
                          <span className="inline-flex items-center text-accent-400 text-sm font-medium group-hover:text-accent-300 mt-auto">
                            Voir le projet
                            <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </Link>
                  </article>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card p-12 text-center">
            <h2 className="heading-md text-white mb-4">
              Un projet similaire ?
            </h2>
            <p className="text-dark-300 text-lg mb-8 max-w-xl mx-auto">
              Nous pouvons realiser votre site vitrine ou e-commerce headless avec les memes technologies.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-accent-500 text-white font-medium rounded-lg hover:bg-accent-600 transition-all"
            >
              Discutons de votre projet
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
