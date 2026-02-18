const Pricing = () => {
  const packages = [
    {
      name: 'Старт',
      subtitle: 'Подходящ за ЕООД без ДДС',
      price: 'по договаряне',
      features: [
        'До 20 документа месечно',
        'Годишно приключване',
        'Годишна данъчна декларация',
        'Консултации по телефон и имейл'
      ],
      highlighted: false
    },
    {
      name: 'Бизнес',
      subtitle: 'Подходящ за фирми с ДДС',
      price: 'по договаряне',
      features: [
        'Пълно счетоводно обслужване',
        'ДДС декларации',
        'Месечни справки и отчети',
        'ТРЗ обслужване',
        'Представителство пред НАП'
      ],
      highlighted: true
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 section-animate">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ориентировъчни <span className="gradient-text">пакети</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Прозрачни цени без скрити такси. Свържете се с нас за индивидуална оферта.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 shadow-lg section-animate ${
                pkg.highlighted
                  ? 'bg-gradient text-white ring-4 ring-blue-200 scale-105'
                  : 'bg-white'
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <h3 className={`text-2xl font-bold mb-2 ${pkg.highlighted ? 'text-white' : ''}`}>
                {pkg.name}
              </h3>
              <p className={`mb-6 ${pkg.highlighted ? 'text-blue-100' : 'text-gray-500'}`}>
                {pkg.subtitle}
              </p>
              <div className="mb-8">
                <span className={`text-lg font-semibold ${pkg.highlighted ? 'text-blue-100' : 'text-gray-600'}`}>
                  Цена: {pkg.price}
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <svg className={`w-5 h-5 mr-3 flex-shrink-0 ${pkg.highlighted ? 'text-green-300' : 'text-green-500'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className={pkg.highlighted ? 'text-white' : 'text-gray-700'}>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block text-center py-3 px-6 rounded-full font-semibold transition transform hover:-translate-y-1 ${
                  pkg.highlighted
                    ? 'bg-white text-blue-900 hover:bg-gray-100'
                    : 'bg-gradient text-white hover:shadow-lg'
                }`}
              >
                Поискайте оферта
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
