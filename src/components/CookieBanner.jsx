import { useState, useEffect } from 'react';

const CookieBanner = ({ onOpenPrivacy }) => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }

    // Listen for cookie settings reset
    const handleReset = () => {
      localStorage.removeItem('cookieConsent');
      localStorage.removeItem('cookieConsentDate');
      setShowBanner(true);
    };
    window.addEventListener('resetCookieConsent', handleReset);
    return () => window.removeEventListener('resetCookieConsent', handleReset);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-6 shadow-2xl z-50 animate-slide-up">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <h3 className="font-bold text-lg mb-2">Бисквитки и поверителност</h3>
          <p className="text-sm text-gray-300">
            Този уебсайт използва строго необходими бисквитки за нормалното функциониране на сайта.
            Не използваме маркетингови или аналитични бисквитки без вашето съгласие.
            Вашите лични данни се обработват в съответствие с GDPR и ЗЗЛД.{' '}
            <button
              onClick={() => onOpenPrivacy('cookies')}
              className="underline hover:text-blue-400"
            >
              Политика за бисквитки
            </button>
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={declineCookies}
            className="px-6 py-2 border border-gray-400 text-gray-300 rounded-lg hover:bg-gray-800 transition"
          >
            Само необходими
          </button>
          <button
            onClick={acceptCookies}
            className="px-6 py-2 bg-gradient text-white rounded-lg hover:shadow-lg transition transform hover:-translate-y-1"
          >
            Приемам всички
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
