import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Notre Equipe',
  description: 'Decouvrez l\'equipe Bluewave : experts en developpement web, SEO technique et solutions digitales. Des professionnels passionnes au service de votre croissance.',
  alternates: {
    canonical: 'https://bluewave.fr/equipe',
  },
}

const WORDPRESS_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://cms.bluewave.fr/graphql'

// Mapping slug WordPress -> slug URL (inverse du mapping dans [slug])
const WP_TO_URL_SLUG: Record<string, string> = {
  'steph': 'stephane-geraut',
}

// Donnees supplementaires pour chaque membre
const TEAM_EXTRA_DATA: Record<string, {
  role: string
  expertise: string[]
  experience: string
}> = {
  'steph': {
    role: 'Fondateur & Lead Developer',
    expertise: ['Architecture web', 'React/Next.js', 'SEO technique'],
    experience: '15+ ans',
  }
}

interface WPUser {
  id: string
  name: string
  slug: string
  avatar?: {
    url: string
  }
}

async function getTeamMembers(): Promise<WPUser[]> {
  try {
    const res = await fetch(WORDPRESS_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
          query GetTeamMembers {
            users(where: { role: ADMINISTRATOR }) {
              nodes {
                id
                name
                slug
                avatar {
                  url
                }
              }
            }
          }
        `
      }),
      next: { revalidate: 60 }
    })

    const json = await res.json()
    return json.data?.users?.nodes || []
  } catch (error) {
    console.error('Error fetching team members:', error)
    return []
  }
}

export default async function TeamPage() {
  const wpMembers = await getTeamMembers()
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="badge mb-6">Notre equipe</span>
            <h1 className="heading-xl text-white mb-6">
              Des experts{' '}
              <span className="gradient-text">passionnes</span>
            </h1>
            <p className="text-xl text-dark-300 leading-relaxed">
              Une equipe de professionnels experimentes, unis par la passion du code
              et l'obsession de la qualite. Nous mettons notre expertise au service de vos projets.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding border-t border-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wpMembers.map((wpMember) => {
              const urlSlug = WP_TO_URL_SLUG[wpMember.slug] || wpMember.slug
              const extraData = TEAM_EXTRA_DATA[wpMember.slug]

              return (
                <Link key={wpMember.id} href={`/equipe/${urlSlug}`}>
                  <div className="group card-interactive p-8 text-center">
                    {/* Avatar */}
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 group-hover:scale-105 transition-transform overflow-hidden">
                      {wpMember.avatar?.url ? (
                        <img
                          src={wpMember.avatar.url}
                          alt={wpMember.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        wpMember.name.split(' ').map(n => n[0]).join('')
                      )}
                    </div>

                    <h2 className="text-xl font-bold text-white mb-1 group-hover:text-accent-400 transition-colors">
                      {wpMember.name}
                    </h2>
                    <p className="text-accent-400 mb-4">{extraData?.role || 'Expert Bluewave'}</p>

                    {extraData?.experience && (
                      <p className="text-dark-400 text-sm mb-4">
                        {extraData.experience} d'experience
                      </p>
                    )}

                    {extraData?.expertise && (
                      <div className="flex flex-wrap justify-center gap-2">
                        {extraData.expertise.map((skill) => (
                          <span key={skill} className="px-3 py-1 text-xs bg-dark-800/50 text-dark-300 rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="mt-6 pt-6 border-t border-dark-800/50">
                      <span className="inline-flex items-center text-accent-400 text-sm font-medium group-hover:text-accent-300">
                        Voir le profil
                        <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding border-t border-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-white mb-4">
              Nos valeurs
            </h2>
            <p className="text-dark-300 text-lg max-w-2xl mx-auto">
              Ce qui nous anime au quotidien.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-accent-500/10 border border-accent-500/20 text-accent-400 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Excellence</h3>
              <p className="text-dark-400">
                Nous visons la qualite a chaque ligne de code. Pas de compromis sur les standards.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-accent-500/10 border border-accent-500/20 text-accent-400 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Transparence</h3>
              <p className="text-dark-400">
                Communication claire et honnetete sur les delais, budgets et challenges.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-accent-500/10 border border-accent-500/20 text-accent-400 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Innovation</h3>
              <p className="text-dark-400">
                Veille constante sur les technologies pour proposer les meilleures solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card p-12 text-center">
            <h2 className="heading-md text-white mb-4">
              Rejoignez l'aventure
            </h2>
            <p className="text-dark-300 text-lg mb-8 max-w-xl mx-auto">
              Vous partagez nos valeurs et souhaitez rejoindre notre equipe ? Contactez-nous.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-accent-500 text-white font-medium rounded-xl hover:bg-accent-600 transition-all"
            >
              Nous contacter
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
