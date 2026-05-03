# Артель — контекст проекта для новой сессии

## Структура

```
site/
├── src/
│   ├── styles/global.css      ← токены (цвета, типографика, кнопки, сброс)
│   ├── layouts/Layout.astro   ← подключает global.css, базовый HTML
│   ├── pages/index.astro      ← главная страница, порядок блоков
│   └── components/            ← один файл = один блок лендинга
└── design-code/
    └── CONTEXT.md             ← этот файл
```

## Рабочий процесс

1. Пользователь смотрит страницу (`npm run dev`)
2. Просит изменить блок → редактируем нужный `.astro`-файл
3. CSS всегда в `<style>` внутри компонента

## Карта компонентов

| Компонент | CSS-класс | Блок |
|-----------|-----------|------|
| `Header.astro` | `.header` | Sticky-хедер с topbar и навигацией |
| `Hero.astro` | `.hero` | Главный экран, градиент gold-300→gold-600, фото справа |
| `AdvantagesBar.astro` | `.advantages-bar` | Тёмная полоска (bg `#231f1b`) с 4 цифрами |
| `Portfolio.astro` | `.portfolio` | Masonry-сетка фотографий |
| `Reviews.astro` | `.reviews` | Рейтинги платформ + текстовые отзывы |
| `LeadMagnet.astro` | `.cta-banner` | Промежуточный CTA-баннер, градиент |
| `CoAuthor.astro` | `.second-hero` | Двухколоночный блок: фото + текст |
| `Advantages.astro` | `.advantages-big` | Нумерованные карточки «Почему мы» |
| `Prices.astro` | `.pricing` | Таблица цен, фон `#f8f9f9` |
| `OldGold.astro` | `.melt` | Переплавка, фон `#fcf8f3`, цитата |
| `MaterialsAndStyles.astro` | `.materials` + `.ring-styles` | Иконки материалов + стили колец |
| `Process.astro` | `.steps` | Этапы создания изделия (чередование лево/право) |
| `Manager.astro` | `.manager` | Тёмная секция с фото, Telegram/WhatsApp |
| `Locations.astro` | `.locations` | Адреса мастерских, фон `#f8f9f9` |
| `FAQ.astro` | `.faq` | Аккордеон вопрос/ответ |
| `Footer.astro` | `.footer` | Тёмный футер (`#231f1b`) |

---

## Дизайн-токены (`src/styles/global.css`)

### Цвета
| Переменная | Hex | Применение |
|------------|-----|-----------|
| `--color-gold-900` | `#c77d17` | Акцент: кнопки, иконки, hover, `<em>` |
| `--color-gold-600` | `#f0dbbe` | Рамки карточек, разделители, фон CTA-баннера |
| `--color-gold-300` | `#fcf8f3` | Фон hero/cta, кнопка outline |
| `--color-dark-900` | `#231f1b` | Основной текст, тёмные секции |
| `--color-dark-600` | `#908e8c` | Вторичный текст, мета-данные |
| `--color-dark-300` | `#f4f4f3` | Разделители таблиц, подложки кода |
| `--color-bg-light` | `#f8f9f9` | Фон серых секций (хедер, advantages-big, second-hero) |
| `--color-text-muted` | `#6b5e50` | Описания, подзаголовки |
| `--color-white` | `#ffffff` | Белые секции (portfolio, reviews, FAQ) |
| `--color-header-border` | `#dae1df` | Нижняя граница хедера |
| `--color-review-border` | `#ded5c8` | Верхняя граница карточек отзывов |

### Типографика
- Заголовки: `var(--font-heading)` → `'Cormorant Garamond', serif`, `font-weight: 600`
- Текст: `var(--font-body)` → `'Jost', sans-serif`, `font-weight: 400 / 500`
- `<em>` внутри заголовков → `font-style: italic; color: var(--color-gold-900)`
- На тёмных секциях `<em>` → `color: var(--color-gold-600)` (не gold-900!)

| Переменная | Размер | Шрифт | Где |
|-----------|--------|-------|-----|
| `--font-size-h1` | `62px` | Cormorant 600 | Hero-заголовок |
| `--font-size-h2` | `52px` | Cormorant 600 | Заголовки секций |
| `--font-size-h3` | `43px` | Cormorant 600 | Подзаголовки, cta-banner |
| `--font-size-h4` | `36px` | Cormorant 600 | Заголовки шагов |
| `--font-size-h6` | `25px` | Jost 400 | Описание CTA-баннера |
| `--font-size-lg` | `18px` | Jost 400 | Описания секций |
| `--font-size-base` | `16px` | Jost 400 | Основной текст |
| `--font-size-sm` | `12px` | Jost 400/500 | Метки uppercase, мета |

