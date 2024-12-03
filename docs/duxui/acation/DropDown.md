---
sidebar_position: 4
---

# DropDown 下拉菜单

在元素做所在位置弹出一个菜单

## 示例

import { Preview } from '@site/src/components/Preview'

<Preview name='DropDown' />

```jsx
import { Header, ScrollView, TopView, GroupList, DropDown, Button, toast, Text, Space } from '@/duxuiExample'

const menus1 = [
  { text: '菜单1' },
  { text: '菜单2' },
  { text: '菜单3' },
  { text: '菜单4' }
]

const menus2 = [
  { text: '菜单1' },
  { type: 'line' },
  { text: '菜单2' },
  { text: '菜单3' },
  { type: 'line' },
  { text: '菜单4' }
]

export default function DropDownExample() {

  return <TopView>
    <Header title='DropDown' />
    <ScrollView>
      <GroupList>
        <GroupList.Item title='下拉菜单' desc=''>
          <DropDown
            menuList={menus1}
            onSelect={({ item }) => toast(item.text)}
          >
            <Button type='primary'>点击弹出</Button>
          </DropDown>
        </GroupList.Item>
        <GroupList.Item title='分割线' desc=''>
          <DropDown
            menuList={menus2}
            onSelect={({ item }) => toast(item.text)}
          >
            <Button type='primary'>点击弹出</Button>
          </DropDown>
        </GroupList.Item>
        <GroupList.Item title='弹出自定义内容' desc=''>
          <DropDown
            renderContent={<Space style={{ padding: 12, backgroundColor: '#fff' }}>
              <Text>菜单1</Text>
              <Text>菜单2</Text>
              <Text>菜单3</Text>
              <Text>自定义内容</Text>
            </Space>}
          >
            <Button type='primary'>点击弹出</Button>
          </DropDown>
        </GroupList.Item>
      </GroupList>
    </ScrollView>
  </TopView>
}
```

## Props

### menuList

菜单列表

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| DropDownMenuItem[] | 否 |  |

DropDownMenuItem说明

| 名称 | 类型 | 必填 | 说明 |
| ---- | ---- | -------- | ------- |
| text | string | 是 | 菜单名称 |
| line | boolean | 否 | 该项是否为分隔线 |

### renderContent

如果不传入 `menuList` 也可以用这个自定义渲染弹出的内容

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| DropDownMenuItem[] | 否 |  |

### onSelect

用户点击菜单回调

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| `(param: { item: { [key: string]: any }, index: number }) => void` | 否 |  |

### select

当前选中项的索引，选中的会在右侧生成一个图标

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number | 否 |  |

### className

传递给组件内部的 class，用于样式控制

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 |  |

### style

传递给组件内部的 class，用于样式控制

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| CSSProperties | 否 |  |

### children

子元素，显示点击区域

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| ReactElement | 否 |  |
