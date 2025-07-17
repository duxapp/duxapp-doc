---
sidebar_position: 5
---

# 主题

模块主题配置是为了用户能够自定义你模块的颜色等，在duxapp模块中，提供了一些基础的出题配置，如：主色调、辅色调、成功、失败、警告、文本颜色、文本字号等配置，一般来说，这些配置基本能覆盖大大多数场景的使用 

## 现有主题使用

### 在scss中

大多主题配置会被脚本转换为scss的全局变量，在scss直接调用这些全局变量即可

```scss
color: $duxappPrimaryColor; // 调用主色
background-color: $duxappSecondaryColor; // 调用辅色

font-size: $duxappTextSize3; // 调用字号
```

所有模块的用户配置的主题会被编译在 `src/theme.scss` 文件中，这个文件会作为全局scss注入，你可以在任何scss文件中调用这些变量，你也可以打开这个文件查找有哪些变量可用

### 在jsx中

```jsx
import { duxappTheme } from '@/duxapp'
// 调用主色
duxappTheme.primaryColor
// 调用辅色
duxappTheme.secondaryColor
// 调用字号
duxappTheme.textSize3
```

:::info
duxapp模块提供了基础主题配置，每个模块可能都有自己的配置，需要前往每个模块中查看和导入
:::

## 用户配置主题
模块提供了默认的主题配置，但是通常不符合项目的使用，通过项目配置文件 `configs/config/index.js` 进行主题的配置  

在这个配置中 `option.modeName.theme` 字段将会被作为模块的主题配置，这些配置将会和默认的配置进行覆盖合并，其配置内容和默认配置保持一致

## 定制模块主题

如果基础模块提供的主题配置不满足需求，则可以给自己的模块也定制主题

### 默认配置

在`config`目录下新建 `theme.js`默认导出对象作为主题配置

```js
export default {
  priceColor: 'red'
}
```

配置之后无需其他处理，就可以像上面一样在jsx中调用了  

如果需要在scss中也能调用这个变量，需要编写 `config/themeToScss.js` 脚本文件进行转换

### 转换全局变量

编写一个脚本将用户传入的主题配置转换为全局scss变量，此处传入的theme，是用户配置的主题，不包含默认的主题配置，也就是说，这个内容他可能是空，因此，你需要写默认的全局变量

```js
export default theme => {
  return `
$modeNamePriceColor: ${theme.priceColor || 'red'};
`
}
```

然就需要重新启动编译，就可以在scss调用`$modeNamePriceColor` 这个全局变量了

:::info
- 如果修改了用户配置的主题，需要重启编译才会让全局scss变量生效
:::

### 其他配置

主题配置不一定都是css变量，也可以是其他内容  

例如duxapp的主题配置中有针对 `Header` 组件的配置

```js
export default {
  // ...其他
  header: {
    color: '#fff', // 仅支持rgb hex值，请勿使用纯单词 设置为数组将显示一个渐变按钮
    textColor: '#000', // 文本颜色
    showWechat: false, // 微信公众号是否显示header
    showWap: true, // h5是否显示header
  }
}
```
这是用于Header组件的配置，他这些内容会被 `Header` 组件调用，并实现对应的功能