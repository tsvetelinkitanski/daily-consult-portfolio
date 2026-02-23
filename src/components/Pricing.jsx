import { useLanguage } from '../i18n/LanguageContext';

const Pricing = () => {
  const { t } = useLanguage();

  const highlightedFlags = [false, true];

  return (
    <section id="pricing" className="py-20 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 section-animate">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t.pricing.title} <span className="gradient-text">{t.pricing.titleHighlight}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.pricing.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {t.pricing.packages.map((pkg, index) => {
            const highlighted = highlightedFlags[index];
            return (
              <div
                key={index}
                className={`rounded-2xl p-8 shadow-lg section-animate ${
                  highlighted
                    ? 'bg-gradient text-white ring-4 ring-blue-200 scale-105'
                    : 'bg-white'
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <h3 className={`text-2xl font-bold mb-2 ${highlighted ? 'text-white' : ''}`}>
                  {pkg.name}
                </h3>
                <p className={`mb-6 ${highlighted ? 'text-blue-100' : 'text-gray-500'}`}>
                  {pkg.subtitle}
                </p>
                <div className="mb-8">
                  <span className={`text-lg font-semibold ${highlighted ? 'text-blue-100' : 'text-gray-600'}`}>
                    {t.pricing.priceLabel} {pkg.price}
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg className={`w-5 h-5 mr-3 flex-shrink-0 ${highlighted ? 'text-green-300' : 'text-green-500'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className={highlighted ? 'text-white' : 'text-gray-700'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`block text-center py-3 px-6 rounded-full font-semibold transition transform hover:-translate-y-1 ${
                    highlighted
                      ? 'bg-white text-blue-900 hover:bg-gray-100'
                      : 'bg-gradient text-white hover:shadow-lg'
                  }`}
                >
                  {t.pricing.cta}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