### Отступы
| Переменная | Значение | Применение |
|-----------|---------|-----------|
| `--spacing-4` | `4px` | Мелкие зазоры |
| `--spacing-8` | `8px` | Внутренние отступы кнопок, gap иконок |
| `--spacing-16` | `16px` | Базовый отступ, gap в списках |
| `--spacing-24` | `24px` | Отступ внутри карточек |
| `--spacing-32` | `32px` | Gap между элементами секции |
| `--spacing-48` | `48px` | Padding секций (tablet), gap крупных блоков |
| `--spacing-64` | `64px` | Padding секций (desktop) |
| `--spacing-98` | `98px` | Gap в шагах процесса |
| `--spacing-132` | `132px` | Padding тёмных секций (Manager, desktop) |

### Радиусы
| Переменная | Значение | Где |
|-----------|---------|-----|
| `--radius-sm` | `4px` | Кнопки, карточки, плитки |
| `--radius-lg` | `24px` | CTA-баннер (`.cta-banner__wrapper`) |
| `50%` | — | Аватары, иконки материалов |

### Переходы
| Переменная | Значение | Где |
|-----------|---------|-----|
| `--transition-fast` | `120ms ease` | Hover на кнопках, ссылках |
| `--transition-base` | `200ms ease` | Hover на изображениях, картах |

### Тени
```css
/* Кнопка primary в hover / карточки */
box-shadow: 0px 4px 16px rgba(199, 125, 23, 0.30);   /* shadow-gold */

/* Кнопка outline в hover */
box-shadow: 0px 4px 16px rgba(199, 125, 23, 0.18);   /* shadow-gold-sm */
```

### Брейкпоинты
| Ширина | Название | Что меняется |
|--------|---------|-------------|
| `≥1025px` | desktop | базовые стили |
| `≤1024px` | tablet | `padding 48px 32px`, колонки → строки |
| `≤760px` | large mobile | `padding 32px 24px`, упрощённые сетки |
| `≤500px` | mobile | `padding 48px 24px`, уменьшенный шрифт |

---

## Кнопки (в `global.css`, доступны везде)

```html
<a href="#manager" class="btn btn--primary">Текст</a>
<a href="#portfolio" class="btn btn--outline">Текст</a>
<a href="#" class="btn btn--primary btn--icon">
  <svg>…</svg> Текст
</a>
```

| Свойство | `.btn--primary` | `.btn--outline` |
|---------|----------------|----------------|
| `background` | `linear-gradient(135deg, #d4921e 0%, #c77d17 50%, #b36a10 100%)` | `#fcf8f3` (gold-300) |
| `color` | `#fcf8f3` | `#c77d17` |
| `border` | `1px solid #c77d17` | `1px solid #c77d17` |
| `hover` | `translateY(-2px) + shadow-gold` | `translateY(-2px) + shadow-gold-sm` |
| `active` | `scale(0.97)` | `scale(0.97)` |

Базовые стили `.btn`: `padding: 16px 32px`, `font: Jost 500 18px uppercase`, `border-radius: 4px`, `transition: 120ms ease`.

---

## CSS-паттерны (повторяются во всех компонентах)

### Обёртка секции
```css
.section {
  display: flex; flex-direction: column; align-items: center;
  padding: var(--spacing-64) var(--spacing-48);   /* tablet: 48/32; mobile: 48/24 */
  width: 100%; overflow: hidden;
}
.section__wrapper {
  max-width: 1400px; width: 100%;
}
```

### Двухколоночный заголовок (portfolio, pricing, reviews, advantages-big)
```css
.section__header {
  display: flex; justify-content: space-between; align-items: center;
  gap: var(--spacing-48);
}
/* h2 → flex:1;  p → flex:1; text-align:right; color: gold-900 */
/* ≤1024: flex-direction:column; gap: 16px; text-align:left */
```

### Карточка
```css
.card {
  background: #ffffff;
  border: 1px solid var(--color-gold-600);
  border-radius: var(--radius-sm);   /* 4px */
  padding: var(--spacing-32);
}
/* hover: translateY(-2px), transition: var(--transition-fast) */
```

---

## Дизайн-язык (для создания новых блоков)

При создании нового блока — читай 2–3 похожих компонента для точных паттернов. Принципы ниже описывают **визуальный характер**, который нельзя вывести из кода.

