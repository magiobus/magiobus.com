import Link from 'next/link';

import Container from '@/components/Container';
import ProjectCard from '@/components/ProjectCard'

const Talk = ({ title, link, children }) => (
  <>
    <h3 className="font-medium mb-2 text-lg">
      <a
        className="flex items-center text-gray-900 dark:text-gray-100"
        target="_blank"
        rel="noopener noreferrer"
        href={link}
      >
        {title}
        <div>
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
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </div>
      </a>
    </h3>
    <p className="text-gray-600 dark:text-gray-400 mb-8">{children}</p>
  </>
);

export default function About() {
  return (
    <Container title="Acerca de – Magio Bustillos">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Acerca de Mí
        </h1>
        <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
          <p>
            Hola, Soy Magio Bustillos. Soy un desarrollador al que le encanta resolver problemas y probar nuevas tecnologías.&nbsp;
          </p>
          <p>
            Hago proyectos de media y tecnología en mi pequeño estudio llamado&nbsp;
            <Link href="http://molus.co/">
              <a>Molus.co</a>
            </Link>
            &nbsp; También administro una comunidad llamada&nbsp;
            <Link href="http://tngo.vg/">
              <a>The New Game Order</a>
            </Link>
            &nbsp;dónde charlo regularmente con algunos amigos acerca de la industria de videojuegos.
          </p>
          <p>
            Crecí en una ciudad pequeña cercana a la frontera con Estados Unidos llamada Chihuahua México,
            ahí estudié la universidad y me gradué de ingeniería en sistemas computacionales. 
            Desde entonces siempre he estado envuelto en temás de tecnología y emprendimiento.
          </p>

          <p>
            He tenido la fortuna de participar/mentorear/organizar un montón de eventos como meetups y hackathons por tódo México y US.
            He conocido grandes personas gracias a estos eventos y más que nada he tenido el aprendizaje de siempre hacer comunidad y compartir con los demás.
            &nbsp;
            <Link href="/eventslist">
              <a>(Por acá llevo un tracking de esos eventos).</a>
            </Link>
          </p>

          <p>
            Mi tiempo libre lo paso jugando videojuegos, haciendo música y aprendiendo siempre algo nuevo.
          </p>
        </div>
        
       
       <div id="projects">
          <h2 className="font-bold text-3xl tracking-tight mb-4 text-black dark:text-white">
            Proyectos
          </h2>
          <ProjectCard
            title="Molus.co"
            description="Pequeño estudio enfocado principalmente en proyectos de video/audio/streaming."
            href="https://molus.co/"
            imageUrl="/static/images/moluscologo.jpg"
          />
          <br/>
          <ProjectCard
            title="The New Game Order"
            description="Comunidad de Videojuegos y cultura geek con diversos contenidos entre ellos un liveshow semanal."
            href="https://tngo.vg/"
            imageUrl="/static/images/tngologo.jpg"

          />
          <br/>
          <ProjectCard
            title="TrabajosChihuahua.com"
            description="Lista de vacantes con actualización diaria para trabajos en el estado de Chihuahua México."
            href="https://trabajoschihuahua.com/"
            imageUrl="/static/images/trabajoschihuahualogo.png"
          />
       </div>
       
      </div>
    </Container>
  );
}
