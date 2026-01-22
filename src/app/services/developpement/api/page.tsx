import Link from 'next/link'

const services = [
  {
    title: 'API RESTful',
    description: 'Conception d\'APIs REST respectant les standards et bonnes pratiques.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    items: ['CRUD operations', 'Pagination', 'Filtres & tri', 'Versioning'],
  },
  {
    title: 'GraphQL',
    description: 'APIs flexibles permettant aux clients de demander exactement les donnees necessaires.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
    items: ['Queries & Mutations', 'Subscriptions', 'Schema typing', 'DataLoader'],
  },
  {
    title: 'Integrations Tierces',
    description: 'Connexion avec les services externes : CRM, ERP, paiement, shipping...',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    items: ['Stripe', 'Salesforce', 'HubSpot', 'Zapier'],
  },
  {
    title: 'Webhooks & Events',
    description: 'Systemes de notifications temps reel et architectures event-driven.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
    items: ['Event sourcing', 'Message queues', 'Real-time updates', 'Retry logic'],
  },
]

const integrations = [
  { name: 'Stripe', category: 'Paiement' },
  { name: 'PayPal', category: 'Paiement' },
  { name: 'Salesforce', category: 'CRM' },
  { name: 'HubSpot', category: 'CRM' },
  { name: 'Mailchimp', category: 'Email' },
  { name: 'SendGrid', category: 'Email' },
  { name: 'Twilio', category: 'SMS' },
  { name: 'AWS S3', category: 'Storage' },
  { name: 'Cloudinary', category: 'Media' },
  { name: 'Algolia', category: 'Search' },
  { name: 'Google Maps', category: 'Maps' },
  { name: 'Slack', category: 'Notifs' },
]

const stack = [
  { name: 'Node.js', category: 'Runtime' },
  { name: 'Express', category: 'Framework' },
  { name: 'Fastify', category: 'Framework' },
  { name: 'NestJS', category: 'Framework' },
  { name: 'Apollo Server', category: 'GraphQL' },
  { name: 'Prisma', category: 'ORM' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'Redis', category: 'Cache' },
  { name: 'Docker', category: 'Deploy' },
]

const faq = [
  {
    question: 'Quelle est la difference entre REST et GraphQL ?',
    answer: 'REST utilise des endpoints fixes avec des structures de donnees predefinies. GraphQL permet au client de specifier exactement les donnees souhaitees dans une seule requete, evitant l\'over-fetching et l\'under-fetching.',
  },
  {
    question: 'Comment securisez-vous les APIs ?',
    answer: 'Nous implementons l\'authentification JWT ou OAuth2, le rate limiting, la validation des inputs, le chiffrement HTTPS, et suivons les recommandations OWASP pour les APIs.',
  },
  {
    question: 'Pouvez-vous connecter notre API a des services externes ?',
    answer: 'Oui, nous realisons regulierement des integrations avec des CRM (Salesforce, HubSpot), des outils de paiement (Stripe, PayPal), des services d\'email, et bien d\'autres.',
  },
  {
    question: 'Fournissez-vous une documentation API ?',
    answer: 'Absolument. Nous generons automatiquement une documentation OpenAPI/Swagger pour REST ou un schema explorable pour GraphQL, avec exemples de requetes.',
  },
]

export default function ApiPage() {
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
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 text-white flex items-center justify-center mb-8">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h1 className="heading-xl text-white mb-6">
              Developpement{' '}
              <span className="gradient-text">API REST & GraphQL</span>
            </h1>
            <p className="text-xl text-dark-300 leading-relaxed mb-8">
              Concevez des APIs robustes et securisees pour connecter vos applications,
              integrer des services tiers et alimenter vos interfaces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">
                Discuter de votre projet
              </Link>
              <Link href="/services/developpement/react" className="btn-secondary">
                Voir le dev Frontend
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding border-t border-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-white mb-4">
              Nos services API
            </h2>
            <p className="text-dark-300 text-lg max-w-2xl mx-auto">
              Du developpement sur mesure aux integrations complexes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div key={service.title} className="p-8 card">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 text-green-400 flex items-center justify-center flex-shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-dark-400 mb-4">
                      {service.description}
                    </p>
                    <ul className="flex flex-wrap gap-2">
                      {service.items.map((item) => (
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

      {/* Integrations */}
      <section className="section-padding border-t border-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-md text-white mb-4">
              Integrations courantes
            </h2>
            <p className="text-dark-300 text-lg max-w-2xl mx-auto">
              Nous connectons votre application aux services leaders du marche.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {integrations.map((integration) => (
              <span key={integration.name} className="px-4 py-2 bg-dark-800/50 border border-dark-700/50 rounded-lg text-dark-300 text-sm">
                {integration.name}
                <span className="ml-2 text-dark-500 text-xs">{integration.category}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="section-padding border-t border-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-md text-white mb-4">
              Technologies backend
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
            <Link href="/services/developpement/saas" className="card p-6 hover:border-orange-500/50 transition-colors group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 text-orange-400 flex items-center justify-center mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-white font-semibold group-hover:text-orange-400 transition-colors">SaaS & Plateformes</h3>
              <p className="text-dark-400 text-sm">Applications metier</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card p-12 text-center">
            <h2 className="heading-md text-white mb-4">
              Besoin d'une API sur mesure ?
            </h2>
            <p className="text-dark-300 text-lg mb-8 max-w-xl mx-auto">
              Discutons de votre architecture et de vos besoins d'integration.
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
