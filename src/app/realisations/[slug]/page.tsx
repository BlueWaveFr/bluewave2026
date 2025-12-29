import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const WORDPRESS_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://cms.bluewave.fr/graphql'

interface Realisation {
  id: string
  title: string
  slug: string
  content: string
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
  detailsDuProjet: {
    projectUrl: string
    technologies: string
    features: string
    results: string
  } | null
}

interface PageProps {
  params: Promise<{ slug: string }>
}

async function getRealisation(slug: string): Promise<Realisation | null> {
  try {
    const res = await fetch(WORDPRESS_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
          query GetRealisation($slug: ID!) {
            realisation(id: $slug, idType: SLUG) {
              id
              title
              slug
              content
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
              detailsDuProjet {
                projectUrl
                technologies
                features
                results
              }
            }
          }
        `,
        variables: { slug }
      }),
      next: { revalidate: 60 }
    })

    const json = await res.json()
    return json.data?.realisation || null
  } catch (error) {
    console.error('Error fetching realisation:', error)
    return null
  }
}

async function getAllRealisations(): Promise<Realisation[]> {
  try {
    const res = await fetch(WORDPRESS_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
          query GetAllRealisations {
            realisations(first: 50) {
              nodes {
                id
                title
                slug
                excerpt
                realisationCategories {
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
      next: { revalidate: 60 }
    })

    const json = await res.json()
    return json.data?.realisations?.nodes || []
  } catch (error) {
    console.error('Error fetching all realisations:', error)
    return []
  }
}

export async function generateStaticParams() {
  const realisations = await getAllRealisations()
  return realisations.map((realisation) => ({
    slug: realisation.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const realisation = await getRealisation(slug)

  if (!realisation) {
    return { title: 'Projet non trouve' }
  }

  const description = realisation.excerpt
    ? realisation.excerpt.replace(/<[^>]*>/g, '').trim()
    : `Decouvrez le projet ${realisation.title}`

  return {
    title: `${realisation.title} | Bluewave`,
    description,
    openGraph: {
      title: `${realisation.title} | Bluewave`,
      description,
      url: `https://bluewave.fr/realisations/${realisation.slug}`,
      images: realisation.featuredImage?.node?.sourceUrl
        ? [realisation.featuredImage.node.sourceUrl]
        : undefined,
    },
    alternates: {
      canonical: `https://bluewave.fr/realisations/${realisation.slug}`,
    },
  }
}

function parseTechnologies(techString: string): string[] {
  if (!techString) return []
  return techString.split(',').map(t => t.trim()).filter(Boolean)
}

function parseLines(text: string): string[] {
  if (!text) return []
  return text.split('\n').map(t => t.trim()).filter(Boolean)
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params
  const realisation = await getRealisation(slug)

  if (!realisation) {
    notFound()
  }

  const category = realisation.realisationCategories?.nodes?.[0]?.name || 'Projet'
  const technologies = parseTechnologies(realisation.detailsDuProjet?.technologies || '')
  const features = parseLines(realisation.detailsDuProjet?.features || '')
  const results = parseLines(realisation.detailsDuProjet?.results || '')

  const allRealisations = await getAllRealisations()
  const otherProjects = allRealisations.filter(p => p.slug !== slug).slice(0, 2)

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center gap-2 text-sm">
              <li>
                <Link href="/realisations" className="text-dark-400 hover:text-accent-400 transition-colors">
                  Realisations
                </Link>
              </li>
              <li className="text-dark-600">/</li>
              <li className="text-dark-300">{realisation.title}</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Content */}
            <div>
              <span className="badge mb-6">{category}</span>
              <h1 className="heading-lg text-white mb-6">
                {realisation.title}
              </h1>
              {realisation.excerpt && (
                <div
                  className="text-xl text-dark-300 leading-relaxed mb-8"
                  dangerouslySetInnerHTML={{ __html: realisation.excerpt }}
                />
              )}

              {/* Technologies */}
              {technologies.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-sm bg-dark-800 text-dark-200 rounded-lg border border-dark-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {/* CTA */}
              <div className="flex flex-wrap gap-4">
                {realisation.detailsDuProjet?.projectUrl && (
                  <a
                    href={realisation.detailsDuProjet.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-accent-500 text-white font-medium rounded-lg hover:bg-accent-600 transition-all"
                  >
                    Voir le site
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-dark-800 text-white font-medium rounded-lg hover:bg-dark-700 transition-all border border-dark-700"
                >
                  Projet similaire ?
                </Link>
              </div>
            </div>

            {/* Right: Visual */}
            <div className="card overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-dark-800 to-dark-900 relative">
                {realisation.featuredImage?.node?.sourceUrl ? (
                  <img
                    src={realisation.featuredImage.node.sourceUrl}
                    alt={realisation.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent-500/20 to-cyan-500/20 flex items-center justify-center mx-auto mb-4">
                        {category === 'E-commerce' ? (
                          <svg className="w-10 h-10 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                          </svg>
                        ) : (
                          <svg className="w-10 h-10 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                          </svg>
                        )}
                      </div>
                      <span className="text-dark-400 text-sm">Apercu du projet</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="section-padding border-t border-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              <h2 className="heading-md text-white mb-6">A propos du projet</h2>
              {realisation.content ? (
                <div
                  className="prose-dark"
                  dangerouslySetInnerHTML={{ __html: realisation.content }}
                />
              ) : (
                <p className="text-dark-400">Aucune description disponible.</p>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Features */}
              {features.length > 0 && (
                <div className="card p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Fonctionnalites</h3>
                  <ul className="space-y-3">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-accent-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-dark-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Results */}
              {results.length > 0 && (
                <div className="card p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Resultats</h3>
                  <ul className="space-y-3">
                    {results.map((result, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                        <span className="text-dark-300 text-sm">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      {technologies.length > 0 && (
        <section className="section-padding border-t border-dark-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="heading-md text-white mb-8">Stack technique</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {technologies.map((tech) => (
                <div
                  key={tech}
                  className="card p-4 text-center hover:border-accent-500/50 transition-colors"
                >
                  <span className="text-dark-200 font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <section className="section-padding border-t border-dark-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="heading-md text-white">Autres realisations</h2>
              <Link
                href="/realisations"
                className="text-accent-400 hover:text-accent-300 text-sm font-medium inline-flex items-center"
              >
                Voir tout
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {otherProjects.map((otherProject) => {
                const otherCategory = otherProject.realisationCategories?.nodes?.[0]?.name || 'Projet'
                return (
                  <Link key={otherProject.slug} href={`/realisations/${otherProject.slug}`}>
                    <div className="card-interactive p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="badge">{otherCategory}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-accent-400 transition-colors">
                        {otherProject.title}
                      </h3>
                      {otherProject.excerpt && (
                        <div
                          className="text-dark-400 text-sm line-clamp-2"
                          dangerouslySetInnerHTML={{ __html: otherProject.excerpt }}
                        />
                      )}
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card p-12 text-center">
            <h2 className="heading-md text-white mb-4">
              Envie d'un projet similaire ?
            </h2>
            <p className="text-dark-300 text-lg mb-8 max-w-xl mx-auto">
              Discutons de votre projet et voyons comment nous pouvons vous aider a le realiser.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-accent-500 text-white font-medium rounded-lg hover:bg-accent-600 transition-all"
            >
              Contactez-nous
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
