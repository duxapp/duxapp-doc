# 分割线(Divider)

用于在视图中添加水平或垂直分隔符。

## 使用示例

```jsx
import { Divider } from '@/components/Divider'

function Example() {
  return (
    <View>
      <Text>上边有间隔的水平分隔线</Text>
      <Divider size={1} padding={10} />

      <Text>虚线垂直分隔线</Text>
      <Divider direction='vertical' type='dashed' />

      <Text>实线垂直分隔线</Text>
      <Divider direction='vertical' type='solid' size={2} />

      <Text>下边有间隔的水平分隔线</Text>
      <Divider size={1} padding={10} />
    </View>
  )
}
```

## API

### Divider

| 属性名 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| direction | string | 'horizontal' | 否 | 分割线的方向，可选值为 'horizontal' 或 'vertical' |
| size | number | - | 否 | 分割线的宽度，单位为 px |
| padding | number | - | 否 | 分割线的上下（水平分隔线）或左右（垂直分隔线）内边距，单位为 px |
| type | string | - | 否 | 分割线的类型，可选值为 'solid'（实线）或 'dashed'（虚线） |

## 注意事项

- `size` 和 `padding` 的值必须是数字类型，单位为 px。如果不传或传入非数字类型，则不显示对应样式。