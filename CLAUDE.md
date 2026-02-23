# DailyConsult - Проектна документация

## Обща информация
- **Проект**: Уебсайт на счетоводна къща "DailyConsult"
- **Собственик**: Симона Николова
- **Технологии**: React 18 + Vite 5 + Tailwind CSS 3
- **Хостинг**: Vercel (акаунт: simonanikolova-6116)
- **Live URL**: https://daily-consult.vercel.app
- **Домейн**: dailyconsult.bg (DNS настройка предстои)
- **GitHub**: https://github.com/tsvetelinkitanski/daily-consult-portfolio
- **Телефон за контакт**: 0878 170 726
- **Formspree ID**: mblblnyv

---

## Хронология на промените

### Сесия 1 (2026-02-18)

#### 1. Първоначален преглед
- Проектът е landing page за българска счетоводна фирма
- Оригинален title беше "ФинансКонсулт" — сменен на "DailyConsult"
- Инсталирани зависимости (`npm install`), стартиран dev сървър

#### 2. Архитектурен и правен одит
Направен е пълен преглед (47 технически проблема + 15 правни/GDPR проблема).

#### 3. Първи промени по услугите
- Махнато: "Кадрово счетоводство" като отделна услуга
- Добавено: ТРЗ към "Счетоводно обслужване"
- "Финансов анализ" направен второстепенна услуга
- Добавено: "Онлайн обслужване" (цяла България)
- Махнато: блок "Безплатна консултация" от Contact

#### 4. GitHub + Vercel
- GitHub repo: tsvetelinkitanski/daily-consult-portfolio
- Vercel production deploy с alias: daily-consult.vercel.app
- Добавени OG мета тагове

#### 5. Пълно преструктуриране на сайта
Нова структура: Hero → Stats → About → Services → HowWeWork → Pricing → FAQ → Contact

#### 6. Hero текст обновен
- Заглавие: "Експертно счетоводно обслужване за малки, средни и големи предприятия"
- Подзаглавие: "Стратегически финансов партньор..."
- Работно време: 9:00-17:00
- Махнат бутон "Безплатна консултация"

#### 7. Formspree fix
- Намерен реалният Formspree ID `mblblnyv` от старото deployment
- Заменен placeholder `YOUR_FORM_ID`

#### 8. Домейн dailyconsult.bg
- Добавен в Vercel: `vercel domains add dailyconsult.bg`
- DNS настройка: A record → 76.76.21.21, CNAME www → cname.vercel-dns.com
- **ВАЖНО**: MX записи за @dailyconsult.bg (spamexpert01/02.host.bg) НЕ трябва да се пипат!
- DNS настройката е предадена на IT специалист за изпълнение в SuperHosting

### Сесия 2 (2026-02-23)

#### 9. GDPR / Правна / Сигурностна поправка
- **Contact.jsx**: email regex валидация, телефонна валидация (BG формат +359/0), honeypot anti-spam, rate limiting (30s), GDPR consent checkbox, field-level грешки
- **PrivacyModal.jsx**: Пълно пренаписване — премахнат `dangerouslySetInnerHTML`, използва JSX. Добавени Общи условия (ЗЕТ, ЗЗП), обновена Политика за поверителност (ЗЗЛД, GDPR референции, КЗЛД контакт, срокове за съхранение)
- **CookieBanner.jsx**: Добавен механизъм за оттегляне на съгласие чрез event
- **Footer.jsx**: Добавен линк "Общи условия", бутон "Настройки за бисквитки", ЕИК placeholder

