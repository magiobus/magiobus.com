import Link from 'next/link';
import Image from 'next/image';

import Container from '@/components/Container';
import JobCard from '@/components/JobCard'

export default function CvPage() {
    return (
        <Container title="CV – Magio Bustillos">
            <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
                <div className="mb-8 prose leading-6 text-lg text-gray-600 dark:text-gray-400">
                    <div className="flex justify-center">
                        <Image
                            src="/static/images/magiobus.jpg"
                            alt="Magiobus"
                            width={200}
                            height={200}
                            priority
                            className="rounded-full"
                        />
                    </div>
                    <p>
                        <strong>Hola, Soy Magio Bustillos.</strong> Soy una persona a la que le encanta resolver problemas y probar nuevas tecnologías.&nbsp;
                    </p>
                    <p>
                        Hago proyectos de media y tecnología en mi pequeño estudio llamado&nbsp;
            <Link href="http://molus.co/">
                            <a>Molus.co.</a>
                        </Link>
                         &nbsp; He tenido la fortuna de participar/mentorear/organizar un montón de eventos como meetups y hackathons por tódo México y US.
                        He conocido grandes personas gracias a estos eventos y más que nada he tenido el aprendizaje de siempre hacer comunidad y compartir con los demás.
                        &nbsp;
            <Link href="/eventslist">
                            <a>(Por acá llevo una lista de esos eventos).</a>
                        </Link>
                    </p>
                    <p>
                        He trabajado en algunos proyectos y startups en Latinoamerica.
                        Si necesitas contactarme siempre puedes mandarme un email a <Link href="mailto:magio@magiobus.com"><a>magio@magiobus.com</a></Link>
                    </p>
                </div>


                <div id="projects" >
                    <h2 className="font-bold text-3xl tracking-tight mb-4 text-black dark:text-white">
                        Experiencia
          </h2>
                    <JobCard
                        title="CEO @ Molus.co"
                        description="Estudio enfocado a proyectos tecnológicos de video/audio/streaming/código."
                        href="https://molus.co/"
                        imageUrl="/static/images/moluscologo.jpg"
                        inityear="2019"
                        endyear="presente"
                    />
                    <br />
                    <JobCard
                        title="Head of Technology @ Verne Labs"
                        description="Me encargué de los temas tecnológicos de la empresa, así cómo el desarrollo de aplicaciones e integraciones con la plataforma Zendesk.
                        Algunos de los clientes con los que trabajé fueron Volaris, Grupo Salinas y ADO. "
                        href="https://www.vernelabs.mx/"
                        imageUrl="https://pbs.twimg.com/profile_images/956529019993772032/qCrERb3t_400x400.jpg"
                        inityear="Aug 2017"
                        endyear="Nov 2018"
                    />
                    <br />
                    <JobCard
                        title="Web Developer @ LatteWare"
                        description="Me encargué del desarrollo de algunos productos internos utilizando Javascript como lenguaje FullStack. "
                        href="http://latteware.io"
                        imageUrl="https://pbs.twimg.com/profile_images/737299956139102209/BDzS23q-_400x400.jpg"
                        inityear="Oct 2016"
                        endyear="Aug 2017"
                    />
                    <br />
                    <JobCard
                        title="Cofounder @ RoninSC"
                        description="RoninSC es una empresa de facturación donde participé en el desarrollo de algunas herramientas internas y un producto llamado Factura Samurai."
                        href="https://www.facturasamurai.com/"
                        imageUrl="/static/images/facturasamurai.png"
                        inityear="Oct 2016"
                        endyear="Aug 2017"
                    />
                    <br />
                    <JobCard
                        title="Cofounder @ Pinata Softique"
                        description="Fue mi primer emprendimiento haciendo software para diferentes proyectos utilizando Ruby on Rails cómo tecnología principal. Uno de los productos donde trabajé fue atipica.co"
                        href="https://www.atipica.co/"
                        imageUrl="/static/images/pinatasoftique.png"
                        inityear="Feb 2014"
                        endyear="Feb 2016"
                    />
                    <br />
                    <JobCard
                        title="Developer Advocate @ Platzi"
                        description="Desarrollé contenido y apoyé a la comunidad de Mejorando.la, ahora Platzi. Una plataforma de aprendizaje en linea."
                        href="https://platzi.com/"
                        imageUrl="/static/images/platzi.png"
                        inityear="Jun 2014"
                        endyear="Oct 2016"
                    />
                </div>
            </div>




        </Container>
    );
}
