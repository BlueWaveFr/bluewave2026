import Link from 'next/link'

const auditPoints = [
  {
    title: 'Temps de Chargement',
    description: 'Analyse detaillee des metriques de vitesse et identification des goulots d\'etranglement.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    items: ['Time to First Byte', 'First Contentful Paint', 'Largest Contentful Paint', 'Time to Interactive'],
  },
  {
    title: 'Optimisation des Assets',
    description: 'Verification de la compression et du format des images, CSS et JavaScript.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    items: ['Compression images', 'Format WebP/AVIF', 'Minification CSS/JS', 'Lazy loading'],
  },
  {
    title: 'Analyse du Bundle',
    description: 'Etude de la taille et de la composition du JavaScript et CSS charge.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    items: ['Bundle size', 'Code splitting', 'Tree shaking', 'Dependencies inutilisees'],
  },
  {
    title: 'Infrastructure & Cache',
    description: 'Analyse de la configuration serveur et des strategies de mise en cache.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    items: ['Headers de cache', 'CDN', 'Compression Gzip/Brotli', 'HTTP/2'],
  },
]

const impacts = [
  {
    stat: '-53%',
    label: 'de rebond',
    description: 'Un site qui charge en 2s au lieu de 5s reduit le taux de rebond de 53%',
  },
  {
    stat: '+7%',
    label: 'de conversion',
    description: 'Chaque seconde gagnee augmente le taux de conversion de 7%',
  },
  {
    stat: 'SEO',
    label: 'ameliore',
    description: 'La performance est un critere de classement Google depuis 2021',
  },
]

const deliverables = [
  {
    title: 'Rapport Lighthouse detaille',
    description: 'Analyse complete avec scores Performance, Accessibility, Best Practices et SEO.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Waterfall analysis',
    description: 'Diagramme en cascade detaillant chaque requete et son impact sur le chargement.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    ),
  },
  {
    title: 'Plan d\'optimisation',
    description: 'Liste priorisee des actions avec estimation de l\'impact sur les performances.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
]

const tools = [
  { name: 'Lighthouse', description: 'Audit automatise Google' },
  { name: 'WebPageTest', description: 'Tests multi-localisation' },
  { name: 'Chrome DevTools', description: 'Analyse reseau et rendering' },
  { name: 'Bundle Analyzer', description: 'Visualisation du bundle JS' },
  { name: 'GTmetrix', description: 'Waterfall detaille' },
  { name: 'SpeedCurve', description: 'Monitoring performance' },
]

const faq = [
  {
    question: 'Quelle est la difference entre audit performance et audit Core Web Vitals ?',
    answer: 'L\'audit performance couvre l\'ensemble des aspects techniques impactant la vitesse (serveur, assets, code). L\'audit Core Web Vitals se concentre specifiquement sur les 3 metriques utilisees par Google pour le classement SEO : LCP, CLS et INP.',
  },
  {
    question: 'Pourquoi mon site est lent malgre un bon hebergement ?',
    answer: 'Un hebergement performant est necessaire mais pas suffisant. Les causes de lenteur sont souvent cote frontend : images non optimisees, JavaScript bloquant, CSS non minifie, absence de cache navigateur, etc.',
  },
  {
    question: 'Combien de temps pour voir des resultats apres les optimisations ?',
    answer: 'Les ameliorations techniques sont visibles immediatement. L\'impact sur le SEO peut prendre quelques semaines le temps que Google recrawle et reevalue votre site.',
  },
  {
    question: 'Testez-vous sur mobile et desktop ?',
    answer: 'Oui, nous testons systematiquement sur les deux. Google utilise le mobile-first indexing, donc les performances mobiles sont prioritaires pour le SEO.',
  },
]

export default function PerformanceAuditPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link href="/services/audit" className="inline-flex items-center text-dark-400 hover:text-white mb-6 transition-colors">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Audit & Logs
            </Link>
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 text-white flex items-center justify-center mb-8">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h1 className="heading-xl text-white mb-6">
              Audit de{' '}
              <span className="gradient-text">Performance</span>
            </h1>
            <p className="text-xl text-dark-300 leading-relaxed mb-8">
              Identifiez pourquoi votre site est lent et obtenez un plan d'action
              concret pour ameliorer drastiquement les temps de chargement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">
                Demander un audit
              </Link>
              <Link href="/services/audit/core-web-vitals" className="btn-secondary">
                Voir l'audit Core Web Vitals
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="section-padding border-t border-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-md text-white mb-4">
              Pourquoi la performance compte
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {impacts.map((impact) => (
              <div key={impact.label} className="card p-8 text-center">
                <div className="text-4xl font-bold text-orange-400 mb-2">{impact.stat}</div>
                <div className="text-white font-semibold mb-2">{impact.label}</div>
                <p className="text-dark-400 text-sm">{impact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Points d'audit */}
      <section className="section-padding border-t border-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-white mb-4">
              Ce que nous analysons
            </h2>
            <p className="text-dark-300 text-lg max-w-2xl mx-auto">
              Un diagnostic complet de tous les facteurs impactant la vitesse.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {auditPoints.map((point) => (
              <div key={point.title} className="p-8 card">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 text-orange-400 flex items-center justify-center flex-shrink-0">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {point.title}
                    </h3>
                    <p className="text-dark-400 mb-4">
                      {point.description}
                    </p>
                    <ul className="flex flex-wrap gap-2">
                      {point.items.map((item) => (
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

      {/* Outils */}
      <section className="section-padding border-t border-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-md text-white mb-4">
              Outils professionnels
            </h2>
            <p className="text-dark-300 text-lg max-w-2xl mx-auto">
              Nous utilisons les outils de reference pour des mesures fiables.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {tools.map((tool) => (
              <div key={tool.name} className="card p-4 text-center">
                <h3 className="text-white font-medium text-sm mb-1">{tool.name}</h3>
                <p className="text-dark-500 text-xs">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Livrables */}
      <section className="section-padding border-t border-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-md text-white mb-4">
              Ce que vous recevez
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {deliverables.map((item) => (
              <div key={item.title} className="card p-8 text-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 text-orange-400 flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-dark-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding border-t border-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-md text-white mb-4">
              Questions frequentes
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faq.map((item) => (
              <div key={item.question} className="card p-6">
                <h3 className="text-white font-semibold mb-2">{item.question}</h3>
                <p className="text-dark-400">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Autres audits */}
      <section className="section-padding border-t border-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-md text-white mb-4">
              Autres audits
            </h2>
            <p className="text-dark-300">
              Completez votre diagnostic avec nos autres services d'audit.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Link href="/services/audit/seo" className="card p-6 hover:border-blue-500/50 transition-colors group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-400 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold group-hover:text-blue-400 transition-colors">Audit SEO Technique</h3>
                  <p className="text-dark-400 text-sm">Indexation, structure et optimisation</p>
                </div>
              </div>
            </Link>
            <Link href="/services/audit/core-web-vitals" className="card p-6 hover:border-purple-500/50 transition-colors group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-400 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold group-hover:text-purple-400 transition-colors">Audit Core Web Vitals</h3>
                  <p className="text-dark-400 text-sm">LCP, FID, CLS et INP</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card p-12 text-center">
            <h2 className="heading-md text-white mb-4">
              Pret a accelerer votre site ?
            </h2>
            <p className="text-dark-300 text-lg mb-8 max-w-xl mx-auto">
              Obtenez un diagnostic complet et un plan d'action pour
              reduire vos temps de chargement.
            </p>
            <Link href="/contact" className="group btn-primary">
              Demander un devis gratuit
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-150" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
