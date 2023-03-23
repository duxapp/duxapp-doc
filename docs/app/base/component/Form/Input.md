# 输入框(Input)

# Input 组件

`Input` 组件是对原生 Taro Input 组件的简单封装，用于实现输入框的基本功能。

## 属性

| 属性名 | 类型 | 默认值 | 说明 |
| ---------- | -------- | ------ | ------------ |
| value | string | | 输入框的值 |
| onChange | function | | 输入框变化时 |
| 其他属性名 | | | |

# InputSearch 组件

`InputSearch` 组件是在 `Input` 基础上增加了搜索输入时的实时搜索功能。

## 属性

| 属性名 | 类型 | 默认值 | 说明 |
| ---------- | -------- | ------ | ------------- |
| value | string | | 输入框的值 |
| onChange | function | | 输入框变化时 |
| 其他属性名 | | | |

## 使用方法

在需要使用 InputSearch 组件的页面中引入：

```jsx
import { InputSearch } from '@/components/Input'
```

在 JSX 中使用：

```jsx
<InputSearch
  value={value}
  onChange={onChange}
  placeholder='请输入搜索内容'
/>
```