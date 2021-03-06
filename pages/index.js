import Link from 'next/link';
import Image from 'next/image';


import { getAllFilesFrontMatter } from '@/lib/mdx';
import Container from '../components/Container';
import NowPlaying from '@/components/NowPlaying';
import LatestArticles from '@/components/LatestArticles';
import Subscribe from '@/components/Subscribe';


export default function Home({posts}) {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <div className="w-full flex flex-col md:flex-row justify-center items-center mb-8">
            <Image
              src="/static/images/magiobus.jpg"
              alt="Magiobus"
              width={200}
              height={200}
              priority
              className="rounded-full"
            />
            <h1 className="font-bold text-3xl md:text-5xl px-4 sm: my-2 tracking-tight text-black dark:text-white">
              Hola, Soy Magio Bustillos 
            </h1>
          </div>
        <NowPlaying />
        <h2 className="prose text-lg text-gray-600 dark:text-gray-400 mb-4">
          Soy un desarrollador al que le encanta resolver problemas y probar nuevas tecnologías. <br />
        </h2>
        <p className="prose text-lg text-gray-600 dark:text-gray-400 mb-4">
          En este pedacito de internet puedes leer lo que escribo en mi <Link href="/blog"><a>Blog.</a></Link> <br />
          Escuchar la <Link href="/music"><a>Música</a></Link> que hago para mi u otros artistas. <br />
          Ver los diferentes <Link href="/about"><a>Proyectos</a></Link> en los que ando involucrado. <br />
        </p>

        <p className="prose text-lg text-gray-600 dark:text-gray-400 mb-16"> Si necesitas contactarme, siempre me puedes mandar un&nbsp;
          <Link href="https://twitter.com/intent/tweet?original_referer=https%3A%2F%2Fpublish.twitter.com%2F&ref_src=twsrc%5Etfw&screen_name=magiobus&tw_p=tweetbutton"><a>Tweet</a></Link> o un&nbsp;
          <Link href="mailto:magio@magiobus.com"><a>Email ✉️</a></Link>
        </p>

        <LatestArticles posts={posts}/>

        <Subscribe/>

      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog');
  return { props: { posts } };
}