#### 10. Footer links fix + махнати Testimonials
- Footer бързите връзки генерираха български текст като href (#начало) вместо английските ID-та (#home)
- Fix: explicit mapping на labels към правилни anchor ID-та
- Testimonials.jsx махнат от App.jsx

#### 11. Архитектурно почистване
- Изтрити неизползвани файлове: Team.jsx, Testimonials.jsx
- Почистени imports в App.jsx

#### 12. i18n система (BG/EN)
- Създаден `/src/i18n/translations.js` — всички текстове на BG и EN
- Създаден `/src/i18n/LanguageContext.jsx` — React Context за управление на езика
- Всички 12 компонента пренаписани с `useLanguage()` hook
- Бутон за превключване BG/EN в Navbar
- Езикът се запазва в localStorage
- Автоматично обновява `document.documentElement.lang`
- PrivacyModal остава само на български (правна документация)

---

## Структура на сайта (текуща)

```
1. Navbar (фиксирана) — с BG/EN toggle
2. Hero — заглавие + 2 бутона (Услуги / Контакт)
3. Stats — 20+ години, 500+ клиенти, 98% удовлетвореност
4. About — "Защо клиентите ни се доверяват" + мисия + онлайн
5. Services — 4 услуги в grid
6. HowWeWork — 4 стъпки процес
7. Pricing — 2 пакета (Старт / Бизнес)
8. FAQ — 5 въпроса с акордеон
9. Contact — форма с валидация + контактна информация
10. Footer — бързи връзки, услуги, правни документи
11. CookieBanner — с accept/decline + оттегляне на съгласие
12. PrivacyModal — Поверителност, GDPR, Бисквитки, Общи условия
```

---

## Файлова структура

```
src/
├── App.jsx                 — главен компонент, wrapped в LanguageProvider
├── main.jsx
├── index.css
├── i18n/
│   ├── translations.js     — BG/EN преводи за всички компоненти
│   └── LanguageContext.jsx  — React Context (lang, toggleLang, t)
└── components/
    ├── Navbar.jsx           — навигация + BG/EN бутон + мобилно меню
    ├── Hero.jsx             — заглавие + CTA бутони
    ├── Stats.jsx            — статистики в цифри
    ├── About.jsx            — доверие + мисия + онлайн обслужване
    ├── Services.jsx         — 4 услуги с иконки
    ├── HowWeWork.jsx        — 4-стъпков процес
    ├── Pricing.jsx          — 2 ценови пакета
    ├── FAQ.jsx              — акордеон с въпроси
    ├── Contact.jsx          — форма (Formspree) + инфо
    ├── Footer.jsx           — линкове + правни + copyright
    ├── CookieBanner.jsx     — GDPR cookie consent
    └── PrivacyModal.jsx     — правни документи (само BG)
```

---

## i18n система

- **Поддържани езици**: Български (bg), English (en)
- **Използване**: `const { t, lang, toggleLang } = useLanguage();`
- **Достъп до текстове**: `t.hero.title`, `t.contact.name`, и т.н.
- **Превключване**: Бутон в Navbar (показва "EN" когато е на BG и обратно)
- **Persistence**: localStorage key `language`
- **HTML lang атрибут**: Автоматично се обновява

---

## Сигурност и GDPR

### Контактна форма
- **Email валидация**: `/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/`
- **Телефонна валидация**: `/^(\+?359|0)\d{9}$/` (български формат)
- **Honeypot**: Скрит input `_gotcha` — ботовете попълват, хората не
- **Rate limiting**: 30 секунди между изпращания
- **GDPR consent**: Задължителен checkbox с линк към Политика за поверителност
- **Field-level грешки**: Показват се под всяко невалидно поле

### Правни документи (PrivacyModal)
- **Политика за поверителност**: ЗЗЛД + GDPR (Art. 6, 13, 17, 21), КЗЛД контакт
- **GDPR права**: Достъп, коригиране, изтриване, ограничаване, преносимост
- **Бисквитки**: Описание на типове + механизъм за оттегляне
- **Общи условия**: Спрямо ЗЕТ и ЗЗП

### Cookie Consent
- Accept / Decline бутони
- Запазва избора в localStorage (`cookieConsent`, `cookieConsentDate`)
- Оттегляне чрез бутон "Настройки за бисквитки" във footer
- Излъчва `resetCookieConsent` event

---

## Известни проблеми (TODO)

### Предстоящи:
- [ ] ЕИК номер — placeholder `[ще бъде допълнен]` в Footer и PrivacyModal
- [ ] DNS настройка за dailyconsult.bg (чака IT специалист)
- [ ] Favicon — липсва персонализиран (index.html сочи към /vite.svg)
- [ ] Социални линкове — сочат към `#`
- [ ] JSON-LD structured data за SEO
- [ ] Реални снимки вместо стокови
- [ ] ARIA labels за по-добра accessibility

---

## Деплоймент команди

```bash
# Dev сървър
npm run dev

# Build
npm run build

# Деплой на Vercel (трябва да е логнат акаунтът на Симона)
vercel --prod --yes --force
vercel alias <deployment-url> daily-consult.vercel.app

# Git push
git add -A && git commit -m "описание" && git push origin master

# Vercel login/logout
vercel logout
vercel login
vercel whoami
```

---

## Бележки
- Vercel акаунтът на Симона НЕ е свързан с GitHub — деплойментите стават с директен upload
- При всеки нов деплоймент трябва ръчно да се обнови alias-а
- Проектът е public в GitHub
- **ВАЖНО**: При DNS промени за dailyconsult.bg — НЕ пипайте MX записите (email @dailyconsult.bg работи чрез spamexpert01/02.host.bg)
- `--force` флагът е нужен при Vercel deploy за да се приложат промените
- PrivacyModal не е преведен на английски — правните текстове остават само на български
