import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Developpement Web Sur Mesure',
  description: 'Developpement d\'applications web, sites e-commerce et plateformes SaaS. Solutions robustes et evolutives avec les dernieres technologies.',
  alternates: {
    canonical: 'https://bluewave.fr/services/developpement',
  },
}

const features = [
  {
    title: 'Applications React & Next.js',
    description: 'Interfaces modernes et performantes avec les frameworks JavaScript les plus populaires.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: 'E-commerce',
    description: 'Boutiques en ligne Shopify, WooCommerce ou solutions sur mesure avec paiement securise.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'SaaS & Plateformes',
    description: 'Applications multi-utilisateurs avec authentification, abonnements et tableaux de bord.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    title: 'API & Integrations',
    description: 'Developpement d\'APIs RESTful et GraphQL, integrations tierces et automatisations.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Progressive Web Apps',
    description: 'Applications web installables fonctionnant hors ligne avec notifications push.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Sites WordPress',
    description: 'Sites vitrines et blogs avec WordPress, themes sur mesure et optimisation SEO.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
  },
]

const technologies = [
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Python', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'Vercel', category: 'Hosting' },
  { name: 'AWS', category: 'Hosting' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'GitHub Actions', category: 'DevOps' },
]

export default function DeveloppementPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link href="/services" className="inline-flex items-center text-dark-400 hover:text-white mb-6 transition-colors">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Tous les services
            </Link>
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-500 to-accent-600 text-white flex items-center justify-center mb-8">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h1 className="heading-xl text-white mb-6">
              Developpement Web{' '}
              <span className="gradient-text">Sur Mesure</span>
            </h1>
            <p className="text-xl text-dark-300 leading-relaxed mb-8">
              Nous concevons et developpons des applications web performantes,
              evolutives et adaptees a vos besoins specifiques. De la startup au grand compte,
              nous accompagnons votre croissance digitale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent-500 text-white font-medium rounded-xl hover:bg-accent-600 transition-all"
              >
                Discuter de votre projet
              </Link>
              <Link
                href="/guides"
                className="inline-flex items-center justify-center px-8 py-4 border border-dark-700 text-white font-medium rounded-xl hover:bg-dark-800/50 transition-all"
              >
                Voir nos guides
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding border-t border-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-white mb-4">
              Ce que nous developpons
            </h2>
            <p className="text-dark-300 text-lg max-w-2xl mx-auto">
              Des solutions web modernes pour tous types de projets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="p-8 card">
                <div className="w-12 h-12 rounded-xl bg-accent-500/10 border border-accent-500/20 text-accent-400 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-dark-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="section-padding border-t border-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-md text-white mb-4">
              Technologies utilisees
            </h2>
            <p className="text-dark-400">
              Les meilleurs outils pour des solutions performantes et maintenables.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech) => (
              <span
                key={tech.name}
                className="px-5 py-2.5 bg-dark-900/50 border border-dark-800/50 rounded-lg text-dark-300 text-sm font-medium"
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card p-12 text-center">
            <h2 className="heading-md text-white mb-4">
              Pret a lancer votre projet ?
            </h2>
            <p className="text-dark-300 text-lg mb-8 max-w-xl mx-auto">
              Discutons de vos besoins et voyons comment nous pouvons vous aider a atteindre vos objectifs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-accent-500 text-white font-medium rounded-xl hover:bg-accent-600 transition-all"
            >
              Planifier un appel
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
