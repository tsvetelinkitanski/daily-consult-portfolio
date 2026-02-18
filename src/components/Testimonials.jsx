const Testimonials = () => {
  const testimonials = [
    {
      name: 'Георги Колев',
      company: 'Управител, ТехноТрейд ООД',
      text: 'Работим с DailyConsult от 2 години. Коректност и бърза реакция при всякакви въпроси. Препоръчвам ги!'
    },
    {
      name: 'Антоанета Тодорова',
      company: 'Собственик, Естетик БГ',
      text: 'Компетентни специалисти, които разбират нуждите на малкия бизнес. Персоналният подход прави разликата.'
    },
    {
      name: 'Стефан Василев',
      company: 'Директор, ПроБилд ЕООД',
      text: 'Отлично съотношение цена-качество. Винаги са на разположение за консултация и съвет. Благодаря за професионализма!'
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 section-animate">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Какво казват <span className="gradient-text">клиентите</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg card-hover section-animate" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient rounded-full flex items-center justify-center text-white font-bold mr-3">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
