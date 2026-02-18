import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <span className="text-3xl font-light tracking-wider text-gray-800" style={{fontFamily: 'Georgia, serif', letterSpacing: '0.1em'}}>
              DAILY<span className="font-semibold">CONSULT</span>
            </span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-900 transition font-medium">Начало</a>
            <a href="#services" className="text-gray-700 hover:text-blue-900 transition font-medium">Услуги</a>
            <a href="#about" className="text-gray-700 hover:text-blue-900 transition font-medium">За нас</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-900 transition font-medium">Контакти</a>
          </div>
          
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
        
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <a href="#home" className="block py-2 text-gray-700 hover:text-blue-900">Начало</a>
            <a href="#services" className="block py-2 text-gray-700 hover:text-blue-900">Услуги</a>
            <a href="#about" className="block py-2 text-gray-700 hover:text-blue-900">За нас</a>
            <a href="#contact" className="block py-2 text-gray-700 hover:text-blue-900">Контакти</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
