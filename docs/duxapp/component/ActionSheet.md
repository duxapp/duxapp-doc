---
sidebar_position: 10
---

# ActionSheet 弹出菜单

封装弹出菜单功能

## 示例

import { Preview } from '@site/src/components/Preview'

<Preview name='ActionSheet' />

```jsx
import { Header, ScrollView, TopView, ActionSheet, Button, confirm } from '@/duxui'

export default function ActionSheetExample() {

  return <TopView>
    <Header title='Absolute' />
    <ScrollView>
      <Button
        onClick={async () => {
          const res = await ActionSheet.show({
            title: '请选择',
            list: ['选项1', '选项2', '选项3']
          })
          confirm({
            title: `index:${res.index} ${res.item}`
          })
        }}
      >弹出菜单</Button>
    </ScrollView>
  </TopView>
}

```

## 方法

### show(option)

弹出菜单的方法

参数说明
| 名称 | 类型 | 必填 | 默认值 | 说明 |
| ---- | ---- | -------- | ------- | ------- |
| title | string | 否 |  | 标题 |
| list | string[] | 是 |  | 项目列表 |

返回值

| 名称 | 类型 | 说明 |
| ---- | ---- | ------- |
| item | string | 选择的项目 |
| index | number | 项目的索引 |