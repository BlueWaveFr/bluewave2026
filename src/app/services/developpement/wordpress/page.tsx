import Link from 'next/link'

const benefits = [
  {
    title: 'Performance Maximale',
    description: 'Frontend statique genere avec Next.js pour des temps de chargement ultra-rapides.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    items: ['Static Generation', 'CDN global', 'Score Lighthouse 100', 'Core Web Vitals optimises'],
  },
  {
    title: 'CMS Familier',
    description: 'Vos equipes gardent l\'interface WordPress qu\'elles connaissent pour gerer le contenu.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    items: ['Gutenberg', 'ACF Pro', 'Custom Post Types', 'Media Library'],
  },
  {
    title: 'Securite Renforcee',
    description: 'WordPress n\'est pas expose publiquement, seul le frontend statique est accessible.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    items: ['Backend prive', 'Pas de plugins exposes', 'Attaques reduites', 'WAF optionnel'],
  },
  {
    title: 'Flexibilite Totale',
    description: 'Design sur mesure sans les contraintes des themes WordPress traditionnels.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    items: ['Design libre', 'Animations avancees', 'Composants React', 'Tailwind CSS'],
  },
]

const architecture = [
  { name: 'WordPress', role: 'CMS & API', description: 'Gestion du contenu' },
  { name: 'WPGraphQL', role: 'API Layer', description: 'Expose les donnees en GraphQL' },
  { name: 'Next.js', role: 'Frontend', description: 'Genere le site statique' },
  { name: 'Vercel/Netlify', role: 'Hosting', description: 'CDN et deployement' },
]

const useCases = [
  {
    title: 'Sites Corporate',
    description: 'Sites institutionnels avec beaucoup de pages et de contenu editorial.',
  },
  {
    title: 'Blogs & Magazines',
    description: 'Publications avec de nombreux articles et categories.',
  },
  {
    title: 'Sites Multilingues',
    description: 'Gestion de traductions avec WPML ou Polylang.',
  },
  {
    title: 'Portails d\'actualites',
    description: 'Sites avec mise a jour frequente du contenu.',
  },
]

const stack = [
  { name: 'WordPress', category: 'CMS' },
  { name: 'WPGraphQL', category: 'API' },
  { name: 'ACF Pro', category: 'Fields' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Tailwind CSS', category: 'Styling' },
  { name: 'Apollo Client', category: 'GraphQL' },
  { name: 'Vercel', category: 'Hosting' },
]

const faq = [
  {
    question: 'Qu\'est-ce que WordPress Headless ?',
    answer: 'WordPress Headless utilise WordPress uniquement comme CMS (backend) pour gerer le contenu, tandis que le frontend est developpe separement avec une technologie moderne comme Next.js. Les deux communiquent via une API.',
  },
  {
    question: 'Pourquoi choisir Headless plutot que WordPress classique ?',
    answer: 'Performance (pages statiques ultra-rapides), securite (WordPress non expose), flexibilite du design (pas de contraintes de themes), et meilleure experience developpeur pour des fonctionnalites avancees.',
  },
  {
    question: 'Mes equipes devront-elles apprendre un nouveau CMS ?',
    answer: 'Non, l\'interface d\'administration reste WordPress. Vos equipes continuent de creer du contenu exactement comme avant, avec Gutenberg, ACF, etc.',
  },
  {
    question: 'Comment le contenu est-il mis a jour sur le site ?',
    answer: 'Nous configurons des webhooks qui declenchent automatiquement une regeneration du site quand vous publiez du contenu. Le site est mis a jour en quelques secondes.',
  },
]

export default function WordPressPage() {
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
            <div className="w-16 h-16 rounded-2xl bg-[#21759b] text-white flex items-center justify-center mb-8">
              <span className="text-2xl font-bold">W</span>
            </div>
            <h1 className="heading-xl text-white mb-6">
              WordPress{' '}
              <span className="gradient-text">Headless</span>
            </h1>
            <p className="text-xl text-dark-300 leading-relaxed mb-8">
              Combinez la puissance du CMS WordPress avec la performance
              de Next.js pour des sites ultra-rapides et faciles a gerer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">
                Discuter de votre projet
              </Link>
              <Link href="/services/developpement/react" className="btn-secondary">
                Voir le dev React
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding border-t border-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-white mb-4">
              Pourquoi WordPress Headless ?
            </h2>
            <p className="text-dark-300 text-lg max-w-2xl mx-auto">
              Le meilleur des deux mondes : CMS familier et frontend moderne.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="p-8 card">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-[#21759b]/20 border border-[#21759b]/30 text-[#21759b] flex items-center justify-center flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-dark-400 mb-4">
                      {benefit.description}
                    </p>
                    <ul className="flex flex-wrap gap-2">
                      {benefit.items.map((item) => (
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

      {/* Architecture */}
      <section className="section-padding border-t border-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-md text-white mb-4">
              Architecture Headless
            </h2>
            <p className="text-dark-300 text-lg max-w-2xl mx-auto">
              Une stack moderne et eprouvee.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {architecture.map((item, index) => (
              <div key={item.name} className="card p-6 text-center relative">
                {index < architecture.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-dark-700">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-4 border-transparent border-l-dark-700" />
                  </div>
                )}
                <div className="text-2xl font-bold text-white mb-1">{item.name}</div>
                <div className="text-[#21759b] text-sm font-medium mb-2">{item.role}</div>
                <p className="text-dark-500 text-xs">{item.description}</p>
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
              Cas d'usage ideaux
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
              Pret a moderniser votre WordPress ?
            </h2>
            <p className="text-dark-300 text-lg mb-8 max-w-xl mx-auto">
              Migrez vers une architecture headless pour des performances
              exceptionnelles tout en gardant votre CMS prefere.
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
