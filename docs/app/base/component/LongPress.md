# 长按(LongPress)

`LongPress` 组件是一个支持长按事件和普通点击事件的组件。

## 使用示例

```jsx
import { LongPress } from '@/components/LongPress';

export default function Example() {
  const handleClick = () => console.log('Click');
  const handleLongPress = () => console.log('Long Press');

  return (
    <LongPress
      onPress={handleClick}
      onLongPress={handleLongPress}
    />
  );
}
```

## API

### LongPress props

| 参数 | 说明 | 类型 | 默认值 |
| ----------- | ---------------------------- | ------------ | ------ |
| onPress | 普通点击事件的回调函数 | (event) => {}| - |
| onLongPress | 长按事件的回调函数 | (event) => {}| - |
| ...props | 其他 `View` 组件的属性和事件 | - | - |

## 注意事项

- 长按事件的触发时间为 600ms，可通过修改组件源码来更改触发时间。
- `LongPress` 组件内部渲染了一个 `View` 组件，因此支持 `View` 组件的所有属性和事件。