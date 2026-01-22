import Link from 'next/link'

const metrics = [
  {
    name: 'LCP',
    fullName: 'Largest Contentful Paint',
    description: 'Mesure le temps de chargement du plus grand element visible (image, video ou bloc de texte).',
    good: '< 2.5s',
    needsImprovement: '2.5s - 4s',
    poor: '> 4s',
    color: 'green',
    causes: [
      'Images non optimisees',
      'Serveur lent (TTFB eleve)',
      'Ressources bloquantes (CSS/JS)',
      'Rendu cote client (CSR)',
    ],
    solutions: [
      'Optimiser et compresser les images',
      'Precharger les ressources critiques',
      'Utiliser un CDN',
      'Implementer le Server-Side Rendering',
    ],
  },
  {
    name: 'CLS',
    fullName: 'Cumulative Layout Shift',
    description: 'Mesure la stabilite visuelle en quantifiant les decalages de mise en page inattendus.',
    good: '< 0.1',
    needsImprovement: '0.1 - 0.25',
    poor: '> 0.25',
    color: 'blue',
    causes: [
      'Images sans dimensions',
      'Polices web (FOUT/FOIT)',
      'Publicites dynamiques',
      'Contenu injecte dynamiquement',
    ],
    solutions: [
      'Definir width/height sur les images',
      'Utiliser font-display: swap',
      'Reserver l\'espace pour les ads',
      'Eviter d\'injecter du contenu au-dessus',
    ],
  },
  {
    name: 'INP',
    fullName: 'Interaction to Next Paint',
    description: 'Mesure la reactivite du site en evaluant la latence de toutes les interactions utilisateur.',
    good: '< 200ms',
    needsImprovement: '200ms - 500ms',
    poor: '> 500ms',
    color: 'purple',
    causes: [
      'JavaScript bloquant le thread principal',
      'Handlers d\'evenements lourds',
      'Third-party scripts',
      'Hydration lente (frameworks JS)',
    ],
    solutions: [
      'Fractionner les taches longues',
      'Utiliser requestIdleCallback',
      'Differer les scripts non-critiques',
      'Optimiser l\'hydration',
    ],
  },
]

const deliverables = [
  {
    title: 'Rapport Core Web Vitals',
    description: 'Analyse detaillee de chaque metrique avec donnees terrain (CrUX) et lab (Lighthouse).',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Diagnostic par element',
    description: 'Identification precise des elements responsables des mauvais scores sur chaque page.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: 'Plan de remediation',
    description: 'Actions concretes priorisees par impact avec exemples de code pour chaque correction.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
]

const faq = [
  {
    question: 'Pourquoi Google a remplace FID par INP ?',
    answer: 'FID ne mesurait que la premiere interaction. INP mesure la latence de TOUTES les interactions pendant la session, donnant une image plus complete de la reactivite du site. INP est devenu la metrique officielle en mars 2024.',
  },
  {
    question: 'Comment Google mesure-t-il les Core Web Vitals ?',
    answer: 'Google utilise les donnees du Chrome User Experience Report (CrUX), collectees aupres de vrais utilisateurs Chrome. Ces "donnees terrain" refletent l\'experience reelle, contrairement aux "donnees lab" de Lighthouse qui sont simulees.',
  },
  {
    question: 'Les Core Web Vitals impactent-ils vraiment le SEO ?',
    answer: 'Oui, depuis 2021 les Core Web Vitals font partie des signaux de classement Google via le "Page Experience Update". Un mauvais score peut penaliser votre positionnement, surtout face a des concurrents avec de bons scores.',
  },
  {
    question: 'Quelle est la difference entre donnees "terrain" et "lab" ?',
    answer: 'Les donnees terrain (field data) proviennent de vrais utilisateurs et refletent des conditions variees (appareils, connexions). Les donnees lab (Lighthouse) sont mesurees dans un environnement controle et servent au debugging.',
  },
]

export default function CoreWebVitalsAuditPage() {
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
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 text-white flex items-center justify-center mb-8">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h1 className="heading-xl text-white mb-6">
              Audit{' '}
              <span className="gradient-text">Core Web Vitals</span>
            </h1>
            <p className="text-xl text-dark-300 leading-relaxed mb-8">
              Analysez et optimisez les metriques d'experience utilisateur
              utilisees par Google pour le classement SEO.
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

      {/* Les 3 metriques */}
      <section className="section-padding border-t border-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-white mb-4">
              Les 3 metriques essentielles
            </h2>
            <p className="text-dark-300 text-lg max-w-2xl mx-auto">
              Google evalue l'experience utilisateur via ces trois indicateurs cles.
            </p>
          </div>

          <div className="space-y-8">
            {metrics.map((metric) => (
              <div key={metric.name} className="card p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Info principale */}
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${
                        metric.color === 'green' ? 'from-green-500/20 to-emerald-500/20 border-green-500/30 text-green-400' :
                        metric.color === 'blue' ? 'from-blue-500/20 to-cyan-500/20 border-blue-500/30 text-blue-400' :
                        'from-purple-500/20 to-pink-500/20 border-purple-500/30 text-purple-400'
                      } border flex items-center justify-center`}>
                        <span className="text-xl font-bold">{metric.name}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{metric.fullName}</h3>
                      </div>
                    </div>
                    <p className="text-dark-300 mb-6">{metric.description}</p>

                    {/* Seuils */}
                    <div className="flex gap-4 mb-6">
                      <div className="flex-1 p-3 bg-green-500/10 border border-green-500/30 rounded-lg text-center">
                        <div className="text-green-400 font-semibold text-sm">Bon</div>
                        <div className="text-white text-lg">{metric.good}</div>
                      </div>
                      <div className="flex-1 p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg text-center">
                        <div className="text-yellow-400 font-semibold text-sm">A ameliorer</div>
                        <div className="text-white text-lg">{metric.needsImprovement}</div>
                      </div>
                      <div className="flex-1 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-center">
                        <div className="text-red-400 font-semibold text-sm">Mauvais</div>
                        <div className="text-white text-lg">{metric.poor}</div>
                      </div>
                    </div>
                  </div>

                  {/* Causes et solutions */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        Causes frequentes
                      </h4>
                      <ul className="space-y-2">
                        {metric.causes.map((cause) => (
                          <li key={cause} className="text-dark-400 text-sm flex items-start gap-2">
                            <span className="text-red-400 mt-1">•</span>
                            {cause}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Solutions
                      </h4>
                      <ul className="space-y-2">
                        {metric.solutions.map((solution) => (
                          <li key={solution} className="text-dark-400 text-sm flex items-start gap-2">
                            <span className="text-green-400 mt-1">•</span>
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
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
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-400 flex items-center justify-center mx-auto mb-4">
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
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card p-12 text-center">
            <h2 className="heading-md text-white mb-4">
              Pret a ameliorer vos Core Web Vitals ?
            </h2>
            <p className="text-dark-300 text-lg mb-8 max-w-xl mx-auto">
              Obtenez un diagnostic complet et passez au vert sur les metriques
              essentielles pour Google.
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
