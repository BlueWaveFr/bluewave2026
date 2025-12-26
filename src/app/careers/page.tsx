import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Carrieres',
  description: 'Rejoignez l equipe Bluewave. Decouvrez nos offres d emploi en developpement web, SEO technique et solutions digitales.',
  alternates: {
    canonical: 'https://bluewave.fr/careers',
  },
}

export default function CareersPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <nav className="mb-8">
              <ol className="flex items-center gap-2 text-sm text-dark-400">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
                </li>
                <li>/</li>
                <li className="text-dark-300">Carrieres</li>
              </ol>
            </nav>
            <span className="badge mb-6">Carrieres</span>
            <h1 className="heading-xl text-white mb-6">
              Rejoignez{' '}
              <span className="gradient-text">l'aventure</span>
            </h1>
            <p className="text-xl text-dark-300 leading-relaxed">
              Nous recherchons des talents passionnes par le developpement web,
              l'innovation et les nouvelles technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding border-t border-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading-md text-white mb-12">Nos valeurs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-8">
              <div className="w-12 h-12 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Innovation</h3>
              <p className="text-dark-400">
                Nous explorons constamment les nouvelles technologies pour proposer
                les meilleures solutions a nos clients.
              </p>
            </div>
            <div className="card p-8">
              <div className="w-12 h-12 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Collaboration</h3>
              <p className="text-dark-400">
                Nous croyons au travail d'equipe et a l'intelligence collective
                pour atteindre des resultats exceptionnels.
              </p>
            </div>
            <div className="card p-8">
              <div className="w-12 h-12 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Excellence</h3>
              <p className="text-dark-400">
                Nous visons l'excellence dans chaque projet, avec un souci constant
                de la qualite et de la performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding border-t border-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading-md text-white mb-12">Postes ouverts</h2>

          {/* No positions currently */}
          <div className="card p-12 text-center">
            <div className="w-16 h-16 rounded-full bg-dark-800/50 border border-dark-700/50 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-dark-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Pas de poste ouvert actuellement</h3>
            <p className="text-dark-400 max-w-md mx-auto mb-8">
              Nous n'avons pas de poste a pourvoir pour le moment, mais nous sommes
              toujours ouverts aux candidatures spontanees.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-dark-800/50 border border-dark-700/50 text-white font-medium rounded-lg hover:bg-dark-700 hover:border-dark-600 transition-all"
            >
              Candidature spontanee
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding border-t border-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading-md text-white mb-12">Pourquoi nous rejoindre ?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent-500/10 border border-accent-500/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Teletravail flexible</h3>
                <p className="text-dark-400 text-sm">Travaillez d'ou vous voulez, quand vous voulez</p>
              </div>
            </div>
            <div className="card p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent-500/10 border border-accent-500/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Formation continue</h3>
                <p className="text-dark-400 text-sm">Budget formation et acces aux conferences</p>
              </div>
            </div>
            <div className="card p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent-500/10 border border-accent-500/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Materiel de qualite</h3>
                <p className="text-dark-400 text-sm">MacBook Pro et equipements derniere generation</p>
              </div>
            </div>
            <div className="card p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent-500/10 border border-accent-500/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Projets stimulants</h3>
                <p className="text-dark-400 text-sm">Clients varies et technologies modernes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding border-t border-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card p-12 text-center">
            <h2 className="heading-md text-white mb-4">
              Interesse(e) par Bluewave ?
            </h2>
            <p className="text-dark-300 text-lg mb-8 max-w-xl mx-auto">
              Envoyez-nous votre candidature spontanee. Nous etudions chaque profil avec attention.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-accent-500 text-white font-medium rounded-xl hover:bg-accent-600 transition-all"
            >
              Postuler maintenant
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
