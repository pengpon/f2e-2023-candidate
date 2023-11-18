# 2023 F2E 競選官網 - 黑新星


[Demo](https://pengpon.github.io/f2e-2023-candidate/)


*採用 [設計師-PinChen Wu](pinchen.wu@gmail.com)之[設計稿](https://www.figma.com/file/3jLMmrhDl3UkjTKbU5YCye/2023-F2E-%E7%AB%8B%E5%A7%94%E7%AB%B6%E9%81%B8%E5%AE%98%E7%B6%B2?type=design&node-id=6-42&mode=design)*

## 說明
**此網站內容皆為虛擬**

專案採用 Vite 建立 React 樣板，並以 SCSS 手刻樣式

### 目的
刻意不使用 UI Framework，藉此熟悉/複習 SCSS 以及組織適合的結構

```bash
src/styles
├── abstracts
│   ├── _functions.scss
│   ├── _helpers.scss
│   ├── _index.scss
│   ├── _mixins.scss
│   └── _variables.scss
├── base
│   ├── _generic.scss
│   ├── _index.scss
│   ├── _reset.scss
│   └── _typography.scss
├── components
│   ├── _button.scss
│   ├── _card.scss
│   ├── _donation.scss
│   ├── _icon.scss
│   ├── _index.scss
│   ├── _input-textarea.scss
│   ├── _tabs.scss
│   └── _text-link.scss
├── index.scss
├── layout
│   ├── _footer.scss
│   ├── _forms.scss
│   ├── _header.scss
│   ├── _index.scss
│   └── _section.scss
└── pages
    ├── _home.scss
    └── _index.scss

```

