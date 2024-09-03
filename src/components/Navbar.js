import Image from 'next/image';
import NavLink from './NavLink';

export default function Navbar() {
    return (
<nav class="bg-white">
  <div class="max-w-screen-xl lg:rounded-lg lg:mt-2 flex bg-twOfficial items-center justify-evenly mx-auto p-4">
  
    <nav className="hidden md:flex ">
      <NavLink href="/" aria-current="page">Home</NavLink>
    </nav>

    <div className="flex justify-center items-center">
            <Image
              src="/imagens/pfpImagens/jypejapanpfp.png" // Substitua pelo caminho correto da logo da banda
              alt="Logo da Banda"
              width={100}
              height={50}
              className="rounded-full"
            />
    </div>

    <nav className="hidden md:flex ">
      <NavLink href="/galeria">Galeria</NavLink>
    </nav>    

    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    
    
  </div>
</nav>
    );
}
