# 按钮(Button)

`Button` 组件用于展示一个可点击的按钮，支持自定义颜色、大小、圆角、文本等。

## 属性

| 属性名 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| text | string | - | 按钮文本 |
| color | string \| string[] | - | 按钮颜色，支持单色和渐变色 |
| textColor | string | - | 文本颜色 |
| radiusType | string | `'fillet'` | 圆角类型，可选值为 `'fillet'`(直角)、`'fillet-min'`(小圆角) 和 `'right-angle'`(圆角) |
| size | string | `'m'` | 按钮大小，可选值为 `'s'`、`'m'`、`'l'`、`'xl'`、`'xxl'` 和 `'xxxl'` |
| plain | boolean | `false` | 是否为镂空按钮 |
| disabled | boolean | `false` | 是否禁用按钮 |
| loading | boolean | `false` | 是否展示加载状态 |
| style | CSSProperties | `{}` | 按钮自定义样式 |
| textStyle | CSSProperties | `{}` | 按钮文本自定义样式 |
| beforeImage | string | - | 按钮文本前的图片路径 |
| afterImage | string | - | 按钮文本后的图片路径 |
| onClick | function | - | 点击按钮的回调函数 |

## 主题配置

此组件下面这些属性支持通过base模块的主题配置配置默认值

| 属性名 | 描述 |
| --- |  --- |
| color | 按钮颜色，支持单色和渐变色 |
| textColor| 文本颜色 |
| radiusType| 圆角类型，可选值为 `'fillet'`(直角)、`'fillet-min'`(小圆角) 和 `'right-angle'`(圆角) |
| size| 按钮大小，可选值为 `'s'`、`'m'`、`'l'`、`'xl'`、`'xxl'` 和 `'xxxl'` |
| plain| 是否为镂空按钮 |
