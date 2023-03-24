# 阴影(BoxShadow)

`BoxShadow` 组件用于添加阴影效果，可以自定义阴影颜色、大小、圆角等。请勿使用css实现阴影效果，在React Native上不支持。

## 属性

| 属性名 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| color | string | `'#999'` | 阴影颜色 |
| border | number | `10` | 阴影大小 |
| radius | number | `0` | 圆角半径 |
| opacity | number | `0.1` | 阴影透明度 |
| x | number | `0` | 水平偏移距离 |
| y | number | `0` | 垂直偏移距离 |
| children | ReactNode | - | 子元素 |
| style | CSSProperties | - | 自定义样式 |
| ...props | any | - | 其他属性 |
