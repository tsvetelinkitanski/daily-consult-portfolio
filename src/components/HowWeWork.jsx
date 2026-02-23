import { useLanguage } from '../i18n/LanguageContext';

const HowWeWork = () => {
  const { t } = useLanguage();

  const stepNumbers = ['01', '02', '03', '04'];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 section-animate">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t.howWeWork.title} <span className="gradient-text">{t.howWeWork.titleHighlight}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.howWeWork.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {t.howWeWork.steps.map((step, index) => (
            <div key={index} className="text-center section-animate" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="w-20 h-20 bg-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">{stepNumbers[index]}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              {index < t.howWeWork.steps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
