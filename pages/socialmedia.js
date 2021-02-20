import Link from 'next/link';

import Container from '@/components/Container';
import Events from '@/components/Events';

export default function EventsList() {
    return (
        <Container title="Social Media – Magio Bustillos">
            <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
                <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
                    Te comparto mis redes sociales:
                </h1>
                <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
                    <p>
                        Recuerda que siempre puedes mandarme un &nbsp;
                        <Link href="https://twitter.com/intent/tweet?original_referer=https%3A%2F%2Fpublish.twitter.com%2F&ref_src=twsrc%5Etfw&screen_name=magiobus&tw_p=tweetbutton"><a>Tweet</a></Link> o un&nbsp;
                        <Link href="mailto:magio@magiobus.com"><a>Email ✉️</a></Link>
                    </p>
                </div>

                <p className="text-blue-600">
                    <Link href="https://www.instagram.com/magiobus/">Instagram</Link> <br/>
                    <Link href="https://www.twitter.com/magiobus/">Twitter</Link> <br />
                    <Link href="https://www.facebook.com/magiobus/">Facebook</Link> <br />
                    <Link href="https://www.twitch.tv/magiobus/">Twitch</Link><br />
                    <Link href="https://www.github.com/magiobus/">Github</Link><br />
                    <Link href="https://www.linkedin.com/in/magiobus/">LinkedIn</Link><br />
                    <Link href="https://www.last.fm/user/magio_icecreamo">LastFm</Link>
                </p>
                
                
            </div>
        </Container>
    );
}
