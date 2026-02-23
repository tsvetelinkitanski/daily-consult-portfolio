import { useLanguage } from '../i18n/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="section-animate">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t.about.title} <span className="gradient-text">{t.about.titleHighlight}</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {t.about.description}
            </p>
            <div className="space-y-4">
              {t.about.reasons.map((reason, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <p className="text-lg text-gray-700 font-medium">{reason}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="section-animate">
            <div className="bg-gradient-soft rounded-3xl p-8 shadow-xl">
              <div className="bg-white rounded-2xl p-8 mb-6">
                <h4 className="text-2xl font-bold mb-4 gradient-text">{t.about.missionTitle}</h4>
                <p className="text-gray-600 leading-relaxed">
                  {t.about.missionText}
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8">
                <h4 className="text-2xl font-bold mb-4 gradient-text">{t.about.onlineTitle}</h4>
                <p className="text-gray-600 leading-relaxed">
                  {t.about.onlineText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
