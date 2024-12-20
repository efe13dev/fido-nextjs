import React, { type JSX } from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Header(): JSX.Element {
  return (
    <header className='w-full bg-gradient-to-r from-gray-0 to-gray-100 text-gray-800'>
      <div className='container mx-auto px-4 py-6'>
        <div className='flex flex-col items-center justify-between gap-6 lg:flex-row'>
          <Link href='/'>
            <div className='flex items-center gap-4'>
              <Image
                src='/logo-huellas.png'
                alt='Huellas logo'
                width={60}
                height={60}
                className='drop-shadow-md'
              />
              <h1
                className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-sans tracking-wide animate-color-change'
                style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
              >
                Protectora Huellas
              </h1>
            </div>
          </Link>

          <nav className='flex flex-col items-center gap-4 lg:flex-row lg:gap-6'>
            <ul className='flex flex-wrap justify-center gap-4 lg:gap-6 text-lg'>
              <li>
                <Link
                  href='/'
                  className='link hover:text-primary underline decoration-transparent hover:decoration-current transition-all duration-300 ease-in-out'
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href='/adoptions'
                  className='link hover:text-primary underline decoration-transparent hover:decoration-current transition-all duration-300 ease-in-out'
                >
                  Adopciones
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className='link hover:text-primary underline decoration-transparent hover:decoration-current transition-all duration-300 ease-in-out'
                >
                  Contacto
                </Link>
              </li>
            </ul>
            <Link
              href='#'
              className='bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md font-semibold transition-colors duration-200 w-full text-center lg:w-auto'
              target='_blank'
              rel='noopener noreferrer'
            >
              Ayudanos
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
