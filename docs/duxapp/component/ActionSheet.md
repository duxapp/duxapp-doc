---
sidebar_position: 10
---

# ActionSheet 弹出菜单

封装弹出菜单功能

## 示例

import { Preview } from '@site/src/components/Preview'

<Preview name='ActionSheet' />

```jsx
import { Header, ScrollView, TopView, GroupList, ActionSheet, Button, confirm } from '@/duxuiExample'

export default function ActionSheetExample() {

  return <TopView>
    <Header title='ActionSheet' />
    <ScrollView>
      <GroupList>
        <GroupList.Item title='基础用法' desc='这是一个方法，而不是一个组件，Promise返回选择结果'>
          <Button
            type='primary'
            size='l'
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
        </GroupList.Item>
      </GroupList>
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