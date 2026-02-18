const About = () => {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
        </svg>
      ),
      title: 'Богат опит',
      description: 'Над 20 години практика в счетоводната индустрия'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
        </svg>
      ),
      title: 'Индивидуален подход',
      description: 'Персонализирани решения за всеки клиент'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      title: 'Навременност',
      description: 'Спазване на всички срокове и законови изисквания'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
        </svg>
      ),
      title: 'Сигурност',
      description: 'Конфиденциалност и защита на вашите данни'
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="section-animate">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Защо да изберете <span className="gradient-text">нас</span>?
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              DailyConsult е утвърдена счетоводна къща с над 20 години успешен опит в сферата. Нашият екип от професионалисти предлага персонализирани решения, адаптирани към спецификата на всеки бизнес.
            </p>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="section-animate">
            <div className="bg-gradient-soft rounded-3xl p-8 shadow-xl">
              <div className="bg-white rounded-2xl p-8 mb-6">
                <h4 className="text-2xl font-bold mb-4 gradient-text">Нашата мисия</h4>
                <p className="text-gray-600 leading-relaxed">
                  Да предоставяме висококачествени счетоводни услуги, които помагат на бизнеса да расте и процъфтява, като същевременно осигуряваме пълно спокойствие на нашите клиенти относно финансовото им управление.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8">
                <h4 className="text-2xl font-bold mb-4 gradient-text">Нашата визия</h4>
                <p className="text-gray-600 leading-relaxed">
                  Да бъдем водещата счетоводна къща в региона, признати за професионализъм, иновации и отлично клиентско обслужване.
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
