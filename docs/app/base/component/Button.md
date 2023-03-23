# 按钮(Button)

## 组件说明

`Button` 组件用于展示一个可点击的按钮，支持自定义颜色、大小、圆角、文本等。

## 使用方法

### 引入组件

```jsx
import { Button } from '@/components/Button'
```

### 属性说明

| 属性名 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| text | string | - | 按钮文本 |
| color | string \| string[] | - | 按钮颜色，支持单色和渐变色 |
| textColor | string | - | 文本颜色 |
| radiusType | string | `'fillet'` | 圆角类型，可选值为 `'fillet'`、`'fillet-min'` 和 `'right-angle'` |
| size | string | `'m'` | 按钮大小，可选值为 `'s'`、`'m'`、`'l'`、`'xl'`、`'xxl'` 和 `'xxxl'` |
| plain | boolean | `false` | 是否为朴素按钮 |
| disabled | boolean | `false` | 是否禁用按钮 |
| loading | boolean | `false` | 是否展示加载状态 |
| style | CSSProperties | `{}` | 按钮自定义样式 |
| textStyle | CSSProperties | `{}` | 按钮文本自定义样式 |
| beforeImage | string | - | 按钮文本前的图片路径 |
| afterImage | string | - | 按钮文本后的图片路径 |
| onClick | function | - | 点击按钮的回调函数 |

### 示例

#### 基本用法

```jsx
<Button text='Click Me' onClick={() => console.log('Clicked!')} />
```

#### 自定义按钮颜色

```jsx
<Button text='Click Me' color='#f7ba2a' />
```

#### 自定义文本颜色

```jsx
<Button text='Click Me' textColor='#f7ba2a' />
```

#### 自定义圆角类型

```jsx
<Button text='Click Me' radiusType='fillet-min' />
```

#### 自定义按钮大小

```jsx
<Button text='Click Me' size='l' />
```

#### 朴素按钮

```jsx
<Button text='Click Me' plain />
```

#### 自定义样式

```jsx
<Button text='Click Me' style={{ borderColor: '#f7ba2a', borderWidth: '2px' }} />
```

#### 自定义文本样式

```jsx
<Button text='Click Me' textStyle={{ fontWeight: 'bold' }} />
```

#### 禁用按钮

```jsx
<Button text='Click Me' disabled />
```

#### 展示加载状态

```jsx
<Button text='Click Me' loading />
```

#### 自定义前置图片

```jsx
<Button text='Click Me' beforeImage='path/to/image' />
```

#### 自定义后置图片

```jsx
<Button text='Click Me' afterImage='path/to/image' />
```