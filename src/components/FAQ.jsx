import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const { t } = useLanguage();

  return (
    <section id="faq" className="py-20 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16 section-animate">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t.faq.title} <span className="gradient-text">{t.faq.titleHighlight}</span>
          </h2>
        </div>

        <div className="space-y-4">
          {t.faq.items.map((faq, index) => (
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
