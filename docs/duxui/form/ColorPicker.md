---
sidebar_position: 20
---

# ColorPicker 颜色选择器

通过颜色面板选择颜色

## 示例

import { Preview } from '@site/src/components/Preview'

<Preview name='ColorPicker' />

```jsx
import { Header, ScrollView, TopView, GroupList, ColorPicker } from '@/duxuiExample'

export default function ColorPickerExample() {
  return <TopView>
    <Header title='ColorPicker' />
    <ScrollView>
      <GroupList>
        <GroupList.Item title='颜色选择'>
          <ColorPicker preview className='p-2 bg-white r-2 self-start' />
        </GroupList.Item>
      </GroupList>
    </ScrollView>
  </TopView>
}
```

## Props

继承自[Column Props](/docs/duxui/layout/Column)

### onChange

值变化回调函数

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| (value: string) => void | 否 |  |

### size

颜色选择器的尺寸

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number | 否 | 200 |

### preview

开启颜色预览

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean \| rgb \| hex | 否 | |
