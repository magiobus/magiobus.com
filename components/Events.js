import { useState } from 'react';

const Divider = () => {
  return (
    <div className="border border-gray-200 dark:border-gray-600 w-full my-8" />
  );
};

const Year = ({ children }) => {
  return (
    <h3 className="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
      {children}
    </h3>
  );
};

const Event = ({ title, place, type, children }) => {
  return (
    <li className="mb-4 ml-2">
      <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
        {type === 'talk' && (<p>🎤 &nbsp;</p>)}

        {type === 'participant' && (<p>💻 &nbsp;</p>)}

        {type === 'attended' && (<p>🙂  &nbsp;</p>)}

        {type === 'mentor' && (<p>🤓 &nbsp;</p>)}

        {type === 'organizer' && ( <p>🤓 &nbsp;</p> )}

        {type === 'organizer/mentor' && (<p>🤓 &nbsp;</p>)}

        {type === 'workshop' && (<p>🔧  &nbsp;</p>)}

        {type === 'musicperformance' && (<p>🎹  &nbsp;</p>)}


        

        <p className="font-medium text-gray-900 dark:text-gray-100">{title} - {place} ({type}) </p>
      </div>
      <p className="text-gray-700 dark:text-gray-400 ml-6">{children}</p>
    </li>
  );
};

