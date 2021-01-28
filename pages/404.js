import Link from 'next/link';

import Container from '@/components/Container';

export default function NotFound() {
  return (
    <Container title="404 – Magio Bustillos">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          La página que estas buscando no existe 😱 
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          La URL que ingresaste es invalida, puede que sea un contenido que ya no existe o que te hayas equivocado al momento de escribir.
          Si piensas que hay un error, siempre puedes mandarme un 
          <Link href="https://twitter.com/intent/tweet?original_referer=https%3A%2F%2Fpublish.twitter.com%2F&ref_src=twsrc%5Etfw&screen_name=magiobus&tw_p=tweetbutton">
            <a className="text-blue-600 hover:text-blue-800"> Tweet.</a>
          </Link>
        </p>
        <Link href="/">
          <a className="p-1 sm:p-4 w-64 font-bold bg-gray-100 dark:bg-gray-900 text-center rounded-md text-black dark:text-white">
            Volver a Home
          </a>
        </Link>
      </div>
    </Container>
  );
}
