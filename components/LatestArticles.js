
import BlogPost from '../components/BlogPost';

const LatestArticles = ({ posts }) => {
     const filteredBlogPosts = posts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    ).slice(0,3);

    const articles = filteredBlogPosts.map(post => {
        return (
            <BlogPost
                key={post.slug}
                title={post.title}
                summary={post.summary}
                slug={post.slug}
            />
        )
    })

    return (

        <>
            <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
            Últimos Articulos
            </h3>

            {articles}            
        </>
        
    )
}



export default LatestArticles