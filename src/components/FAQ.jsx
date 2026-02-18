import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Колко струва счетоводното обслужване?',
      answer: 'Цената зависи от обема на документооборота, наличието на ДДС регистрация и броя на служителите. Свържете се с нас за безплатна индивидуална оферта.'
    },
    {
      question: 'Работите ли онлайн с клиенти от цялата страна?',
      answer: 'Да! Обслужваме клиенти от цяла България дистанционно. Документите се обменят електронно, а консултациите се провеждат по телефон, имейл или видео среща.'
    },
    {
      question: 'Какви документи са необходими за започване?',
      answer: 'За стартиране на обслужването са ни необходими: удостоверение за актуално състояние, ДДС регистрация (ако имате), достъп до банкови извлечения и пълномощно за представителство пред НАП.'
    },
    {
      question: 'Колко бързо можете да започнете обслужване?',
      answer: 'След подписване на договор и предоставяне на необходимите документи можем да започнем обслужването веднага — обикновено в рамките на 1-2 работни дни.'
    },
    {
      question: 'Помагате ли при данъчни проверки и ревизии?',
      answer: 'Да, осигуряваме пълна подкрепа и представителство пред НАП при данъчни проверки и ревизии. Подготвяме всички необходими документи и обяснения.'
    }
  ];

  return (
    <section id="faq" className="py-20 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16 section-animate">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Често задавани <span className="gradient-text">въпроси</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden section-animate"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-lg pr-4">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
