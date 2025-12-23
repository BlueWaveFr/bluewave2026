import Link from 'next/link'

async function getPosts() {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://cms.bluewave.fr/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
          query GetPosts {
            posts(first: 20) {
              nodes {
                id
                title
                slug
                date
                excerpt
                featuredImage {
                  node {
                    sourceUrl
                  }
                }
                categories {
                  nodes {
                    name
                    slug
                  }
                }
                author {
                  node {
                    name
                  }
                }
              }
            }
          }
        `
      }),
      next: { revalidate: 60 }
    })

    const json = await res.json()
    return json.data?.posts?.nodes || []
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="badge mb-6">Blog</span>
            <h1 className="heading-xl text-white mb-6">
              Actualites et{' '}
              <span className="gradient-text">reflexions</span>
            </h1>
            <p className="text-xl text-dark-300 leading-relaxed">
              Nos dernieres publications sur le developpement web, le SEO technique,
              les tendances technologiques et nos retours d'experience.
            </p>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="section-padding border-t border-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-16 h-16 rounded-2xl bg-dark-800 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-dark-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-white mb-2">Aucun article pour le moment</h2>
              <p className="text-dark-400">Nos premiers articles arrivent bientot !</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post: any) => (
                <article key={post.id} className="group">
                  <Link href={`/blog/${post.slug}`}>
                    <div className="card-interactive overflow-hidden">
                      {/* Image */}
                      {post.featuredImage?.node?.sourceUrl && (
                        <div className="aspect-video bg-dark-800 relative overflow-hidden">
                          <img
                            src={post.featuredImage.node.sourceUrl}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      )}

                      {/* Content */}
                      <div className="p-6">
                        {/* Meta */}
                        <div className="flex items-center gap-3 mb-4">
                          {post.categories?.nodes?.[0] && (
                            <span className="badge">{post.categories.nodes[0].name}</span>
                          )}
                          <span className="text-dark-500 text-sm">{formatDate(post.date)}</span>
                        </div>

                        {/* Title */}
                        <h2 className="text-xl font-semibold text-white mb-3 group-hover:text-accent-400 transition-colors line-clamp-2">
                          {post.title}
                        </h2>

                        {/* Excerpt */}
                        <div
                          className="text-dark-400 text-sm mb-4 line-clamp-3"
                          dangerouslySetInnerHTML={{ __html: post.excerpt }}
                        />

                        {/* Read more */}
                        <span className="inline-flex items-center text-accent-400 text-sm font-medium group-hover:text-accent-300">
                          Lire l'article
                          <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card p-12 text-center">
            <h2 className="heading-md text-white mb-4">
              Abonnez-vous a notre newsletter
            </h2>
            <p className="text-dark-300 text-lg mb-8 max-w-xl mx-auto">
              Recevez nos derniers articles et actualites directement dans votre boite mail.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="votre@email.com"
                className="input flex-1"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-accent-500 text-white font-medium rounded-lg hover:bg-accent-600 transition-all"
              >
                S'abonner
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
