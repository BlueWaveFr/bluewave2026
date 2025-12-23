async function getPosts() {
    const res = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_API_URL!, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
        query GetPosts {
          posts {
            nodes {
              id
              title
              slug
              date
              excerpt
            }
          }
        }
      `
        }),
        next: { revalidate: 60 }
    })

    const json = await res.json()
    return json.data?.posts?.nodes || []
}

export default async function BlogPage() {
    const posts = await getPosts()

    return (
        <main className="min-h-screen py-24">
            <div className="container-custom">
                <h1 className="text-4xl font-bold mb-12">Blog</h1>

                {posts.length === 0 ? (
                    <p>Aucun article pour le moment.</p>
                ) : (
                    <div className="grid gap-8">
                        {posts.map((post: any) => (
                            <article key={post.id} className="p-6 bg-gray-50 rounded-lg">
                                <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                                <div
                                    className="text-gray-600"
                                    dangerouslySetInnerHTML={{ __html: post.excerpt }}
                                />
                            </article>
                        ))}
                    </div>
                )}
            </div>
        </main>
    )
}