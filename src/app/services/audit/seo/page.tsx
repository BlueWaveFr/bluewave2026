import Link from 'next/link'

const auditPoints = [
  {
    title: 'Crawl et Indexation',
    description: 'Analyse de l\'accessibilite de votre site pour les moteurs de recherche.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    items: ['Robots.txt', 'Sitemap XML', 'Erreurs de crawl', 'Pages orphelines', 'Budget crawl'],
  },
  {
    title: 'Structure Technique',
    description: 'Verification de l\'architecture et des fondations techniques du site.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    items: ['Architecture URL', 'Redirections', 'Canonicals', 'Hreflang', 'Pagination'],
  },
  {
    title: 'Contenu On-Page',
    description: 'Analyse des elements de contenu impactant le referencement.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    items: ['Balises Title', 'Meta descriptions', 'Structure Hn', 'Maillage interne', 'Contenu duplique'],
  },
  {
    title: 'Donnees Structurees',
    description: 'Verification et optimisation du balisage Schema.org.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    items: ['Schema.org', 'Rich snippets', 'FAQ Schema', 'Breadcrumbs', 'Open Graph'],
  },
]

const deliverables = [
  {
    title: 'Rapport d\'audit complet',
    description: 'Document PDF detaille avec captures d\'ecran, metriques et analyse de chaque point technique.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Plan d\'action priorise',
    description: 'Liste des corrections classees par impact SEO et complexite de mise en oeuvre.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Session de restitution',
    description: 'Appel video pour presenter les resultats et repondre a toutes vos questions.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
]

const tools = [
  { name: 'Screaming Frog', description: 'Crawl technique complet' },
  { name: 'Google Search Console', description: 'Donnees d\'indexation' },
  { name: 'Ahrefs / SEMrush', description: 'Analyse backlinks et positions' },
  { name: 'PageSpeed Insights', description: 'Performance et Core Web Vitals' },
  { name: 'Schema Validator', description: 'Validation donnees structurees' },
  { name: 'Mobile-Friendly Test', description: 'Compatibilite mobile' },
]

const faq = [
  {
    question: 'Combien de temps dure un audit SEO technique ?',
    answer: 'Un audit SEO technique complet prend generalement entre 3 et 5 jours ouvrables selon la taille du site. Pour les sites de plus de 10 000 pages, le delai peut etre plus long.',
  },
  {
    question: 'Quelle est la difference entre un audit SEO technique et un audit SEO global ?',
    answer: 'L\'audit SEO technique se concentre sur les aspects techniques (crawl, indexation, structure, performances). Un audit SEO global inclut egalement l\'analyse semantique, la strategie de contenu et l\'analyse concurrentielle.',
  },
  {
    question: 'Quels acces avez-vous besoin pour realiser l\'audit ?',
    answer: 'Idealement, un acces en lecture a Google Search Console et Google Analytics. Si vous ne pouvez pas partager ces acces, l\'audit sera realise avec les outils externes uniquement.',
  },
  {
    question: 'L\'audit inclut-il la mise en oeuvre des corrections ?',
    answer: 'L\'audit fournit un rapport detaille et un plan d\'action. La mise en oeuvre des corrections est un service separe que nous pouvons realiser sur devis.',
  },
]

export default function SeoAuditPage() {
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
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white flex items-center justify-center mb-8">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h1 className="heading-xl text-white mb-6">
              Audit SEO{' '}
              <span className="gradient-text">Technique</span>
            </h1>
            <p className="text-xl text-dark-300 leading-relaxed mb-8">
              Identifiez les freins techniques a votre referencement et obtenez
              un plan d'action concret pour ameliorer votre visibilite sur Google.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">
                Demander un audit
              </Link>
              <Link href="/services/audit/performance" className="btn-secondary">
                Voir l'audit performance
              </Link>
            </div>
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
              Un audit exhaustif couvrant tous les aspects techniques du SEO.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {auditPoints.map((point) => (
              <div key={point.title} className="p-8 card">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-400 flex items-center justify-center flex-shrink-0">
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

      {/* Outils utilises */}
      <section className="section-padding border-t border-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-md text-white mb-4">
              Outils professionnels
            </h2>
            <p className="text-dark-300 text-lg max-w-2xl mx-auto">
              Nous utilisons les meilleurs outils du marche pour une analyse precise.
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
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-400 flex items-center justify-center mx-auto mb-4">
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
            <Link href="/services/audit/performance" className="card p-6 hover:border-orange-500/50 transition-colors group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 text-orange-400 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold group-hover:text-orange-400 transition-colors">Audit Performance</h3>
                  <p className="text-dark-400 text-sm">Temps de chargement et optimisations</p>
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
              Pret a optimiser votre referencement ?
            </h2>
            <p className="text-dark-300 text-lg mb-8 max-w-xl mx-auto">
              Obtenez un diagnostic complet de votre site et un plan d'action
              pour ameliorer votre visibilite sur Google.
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
