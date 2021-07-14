import Container from '@/components/Container';
import Link from 'next/link';
import Image from 'next/image';

import { useState } from 'react';

const realAlphabet = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

const caesarAlphabet = [
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g'
];

//  a function that receives a string, decrypts using caesar cypher and returns the decrypted string
const decryptCaesar = (string) => {
  let decryptedString = '';
  for (let i = 0; i < string.length; i++) {
    //iterating string
    let letter = string[i];
    //finds letter in alphabet array and takes the value of the same index of the previous array
    if (letter != ' ') {
      //finding letter in real alphabet array
      let matchedCharIndex = caesarAlphabet.findIndex(
        (char) => char === letter
      );
      decryptedString += realAlphabet[matchedCharIndex];
    } else {
      decryptedString += ' ';
      //then adds the letter to decrypted string
    }
  }
  return decryptedString;
};

const MachinaCypherPage = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleDecryption = () => {
    setResult('');
    let _result = `${input} => ${decryptCaesar(input)}`;
    setInput('');
    setResult(_result);
  };

  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h2 className="prose text-lg text-gray-600 font-bold dark:text-gray-400 mb-4">
          Machina Caesar Cypher
        </h2>
        <p className="prose text-lg text-gray-600 dark:text-gray-400 mb-4">
          Este es un desencryptador de mensajes utilizando el algoritmo Caesar
          Cypher. Lo hice con la finalidad de desencriptar los códigos de las
          playeras de
          <Link href="/machina.cc">
            <a> Machina.cc</a>
          </Link>{' '}
        </p>

        <p className="prose text-lg text-gray-600 dark:text-gray-400 mb-4">
          Solo se necesita escribir la palabra con o sin espacios para obtener
          un resultado.
        </p>

        <div className="formcontainer my-8 flex  items-center justify-center ">
          <textarea
            className="border border-black rounded text-2xl text-black px-2"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="bg-black color-white p-2 rounded mx-4"
            onClick={(e) => handleDecryption(e)}
          >
            Desencriptar
          </button>
        </div>

        {result && <p className="text-black mb-8 ">Resultado: {result}</p>}

        <p className="prose text-lg text-gray-600 dark:text-gray-400 mb-4">
          Estas son las frases de las playeras con su respectiva traducción:
        </p>

        <ul className="flex flex-col space-y-2">
          <li className="text-black ">
            - tf ltwlyvy spmlsvun jvuayvs => my emperor lifelong control{' '}
          </li>
          <li className="text-black ">
            - dlyl nvpun av ahrl kvdu fvby mhzjpza tvkls vm zbyclpsshujl =>
            we're going to take down your fascist model of surveillance{' '}
          </li>
          <li className="text-black ">
            h thjopul aoha zbywhzzlz pualsspnlujl => a machine that surpasses
            intelligence{' '}
          </li>
          <li className="text-black ">thjopuh => machina </li>
          <li className="text-black ">hold your ground => ahew rhnk zkhngw </li>
        </ul>

        <p className="prose text-lg text-gray-600 dark:text-gray-400 mb-16 mt-8">
          {' '}
          Si necesitas contactarme, siempre me puedes mandar un&nbsp;
          <Link href="https://twitter.com/intent/tweet?original_referer=https%3A%2F%2Fpublish.twitter.com%2F&ref_src=twsrc%5Etfw&screen_name=magiobus&tw_p=tweetbutton">
            <a>Tweet</a>
          </Link>{' '}
          o un&nbsp;
          <Link href="mailto:magio@magiobus.com">
            <a>Email ✉️</a>
          </Link>
        </p>
      </div>
    </Container>
  );
};

export default MachinaCypherPage;
