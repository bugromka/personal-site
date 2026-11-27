# private-site

Персональный сайт (чистый HTML/CSS/JS), публикуется на GitHub Pages:
https://bugromka.github.io/personal-site/

## Структура

- `index.html` — страница: герой, разделы «Образование» и «Контакты»
- `assets/css/style.css` — стили (светлая тема, карточки, адаптив)
- `assets/js/main.js` — минимальный скрипт (год в подвале)
- `.nojekyll` — отключает сборку Jekyll на GitHub Pages

## Как редактировать

Весь текст лежит в `index.html`. Замените заглушки (Имя Фамилия, e-mail,
Telegram, карточки образования) на свои данные. Новые карточки добавляются
копированием блока `<article class="card">…</article>` (или
`<a class="card card--link">…</a>` для контактов).

## Локальный просмотр

Откройте `index.html` в браузере или запустите:

```bash
python3 -m http.server 8000
```

## Публикация

Изменения на ветке `arena/b99cf429-personal-site` публикуются на GitHub Pages
(источник: эта ветка, папка `/`).
