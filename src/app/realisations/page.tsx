import { Metadata } from 'next'
import Link from 'next/link'
import { getAllProjects } from '@/data/projects'

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

export default function RealisationsPage() {
  const projects = getAllProjects()

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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <article key={project.slug} className="group">
                <Link href={`/realisations/${project.slug}`}>
                  <div className="card-interactive overflow-hidden h-full flex flex-col">
                    {/* Image */}
                    <div className="aspect-video bg-gradient-to-br from-dark-800 to-dark-900 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-500/20 to-cyan-500/20 flex items-center justify-center mx-auto mb-3">
                            {project.category === 'E-commerce' ? (
                              <svg className="w-8 h-8 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                              </svg>
                            ) : (
                              <svg className="w-8 h-8 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                              </svg>
                            )}
                          </div>
                          <span className="text-dark-500 text-sm font-medium">{project.category}</span>
                        </div>
                      </div>
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-accent-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      {/* Category & Tech badges */}
                      <div className="flex items-center gap-2 mb-4 flex-wrap">
                        <span className="badge">{project.category}</span>
                        <span className="text-dark-500 text-xs">
                          {project.technologies.slice(0, 2).join(' + ')}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="text-xl font-semibold text-white mb-3 group-hover:text-accent-400 transition-colors">
                        {project.title}
                      </h2>

                      {/* Description */}
                      <p className="text-dark-400 text-sm mb-4 line-clamp-3 flex-1">
                        {project.shortDescription}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs bg-dark-800 text-dark-300 rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 text-xs bg-dark-800 text-dark-500 rounded-md">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>

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
            ))}
          </div>
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
