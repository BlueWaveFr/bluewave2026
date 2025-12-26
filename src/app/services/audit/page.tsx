import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Audit & Logs',
  description: 'Service d\'audit technique et analyse de logs. Diagnostic complet de votre application, analyse des performances et recommandations d\'amelioration.',
  alternates: {
    canonical: 'https://bluewave.fr/services/audit',
  },
}

const audits = [
  {
    title: 'Audit de performance',
    description: 'Analyse complete des temps de chargement, Core Web Vitals et optimisations possibles.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    items: ['Lighthouse audit', 'Core Web Vitals', 'Bundle analysis', 'Optimisation images'],
  },
  {
    title: 'Audit SEO technique',
    description: 'Verification de l\'indexation, structure du site et facteurs techniques impactant le SEO.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    items: ['Crawlabilite', 'Donnees structurees', 'Meta tags', 'Sitemap & robots.txt'],
  },
  {
    title: 'Audit de securite',
    description: 'Identification des vulnerabilites et recommandations pour securiser votre application.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    items: ['OWASP Top 10', 'Headers securite', 'Authentification', 'Chiffrement'],
  },
  {
    title: 'Audit de code',
    description: 'Revue approfondie de votre codebase : qualite, maintenabilite et bonnes pratiques.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    items: ['Architecture', 'Patterns', 'Tests', 'Documentation'],
  },
]

const logServices = [
  {
    title: 'Configuration de monitoring',
    description: 'Mise en place d\'outils de suivi : Sentry, LogRocket, Datadog ou solutions open source.',
  },
  {
    title: 'Analyse d\'erreurs',
    description: 'Investigation approfondie des erreurs et crashes pour identifier les causes racines.',
  },
  {
    title: 'Dashboards & Alertes',
    description: 'Creation de tableaux de bord personnalises et configuration d\'alertes proactives.',
  },
  {
    title: 'Optimisation des logs',
    description: 'Structuration des logs pour faciliter le debugging et reduire les couts de stockage.',
  },
]

export default function AuditPage() {
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
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 text-white flex items-center justify-center mb-8">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            <h1 className="heading-xl text-white mb-6">
              Audit &{' '}
              <span className="gradient-text">Logs</span>
            </h1>
            <p className="text-xl text-dark-300 leading-relaxed mb-8">
              Un diagnostic complet de votre application web pour identifier
              les problemes et opportunites d'amelioration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent-500 text-white font-medium rounded-xl hover:bg-accent-600 transition-all"
              >
                Demander un audit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Audits */}
      <section className="section-padding border-t border-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-white mb-4">
              Types d'audit
            </h2>
            <p className="text-dark-300 text-lg max-w-2xl mx-auto">
              Des analyses approfondies pour chaque aspect de votre application.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {audits.map((audit) => (
              <div key={audit.title} className="p-8 card">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 text-green-400 flex items-center justify-center flex-shrink-0">
                    {audit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {audit.title}
                    </h3>
                    <p className="text-dark-400 mb-4">
                      {audit.description}
                    </p>
                    <ul className="flex flex-wrap gap-2">
                      {audit.items.map((item) => (
                        <li key={item} className="px-3 py-1 bg-dark-800/50 border border-dark-700/50 rounded-lg text-dark-300 text-xs">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logs */}
      <section className="section-padding border-t border-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-white mb-4">
              Gestion des logs
            </h2>
            <p className="text-dark-300 text-lg max-w-2xl mx-auto">
              Surveillez et analysez votre application en temps reel.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {logServices.map((service) => (
              <div key={service.title} className="card p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{service.title}</h3>
                  <p className="text-dark-400 text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="section-padding border-t border-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-md text-white mb-4">
              Ce que vous recevez
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="card p-8 text-center">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 text-green-400 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Rapport detaille</h3>
              <p className="text-dark-400 text-sm">Document complet avec analyse, captures et metriques</p>
            </div>
            <div className="card p-8 text-center">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 text-green-400 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Plan d'action</h3>
              <p className="text-dark-400 text-sm">Recommandations priorisees par impact et effort</p>
            </div>
            <div className="card p-8 text-center">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 text-green-400 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">Restitution</h3>
              <p className="text-dark-400 text-sm">Session de debrief pour repondre a vos questions</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card p-12 text-center">
            <h2 className="heading-md text-white mb-4">
              Pret pour un diagnostic ?
            </h2>
            <p className="text-dark-300 text-lg mb-8 max-w-xl mx-auto">
              Obtenez une vision claire de l'etat de votre application et des axes d'amelioration.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-accent-500 text-white font-medium rounded-xl hover:bg-accent-600 transition-all"
            >
              Demander un devis
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
