# private-site

Персональный сайт (чистый HTML/CSS/JS), публикуется на GitHub Pages:
https://bugromka.github.io/personal-site/

## Структура

- `index.html` — страница: шапка с фото и контактами (Макс, VK, Добро.рф),
  раздел «Образование» (7 карточек с логотипами)
- `assets/css/style.css` — стили в стиле страницы МХ «КРЯК»: фиолетовый
  градиент, белые карточки, Montserrat, адаптив
- `assets/js/main.js` — анимация появления секций и запасные иконки,
  если внешние картинки недоступны
- `.nojekyll` — отключает сборку Jekyll на GitHub Pages

## Как редактировать

Весь текст лежит в `index.html`. Логотипы и фото пока подключены
с `www.yacluster-kryak.ru` (с `referrerpolicy="no-referrer"`); если картинки
недоступны, автоматически подставляются эмодзи-заглушки (`data-fallback`).
Чтобы сделать сайт автономным, положите файлы в `assets/images/` и
обновите `src`.

## Локальный просмотр

Откройте `index.html` в браузере или запустите:

```bash
python3 -m http.server 8000
```

## Публикация (GitHub Pages)

Один раз включите Pages в настройках репозитория:

**Settings → Pages → Build and deployment → Source: GitHub Actions**

Дальше каждый push в ветку `arena/b99cf429-personal-site` автоматически
публикует сайт через workflow `.github/workflows/pages.yml`.

Альтернатива без workflow: Source: **Deploy from a branch** → ветка
`arena/b99cf429-personal-site`, папка `/ (root)`.
