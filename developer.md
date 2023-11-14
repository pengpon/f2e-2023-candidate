# 開發說明

## 開發
使用 node `v18.10`

```bash
# 安裝 package
yarn

# 啟動本機 Server
yarn dev
```

## CSS

### Button

class name 參考 [Bulma](https://bulma.io/)

先定義基礎元素，再給類型、顏色、大小等

```html
<button class="button is-small">Small</button>
<button class="button is-primary">Primary</button>
```

### Navbar & Tabs
使用 input checkbox 展開選單，參考 [Pure CSS Responsive Navbar](https://codepen.io/jo_Geek/pen/xgbaEr)

使用 input radio 製作 Tabs，參考 [Pure CSS - Tab Component](https://codepen.io/lasida/pen/gOPdwJb)

## 其他

### 專案樣版
使用 vite 建立 React 專案樣板 `yarn create vite {REPO_NAME} --template react`


### 額外安裝套件

- 安裝 sass `yarn add sass --dev`

- 安裝 react-svg ` yarn add react-svg --dev` 使用 SVG 檔案
  - 更多其他做法可參考[How to use SVGs in React](https://blog.logrocket.com/how-to-use-svgs-react/)

- 安裝 prop-types `yarn add prop-types --dev` 定義 props 型別
  - 參考[React ESLint Error: X is missing in props validation [Fix]](https://bobbyhadz.com/blog/react-eslint-error-missing-in-props-validation)

### 執行時程

日期 | 內容 |
--- | --- |
11/13 | 建置專案雛形結構、GitHub Actions 設定
11/14 | Header、Tabs