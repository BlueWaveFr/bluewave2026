import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const WORDPRESS_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://cms.bluewave.fr/graphql'

interface Post {
  id: string
  title: string
  slug: string
  date: string
  content: string
  excerpt: string
  featuredImage?: {
    node: {
      sourceUrl: string
      altText?: string
    }
  }
  categories?: {
    nodes: Array<{
      name: string
      slug: string
    }>
  }
  author?: {
    node: {
      name: string
      slug: string
      avatar?: {
        url: string
      }
      description?: string
    }
  }
  seo?: {
    title: string
    metaDesc: string
    opengraphTitle: string
    opengraphDescription: string
    opengraphImage?: {
      sourceUrl: string
    }
    twitterTitle: string
    twitterDescription: string
    canonical: string
  }
}

async function getPost(slug: string): Promise<Post | null> {
  try {
    const res = await fetch(WORDPRESS_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
          query GetPost($slug: ID!) {
            post(id: $slug, idType: SLUG) {
              id
              title
              slug
              date
              content
              excerpt
              featuredImage {
                node {
                  sourceUrl
                  altText
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
                  slug
                  avatar {
                    url
                  }
                  description
                }
              }
              seo {
                title
                metaDesc
                opengraphTitle
                opengraphDescription
                opengraphImage {
                  sourceUrl
                }
                twitterTitle
                twitterDescription
                canonical
              }
            }
          }
        `,
        variables: { slug }
      }),
      next: { revalidate: 60 }
    })

    const json = await res.json()
    return json.data?.post || null
  } catch (error) {
    console.error('Error fetching post:', error)
    return null
  }
}

async function getRelatedPosts(categorySlug: string, currentSlug: string) {
  try {
    const res = await fetch(WORDPRESS_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
          query GetRelatedPosts($categorySlug: String!) {
            posts(first: 3, where: { categoryName: $categorySlug }) {
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
              }
            }
          }
        `,
        variables: { categorySlug }
      }),
      next: { revalidate: 60 }
    })

    const json = await res.json()
    const posts = json.data?.posts?.nodes || []
    return posts.filter((post: any) => post.slug !== currentSlug).slice(0, 2)
  } catch (error) {
    return []
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    return {
      title: 'Article non trouve | Bluewave',
    }
  }

  // Use Yoast SEO data if available, otherwise fallback to defaults
  const seo = post.seo
  const title = seo?.title || `${post.title} | Bluewave Blog`
  const description = seo?.metaDesc || post.excerpt?.replace(/<[^>]*>/g, '').slice(0, 160)
  const ogImage = seo?.opengraphImage?.sourceUrl || post.featuredImage?.node?.sourceUrl

  return {
    title,
    description,
    openGraph: {
      title: seo?.opengraphTitle || title,
      description: seo?.opengraphDescription || description,
      type: 'article',
      publishedTime: post.date,
      url: `https://bluewave.fr/blog/${post.slug}`,
      images: ogImage ? [{ url: ogImage }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo?.twitterTitle || title,
      description: seo?.twitterDescription || description,
      images: ogImage ? [ogImage] : [],
    },
    alternates: {
      canonical: seo?.canonical || `https://bluewave.fr/blog/${post.slug}`,
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

function estimateReadTime(content: string): number {
  const wordsPerMinute = 200
  const text = content.replace(/<[^>]*>/g, '')
  const wordCount = text.split(/\s+/).length
  return Math.ceil(wordCount / wordsPerMinute)
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    notFound()
  }

  const categorySlug = post.categories?.nodes?.[0]?.slug
  const relatedPosts = categorySlug ? await getRelatedPosts(categorySlug, slug) : []
  const readTime = estimateReadTime(post.content || '')

  return (
    <main className="pt-20">
      {/* Article Header */}
      <article>
        <header className="section-padding-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <ol className="flex items-center gap-2 text-sm text-dark-400">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
                </li>
                <li>/</li>
                <li>
                  <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
                </li>
                <li>/</li>
                <li className="text-dark-300 truncate max-w-[200px]">{post.title}</li>
              </ol>
            </nav>

            {/* Category & Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              {post.categories?.nodes?.[0] && (
                <span className="badge">{post.categories.nodes[0].name}</span>
              )}
              <span className="text-dark-500 text-sm">{formatDate(post.date)}</span>
              <span className="text-dark-500 text-sm">{readTime} min de lecture</span>
            </div>

            {/* Title */}
            <h1 className="heading-lg text-white mb-6">
              {post.title}
            </h1>

            {/* Author */}
            {post.author?.node && (
              <Link href={`/equipe/${post.author.node.slug}`} className="flex items-center gap-4 mb-8 group">
                {post.author.node.avatar?.url && (
                  <img
                    src={post.author.node.avatar.url}
                    alt={post.author.node.name}
                    className="w-12 h-12 rounded-full bg-dark-800"
                  />
                )}
                <div>
                  <p className="text-white font-medium group-hover:text-accent-400 transition-colors">{post.author.node.name}</p>
                  <p className="text-dark-400 text-sm">Expert Bluewave</p>
                </div>
              </Link>
            )}
          </div>
        </header>

        {/* Featured Image */}
        {post.featuredImage?.node?.sourceUrl && (
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
            <div className="aspect-video rounded-2xl overflow-hidden bg-dark-800">
              <img
                src={post.featuredImage.node.sourceUrl}
                alt={post.featuredImage.node.altText || post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="prose-dark"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        {/* Author Box - E-E-A-T */}
        {post.author?.node && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-12 border-t border-dark-800/50">
            <div className="card p-8">
              <div className="flex items-start gap-6">
                {post.author.node.avatar?.url && (
                  <img
                    src={post.author.node.avatar.url}
                    alt={post.author.node.name}
                    className="w-20 h-20 rounded-full bg-dark-800 flex-shrink-0"
                  />
                )}
                <div>
                  <p className="text-dark-400 text-sm mb-1">Redige par</p>
                  <Link
                    href={`/equipe/${post.author.node.slug}`}
                    className="text-xl font-semibold text-white hover:text-accent-400 transition-colors"
                  >
                    {post.author.node.name}
                  </Link>
                  {post.author.node.description && (
                    <p className="text-dark-400 mt-2 leading-relaxed">
                      {post.author.node.description}
                    </p>
                  )}
                  <Link
                    href={`/equipe/${post.author.node.slug}`}
                    className="inline-flex items-center text-accent-400 text-sm font-medium mt-4 hover:text-accent-300 transition-colors"
                  >
                    Voir le profil complet
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Share & Tags */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-dark-800/50">
          <div className="flex flex-wrap items-center justify-between gap-6">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {post.categories?.nodes?.map((cat) => (
                <span key={cat.slug} className="badge">
                  {cat.name}
                </span>
              ))}
            </div>

            {/* Share */}
            <div className="flex items-center gap-4">
              <span className="text-dark-400 text-sm">Partager :</span>
              <a
                href={`https://twitter.com/intent/tweet?url=https://bluewave.fr/blog/${post.slug}&text=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-dark-800/50 border border-dark-700/50 flex items-center justify-center text-dark-400 hover:text-white hover:bg-dark-700 transition-all"
                aria-label="Partager sur Twitter"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=https://bluewave.fr/blog/${post.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-dark-800/50 border border-dark-700/50 flex items-center justify-center text-dark-400 hover:text-white hover:bg-dark-700 transition-all"
                aria-label="Partager sur LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="section-padding border-t border-dark-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="heading-md text-white mb-8">Articles similaires</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost: any) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                  <div className="card-interactive overflow-hidden">
                    {relatedPost.featuredImage?.node?.sourceUrl && (
                      <div className="aspect-video bg-dark-800 overflow-hidden">
                        <img
                          src={relatedPost.featuredImage.node.sourceUrl}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <div
                        className="text-dark-400 text-sm line-clamp-2"
                        dangerouslySetInnerHTML={{ __html: relatedPost.excerpt }}
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card p-12 text-center">
            <h2 className="heading-md text-white mb-4">
              Besoin d'aide pour votre projet ?
            </h2>
            <p className="text-dark-300 text-lg mb-8 max-w-xl mx-auto">
              Discutons de vos besoins et voyons comment nous pouvons vous accompagner.
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
