# DailyConsult - Проектна документация

## Обща информация
- **Проект**: Уебсайт на счетоводна къща "DailyConsult"
- **Собственик**: Симона Николова
- **Технологии**: React 18 + Vite 5 + Tailwind CSS 3
- **Хостинг**: Vercel (акаунт: simonanikolova-6116)
- **Live URL**: https://daily-consult.vercel.app
- **GitHub**: https://github.com/tsvetelinkitanski/daily-consult-portfolio
- **Телефон за контакт**: 0878 170 726

---

## Хронология на промените

### Сесия 1 (2026-02-18)

#### 1. Първоначален преглед
- Проектът е landing page за българска счетоводна фирма
- Оригинален title беше "ФинансКонсулт" — сменен на "DailyConsult"
- Инсталирани зависимости (`npm install`), стартиран dev сървър

#### 2. Архитектурен и правен одит
Направен е пълен преглед (47 технически проблема + 15 правни/GDPR проблема):

**Критични технически проблеми (открити)**:
- `YOUR_FORM_ID` placeholder в Formspree — формата не работи
- `dangerouslySetInnerHTML` в PrivacyModal.jsx
- Липсващ favicon (index.html сочи към /vite.svg)
- Memory leaks в useEffect (IntersectionObserver не се чисти)

**Критични GDPR проблеми (открити)**:
- Контактната форма няма checkbox за съгласие
- Бисквитките не се блокират преди consent
- Липсват Terms & Conditions
- Липсва фирмена информация (ЕИК, БУЛСТАТ, адрес)
- Няма механизъм за оттегляне на съгласие за бисквитки

#### 3. Първи промени по услугите
- Махнато: "Кадрово счетоводство" като отделна услуга
- Добавено: ТРЗ към "Счетоводно обслужване"
- "Финансов анализ" направен второстепенна услуга
- Добавено: "Онлайн обслужване" (цяла България)
- Махнато: блок "Безплатна консултация" от Contact

#### 4. GitHub
- Инициализиран git repo
- Създадено GitHub repo: tsvetelinkitanski/daily-consult-portfolio
- Push-нат initial commit

#### 5. Vercel деплоймент
- Логнат е акаунтът на Симона (simonanikolova-6116)
- Деплойнато на Vercel production
- Настроен alias: daily-consult.vercel.app

#### 6. Fix: Title и OG тагове
- Сменен `<title>` от "ФинансКонсулт" на "DailyConsult - Счетоводни услуги"
- Добавени Open Graph мета тагове (og:title, og:description, og:type, og:url)
- Редеплойнато

#### 7. Пълно преструктуриране на сайта
Изпълнен е план за "ТОП НИВО" структура:

**Нови/обновени компоненти**:
- `Hero.jsx` — ново заглавие: "Надеждно счетоводно обслужване за малки и средни бизнеси"
- `About.jsx` — "Защо клиентите ни се доверяват" с 5 чекмарка + мисия + онлайн обслужване
- `Services.jsx` — 4 услуги: Счетоводство, ТРЗ и кадрово, Данъчни консултации, Регистрации
- `HowWeWork.jsx` — **НОВ** — 4 стъпки процес (контакт → анализ → оферта → работа)
- `Pricing.jsx` — **НОВ** — 2 пакета: "Старт" и "Бизнес"
- `Testimonials.jsx` — обновен с 3 отзива
- `FAQ.jsx` — **НОВ** — 5 въпроса с акордеон
- `Contact.jsx` — нов финален призив "Готови ли сте..."
- `Navbar.jsx` — добавени линкове: Пакети, Въпроси + мобилно меню се затваря при клик
- `Footer.jsx` — динамична година + нови линкове + ТРЗ в услуги
- `App.jsx` — интегрирани всички нови компоненти + fix: observer.disconnect() в cleanup

**Неизползвани компоненти** (все още в проекта):
- `Team.jsx` — не е включен в App.jsx

---

## Структура на сайта (текуща)

```
1. Navbar (фиксирана)
2. Hero — заглавие + 2 бутона
3. Stats — 20+ години, 500+ клиенти, 98% удовлетвореност
4. About — "Защо клиентите ни се доверяват" + мисия + онлайн
5. Services — 4 услуги в grid
6. HowWeWork — 4 стъпки процес
7. Pricing — 2 пакета (Старт / Бизнес)
8. Testimonials — 3 отзива
9. FAQ — 5 въпроса
10. Contact — форма + контактна информация
11. Footer
12. CookieBanner
13. PrivacyModal
```

---

## Файлова структура

```
src/
├── App.jsx
├── main.jsx
├── index.css
└── components/
    ├── Navbar.jsx
    ├── Hero.jsx
    ├── Stats.jsx
    ├── About.jsx
    ├── Services.jsx
    ├── HowWeWork.jsx      (нов)
    ├── Pricing.jsx         (нов)
    ├── Testimonials.jsx
    ├── FAQ.jsx             (нов)
    ├── Contact.jsx
    ├── Footer.jsx
    ├── CookieBanner.jsx
    ├── PrivacyModal.jsx
    └── Team.jsx            (неизползван)
```

---

## Известни проблеми (TODO)

### Критични (за решаване преди production):
- [ ] Formspree ID е placeholder (`YOUR_FORM_ID`) — формата не работи
- [ ] Контактната форма няма GDPR consent checkbox
- [ ] Бисквитки се зареждат преди потребителят да даде съгласие
- [ ] Липсват Terms & Conditions
- [ ] Липсва фирмена информация във footer (ЕИК, адрес)
- [ ] Favicon липсва

### Важни:
- [ ] `dangerouslySetInnerHTML` в PrivacyModal — да се замени с JSX
- [ ] Социалните линкове сочат към `#`
- [ ] Липсват ARIA labels за accessibility
- [ ] Цените в пакетите са "по договаряне" — да се добавят реални цени
- [ ] SEO: липсва JSON-LD structured data
- [ ] Няма механизъм за оттегляне на cookie consent

### Козметични:
- [ ] Пакетите "Старт"/"Бизнес" могат да имат реални цени
- [ ] Реални снимки вместо стокови
- [ ] Team.jsx — или да се включи, или да се изтрие

---

## Деплоймент команди

```bash
# Dev сървър
npm run dev

# Build
npm run build

# Деплой на Vercel (трябва да е логнат акаунтът на Симона)
vercel --prod --yes
vercel alias <deployment-url> daily-consult.vercel.app

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
