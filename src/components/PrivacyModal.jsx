import { useState } from 'react';

const PrivacyModal = ({ isOpen, onClose, type }) => {
  if (!isOpen) return null;

  const content = {
    privacy: {
      title: 'Политика за поверителност',
      text: `
        <h3 class="font-bold text-lg mb-3">1. Обща информация</h3>
        <p class="mb-4">DailyConsult се ангажира да защитава личните данни на своите клиенти и посетители на уебсайта в съответствие с Общия регламент за защита на данните (GDPR) и Закона за защита на личните данни.</p>

        <h3 class="font-bold text-lg mb-3">2. Какви данни събираме</h3>
        <p class="mb-2">Ние събираме следните видове лични данни:</p>
        <ul class="list-disc ml-6 mb-4">
          <li>Име и фамилия</li>
          <li>Телефонен номер</li>
          <li>Имейл адрес</li>
          <li>Компания и длъжност (при бизнес запитвания)</li>
        </ul>

        <h3 class="font-bold text-lg mb-3">3. Как използваме данните</h3>
        <p class="mb-2">Вашите лични данни се използват за:</p>
        <ul class="list-disc ml-6 mb-4">
          <li>Комуникация и отговор на запитвания</li>
          <li>Предоставяне на счетоводни услуги</li>
          <li>Подобряване качеството на услугите ни</li>
          <li>Изпращане на информационни материали (само със съгласие)</li>
        </ul>

        <h3 class="font-bold text-lg mb-3">4. Защита на данните</h3>
        <p class="mb-4">Прилагаме подходящи технически и организационни мерки за защита на вашите лични данни от неоторизиран достъп, загуба или изменение.</p>

        <h3 class="font-bold text-lg mb-3">5. Вашите права</h3>
        <p class="mb-2">Имате право на:</p>
        <ul class="list-disc ml-6 mb-4">
          <li>Достъп до вашите лични данни</li>
          <li>Коригиране на неточни данни</li>
          <li>Изтриване на данни ("правото да бъдеш забравен")</li>
          <li>Ограничаване на обработката</li>
          <li>Преносимост на данните</li>
          <li>Възражение срещу обработката</li>
        </ul>

        <h3 class="font-bold text-lg mb-3">6. Бисквитки</h3>
        <p class="mb-4">Използваме бисквитки за подобряване на функционалността на сайта. Повече информация можете да намерите в нашата Политика за бисквитки.</p>

        <h3 class="font-bold text-lg mb-3">7. Съхранение на данни</h3>
        <p class="mb-4">Вашите лични данни се съхраняват толкова дълго, колкото е необходимо за целите, за които са събрани, или съгласно законовите изисквания.</p>

        <h3 class="font-bold text-lg mb-3">8. Контакт</h3>
        <p class="mb-2">За въпроси относно защитата на личните данни, моля свържете се с нас:</p>
        <p class="mb-1"><strong>Телефон:</strong> 0878 170 726</p>
        <p class="mb-4"><strong>Контактно лице:</strong> Симона Николова</p>

        <p class="text-sm text-gray-600 mt-6">Последна актуализация: Ноември 2024</p>
      `
    },
    gdpr: {
      title: 'GDPR Съответствие',
      text: `
        <h3 class="font-bold text-lg mb-3">Общ регламент за защита на данните (GDPR)</h3>
        <p class="mb-4">DailyConsult се придържа стриктно към изискванията на GDPR и гарантира правата на физическите лица относно обработката на техните лични данни.</p>

        <h3 class="font-bold text-lg mb-3">Основни принципи</h3>
        <ul class="list-disc ml-6 mb-4">
          <li><strong>Законност и прозрачност:</strong> Обработваме данни само на законно основание и по прозрачен начин</li>
          <li><strong>Ограничение на целите:</strong> Събираме данни само за конкретни, законни цели</li>
          <li><strong>Минимизация:</strong> Събираме само необходимите данни</li>
          <li><strong>Точност:</strong> Поддържаме данните актуални и точни</li>
          <li><strong>Ограничение на съхранението:</strong> Съхраняваме данни само толкова дълго, колкото е необходимо</li>
          <li><strong>Цялостност и поверителност:</strong> Защитаваме данните от неоторизиран достъп</li>
        </ul>

        <h3 class="font-bold text-lg mb-3">Правно основание за обработка</h3>
        <p class="mb-2">Обработваме вашите лични данни на следните основания:</p>
        <ul class="list-disc ml-6 mb-4">
          <li>Изпълнение на договор за предоставяне на услуги</li>
          <li>Съгласие (когато е приложимо)</li>
          <li>Законови задължения</li>
          <li>Легитимни интереси на администратора</li>
        </ul>

        <h3 class="font-bold text-lg mb-3">Споделяне на данни</h3>
        <p class="mb-4">Не споделяме вашите лични данни с трети страни, освен когато това е необходимо за предоставяне на услугите (напр. НАП, НОИ) или при законово изискване.</p>

        <h3 class="font-bold text-lg mb-3">Международни трансфери</h3>
        <p class="mb-4">Вашите данни се обработват и съхраняват в България и не се прехвърлят извън ЕС без подходящи гаранции.</p>

        <h3 class="font-bold text-lg mb-3">Сигурност</h3>
        <p class="mb-4">Прилагаме съвременни технологии и процедури за защита на данните, включително криптиране, контрол на достъпа и редовни одити.</p>

        <h3 class="font-bold text-lg mb-3">Жалби</h3>
        <p class="mb-4">Имате право да подадете жалба до Комисията за защита на личните данни (КЗЛД) ако смятате, че обработката на вашите данни нарушава GDPR.</p>

        <p class="text-sm text-gray-600 mt-6">За повече информация: <a href="https://www.cpdp.bg" target="_blank" class="text-blue-900 underline">www.cpdp.bg</a></p>
      `
    },
    cookies: {
      title: 'Политика за бисквитки',
      text: `
        <h3 class="font-bold text-lg mb-3">Какво са бисквитките?</h3>
        <p class="mb-4">Бисквитките са малки текстови файлове, които се съхраняват на вашето устройство, когато посещавате уебсайт. Те помагат на сайта да "запомня" информация за вашето посещение.</p>

        <h3 class="font-bold text-lg mb-3">Как използваме бисквитки</h3>
        <p class="mb-4">На нашия уебсайт използваме бисквитки за:</p>
        <ul class="list-disc ml-6 mb-4">
          <li><strong>Необходими бисквитки:</strong> Осигуряват основната функционалност на сайта</li>
          <li><strong>Функционални бисквитки:</strong> Запомнят вашите предпочитания</li>
          <li><strong>Аналитични бисквитки:</strong> Помагат ни да разберем как посетителите използват сайта</li>
        </ul>

        <h3 class="font-bold text-lg mb-3">Видове бисквитки, които използваме</h3>
        
        <h4 class="font-semibold mt-4 mb-2">1. Строго необходими бисквитки</h4>
        <p class="mb-3">Тези бисквитки са необходими за функционирането на уебсайта и не могат да бъдат изключени.</p>
        <ul class="list-disc ml-6 mb-4">
          <li>cookieConsent - Съхранява вашия избор относно бисквитките</li>
        </ul>

        <h4 class="font-semibold mt-4 mb-2">2. Функционални бисквитки</h4>
        <p class="mb-4">Тези бисквитки позволяват на сайта да предоставя допълнителна функционалност и персонализация.</p>

        <h3 class="font-bold text-lg mb-3 mt-6">Контрол на бисквитките</h3>
        <p class="mb-4">Можете да контролирате и/или изтриете бисквитките според желанието си. Можете да изтриете всички бисквитки, съхранени на вашия компютър, и повечето браузъри могат да бъдат настроени да предотвратяват съхраняването им.</p>

        <h3 class="font-bold text-lg mb-3">Как да управлявате бисквитките</h3>
        <ul class="list-disc ml-6 mb-4">
          <li><strong>Chrome:</strong> Настройки → Поверителност и сигурност → Бисквитки</li>
          <li><strong>Firefox:</strong> Настройки → Поверителност и сигурност</li>
          <li><strong>Safari:</strong> Предпочитания → Поверителност</li>
          <li><strong>Edge:</strong> Настройки → Бисквитки и разрешения на сайта</li>
        </ul>

        <h3 class="font-bold text-lg mb-3">Промени в политиката</h3>
        <p class="mb-4">Запазваме правото да актуализираме тази политика. Последната версия винаги е достъпна на нашия уебсайт.</p>

        <p class="text-sm text-gray-600 mt-6">Последна актуализация: Ноември 2024</p>
      `
    }
  };

  const currentContent = content[type] || content.privacy;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
          <h2 className="text-3xl font-bold text-gray-900">{currentContent.title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-3xl leading-none"
          >
            ×
          </button>
        </div>
        <div 
          className="p-6 text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: currentContent.text }}
        />
        <div className="sticky bottom-0 bg-gray-50 p-6 border-t border-gray-200">
          <button
            onClick={onClose}
            className="w-full bg-gradient text-white py-3 rounded-lg font-semibold hover:shadow-lg transition"
          >
            Затвори
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyModal;
