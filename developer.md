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
class name 參考 [Bulma](https://bulma.io/)

先定義基礎元素，再給類型、顏色、大小等

```html
<button class="button is-small">Small</button>
<button class="button is-primary">Primary</button>
```

## 其他

- 使用 vite 建立 React 專案樣板 `yarn create vite {REPO_NAME} --template react`

- 安裝 sass `yarn add sass --dev`

- 安裝 react-svg ` yarn add react-svg --dev` 使用 SVG 檔案
  - 更多其他做法可參考[How to use SVGs in React](https://blog.logrocket.com/how-to-use-svgs-react/)

