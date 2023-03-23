# 加载动画(Loading)


用于展示loading动画

## 示例

```jsx
import { Loading } from '@/components/Loading'

function Example() {
  return <Loading color='blank' size={32} />
}
```

## Props

| 名称 | 类型 | 必填 | 默认值 | 描述 |
| ---- | ---- | -------- | ------- | ----------- |
| size | number | 否 | 52 | Loading动画大小，单位px |
| color | string | 否 | 'dark' | Loading动画颜色，可选值为 'dark' 或 'blank' |
| style | object | 否 | {} | Loading动画的样式 |
