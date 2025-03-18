import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 font-bold text-2xl">
            HORMIBLOCK
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#inicio" className="hover:bg-blue-700 px-3 py-2 rounded-md">Inicio</a>
              <a href="#productos" className="hover:bg-blue-700 px-3 py-2 rounded-md">Productos</a>
              <a href="#nosotros" className="hover:bg-blue-700 px-3 py-2 rounded-md">Nosotros</a>
              <a href="#contacto" className="hover:bg-blue-700 px-3 py-2 rounded-md">Contacto</a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-blue-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#inicio" className="block hover:bg-blue-700 px-3 py-2 rounded-md">Inicio</a>
            <a href="#productos" className="block hover:bg-blue-700 px-3 py-2 rounded-md">Productos</a>
            <a href="#nosotros" className="block hover:bg-blue-700 px-3 py-2 rounded-md">Nosotros</a>
            <a href="#contacto" className="block hover:bg-blue-700 px-3 py-2 rounded-md">Contacto</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;