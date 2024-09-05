'use client';

import Image from 'next/image';
import NavLink from './NavLink';
import { useState } from 'react';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

    return (
      <>
<nav className="bg-white">
  <div className="max-w-screen-xl lg:rounded-lg lg:mt-2 flex bg-twOfficial items-center justify-between md:justify-evenly mx-auto p-4">
  
    <nav className="hidden md:flex ">
      <NavLink href="/" aria-current="page">Home</NavLink>
    </nav>

    <div className="flex justify-center items-center ">
            <Image
              src="/imagens/pfpImagens/jypejapanpfp.png"
              alt="Logo da Banda"
              width={100}
              height={50}
              className="rounded-full"
            />
    </div>

    <nav className="hidden md:flex ">
      <NavLink href="/galeria">Sobre</NavLink>
    </nav>    

    <button onClick={toggleMenu} type="button" className="inline-flex items-center p-2 w-10 h-10  text-sm text-white rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" >
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    
    </div>  
</nav>
    {isOpen && (
          <div className="top-full left-0 right-0 bg-twOfficial text-white md:hidden">
            <div className="flex flex-col space-y-4 p-4">
              <NavLink href="/">Home</NavLink>
              <NavLink href="#">Sobre</NavLink>
            </div>
          </div>
        )}

    </>
    );
}

export default Navbar;
