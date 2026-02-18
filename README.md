# 🏢 Accounting Website - React Project

Професионален уебсайт за счетоводна къща, изграден с React, Vite и Tailwind CSS.

## ✨ Особености

- ⚡ Бързо зареждане с Vite
- 🎨 Модерен дизайн с Tailwind CSS
- 📱 Напълно responsive
- 🎭 Плавни анимации
- 🌐 Готов за SEO
- 🚀 Оптимизиран за производство

## 🚀 Бърз старт

```bash
# Инсталирай зависимостите
npm install

# Стартирай dev server
npm run dev

# Build за production
npm run build

# Preview на build
npm run preview
```

## 📁 Структура

```
src/
├── components/      # React компоненти
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Stats.jsx
│   ├── Services.jsx
│   ├── About.jsx
│   ├── Team.jsx
│   ├── Testimonials.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── App.jsx         # Главен компонент
├── index.css       # Global стилове
└── main.jsx        # Entry point
```

## 🎨 Customization

### Промяна на цветовете

Редактирай `src/index.css`:

```css
.bg-gradient {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Промяна на съдържанието

Всеки компонент в `src/components/` може да се редактира независимо.

### Добавяне на снимки

Постави снимки в `public/` и ги използвай:

```jsx
<img src="/your-image.jpg" alt="Description" />
```

## 🌐 Deploy

### Vercel (Препоръчвам)

```bash
npm install -g vercel
vercel login
vercel --prod
```

### Netlify

```bash
npm run build
# Качи dist/ папката на Netlify
```

## 🔧 Технологии

- React 18
- Vite 5
- Tailwind CSS 3
- PostCSS
- Autoprefixer

## 📝 Лиценз

MIT

## 💡 Поддръжка

За въпроси и проблеми, моля отворете issue в GitHub.
