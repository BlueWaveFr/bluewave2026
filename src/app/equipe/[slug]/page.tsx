import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const WORDPRESS_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://cms.bluewave.fr/graphql'

interface Author {
  id: string
  name: string
  slug: string
  description: string
  avatar?: {
    url: string
  }
  seo?: {
    title: string
    metaDesc: string
    social?: {
      linkedIn?: string
      twitter?: string
    }
  }
  posts?: {
    nodes: Array<{
      id: string
      title: string
      slug: string
      date: string
      excerpt: string
    }>
  }
  guides?: {
    nodes: Array<{
      id: string
      title: string
      slug: string
      date: string
      excerpt: string
    }>
  }
}

// Mapping slug URL -> slug WordPress (si different)
const SLUG_MAPPING: Record<string, string> = {
  'stephane-geraut': 'steph',
}

// Donnees supplementaires E-E-A-T (expertise, certifications, etc.)
// Ces donnees enrichissent les infos WordPress
const TEAM_EXTRA_DATA: Record<string, {
  role: string
  expertise: string[]
  certifications: string[]
  experience: string
  social: {
    linkedin?: string
    twitter?: string
    github?: string
  }
}> = {
  'steph': {
    role: 'Fondateur & Lead Developer',
    expertise: [
      'Architecture web & API',
      'React / Next.js / TypeScript',
      'SEO technique & Core Web Vitals',
      'WordPress & Headless CMS',
      'E-commerce (Prestashop, WooCommerce)',
      'DevOps & CI/CD',
    ],
    certifications: [
      'Google Analytics Certified',
      'AWS Solutions Architect',
    ],
    experience: '15+ ans',
    social: {
      linkedin: 'https://linkedin.com/in/stephane-geraut',
      twitter: 'https://twitter.com/stephgeraut',
      github: 'https://github.com/stephgeraut',
    }
  }
}

