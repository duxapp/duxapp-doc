# 头像(Avatar)
## Avatar 头像

### 属性

| 属性名       | 默认值         | 描述                                                                                   |
| ------------ | -------------- | ---------------------------------------------------------------------------------------- |
| `size`       | "m"       | 尺寸，默认为 "medium"（可选值：'s'  'm'  'l'）                                       |
| `radiusType` | "round"        | 头像边框类型，默认为 "round"（可选值：'square'  'round'  'round-min'）                      |
| `color`      | -              | 头像颜色                                                                              |
| `bgColor`    | -              | 头像背景颜色                                                                          |
| `url`        | -              | 头像图片地址                                                                          |
| `icon`       | -              | 头像图标，可以是任何支持的 React 组件                                               |
| `iconSize`   | -              | 头像图标尺寸                                                                          |
| `className`  | -              | 添加名                                                                               |
| `style`      | -              | 添加样式                                                                              |
| `children`   | -              | 子元素    


### 使用示例:

```jsx
import { Avatar } from '@/duxui'

// 使用 Avatar 组件
<Avatar
  size="m"
  radiusType="round"
  color="#3498db"
  bgColor="#ecf0f1"
  url="https://example.com/avatar.jpg"
  icon={<YourIconComponent />}
  iconSize={24}
  className="custom-avatar"
  style={{ border: '2px solid #e74c3c' }}
>
  {/* 如果没有url和icon 将使用此文本显示 */}
  文本
</Avatar>  
```

## Avatar.Group 头像组

### 属性

| 属性名       | 默认值         | 描述                                                                                   |
| ------------ | -------------- | ---------------------------------------------------------------------------------------- |
| `size`       | "m"            | 尺寸，默认为 "medium"（可选值：'s'  'm'  'l'）                                       |
| `radiusType` | "round"        | 头像边框类型，默认为 "round"（可选值：'square'  'round'  'round-min'）                      |
| `color`      | -              | 头像颜色                                                                              |
| `bgColor`    | -              | 头像背景颜色                                                                          |
| `iconSize`   | -              | 头像图标尺寸                                                                          |
| `children`   | -              | 子元素                                                                                |
| `span`       | -16            | 头像之间的距离，默认为 -16px                                                          |
| `max`        | -              | 最大头像数量，超出部分用 "+" 显示                                                     |
| `maxProps`   | -              | 当头像数量超出时，用于替代超出部分的头像 


### 使用示例:

```jsx
import { Avatar } from '@/duxui'

// 使用 AvatarGroup 组件
<Avatar.Group
  size="m"
  radiusType="round"
  color="#3498db"
  bgColor="#ecf0f1"
  iconSize={24}
  span={-8}
  max={5}
  maxProps={{
    size: 'm',
    radiusType: 'round',
    bgColor: '#3498db',
    color: '#fff',
  }}
>
  {/* 多个 Avatar 组件作为子元素 */}
  <Avatar />
  <Avatar />
  {/* ... */}
</Avatar.Group>
```