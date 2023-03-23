# 阴影(BoxShadow)

## 组件说明

`BoxShadow` 组件用于添加阴影效果，可以自定义阴影颜色、大小、圆角等。

## 使用方法

### 属性说明

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

### 示例

#### 添加阴影效果

```jsx
<BoxShadow>
  子元素  
</BoxShadow>
```

#### 自定义阴影颜色

```jsx
<BoxShadow color='#f7ba2a' />
```

#### 自定义阴影大小

```jsx
<BoxShadow border={20} />
```

#### 自定义圆角半径

```jsx
<BoxShadow radius={10} />
```

#### 自定义阴影透明度

```jsx
<BoxShadow opacity={0.5} />
```

#### 自定义水平偏移距离

```jsx
<BoxShadow x={10} />
```

#### 自定义垂直偏移距离

```jsx
<BoxShadow y={10} />
```

#### 自定义子元素

```jsx
<BoxShadow>
  <Image src='...' />
</BoxShadow>
```