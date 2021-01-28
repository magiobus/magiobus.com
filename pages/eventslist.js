import Link from 'next/link';

import Container from '@/components/Container';
import Events from '@/components/Events';

export default function EventsList() {
    return (
        <Container title="Lista de Eventos – Magio Bustillos">
            <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
                <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
                    Lista de Eventos
                </h1>
                <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
                    <p>
                        Estos son algunos de los eventos a los que he asistido, ya sea como participante, mentor, organizador o dando alguna charla 🎤
                    </p>
                </div>

                <Events/>

            </div>
        </Container>
    );
}
