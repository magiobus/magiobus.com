import Link from 'next/link';

import Container from '@/components/Container';
import ProjectCard from '@/components/ProjectCard'
import MusicItem from '@/components/MusicItem';

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
          <p> Si te interesa que trabaje en tu proyecto musical, siempre me puedes mandar demos o maquetas a mi&nbsp;
          <Link href="mailto:magio@magiobus.com"><a>Email ✉️</a></Link>
          </p>
        </div>


        <div className="flex flex-row flex-wrap justify-around w-full ">
          <MusicItem
            title="El Quinto Lopez - Guarida"
            year="2020"
            credit="Production, Mixing, Mastering"
            href="https://open.spotify.com/album/7LQHMO7ESymhjLrH1QTv4z?si=C__kJP2CRnalt5XT9IPReA"
            imageUrl="/static/images/musiccovers/guarida.jpeg"
          />

          <MusicItem
            title="Magiobus - Natsu Days"
            year="2020"
            credit="Production, Mixing, Mastering"
            href="https://magiobus.bandcamp.com/album/natsu-days"
            imageUrl="/static/images/musiccovers/natsudays.jpg"
          />

          <MusicItem
            title="Exnovias - Juaritoz"
            year="2020"
            credit="Composer, Production, Mixing, Mastering"
            href="https://exnovias.bandcamp.com/album/juaritoz"
            imageUrl="/static/images/musiccovers/exnoviasjuaritoz.jpg"
          />

          <MusicItem
            title="Kevin Kaarl - San Lucas"
            year="2019"
            credit="Mixing, Mastering"
            href="https://open.spotify.com/album/5I20nnpF2Jj6GjUFsk9EG1?si=j-4B7AgfREWBHa8Lqzn12g"
            imageUrl="/static/images/musiccovers/sanlucas.jpg"
          />

          <MusicItem
            title="Sous Sol - Agua con Chia"
            year="2019"
            credit="Recording, Production, Mixing, Mastering"
            href="https://open.spotify.com/track/3QIQtCPni57ZcSPzz7JDxt?si=uFFc4ERLRjCU9y-FSEdUwg"
            imageUrl="/static/images/musiccovers/aguaconchia.jpg"
          />

          <MusicItem
            title="Sous Sol - Distráete"
            year="2019"
            credit="Recording, Production, Mixing, Mastering"
            href="https://open.spotify.com/track/2MSqVy6wb8k7jkMUeKBtZZ?si=NunZmwBJS2yssZEbDp0lnA"
            imageUrl="/static/images/musiccovers/miberrinche.jpg"
          />

          <MusicItem
            title="Sofia Trenti - La Atracción"
            year="2019"
            credit="Recording, Production"
            href="https://open.spotify.com/track/1XOUkwShJQvEnYdXY1fC1M?si=nct9pWzaRjGMhP2MhqrmVg"
            imageUrl="/static/images/musiccovers/laatraccion.jpg"
          />

          <MusicItem
            title="Sr. Trigger - Temporal"
            year="2018"
            credit="Recording, Production, Mixing, Mastering"
            href="https://open.spotify.com/album/4Ydyw3Sk10xn017DtWbMmo?si=WnMkNcakSgqwfkN-koYy-w"
            imageUrl="/static/images/musiccovers/temporal.jpg"
          />

          <MusicItem
            title="Magiobus - JG'S Mis exitos de Nintendo"
            year="2018"
            credit="Composer, Recording, Production, Mixing, Mastering"
            href="https://magiobus.bandcamp.com/album/jgs-mis-exitos-de-nintendo"
            imageUrl="/static/images/musiccovers/juanga.jpg"
          />

          <MusicItem
            title="Edna & the musicians - Sobre Ti"
            year="2018"
            credit="Synths Production"
            href="https://ednandthemusicians.bandcamp.com/track/sobre-ti"
            imageUrl="/static/images/musiccovers/edna.jpg"
          />

          <MusicItem
            title="Exnovias"
            year="2016"
            credit="Composer, Recording, Production, Mixing, Mastering"
            href="https://exnovias.bandcamp.com/album/exnovias"
            imageUrl="/static/images/musiccovers/exnoviascover.jpeg"
          />

          <MusicItem
            title="Magiobus - Chiptune Life"
            year="2015"
            credit="Composer, Recording, Production, Mixing, Mastering"
            href="https://magiobus.bandcamp.com/album/chiptune-life"
            imageUrl="/static/images/musiccovers/chiptunelife.jpg"
          />


        </div>

      </div>
    </Container>
  );
}
