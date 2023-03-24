# 头部(Header)

这是一个React组件，名为`Header`，包含了一个子组件`HeaderBack`。

## 使用方法

```jsx
import { Header } from '@/base'

<Header title="页面标题" />
```

## 属性

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| color | string | theme.header.textColor | 文字及返回按钮颜色，默认为主题配置中的 `header.textColor` |
| title | string | 无 | 标题 |
| navTitle | string | title | H5端页面标题 |
| absolute | boolean | false | 是否使用绝对定位，不占位置 |
| show | boolean | true | 是否显示，配合 `absolute` 使用，直接使用则会直接出现 |
| style | object | 无 | 样式 |
| renderMain | boolean | false | 是否替换头部中间部分 |
| renderHeader | element | 无 | 是否替换头部整个头部 |
| renderRight | element | 无 | 右侧组件 |
| showStatus | boolean | false | 使用了 `absolute` 的情况下是否显示状态栏 |
| titleCenter | boolean | false | 强制让标题显示在中间，对 TabBar 页面有效 |
| onBackClick | function | 无 | 如果存在点击事件，则点击按钮时不会触发返回操作 |

## 返回按钮组件

`Header.Back`：返回按钮组件，当你使用了`renderHeader`属性的时候，返回按钮将不在header上，你可以使用这个组件替代返回按钮的位置。

```jsx
import { Header } from '@/base'

<Header 
  title="页面标题"
  renderHeader={<View>
    <Header.Back />
    <View>其他部分</View>
  </View>}
/>
```