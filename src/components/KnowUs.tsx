import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function KnowUs(): JSX.Element {
  return (
    <section className='flex-grow flex flex-col md:flex-row items-center justify-center px-4 py-12 rounded-xl overflow-hidden shadow-2xl mb-20'>
      <div className='md:w-1/2 space-y-6 md:pr-12'>
        <h2 className='text-3xl font-bold text-gray-800'>
          Conócenos:{' '}
          {/* <span className="text-blue-600">Protectora Fido</span> */}
        </h2>
        <p className='text-sm text-gray-500'>Desde 2022</p>
        <p className='text-gray-600 leading-relaxed text-pretty'>
          En Fido, nuestra{' '}
          <span className='font-semibold text-blue-600'>misión</span> es
          proporcionar un{' '}
          <span className='font-semibold text-blue-600'>
            hogar seguro y acogedor
          </span>{' '}
          a animales abandonados y maltratados. Hemos rescatado y dado en
          adopción a{' '}
          <span className='font-semibold text-blue-600'>
            más de 5,000 perros y gatos
          </span>
          , brindándoles una{' '}
          <span className='font-semibold text-blue-600'>
            segunda oportunidad en la vida
          </span>
          .
        </p>
        <p className='text-gray-600 leading-relaxed'>
          Nuestro{' '}
          <span className='font-semibold text-blue-600'>
            equipo de voluntarios dedicados
          </span>{' '}
          trabaja incansablemente para cuidar, rehabilitar y encontrar hogares
          permanentes para nuestros amigos peludos. Además, promovemos la{' '}
          <span className='font-semibold text-blue-600'>
            educación sobre el cuidado responsable de mascotas
          </span>{' '}
          y la importancia de la esterilización.
        </p>
        <div className='flex space-x-4'>
          <Link
            href='/adoptions'
            className='inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 hover:bg-blue-700 text-white h-10 px-4 py-2'
          >
            Adopta ahora
          </Link>
          <Link
            href='/voluntario'
            className='inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-blue-600 border border-blue-600 hover:bg-blue-50 h-10 px-4 py-2'
          >
            Ser voluntario
          </Link>
        </div>
      </div>
      <div className='md:w-1/2 relative mt-8 md:mt-0'>
        <Image
          src='/pexels-bruno.jpg'
          alt='Golden Retriever'
          width={600}
          height={400}
          className='rounded-lg shadow-xl h-full w-full object-cover'
        />
        <div className='absolute bottom-4 left-4 bg-white bg-opacity-80 px-4 py-2 rounded-full'>
          <p className='text-sm font-semibold text-gray-800'>
            Más de 5,000 animales rescatados
          </p>
        </div>
      </div>
    </section>
  );
}

export default KnowUs;
