# Xbox Helper Portfolio

Учебное портфолио на React + Vite со встроенной HTML-игрой.

## Требования

- Node.js 20.19 или новее;
- npm;
- Git.

## Запуск

```bash
npm install
npm run dev
```

Vite покажет локальный адрес, обычно `http://localhost:5173`.

## Проверка перед публикацией

```bash
npm run build
npm run preview
```

Готовая сборка появится в папке `dist`.

## Основные файлы

- `src/App.jsx` — React-компоненты и содержание страницы;
- `src/App.css` — оформление и анимации;
- `public/game.html` — встроенная HTML-игра;
- `public/images` — изображения для портфолио и будущего урока Photoshop.

## Графика из Photoshop

Рекомендуемые файлы:

- `public/images/game-cover.webp` — 1600×900;
- `public/images/avatar.webp` — 800×800;
- `public/images/project-cover.webp` — 1200×750.

Не добавляйте в Git папки `node_modules` и `dist` — они уже указаны в `.gitignore`.
