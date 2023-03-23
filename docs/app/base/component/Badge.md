# 徽标(Badge)

## 组件说明

`Badge` 组件用于在图标或文字右上角展示未读消息数或者小红点，支持自定义颜色、最大数字显示数、文本等。

## 使用方法

### 属性说明

| 属性名 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| count | number | - | 展示的数字 |
| dot | boolean | - | 是否展示为小红点 |
| color | string | `'#e87369'` | 自定义颜色 |
| text | string | - | 展示的文本，当传入文本时，忽略 count 和 maxCount |
| maxCount | number | `99` | 数字最大显示值 |
| children | ReactNode | - | 子元素，可以是文本或者元素 |
| className | string | - | 自定义类名 |
| ...props | any | - | 其他属性 |

### 示例

#### 展示数字

```jsx
<Badge count={5}>图标</Badge>
```

#### 超过最大显示值的数字显示为 `${maxCount}+`

```jsx
<Badge count={123}>图标</Badge>
```

#### 自定义颜色

```jsx
<Badge count={5} color='#f7ba2a'>图标</Badge>
```

#### 展示小红点

```jsx
<Badge dot>图标</Badge>
```

#### 展示文本

```jsx
<Badge text='新'>图标</Badge>
```

#### 自定义子元素

```jsx
<Badge>
  <Image src='...' />
</Badge>
```