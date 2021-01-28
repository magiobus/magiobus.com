import Link from 'next/link';

import Container from '@/components/Container';
import ProjectCard from '@/components/ProjectCard'

export default function About() {
  return (
    <Container title="Acerca de – Magio Bustillos">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Música
        </h1>
        <div className="mb-8 prose leading-6 text-lg text-gray-600 dark:text-gray-400">
          <p>
            Estos son algunos proyectos musicales en los que he participado de alguna u otra manera.
          </p>
        </div>
        
       
       <div id="projects">
          <ProjectCard
            title="Exnovias"
            description="Proyecto Músical donde colaboro con diferentes artistas en cada lanzamiento."
            href="https://open.spotify.com/artist/66iTeAao7hsxEHLlB8I418?si=mbf6jUjjQEetR5Yg-mACjA"
            imageUrl="/static/images/exnoviaslogo.jpg"

          />        
       </div>
       
      </div>
    </Container>
  );
}
