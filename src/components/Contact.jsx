import { useState, useRef } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const honeypotRef = useRef(null);
  const lastSubmitTime = useRef(0);

  const validateEmail = (email) => {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  };

  const validatePhone = (phone) => {
    const cleaned = phone.replace(/[\s\-()]/g, '');
    return /^(\+?359|0)\d{9}$/.test(cleaned);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Моля, въведете валидно име (минимум 2 символа)';
    }
    if (!validateEmail(formData.email)) {
      newErrors.email = 'Моля, въведете валиден имейл адрес';
    }
    if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Моля, въведете валиден телефонен номер (напр. 0888123456 или +359888123456)';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Съобщението трябва да е поне 10 символа';
    }
    if (!consent) {
      newErrors.consent = 'Трябва да се съгласите с обработката на личните данни';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot check — ботове попълват скрити полета
    if (honeypotRef.current && honeypotRef.current.value) {
      setStatus({ type: 'success', message: 'Благодарим за запитването! Ще се свържем с Вас скоро.' });
      return;
    }

    // Rate limiting — не позволявай повече от 1 заявка на 30 секунди
    const now = Date.now();
    if (now - lastSubmitTime.current < 30000) {
      setStatus({ type: 'error', message: 'Моля, изчакайте малко преди да изпратите ново запитване.' });
      return;
    }

    if (!validate()) return;

    setIsSubmitting(true);
    setStatus({ type: '', message: '' });
    lastSubmitTime.current = now;

    try {
      const response = await fetch('https://formspree.io/f/mblblnyv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          message: formData.message.trim(),
          _replyto: formData.email.trim(),
          _subject: `Ново запитване от ${formData.name.trim()} - DailyConsult`,
        })
      });

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Благодарим за запитването! Ще се свържем с Вас скоро.'
        });
        setFormData({ name: '', email: '', phone: '', message: '' });
        setConsent(false);
      } else {
        throw new Error('Грешка при изпращане');
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Възникна грешка. Моля опитайте отново или се свържете директно на 0878 170 726'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-soft">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 section-animate">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Готови ли сте да работите със <span className="gradient-text">сигурен счетоводен партньор</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Свържете се с нас днес и получете индивидуална оферта за вашия бизнес
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg section-animate">
            <h3 className="text-2xl font-bold mb-6">Изпратете запитване</h3>
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {/* Honeypot — скрито поле за ботове */}
              <div className="absolute" style={{ left: '-9999px', position: 'absolute' }} aria-hidden="true">
                <input type="text" name="_gotcha" ref={honeypotRef} tabIndex="-1" autoComplete="off" />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Име *</label>
                <input
                  type="text"
                  required
                  minLength={2}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition ${errors.name ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-blue-600'}`}
                  placeholder="Вашето име"
                  value={formData.name}
                  onChange={(e) => { setFormData({...formData, name: e.target.value}); setErrors({...errors, name: ''}); }}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                <input
                  type="email"
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-blue-600'}`}
                  placeholder="email@example.com"
                  value={formData.email}
                  onChange={(e) => { setFormData({...formData, email: e.target.value}); setErrors({...errors, email: ''}); }}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Телефон *</label>
                <input
                  type="tel"
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition ${errors.phone ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-blue-600'}`}
                  placeholder="0888 123 456"
                  value={formData.phone}
                  onChange={(e) => { setFormData({...formData, phone: e.target.value}); setErrors({...errors, phone: ''}); }}
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Съобщение *</label>
                <textarea
                  rows="5"
                  required
                  minLength={10}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none transition ${errors.message ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-blue-600'}`}
                  placeholder="Как можем да ви помогнем?"
                  value={formData.message}
                  onChange={(e) => { setFormData({...formData, message: e.target.value}); setErrors({...errors, message: ''}); }}
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              {/* GDPR Consent */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="gdpr-consent"
                  checked={consent}
                  onChange={(e) => { setConsent(e.target.checked); setErrors({...errors, consent: ''}); }}
                  className="mt-1 w-4 h-4 text-blue-600 rounded focus:ring-blue-500 flex-shrink-0"
                />
                <label htmlFor="gdpr-consent" className="text-sm text-gray-600">
                  Съгласен/а съм личните ми данни да бъдат обработени от DailyConsult за целите на отговор на моето запитване, съгласно{' '}
                  <button type="button" onClick={() => window.dispatchEvent(new CustomEvent('openPrivacy', { detail: 'privacy' }))} className="text-blue-600 underline">
                    Политиката за поверителност
                  </button>
                  {' '}и Регламент (ЕС) 2016/679 (GDPR). *
                </label>
              </div>
              {errors.consent && <p className="text-red-500 text-sm">{errors.consent}</p>}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient text-white py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Изпращане...' : 'Изпрати запитване'}
              </button>

              {status.message && (
                <div className={`mt-4 p-4 rounded-lg text-center font-semibold ${
                  status.type === 'success'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  {status.message}
                </div>
              )}
            </form>
          </div>
          <div className="section-animate">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Информация за контакт</h3>
              <div className="space-y-6">
                {[
                  { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>, title: 'Адрес', info: ['гр. София'] },
                  { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>, title: 'Телефон', info: ['0878 170 726'] },
                  { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>, title: 'Контакт', info: ['Симона Николова'] },
                  { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>, title: 'Работно време', info: ['Понеделник - Петък: 9:00 - 17:00'] }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">{item.icon}</svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      {item.info.map((line, i) => <p key={i} className="text-gray-600">{line}</p>)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
