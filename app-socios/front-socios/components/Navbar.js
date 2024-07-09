// components/Navbar.js
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span
              onClick={() => router.push('/')}
              className="text-2xl font-bold text-gray-800 cursor-pointer"
            >
              GestionSocios
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <span
              onClick={() => router.push('/gestion-socios')}
              className="text-gray-800 hover:text-gray-600 cursor-pointer"
            >
              Gestión socios
            </span>
            <span
              onClick={() => router.push('/contactanos')}
              className="text-gray-800 hover:text-gray-600 cursor-pointer"
            >
              Contáctanos
            </span>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <span
              onClick={() => {
                router.push('/gestion-socios');
                setIsOpen(false);
              }}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-gray-600 cursor-pointer"
            >
              Gestión socios
            </span>
            <span
              onClick={() => {
                router.push('/contactanos');
                setIsOpen(false);
              }}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-gray-600 cursor-pointer"
            >
              Contáctanos
            </span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
