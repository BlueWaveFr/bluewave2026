import Link from 'next/link'

const features = [
  {
    title: 'Authentification Complete',
    description: 'Systeme d\'authentification securise avec gestion des roles et permissions.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>
    ),
    items: ['OAuth / SSO', 'Magic links', 'MFA / 2FA', 'RBAC'],
  },
  {
    title: 'Multi-Tenant',
    description: 'Architecture permettant d\'isoler les donnees de chaque client/organisation.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    items: ['Isolation des donnees', 'Workspaces', 'Invitations', 'Sous-domaines'],
  },
  {
    title: 'Abonnements & Billing',
    description: 'Integration complete de Stripe pour la gestion des abonnements et paiements.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    items: ['Stripe Billing', 'Plans & pricing', 'Webhooks', 'Customer portal'],
  },
  {
    title: 'Dashboards & Analytics',
    description: 'Tableaux de bord interactifs avec metriques et visualisations temps reel.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    items: ['Charts interactifs', 'KPIs temps reel', 'Exports', 'Filtres avances'],
  },
]

const process = [
  {
    step: '01',
    title: 'Discovery',
    description: 'Analyse de vos besoins, definition du MVP et choix techniques.',
  },
  {
    step: '02',
    title: 'Design',
    description: 'Wireframes, maquettes UI/UX et validation du parcours utilisateur.',
  },
  {
    step: '03',
    title: 'Developpement',
    description: 'Sprints agiles avec demos regulieres et iterations.',
  },
  {
    step: '04',
    title: 'Lancement',
    description: 'Deploiement, monitoring et support post-lancement.',
  },
]

const useCases = [
  {
    title: 'Outils B2B',
    description: 'CRM, ERP, outils de gestion et collaboration pour entreprises.',
  },
  {
    title: 'Marketplaces',
    description: 'Plateformes mettant en relation acheteurs et vendeurs.',
  },
  {
    title: 'Outils Productivite',
    description: 'Applications de gestion de projet, notes, communication.',
  },
  {
    title: 'Plateformes Education',
    description: 'LMS, e-learning et outils de formation en ligne.',
  },
]

const stack = [
  { name: 'Next.js', category: 'Framework' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Prisma', category: 'ORM' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'Redis', category: 'Cache' },
  { name: 'Stripe', category: 'Payments' },
  { name: 'NextAuth.js', category: 'Auth' },
  { name: 'Resend', category: 'Email' },
  { name: 'Vercel', category: 'Hosting' },
  { name: 'Sentry', category: 'Monitoring' },
]

const faq = [
  {
    question: 'Combien coute le developpement d\'un SaaS ?',
    answer: 'Le cout depend de la complexite et des fonctionnalites. Un MVP basique demarre autour de 15-25k EUR, une plateforme complete peut atteindre 50-100k EUR. Nous proposons aussi un accompagnement en mode "CTO as a Service" pour les startups.',
  },
  {
    question: 'Quel est le delai pour lancer un MVP ?',
    answer: 'Un MVP fonctionnel peut etre developpe en 2-3 mois selon la complexite. Nous privilegions une approche iterative : lancer rapidement une v1 et l\'ameliorer en fonction des retours utilisateurs.',
  },
  {
    question: 'Comment gerez-vous la scalabilite ?',
    answer: 'Nous utilisons des architectures cloud-native (serverless, edge functions) qui scalent automatiquement. La base de donnees et le cache sont dimensionnes pour supporter la croissance.',
  },
  {
    question: 'Proposez-vous de la maintenance apres le lancement ?',
    answer: 'Oui, nous proposons des contrats de maintenance incluant : mises a jour de securite, monitoring, corrections de bugs, et evolution des fonctionnalites selon vos besoins.',
  },
]

export default function SaasPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link href="/services/developpement" className="inline-flex items-center text-dark-400 hover:text-white mb-6 transition-colors">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Developpement Web
            </Link>
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 text-white flex items-center justify-center mb-8">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h1 className="heading-xl text-white mb-6">
              Developpement{' '}
              <span className="gradient-text">SaaS & Plateformes</span>
            </h1>
            <p className="text-xl text-dark-300 leading-relaxed mb-8">
              Transformez votre idee en produit SaaS scalable. De l'authentification
              aux abonnements Stripe, nous construisons des applications metier completes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">
                Discuter de votre projet
              </Link>
              <Link href="/services/developpement/api" className="btn-secondary">
                Voir le dev API
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
              Fonctionnalites SaaS
            </h2>
            <p className="text-dark-300 text-lg max-w-2xl mx-auto">
              Tous les composants essentiels d'une plateforme SaaS moderne.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="p-8 card">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 text-orange-400 flex items-center justify-center flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-dark-400 mb-4">
                      {feature.description}
                    </p>
                    <ul className="flex flex-wrap gap-2">
                      {feature.items.map((item) => (
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

      {/* Process */}
      <section className="section-padding border-t border-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-md text-white mb-4">
              Notre processus
            </h2>
            <p className="text-dark-300 text-lg max-w-2xl mx-auto">
              De l'idee au produit en production.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <div key={item.step} className="card p-6 relative">
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-dark-700" />
                )}
                <div className="text-4xl font-bold text-orange-500/30 mb-2">{item.step}</div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-dark-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="section-padding border-t border-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-md text-white mb-4">
              Types de plateformes
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase) => (
              <div key={useCase.title} className="card p-6">
                <h3 className="text-white font-semibold mb-2">{useCase.title}</h3>
                <p className="text-dark-400 text-sm">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="section-padding border-t border-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-md text-white mb-4">
              Notre stack SaaS
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {stack.map((tech) => (
              <span key={tech.name} className="px-4 py-2 bg-dark-800/50 border border-dark-700/50 rounded-lg text-dark-300 text-sm">
                {tech.name}
              </span>
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

      {/* Other services */}
      <section className="section-padding border-t border-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-md text-white mb-4">
              Autres expertises
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/services/developpement/react" className="card p-6 hover:border-cyan-500/50 transition-colors group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mb-4">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="2"/>
                </svg>
              </div>
              <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">React & Next.js</h3>
              <p className="text-dark-400 text-sm">Applications frontend</p>
            </Link>
            <Link href="/services/developpement/api" className="card p-6 hover:border-green-500/50 transition-colors group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 text-green-400 flex items-center justify-center mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold group-hover:text-green-400 transition-colors">API REST & GraphQL</h3>
              <p className="text-dark-400 text-sm">Backend et integrations</p>
            </Link>
            <Link href="/services/developpement/wordpress" className="card p-6 hover:border-blue-500/50 transition-colors group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-400 flex items-center justify-center mb-4">
                <span className="font-bold">W</span>
              </div>
              <h3 className="text-white font-semibold group-hover:text-blue-400 transition-colors">WordPress Headless</h3>
              <p className="text-dark-400 text-sm">CMS + Next.js</p>
            </Link>
            <Link href="/services/developpement/pwa" className="card p-6 hover:border-purple-500/50 transition-colors group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-400 flex items-center justify-center mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold group-hover:text-purple-400 transition-colors">Progressive Web App</h3>
              <p className="text-dark-400 text-sm">Apps installables</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card p-12 text-center">
            <h2 className="heading-md text-white mb-4">
              Pret a lancer votre SaaS ?
            </h2>
            <p className="text-dark-300 text-lg mb-8 max-w-xl mx-auto">
              Discutons de votre projet et definissons ensemble la roadmap
              pour transformer votre idee en produit.
            </p>
            <Link href="/contact" className="group btn-primary">
              Planifier un appel decouverte
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
