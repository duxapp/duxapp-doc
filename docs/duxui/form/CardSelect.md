---
sidebar_position: 12
---

# CardSelect 卡片选择

一个丰富样式的卡片类型的选择器，同时支持单选和多选模式

对于每个选项，请给其子元素传入 文本 或者图标，这样其样式才能被控制

## 示例

import { Preview } from '@site/src/components/Preview'

<Preview name='CardSelect' />

```jsx
import { GroupList } from '@/duxuiExample'
import { CardSelect, CardSelectGroup, Grid, Header, ScrollView, TopView, Form, FormItem, Text } from '@/duxui'

const list = [
  { value: 1, title: '标题1', desc: '简介1' },
  { value: 2, title: '标题2', desc: '简介2' },
  { value: 3, title: '禁用', desc: '简介3', disabled: true },
  { value: 4, title: '只禁用选择', desc: '简介4', disabledCheck: true },
  { value: 5, title: '颜色', desc: '简介5', color: '#54BD72' },
  { value: 6, title: '标颜色题6', desc: '简介6', color: '#FFC331' },
  { value: 7, title: '边框', desc: '简介7', border: true },
  { value: 8, title: '镂空', desc: '简介7', plain: true }
]

export default function CardSelectExample() {
  return <TopView>
    <Header title='CardSelect' />
    <ScrollView>
      <Form>
        <GroupList>
          <GroupList.Item title='基础用法'>
            <FormItem field='field1'>
              <CardSelectGroup>
                <Grid center={false} gap={24} column={3}>
                  {
                    list.map(({ title, desc, ...props }) => {
                      return <CardSelect key={props.value} {...props}>
                        <Text>{title}</Text>
                        <Text>{desc}</Text>
                      </CardSelect>
                    })
                  }
                </Grid>
              </CardSelectGroup>
            </FormItem>
          </GroupList.Item>
          <GroupList.Item title='圆角'>
            <FormItem field='field2'>
              <CardSelectGroup>
                <Grid center={false} gap={24} column={3}>
                  {
                    list.slice(0, 3).map(({ title, desc, value }, index) => {

                      return <CardSelect key={value} value={value} radiusType={['square', 'round-min', 'round'][index]}>
                        <Text>{title}</Text>
                        <Text>{desc}</Text>
                      </CardSelect>
                    })
                  }
                </Grid>
              </CardSelectGroup>
            </FormItem>
          </GroupList.Item>
          <GroupList.Item title='多选'>
            <FormItem field='field3'>
              <CardSelectGroup RadioGroup>
                <Grid center={false} gap={24} column={3}>
                  {
                    list.slice(0, 3).map(({ title, desc, value }) => {

                      return <CardSelect key={value} value={value}>
                        <Text>{title}</Text>
                        <Text>{desc}</Text>
                      </CardSelect>
                    })
                  }
                </Grid>
              </CardSelectGroup>
            </FormItem>
          </GroupList.Item>
          <GroupList.Item title='定制选中的样式'>
            <FormItem field='field4'>
              <CardSelectGroup checkedProps={{ plain: true, border: true, color: '#3162C9' }}>
                <Grid center={false} gap={24} column={3}>
                  {
                    list.slice(0, 3).map(({ title, desc, value }) => {
                      return <CardSelect key={value} value={value} color='#373D52'>
                        <Text>{title}</Text>
                        <Text>{desc}</Text>
                      </CardSelect>
                    })
                  }
                </Grid>
              </CardSelectGroup>
            </FormItem>
          </GroupList.Item>
          <GroupList.Item title='定制样式'>
            <FormItem field='field5'>
              <CardSelectGroup checkedProps={{ plain: true, border: true, color: '#3162C9' }}>
                <Grid center={false} gap={24} column={3}>
                  {
                    list.slice(0, 3).map(({ title, desc, value }) => {
                      return <CardSelect key={value} value={value} color='#373D52' border>
                        <Text>{title}</Text>
                        <Text>{desc}</Text>
                      </CardSelect>
                    })
                  }
                </Grid>
              </CardSelectGroup>
            </FormItem>
          </GroupList.Item>
        </GroupList>
      </Form>
    </ScrollView>
  </TopView>
}
```

## Props

继承自Taro的[View Props](https://nervjs.github.io/taro-docs/docs/components/viewContainer/view#viewprops)

### value

当前选项的值 

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string \| number | 是 |  |

### defaultValue

默认值 

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string \| number | 是 |  |

### checked

是否选中，单独使用时，选中这个选项，配合onClick来处理 

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 是 |  |

### plain

是否镂空

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 是 | false |

### color

颜色

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 是 |  |

### border

是否有边框

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 是 | false |

### borderColor

边框颜色

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 是 |  |

### disabled

是否禁用

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 是 | false |

### disabledCheck

仅禁用选中，样式不是禁用样式

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 是 | false |

### radiusType

指定按钮圆角类型

- square 直角
- round 圆角
- round-min 很小的圆角

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| enum('square', 'round', 'round-min') | 否 | round-min |

## CardSelectGroup Props

这个用于将多个 CardSelect 组合成一个表单的组件，类似于 RadioGroup

### value

选中的值

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string \| number \| (string \| number)[] | 否 |  |

### onChange

值变化回调

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| (string \| number \| (string \| number)[]) => void | 否 |  |

### RadioGroup

是否多选

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 是 | false |

### checkedProps

选中的样式，用于覆盖 `CardSelect` 的样式

可以传递下面的属性用于覆盖

- color
- plain
- border
- borderColor

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| object | 是 |  |