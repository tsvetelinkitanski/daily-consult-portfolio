import { createContext, useContext, useState } from 'react';
import translations from './translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('lang') || 'bg';
  });

  const toggleLang = () => {
    const newLang = lang === 'bg' ? 'en' : 'bg';
    setLang(newLang);
    localStorage.setItem('lang', newLang);
    document.documentElement.lang = newLang;
  };

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
