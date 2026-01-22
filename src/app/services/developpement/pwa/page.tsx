import Link from 'next/link'

const features = [
  {
    title: 'Installation Native',
    description: 'Ajoutez l\'application a l\'ecran d\'accueil sans passer par les app stores.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    ),
    items: ['Web App Manifest', 'Splash screen', 'Icone sur l\'ecran d\'accueil', 'Mode standalone'],
  },
  {
    title: 'Mode Offline',
    description: 'L\'application fonctionne meme sans connexion internet grace au cache intelligent.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414" />
      </svg>
    ),
    items: ['Service Workers', 'Cache API', 'Background Sync', 'IndexedDB'],
  },
  {
    title: 'Notifications Push',
    description: 'Engagez vos utilisateurs avec des notifications meme quand l\'app est fermee.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
    items: ['Push API', 'Notifications API', 'FCM integration', 'Permission UX'],
  },
  {
    title: 'Performance Optimale',
    description: 'Chargement instantane et experience fluide comme une application native.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    items: ['App Shell', 'Lazy loading', 'Precaching', 'Runtime caching'],
  },
]

const advantages = [
  {
    title: 'Pas d\'app stores',
    description: 'Deploiement instantane sans validation Apple/Google. Mises a jour immediates.',
    icon: '🚀',
  },
  {
    title: 'Un seul code',
    description: 'Une seule codebase pour web, iOS et Android. Maintenance simplifiee.',
    icon: '💻',
  },
  {
    title: 'Cout reduit',
    description: 'Developpement moins couteux qu\'une app native pour chaque plateforme.',
    icon: '💰',
  },
  {
    title: 'SEO friendly',
    description: 'Contenu indexable par Google contrairement aux apps natives.',
    icon: '🔍',
  },
]

const useCases = [
  {
    title: 'Applications metier',
    description: 'Outils internes accessibles sur mobile sans deploiement MDM.',
  },
  {
    title: 'E-commerce',
    description: 'Experience d\'achat fluide avec panier persistant offline.',
  },
  {
    title: 'Media & News',
    description: 'Lecture d\'articles offline et notifications pour les breaking news.',
  },
  {
    title: 'Outils collaboratifs',
    description: 'Travail en mode deconnecte avec synchronisation automatique.',
  },
]

const stack = [
  { name: 'Next.js PWA', category: 'Framework' },
  { name: 'Workbox', category: 'Service Worker' },
  { name: 'Web Push', category: 'Notifications' },
  { name: 'IndexedDB', category: 'Storage' },
  { name: 'Cache API', category: 'Offline' },
  { name: 'Web App Manifest', category: 'Install' },
]

const faq = [
  {
    question: 'Quelle est la difference entre une PWA et une app native ?',
    answer: 'Une PWA est une application web qui offre une experience similaire aux apps natives (installation, offline, notifications) mais fonctionne dans le navigateur. Elle est developpee en HTML/CSS/JS et n\'a pas besoin d\'etre publiee sur les app stores.',
  },
  {
    question: 'Les PWA fonctionnent-elles sur iOS ?',
    answer: 'Oui, mais avec certaines limitations. iOS supporte l\'installation et le mode offline, mais les notifications push ne sont disponibles que depuis iOS 16.4. Nous optimisons l\'experience pour chaque plateforme.',
  },
  {
    question: 'Une PWA peut-elle acceder aux fonctionnalites du telephone ?',
    answer: 'Oui, de nombreuses APIs sont disponibles : camera, geolocalisation, Bluetooth, NFC, reconnaissance vocale, etc. Les capacites s\'etendent continuellement avec le projet "Project Fugu" de Google.',
  },
  {
    question: 'Comment les utilisateurs installent-ils une PWA ?',
    answer: 'Via une banniere d\'installation proposee par le navigateur, ou manuellement depuis le menu "Ajouter a l\'ecran d\'accueil". Nous optimisons le parcours d\'installation pour maximiser le taux d\'adoption.',
  },
]

export default function PwaPage() {
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
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 text-white flex items-center justify-center mb-8">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h1 className="heading-xl text-white mb-6">
              Progressive{' '}
              <span className="gradient-text">Web App</span>
            </h1>
            <p className="text-xl text-dark-300 leading-relaxed mb-8">
              Developpez des applications web installables qui fonctionnent
              offline et offrent une experience native sur tous les appareils.
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

      {/* Features */}
      <section className="section-padding border-t border-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-white mb-4">
              Fonctionnalites PWA
            </h2>
            <p className="text-dark-300 text-lg max-w-2xl mx-auto">
              Toutes les capacites d'une app native dans le navigateur.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="p-8 card">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-400 flex items-center justify-center flex-shrink-0">
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

      {/* Advantages */}
      <section className="section-padding border-t border-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-md text-white mb-4">
              Pourquoi choisir une PWA ?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage) => (
              <div key={advantage.title} className="card p-6 text-center">
                <div className="text-4xl mb-4">{advantage.icon}</div>
                <h3 className="text-white font-semibold mb-2">{advantage.title}</h3>
                <p className="text-dark-400 text-sm">{advantage.description}</p>
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
              Technologies PWA
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
              Pret a lancer votre PWA ?
            </h2>
            <p className="text-dark-300 text-lg mb-8 max-w-xl mx-auto">
              Offrez a vos utilisateurs une experience mobile sans les contraintes
              des app stores.
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
