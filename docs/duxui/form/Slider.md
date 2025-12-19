---
sidebar_position: 12
---

# Slider 滑块

兼容 Taro 的滑块组件，RN 端使用自实现以规避官方组件在新架构下的兼容性问题，API 与 Taro 基本一致。

## 示例

```jsx
import { Header, ScrollView, TopView, Form, FormItem, Card, DividerGroup, Slider } from '@/duxuiExample'
import { useState } from 'react'

export default function SliderExample() {
  const [value, setValue] = useState(30)
  return <TopView>
    <Header title='Slider' />
    <ScrollView>
      <Card margin verticalPadding={false}>
        <DividerGroup>
          <FormItem label='基础' field='slider1'>
            <Slider value={value} onChange={setValue} />
          </FormItem>
          <FormItem label='禁用' field='slider2'>
            <Slider value={60} disabled />
          </FormItem>
        </DividerGroup>
      </Card>
    </ScrollView>
  </TopView>
}
```

## Props

继承自 Taro 的 [Slider Props](https://nervjs.github.io/taro-docs/docs/components/forms/slider)，常用属性：

- `value` (`number`): 当前值
- `min` / `max` (`number`): 最小/最大值
- `step` (`number`): 步长
- `disabled` (`boolean`): 是否禁用
- `showValue` (`boolean`): 是否显示右侧数字
- `onChange` (`(value: number) => void`): 值变更回调
