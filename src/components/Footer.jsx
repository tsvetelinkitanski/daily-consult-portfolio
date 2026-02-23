const Footer = ({ openPrivacyModal }) => {
  const resetCookies = () => {
    window.dispatchEvent(new Event('resetCookieConsent'));
  };

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <span className="text-2xl font-light tracking-wider text-gray-300" style={{fontFamily: 'Georgia, serif', letterSpacing: '0.1em'}}>
                Daily<span className="font-semibold">Consult</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-3">Вашият надежден партньор в счетоводството и финансовото управление.</p>
            <div className="text-gray-500 text-xs space-y-1">
              <p>ЕИК: [ще бъде допълнен]</p>
              <p>гр. София</p>
              <p>Тел: 0878 170 726</p>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Бързи връзки</h4>
            <ul className="space-y-2 text-gray-400">
              {[
                { label: 'Начало', href: '#home' },
                { label: 'За нас', href: '#about' },
                { label: 'Услуги', href: '#services' },
                { label: 'Пакети', href: '#pricing' },
                { label: 'Въпроси', href: '#faq' },
                { label: 'Контакти', href: '#contact' }
              ].map((item, i) => (
                <li key={i}><a href={item.href} className="hover:text-blue-400 transition">{item.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Услуги</h4>
            <ul className="space-y-2 text-gray-400">
              {['Счетоводство', 'ТРЗ обслужване', 'Данъчни консултации', 'Регистрации'].map((item, i) => (
                <li key={i}><a href="#services" className="hover:text-blue-400 transition">{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Последвайте ни</h4>
            <div className="flex space-x-4">
              {[
                <path key="fb" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>,
                <path key="tt" d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>,
                <path key="li" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              ].map((path, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-900 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">{path}</svg>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} DailyConsult. Всички права запазени.</p>
          <div className="mt-2 space-x-4 flex flex-wrap justify-center gap-y-1">
            <button onClick={() => openPrivacyModal('terms')} className="hover:text-blue-400 transition">Общи условия</button>
            <span>•</span>
            <button onClick={() => openPrivacyModal('privacy')} className="hover:text-blue-400 transition">Политика за поверителност</button>
            <span>•</span>
            <button onClick={() => openPrivacyModal('gdpr')} className="hover:text-blue-400 transition">GDPR</button>
            <span>•</span>
            <button onClick={() => openPrivacyModal('cookies')} className="hover:text-blue-400 transition">Бисквитки</button>
            <span>•</span>
            <button onClick={resetCookies} className="hover:text-blue-400 transition">Настройки за бисквитки</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