### Фоны секций
| Тип секции | Фон |
|-----------|-----|
| Светлая нейтральная (хедер, second-hero, advantages-big) | `#f8f9f9` (`--color-bg-light`) |
| Тёплая / CTA / hero | `linear-gradient(154.68deg, #fcf8f3 0%, #f0dbbe 100%)` |
| Белая (portfolio, reviews, FAQ) | `#ffffff` |
| Тёмная (manager, footer, advantages-bar) | `#231f1b` (`--color-dark-900`) |
| Очень тёплая (melt) | `#fcf8f3` (`--color-gold-300`) |
| Серая (prices, locations) | `#f8f9f9` (`--color-bg-light`) |

### Заголовки
- `<h2>` секции всегда Cormorant Garamond 600, `font-size: var(--font-size-h2)`
- Акцентная фраза внутри заголовка — в `<em>`: курсив + `color: var(--color-gold-900)`
- На тёмных секциях: заголовки `color: var(--color-gold-600)`, `<em>` тоже `gold-600`
- Лейбл над заголовком: Jost 12px uppercase, `letter-spacing: 0.08em`, `color: var(--color-gold-900)`

### Карточки
- Рамка: `1px solid var(--color-gold-600)`, `border-radius: 4px`
- Фон: белый
- Hover: `translateY(-2px)`, shadow-gold-sm
- Нумерация (advantages-big): Cormorant italic 52px, `color: var(--color-gold-600)`

### Изображения
- Всегда `object-fit: cover`, `border-radius: 4px`
- Hover на фото в сетках: `transform: scale(1.03)`, `transition: var(--transition-base)`
- Круглые иконки (materials, ring-styles): `border-radius: 50%`

### Разделители и акценты
- Горизонтальный на светлом: `1px solid var(--color-gold-600)`
- Вертикальный (advantages-bar): `width: 1px; height: 56px; background: var(--color-gold-600)`
- На тёмном фоне: `1px solid rgba(240,219,190,0.2)`
- Цитата/blockquote: `border-left: 3px solid var(--color-gold-900)`, `background: rgba(255,255,255,0.5)`, `padding: 24px`

### Тёмные секции (manager, footer, advantages-bar)
- Фон `#231f1b`
- Заголовки → `color: var(--color-gold-600)` (тёплый бежевый, не белый)
- Курсивный акцент `<em>` → `color: var(--color-gold-600)` (не gold-900!)
- Основной текст → `color: rgba(252,248,243,0.7)` или `--color-gold-300`
- Manager-секция: `padding: var(--spacing-132)`

### Общая атмосфера
Ювелирная мастерская премиум-сегмента. Сдержанно, тепло, без яркости. Золотой — как металл, не как цвет. Никаких теней-боксов на весь экран, никаких ярких градиентов. Белое пространство работает.

---

## Спецификации компонентов

### Hero (`.hero`)
- Фон: `linear-gradient(154.68deg, gold-300 0%, gold-600 100%)`
- Сетка: `grid-template: "label image" "content image" 1fr / 1fr 1fr`
- Изображение: `height: 629px`, `object-fit: contain`
- `≤1024px`: одна колонка, изображение между label и content, `margin-top: -80px` у content
- `≤760px`: изображение на полную ширину (margin негативный)

```html
<section class="hero">
  <div class="hero__wrapper">
    <p class="hero__label"><span>Бренд</span> · <span>Город</span></p>
    <div class="hero__content">
      <div class="hero__texts">
        <h1 class="hero__title">Заголовок <em>акцент</em></h1>
        <p class="hero__desc">Описание…</p>
      </div>
      <div class="hero__buttons">
        <a href="#manager" class="btn btn--primary">CTA</a>
        <a href="#portfolio" class="btn btn--outline">Вторичное</a>
      </div>
    </div>
    <div class="hero__image"><img src="…" alt="…" /></div>
  </div>
</section>
```

### AdvantagesBar (`.advantages-bar`)
- Фон: `#231f1b`, padding `64px 48px`
- Числа: Cormorant 600, `font-size: h3 (43px)`, `color: gold-600`
- Текст: Jost, `font-size: base`, uppercase, `color: gold-600`
- Разделители: вертикальные `1px × 56px`, `color: gold-600` (скрыты на tablet)
- `≤760px`: сетка `2×2`

