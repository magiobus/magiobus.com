import Image from 'next/image';
import { parseISO, format } from 'date-fns';
import { es } from 'date-fns/locale'

import Container from '@/components/Container';
import Subscribe from '@/components/Subscribe';
import ViewCounter from '@/components/ViewCounter';

export default function BlogLayout({ children, frontMatter }) {
  return (
    <Container
      title={`${frontMatter.title} – Magio Bustillos`}
      description={frontMatter.summary}
      image={`magiobus.com${frontMatter.image}`}
      date={new Date(frontMatter.publishedAt).toISOString()}
      type="article"
    >
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          {frontMatter.title}
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-2 mb-8">
          <div className="flex items-center">
            <Image
              alt="Magio Bustillos"
              height={48}
              width={48}
              src="/avatar.jpg"
              className="rounded-full"
            />
            <p className="text-sm text-gray-700 dark:text-gray-300 ml-2">
              {frontMatter.by}
              {'Magio Bustillos / '}
              {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy', { locale: es })}
            </p>
          </div>
          <p className="text-sm text-gray-500 min-w-32 mt-2 md:mt-0">
            {Math.round(frontMatter.readingTime.minutes)} min de lectura
            {` • `}
            <ViewCounter slug={frontMatter.slug} />
          </p>
        </div>
        <div className="prose dark:prose-dark max-w-none w-full text-lg">
          {children}
        </div>
        <div className="mt-8">
          <Subscribe />
        </div>
      </article>
    </Container>
  );
}