async function getAuthorFromWP(slug: string): Promise<Author | null> {
  try {
    const res = await fetch(WORDPRESS_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
          query GetAuthor($slug: ID!) {
            user(id: $slug, idType: SLUG) {
              id
              name
              slug
              description
              avatar {
                url
              }
              seo {
                title
                metaDesc
                social {
                  linkedIn
                  twitter
                }
              }
              posts(first: 10, where: { status: PUBLISH }) {
                nodes {
                  id
                  title
                  slug
                  date
                  excerpt
                }
              }
              guides(first: 10, where: { status: PUBLISH }) {
                nodes {
                  id
                  title
                  slug
                  date
                }
              }
            }
          }
        `,
        variables: { slug }
      }),
      next: { revalidate: 60 }
    })

    const json = await res.json()
    return json.data?.user || null
  } catch (error) {
    console.error('Error fetching author:', error)
    return null
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const wpSlug = SLUG_MAPPING[slug] || slug
  const author = await getAuthorFromWP(wpSlug)
  const extraData = TEAM_EXTRA_DATA[wpSlug]

  if (!author) {
    return { title: 'Membre non trouve | Bluewave' }
  }

  const role = extraData?.role || 'Expert Bluewave'
  const experience = extraData?.experience || ''

  return {
    title: `${author.name} - ${role}`,
    description: author.seo?.metaDesc || `Decouvrez le profil de ${author.name}, ${role} chez Bluewave.${experience ? ` ${experience} d'experience en developpement web.` : ''}`,
    openGraph: {
      title: `${author.name} - ${role} | Bluewave`,
      description: `${role}${experience ? ` avec ${experience} d'experience` : ''}. ${extraData?.expertise ? `Expert en ${extraData.expertise.slice(0, 3).join(', ')}.` : ''}`,
      type: 'profile',
      url: `https://bluewave.fr/equipe/${slug}`,
      images: author.avatar?.url ? [{ url: author.avatar.url }] : [],
    },
    alternates: {
      canonical: `https://bluewave.fr/equipe/${slug}`,
    },
  }
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export default async function TeamMemberPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const wpSlug = SLUG_MAPPING[slug] || slug
  const wpAuthor = await getAuthorFromWP(wpSlug)
  const extraData = TEAM_EXTRA_DATA[wpSlug]

  if (!wpAuthor) {
    notFound()
  }

  // Merge WordPress data with extra E-E-A-T data
  const member = {
    name: wpAuthor.name,
    role: extraData?.role || 'Expert Bluewave',
    bio: wpAuthor.description || '',
    expertise: extraData?.expertise || [],
    certifications: extraData?.certifications || [],
    experience: extraData?.experience || '',
    avatar: wpAuthor.avatar?.url,
    social: {
      linkedin: extraData?.social?.linkedin || wpAuthor.seo?.social?.linkedIn,
      twitter: extraData?.social?.twitter || wpAuthor.seo?.social?.twitter,
      github: extraData?.social?.github,
    }
  }

  const posts = wpAuthor.posts?.nodes || []
  const guides = wpAuthor.guides?.nodes || []

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-dark-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/equipe" className="hover:text-white transition-colors">Equipe</Link>
              </li>
              <li>/</li>
              <li className="text-dark-300">{member.name}</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left - Photo & Quick Info */}
            <div>
              <div className="card p-8 sticky top-24">
                {/* Avatar */}
                <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center text-white text-4xl font-bold mx-auto mb-6 overflow-hidden">
                  {member.avatar ? (
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full rounded-2xl object-cover"
                    />
                  ) : (
                    member.name.split(' ').map(n => n[0]).join('')
                  )}
                </div>

                <h1 className="text-2xl font-bold text-white text-center mb-2">
                  {member.name}
                </h1>
                <p className="text-accent-400 text-center mb-6">{member.role}</p>

                {member.experience && (
                  <div className="text-center mb-6">
                    <span className="text-3xl font-bold gradient-text">{member.experience}</span>
                    <p className="text-dark-400 text-sm">d'experience</p>
                  </div>
                )}

                {/* Social Links */}
                <div className="flex justify-center gap-3">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-dark-800/50 border border-dark-700/50 flex items-center justify-center text-dark-400 hover:text-white hover:bg-dark-700 transition-all"
                      aria-label="LinkedIn"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-dark-800/50 border border-dark-700/50 flex items-center justify-center text-dark-400 hover:text-white hover:bg-dark-700 transition-all"
                      aria-label="Twitter"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                  )}
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-dark-800/50 border border-dark-700/50 flex items-center justify-center text-dark-400 hover:text-white hover:bg-dark-700 transition-all"
                      aria-label="GitHub"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Right - Bio & Details */}
            <div className="lg:col-span-2">
              {/* Bio */}
              <div className="mb-12">
                <h2 className="heading-md text-white mb-6">A propos</h2>
                <div className="text-dark-300 leading-relaxed space-y-4">
                  {member.bio.split('\n\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Expertise */}
              {member.expertise.length > 0 && (
                <div className="mb-12">
                  <h2 className="heading-md text-white mb-6">Domaines d'expertise</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {member.expertise.map((skill) => (
                      <div key={skill} className="flex items-center gap-3 p-4 card">
                        <svg className="w-5 h-5 text-accent-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-dark-200">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Certifications */}
              {member.certifications.length > 0 && (
                <div className="mb-12">
                  <h2 className="heading-md text-white mb-6">Certifications</h2>
                  <div className="flex flex-wrap gap-3">
                    {member.certifications.map((cert) => (
                      <span key={cert} className="px-4 py-2 bg-accent-500/10 border border-accent-500/20 rounded-lg text-accent-400 text-sm font-medium">
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Guides */}
              {guides.length > 0 && (
                <div className="mb-12">
                  <h2 className="heading-md text-white mb-6">Guides techniques</h2>
                  <div className="space-y-4">
                    {guides.slice(0, 5).map((guide) => (
                      <Link key={guide.id} href={`/guides/${guide.slug}`}>
                        <div className="p-6 card-interactive">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-xs px-2 py-0.5 bg-accent-500/10 border border-accent-500/20 rounded text-accent-400">Guide</span>
                              </div>
                              <h3 className="text-white font-medium mb-1 group-hover:text-accent-400">
                                {guide.title}
                              </h3>
                              <p className="text-dark-500 text-sm">{formatDate(guide.date)}</p>
                            </div>
                            <svg className="w-5 h-5 text-dark-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Articles */}
              {posts.length > 0 && (
                <div>
                  <h2 className="heading-md text-white mb-6">Articles recents</h2>
                  <div className="space-y-4">
                    {posts.slice(0, 5).map((post) => (
                      <Link key={post.id} href={`/blog/${post.slug}`}>
                        <div className="p-6 card-interactive">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <h3 className="text-white font-medium mb-1 group-hover:text-accent-400">
                                {post.title}
                              </h3>
                              <p className="text-dark-500 text-sm">{formatDate(post.date)}</p>
                            </div>
                            <svg className="w-5 h-5 text-dark-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding border-t border-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card p-12 text-center">
            <h2 className="heading-md text-white mb-4">
              Travaillons ensemble
            </h2>
            <p className="text-dark-300 text-lg mb-8 max-w-xl mx-auto">
              Vous avez un projet ? Discutons de vos besoins et voyons comment nous pouvons vous aider.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-accent-500 text-white font-medium rounded-xl hover:bg-accent-600 transition-all"
            >
              Contactez-nous
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
