import { useRouter } from 'next/router';

import BlogPost from '../components/BlogPost';

const LatestArticles = ({ posts }) => {
    const router = useRouter()
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

            <button
                type="button"
                className="flex items-center text-sm mt-0 mb-8 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100"
                onClick={() => router.push('/blog') }
            >
                Ver más Artículos
          <svg
                    className="h-4 w-4 ml-1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>      
        </>
        
    )
}



export default LatestArticles