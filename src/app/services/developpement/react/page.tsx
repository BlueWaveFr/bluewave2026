import Link from 'next/link'

const features = [
  {
    title: 'Next.js App Router',
    description: 'Architecture moderne avec le nouveau App Router de Next.js 14 pour des applications performantes.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    items: ['Server Components', 'Streaming SSR', 'Layouts imbriques', 'Route Handlers'],
  },
  {
    title: 'Rendu Hybride',
    description: 'Combinaison intelligente de SSR, SSG et ISR selon les besoins de chaque page.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    items: ['Static Generation', 'Server-Side Rendering', 'Incremental Static Regeneration', 'Client Components'],
  },
  {
    title: 'TypeScript & Qualite',
    description: 'Code type-safe avec TypeScript pour une maintenance facilitee et moins de bugs.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    items: ['TypeScript strict', 'ESLint & Prettier', 'Tests unitaires', 'Tests E2E'],
  },
  {
    title: 'UI/UX Moderne',
    description: 'Interfaces utilisateur elegantes avec Tailwind CSS et animations Framer Motion.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    items: ['Tailwind CSS', 'Framer Motion', 'Design System', 'Responsive Design'],
  },
]

const useCases = [
  {
    title: 'Sites Vitrines Premium',
    description: 'Sites corporate performants avec animations fluides et SEO optimal.',
    example: 'Landing pages, sites institutionnels',
  },
  {
    title: 'Applications Web',
    description: 'Dashboards, back-offices et applications metier complexes.',
    example: 'CRM, outils internes, portails clients',
  },
  {
    title: 'Plateformes SaaS',
    description: 'Applications multi-utilisateurs avec authentification et abonnements.',
    example: 'Outils collaboratifs, marketplaces',
  },
  {
    title: 'E-commerce Headless',
    description: 'Fronts e-commerce ultra-rapides connectes a votre backend.',
    example: 'Shopify Headless, Medusa, custom',
  },
]

const stack = [
  { name: 'React 18', category: 'Core' },
  { name: 'Next.js 14', category: 'Framework' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Tailwind CSS', category: 'Styling' },
  { name: 'Framer Motion', category: 'Animation' },
  { name: 'Zustand', category: 'State' },
  { name: 'React Query', category: 'Data' },
  { name: 'Prisma', category: 'ORM' },
  { name: 'NextAuth.js', category: 'Auth' },
  { name: 'Vercel', category: 'Deploy' },
]

const faq = [
  {
    question: 'Pourquoi choisir Next.js plutot que React seul ?',
    answer: 'Next.js ajoute le SSR/SSG natif pour le SEO, le routing automatique, l\'optimisation des images, et de nombreuses fonctionnalites enterprise-ready. C\'est le standard pour les applications React en production.',
  },
  {
    question: 'Quelle est la difference entre SSR, SSG et ISR ?',
    answer: 'SSR (Server-Side Rendering) genere la page a chaque requete. SSG (Static Site Generation) genere a la build. ISR (Incremental Static Regeneration) combine les deux : pages statiques qui se regenerent automatiquement.',
  },
  {
    question: 'React est-il adapte pour le SEO ?',
    answer: 'Avec Next.js, oui absolument. Le SSR et SSG permettent aux moteurs de recherche d\'indexer parfaitement le contenu. Nous optimisons systematiquement les meta tags, les donnees structurees et les Core Web Vitals.',
  },
  {
    question: 'Pouvez-vous reprendre un projet React existant ?',
    answer: 'Oui, nous intervenons regulierement sur des projets existants pour les auditer, les optimiser ou ajouter de nouvelles fonctionnalites. Nous pouvons aussi migrer un projet Create React App vers Next.js.',
  },
]

export default function ReactPage() {
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
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 text-white flex items-center justify-center mb-8">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"/>
                <path d="M12 21c-1.5 0-2.8-.4-4-1.2-1.2-.8-2.1-1.8-2.8-3.2-.7-1.3-1-2.8-1-4.6s.3-3.3 1-4.6c.7-1.4 1.6-2.4 2.8-3.2C9.2 3.4 10.5 3 12 3s2.8.4 4 1.2c1.2.8 2.1 1.8 2.8 3.2.7 1.3 1 2.8 1 4.6s-.3 3.3-1 4.6c-.7 1.4-1.6 2.4-2.8 3.2-1.2.8-2.5 1.2-4 1.2z"/>
              </svg>
            </div>
            <h1 className="heading-xl text-white mb-6">
              Developpement{' '}
              <span className="gradient-text">React & Next.js</span>
            </h1>
            <p className="text-xl text-dark-300 leading-relaxed mb-8">
              Creez des applications web modernes, performantes et optimisees SEO
              avec React et Next.js, les technologies frontend de reference.
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
              Notre expertise React
            </h2>
            <p className="text-dark-300 text-lg max-w-2xl mx-auto">
              Maitrise complete de l'ecosysteme React et Next.js.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="p-8 card">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-400 flex items-center justify-center flex-shrink-0">
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

      {/* Use cases */}
      <section className="section-padding border-t border-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-md text-white mb-4">
              Cas d'usage
            </h2>
            <p className="text-dark-300 text-lg max-w-2xl mx-auto">
              React et Next.js s'adaptent a tous types de projets web.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase) => (
              <div key={useCase.title} className="card p-6">
                <h3 className="text-white font-semibold mb-2">{useCase.title}</h3>
                <p className="text-dark-400 text-sm mb-3">{useCase.description}</p>
                <p className="text-cyan-400 text-xs">{useCase.example}</p>
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
              Notre stack technique
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
              Pret a demarrer votre projet React ?
            </h2>
            <p className="text-dark-300 text-lg mb-8 max-w-xl mx-auto">
              Discutons de vos besoins et voyons comment nous pouvons creer
              une application performante et moderne.
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
