'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const guides = [
  {
    title: 'Guide complet du SEO technique en 2024',
    description: 'Tout ce que vous devez savoir pour optimiser techniquement votre site et ameliorer votre positionnement.',
    category: 'SEO',
    readTime: '15 min',
    href: '/guides/seo-technique',
  },
  {
    title: 'Performance web : Core Web Vitals expliques',
    description: 'Comprendre et optimiser les metriques de performance essentielles pour Google.',
    category: 'Performance',
    readTime: '12 min',
    href: '/guides/core-web-vitals',
  },
  {
    title: 'Next.js vs React : lequel choisir en 2024',
    description: 'Comparatif detaille pour faire le bon choix technologique pour votre projet.',
    category: 'Developpement',
    readTime: '10 min',
    href: '/guides/nextjs-vs-react',
  },
  {
    title: 'Securiser votre application web',
    description: 'Les bonnes pratiques de securite pour proteger vos utilisateurs et vos donnees.',
    category: 'Securite',
    readTime: '18 min',
    href: '/guides/securite-web',
  },
  {
    title: 'WordPress headless avec Next.js',
    description: 'Comment utiliser WordPress comme CMS et Next.js pour le frontend.',
    category: 'CMS',
    readTime: '20 min',
    href: '/guides/wordpress-headless',
  },
  {
    title: 'Automatiser vos deploiements avec CI/CD',
    description: 'Mise en place d\'un pipeline d\'integration et deploiement continu.',
    category: 'DevOps',
    readTime: '14 min',
    href: '/guides/cicd-deploiement',
  },
]

const categories = ['Tous', 'SEO', 'Performance', 'Developpement', 'Securite', 'CMS', 'DevOps']

export default function GuidesContent() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="badge mb-6">Guides</span>
            <h1 className="heading-xl text-white mb-6">
              Ressources pour{' '}
              <span className="gradient-text">developeurs</span>
            </h1>
            <p className="text-xl text-dark-300 leading-relaxed">
              Des guides techniques approfondis pour vous aider a maitriser les meilleures
              pratiques du developpement web moderne.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="border-y border-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  category === 'Tous'
                    ? 'bg-accent-500 text-white'
                    : 'bg-dark-800/50 text-dark-300 hover:text-white hover:bg-dark-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide, index) => (
              <motion.article
                key={guide.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link href={guide.href}>
                  <div className="group h-full p-8 card-interactive">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="badge">{guide.category}</span>
                      <span className="text-dark-500 text-sm">{guide.readTime}</span>
                    </div>
                    <h2 className="text-xl font-semibold text-white mb-3 group-hover:text-accent-400 transition-colors">
                      {guide.title}
                    </h2>
                    <p className="text-dark-400 mb-6">
                      {guide.description}
                    </p>
                    <span className="inline-flex items-center text-accent-400 text-sm font-medium group-hover:text-accent-300">
                      Lire le guide
                      <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding border-t border-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card p-12 text-center"
          >
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
          </motion.div>
        </div>
      </section>
    </>
  )
}