### Portfolio (`.portfolio`)
- Сетка: `grid-template-columns: repeat(4, 1fr)`, `grid-auto-rows: 322px`, `gap: 16px`
- Высокая ячейка: `.portfolio__grid-item--tall` → `grid-row: span 2`
- Hover на фото: `scale(1.03)`, `transition: var(--transition-base)`
- `≤1024px`: 3 колонки, 240px строки
- `≤760px`: 2 колонки, 180px строки

### CTA Banner (`.cta-banner`)
- `.cta-banner__wrapper`: `background: gold-600`, `border-radius: 24px (radius-lg)`, `padding: 48px`
- Title: Cormorant `font-size-h3` (43px)
- Desc: Jost `font-size-h6` (25px), `color: gold-900`
- `≤760px`: `border-radius: 12px`

### Advantages Big (`.advantages-big`)
- Фон: `#f8f9f9`, сетка: `auto-fill minmax(300px, 1fr)`
- Карточка: белая, рамка gold-600, padding 32px, `display: flex; gap: 39px`
- Число: Cormorant italic 52px, `color: gold-600`
- `.advantages-big__card--last`: `grid-column: 1 / -1`

### Steps / Process (`.steps`)
- `.steps__list`: `flex-direction: column; gap: 98px`
- `.steps__item`: `flex row; gap 64px; align-items: center`
- Чётные: `flex-direction: row-reverse`
- Изображение: `283×283px`, `object-fit: cover`
- Title: Cormorant `font-size-h4` (36px); Desc: Jost lg, `color: text-muted`

### Manager (`.manager`)
- Фон: `#231f1b`, padding: `var(--spacing-132)`
- Фото: `width: 400px; height: 484px`
- Заголовок: Cormorant `font-size-h2`, `color: dark-300 (#f4f4f3)`

### Header (`.header`)
- `position: sticky; top: 0; z-index: 100`
- `background: bg-light; border-bottom: 1px solid header-border`
- Height: `72px` (desktop) → `56px` (mobile)
- Лого: Cormorant 600 22px, `letter-spacing: 0.05em`
- Навlinks: Jost 12px uppercase, `letter-spacing: 0.06em`, `color: text-muted → gold-900 hover`
- `≤1024px`: nav и CTA скрыты, показываются контакты

### Footer (`.footer`)
- Фон: `#231f1b`, `border-top: 1px solid rgba(240,219,190,0.2)`, `padding: 48px`
- Лого: Cormorant `color: gold-600`
- Телефон: `color: gold-600 → gold-900 hover`

---

## Анимации

### Принцип: открытие медленнее, закрытие быстрее
| Действие | Duration | Easing |
|----------|----------|--------|
| Разворачивание | `0.42s` | `cubic-bezier(0.16, 1, 0.3, 1)` — spring ease-out |
| Сворачивание | `0.22s` | `ease-in` |

### Паттерн аккордеона
Анимация высоты через `grid-template-rows: 0fr → 1fr` — единственный надёжный способ анимировать `height: auto`.

```css
/* обёртка */
.answer {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.42s cubic-bezier(0.16, 1, 0.3, 1);
}
/* внутренний элемент — обязательно overflow: hidden */
.answer-inner { overflow: hidden; }

/* состояния через JS-классы на элементе-хосте */
.item.is-open .answer        { grid-template-rows: 1fr; }
.item.is-closing .answer     { grid-template-rows: 0fr; transition: grid-template-rows 0.22s ease-in; }
```

### Управление состоянием (JS)
Не использовать `<details>/<summary>` — нельзя управлять скоростью закрытия. Вместо этого: `<div>/<button aria-expanded>` + классы `.is-open` / `.is-closing`.

```javascript
btn.addEventListener('click', () => {
  if (item.classList.contains('is-open')) {
    item.classList.add('is-closing');
    item.classList.remove('is-open');
    btn.setAttribute('aria-expanded', 'false');
    answer.addEventListener('transitionend', () => item.classList.remove('is-closing'), { once: true });
  } else {
    item.classList.remove('is-closing'); // отменить анимацию закрытия
    item.classList.add('is-open');
    btn.setAttribute('aria-expanded', 'true');
  }
});
```

### Дополнительные детали
- Иконка (например `+→×`): `rotate(45deg)` с теми же duration/easing что у контейнера
- Текст внутри: `opacity 0→1` с небольшой задержкой при открытии (`transition-delay: 0.16s`), мгновенное затухание при закрытии
- Hover-эффекты стандартных элементов: `translateY(-2px)` + shadow, `transition: var(--transition-fast)`
- Hover на фото в сетках: `scale(1.03)`, `transition: var(--transition-base)`
- Active (кнопки): `scale(0.97)`
