import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, toggleLang, t } = useLanguage();

  return (
    <nav className="fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <span className="text-3xl font-light tracking-wider text-gray-800" style={{fontFamily: 'Georgia, serif', letterSpacing: '0.1em'}}>
              Daily<span className="font-semibold">Consult</span>
            </span>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            <a href="#home" className="text-gray-700 hover:text-blue-900 transition font-medium">{t.nav.home}</a>
            <a href="#about" className="text-gray-700 hover:text-blue-900 transition font-medium">{t.nav.about}</a>
            <a href="#services" className="text-gray-700 hover:text-blue-900 transition font-medium">{t.nav.services}</a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-900 transition font-medium">{t.nav.pricing}</a>
            <a href="#faq" className="text-gray-700 hover:text-blue-900 transition font-medium">{t.nav.faq}</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-900 transition font-medium">{t.nav.contact}</a>
            <button
              onClick={toggleLang}
              className="ml-2 px-3 py-1 text-sm font-semibold border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition"
            >
              {lang === 'bg' ? 'EN' : 'BG'}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleLang}
              className="px-3 py-1 text-sm font-semibold border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition"
            >
              {lang === 'bg' ? 'EN' : 'BG'}
            </button>
            <button
              className="text-gray-700"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <a href="#home" onClick={() => setIsOpen(false)} className="block py-2 text-gray-700 hover:text-blue-900">{t.nav.home}</a>
            <a href="#about" onClick={() => setIsOpen(false)} className="block py-2 text-gray-700 hover:text-blue-900">{t.nav.about}</a>
            <a href="#services" onClick={() => setIsOpen(false)} className="block py-2 text-gray-700 hover:text-blue-900">{t.nav.services}</a>
            <a href="#pricing" onClick={() => setIsOpen(false)} className="block py-2 text-gray-700 hover:text-blue-900">{t.nav.pricing}</a>
            <a href="#faq" onClick={() => setIsOpen(false)} className="block py-2 text-gray-700 hover:text-blue-900">{t.nav.faq}</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="block py-2 text-gray-700 hover:text-blue-900">{t.nav.contact}</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