export default function Events() {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  return (
    <>
      <Year>2021</Year>
      <ul>
      </ul>
      <Divider />
      <Year>2020</Year>
      <ul>
        <Event title="Iweek CUU Hackathon" place="Online" type="organizer/mentor"></Event>
        <Event title="BackToCouch VideoGames Conf" place="Chihuahua MX" type="attended"></Event>
        <Event title="Escuela Microscopia CIMAV" place="Chihuahua MX" type="attended">I helped organize an online microscopy event.</Event>
      </ul>
      <Divider />
      <Year>2019</Year>
      <ul>
        <Event title="Casas Grandes University" place="Casas Grandes MX" type="talk"></Event>
        <Event title="Encuentro Juventudes Ichijuv" place="Chihuahua MX" type="talk">I gave a couple of talks around the state of Chihuahua</Event>
        <Event title="Border Tech" place="Juarez MX" type="talk">I put a stand with The New Game Order about streaming videogames.</Event>
        <Event title="Indies MX" place="Juarez MX" type="talk">I gave a talk with The New Game Order about videogames industry.</Event>
        <Event title="Tapalpa Magik" place="Tapalpa MX" type="attended">Magic Event Convention in Tapalpa Jalisco.</Event>
        <Event title="NAMM" place="Los Angeles, CA" type="attended">Music Convention</Event>
      </ul>
      <Divider />
      <Year>2018</Year>
      <ul>
        <Event title="Maker Faire Leon" place="Leon, MX" type="attended"></Event>
        <Event title="Toque Magico Conf" place="Teotihuacan, MX" type="attended">Magic Convention</Event>
        <Event title="Tapalpa Magik" place="Tapalpa MX" type="attended">Magic Convention</Event>
        <Event title="Enigma Conf" place="Monterrey MX" type="attended">Magic Convention</Event>
        <Event title="Yei yei Conf" place="Mexico City" type="attended">Magic Convention</Event>
        <Event title="Ableton Loop" place="Los Angeles, CA" type="attended">Music Convention</Event>
        <Event title="StartupBus NorthAmerica" place="New Orleans, LA" type="participant"></Event>
      </ul>
      <Divider />
      <Year>2017</Year>
      <ul>
        <Event title="Developer Week Hackathon" place="San Francisco, CA" type="participant">3st Place on Sony N Challenge 🙌 </Event>
        <Event title="Hackathour Veracruz" place="Veracruz MX" type="mentor"></Event>
        <Event title="Campus Party Mexico 8" place="Zapopan MX" type="talk"></Event>
        <Event title="Inventors House Day" place="Aguascalientes MX" type="workshop">Chatfuel Platform Talk</Event>
        <Event title="Hackathon Zacatecas" place="Zacatecas MX" type="mentor"></Event>
        <Event title="Recime.io Bots/AI Hackathon" place="Guadalajara MX" type="participant">1st Place 🙌 </Event>
        <Event title="Seguros Hackathon" place="Mexico City" type="participant"></Event>
        <Event title="Ethos Corrupción Hackathon" place="Mexico City" type="participant"></Event>
        <Event title="Startup Weekend Tulancingo" place="Hidalgo MX" type="mentor"></Event>
        <Event title="Startup Weekend FinnTech" place="Mexico City" type="organizer/mentor"></Event>
        <Event title="Startup Weekend AI" place="Mexico City" type="organizer"></Event>
        <Event title="Startup Weekend CDMX" place="Mexico City" type="mentor"></Event>
        <Event title="Startup Weekend Mega Centro 2" place="Zacatecas" type="participant"></Event>
      </ul>
      <Divider />
      <Year>2016</Year>
      <ul>
        <Event title="Campus Party Mexico 7" place="Zapopan MX" type="workshop">I gave a workshop about Arduino + Midi</Event>
        <Event title="Electronic Game Show" place="Mexico City" type="attended"></Event>
        <Event title="Centro Fox Hackathon" place="Leon MX" type="participant"></Event>
        <Event title="StartupBus NorthAmerica" place="Boulder CO, US" type="participant">3rd Place 🙌 </Event>
        <Event title="Global Game Jam Mexico" place="Mexico City" type="participant">1st Place 🙌 </Event>
        <Event title="Nuevo Ingenio Mexicano Hackathon" place="Mexico City" type="participant">1st Place 🙌 </Event>
        <Event title="BBVA Hackathon" place="Mexico City" type="participant">2nd Place 🙌 + Cisco Challenge 🙌</Event>
        <Event title="Hacking Health Hackathon" place="Mexico City" type="participant">1st Place 🙌</Event>
        <Event title="Startup Weekend FinnTech" place="Mexico City" type="participant"></Event>
        <Event title="Startup Weekend Smart Cities" place="Toluca MX" type="organizer"></Event>
        <Event title="Startup Weekend Education CUU" place="Chihuahua MX" type="mentor"></Event>
        <Event title="Ciso Live" place="Cancún MX" type="talk">I show a hackathon project in the event</Event>
        <Event title="Plop Radio Festival" place="Mexico City" type="musicperformance">Played with ExNovias</Event>
        <Event title="Platzi Conf MX" place="Mexico City" type="attended"></Event>

      </ul>
      <Divider />
      <Year>2015</Year>
      <ul>
        <Event title="HackCUU Hackathon by MLH" place="Chihuahua MX" type="organizer"></Event>
        <Event title="Startup Weekend Education CUU" place="Chihuahua MX" type="mentor"></Event>
      </ul>
      <Divider />
      <Year>2014</Year>
      <ul>
        <Event title="Mejorando.la Conferencia MX" place="Mexico City" type="talk"></Event>
        <Event title="Campus Party MX 5" place="Zapopan MX" type="talk">Demystifying Google Glass</Event>
        <Event title="Ericsson Networked Society Day" place="Mexico City" type="talk"></Event>
        <Event title="Startup Weekend CUU" place="Chihuahua MX" type="organizer"></Event>
        <Event title="UACH University" place="Chihuahua MX" type="talk"></Event>
        <Event title="LearningMex IIR Conference Day" place="Mexico City" type="talk"></Event>
        <Event title="ISAD University" place="Chihuahua MX" type="talk"></Event>
      </ul>
      <Divider />
      <Year>2013</Year>
      <ul>
        <Event title="Startup Weekend CUU" place="Chihuahua MX" type="participant">My first Startup Weekend</Event>
      </ul>

    </>
  );
}
