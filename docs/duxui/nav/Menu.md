---
sidebar_position: 4
---

# Menu 下拉菜单

下拉菜单，常见用于一些表单的筛选

## 示例

import { Preview } from '@site/src/components/Preview'

<Preview name='Menu' />

```jsx
import { Header, ScrollView, TopView, GroupList, Menu, MenuItem, Text, Form, FormItem, Button, Column, toast } from '@/duxuiExample'
import { useRef } from 'react'

export default function MenuExample() {

  const itemRef = useRef()

  return <TopView>
    <Header title='Menu' />
    <ScrollView>
      <Form>
        <GroupList>
          <GroupList.Item title='基础用法'>
            <Menu round>
              <FormItem field='show1'>
                <MenuItem
                  title='显示1'
                  options={[{ name: '标题1', value: 1 }, { name: '标题2', value: 2 }]}
                />
              </FormItem>
              <FormItem field='show2'>
                <MenuItem
                  column={2}
                  title='多列'
                  options={[{ name: 'ABC1', value: 1 }, { name: 'ABC2', value: 2 }, { name: 'ABC3', value: 3 }]}
                />
              </FormItem>
              <FormItem field='show3'>
                <MenuItem
                  title='自定义内容'
                  ref={itemRef}
                >
                  <Text>自定义显示</Text>
                  <Button onClick={() => itemRef.current.toggle()}>关闭</Button>
                </MenuItem>
              </FormItem>
            </Menu>
          </GroupList.Item>


          
          <GroupList.Item title='直角'>
            <Menu>
              <FormItem field='show4'>
                <MenuItem
                  title='允许取消'
                  cancel
                  options={[{ name: '标题1', value: 1 }, { name: '标题2', value: 2 }]}
                />
              </FormItem>
              <FormItem field='show5'>
                <MenuItem
                  column={2}
                  align='center'
                  title='居中对齐'
                  options={[{ name: 'ABC1', value: 1 }, { name: 'ABC2', value: 2 }, { name: 'ABC3', value: 3 }]}
                />
              </FormItem>
              <MenuItem
                title='自定义内容'
                ref={itemRef}
              >
                <Text>自定义显示</Text>
                <Button onClick={() => itemRef.current.toggle()}>关闭</Button>
              </MenuItem>
            </Menu>
          </GroupList.Item>
          <GroupList.Item title='点击事件'>
            <Menu>
              <FormItem field='show6'>
                <MenuItem
                  title='菜单1'
                  options={[{ name: '标题1', value: 1 }, { name: '标题2', value: 2 }]}
                />
              </FormItem>
              <FormItem field='show7'>
                <MenuItem
                  title='菜单2'
                  options={[{ name: 'ABC1', value: 1 }, { name: 'ABC2', value: 2 }, { name: 'ABC3', value: 3 }]}
                />
              </FormItem>
              <MenuItem
                title='点击菜单'
                ref={itemRef}
                onClick={() => toast('点击了菜单')}
              >

              </MenuItem>
            </Menu>
          </GroupList.Item>
        </GroupList>
      </Form>
      <Column style={{ height: 800 }} />
    </ScrollView>
  </TopView>
}
```

## Props

继承自 [Layout Props](../../duxapp/component/Layout#props)

### round

弹出的菜单是否显示圆角

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

## MenuItem Props

MenuItem 只能放在 Menu 的子元素中，但是不限制是一级子元素

继承自 [Row Props](../layout/Row#props)

### title

菜单项标题

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 是 |  |

### options

菜单项目

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| `{ value: any name: string }[]` | 是 |  |

### cancel

是否能取消选中项目

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### column

列数

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number | 否 | 1 |

### align

文本对齐方式

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| enum('left', 'center', 'right') | 否 | left |

### value

当前选中的值

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| any | 否 |  |

### onChange

值改变时触发的事件

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| (value: any) => void | 否 |  |

### renderIcon

自定义图标区域

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| ReactElement | 否 |  |

### children

自定义渲染弹出元素，优先级高于options

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| ReactElement | 否 |  |

### onClick

点击事件回调函数，当传入点击事件参数时，默认的点击事件将不会被触发

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| () => void | 否 |  |

## MenuItem 实例方法

### toggle()

切换菜单项的显示/隐藏状态
