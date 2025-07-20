---
sidebar_position: 1
---

# Text 文本

对Text的封装，对主题色、字号等进行了主题配置，对常用css的快捷属性封装

## 示例

import { Preview } from '@site/src/components/Preview'

<Preview name='Text' />

```jsx
import { Card, TestIcon, Text, Header, ScrollView, TopView, GroupList, Space } from '@/duxuiExample'

export default function TextExample() {
  return <TopView>
    <Header title='Text' />
    <ScrollView>
      <GroupList>
        <GroupList.Item title='基础用法'>
          <Card>
            <Space>
              <Text type='primary'>primary</Text>
              <Text type='secondary'>secondary</Text>
              <Text type='success'>success</Text>
              <Text type='danger'>danger</Text>
              <Text type='warning'>warning</Text>
              <Text color={1}>color1</Text>
              <Text color={2}>color2</Text>
              <Text color={3}>color3</Text>
              <Text color={4} className='bg-primary'>color4</Text>
            </Space>
          </Card>
        </GroupList.Item>
        <GroupList.Item title='大小'>
          <Card>
            <Space>
              <Text size={1}>size1</Text>
              <Text size={2}>size2</Text>
              <Text size={3}>size3</Text>
              <Text size={4}>size4</Text>
              <Text size={5}>size5</Text>
              <Text size={6}>size6</Text>
              <Text size={7}>size7</Text>
            </Space>
          </Card>
        </GroupList.Item>
        <GroupList.Item title='样式'>
          <Card>
            <Space>
              <Text delete size={5}>删除线</Text>
              <Text underline size={5}>下划线</Text>
              <Text bold size={5}>加粗</Text>
            </Space>
          </Card>
        </GroupList.Item>
        <GroupList.Item title='省略'>
          <Card>
            <Space>
              <Text size={5} numberOfLines={1}>A design is a plan or specification for the construction of an object or system or for the implementation of an activity or process, or the result of that plan or specification in the form of a prototype, product or process. The verb to design expresses the process of developing a design. In some cases, the direct construction of an object without an explicit prior plan (such as in craftwork, some engineering, coding, and graphic design) may also be considered to be a design activity</Text>
              <Text size={5} numberOfLines={2}>A design is a plan or specification for the construction of an object or system or for the implementation of an activity or process, or the result of that plan or specification in the form of a prototype, product or process. The verb to design expresses the process of developing a design. In some cases, the direct construction of an object without an explicit prior plan (such as in craftwork, some engineering, coding, and graphic design) may also be considered to be a design activity</Text>
            </Space>
          </Card>
        </GroupList.Item>
        <GroupList.Item title='嵌套'>
          <Card>
            <Space>
              <Text delete size={5}>
                删除线
                <Text underline size={5}>下划线</Text>
                <Text color={3}>颜色1</Text>
                <Text type='primary'>颜色2</Text>
              </Text>
            </Space>
          </Card>
        </GroupList.Item>
        <GroupList.Item title='图标组合'>
          <Card>
            <Space>
              <Text size={5} onClick={e => console.log('文本点击')}>
                删除线
                <Text color={3}>颜色1</Text>
                <TestIcon name='weixinzhifu' />
                <Text type='primary'>颜色2<TestIcon name='buji' onClick={e => console.log('嵌套使用，里面的元素将失去点击事件')} /></Text>
              </Text>
            </Space>
          </Card>
        </GroupList.Item>
      </GroupList>
    </ScrollView>
  </TopView>
}
```

## Props

继承自Taro的[Text Props](https://nervjs.github.io/taro-docs/docs/components/base/text#textprops)

### type

文本主题色

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| enum('primary', 'secondary', 'success', 'danger', 'warning') | 否 |  |

### color

文本颜色 1-4是配置的主题颜色，优先级高于 type

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| 1 \| 2 \| 3 \| 4 \| string | 否 |  |

### size

文字大小 数字1-7使用的是主题配置的字号 数字大于等于12时，将使用px处理

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| 1 \| 2 \| 3 \| 4 \| 5 \| 6 \| 7 \| number | 否 | 3 |

### lineHeight

行距倍数

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number | 否 | 1.4 |

### bold

是否加粗

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### delete

是否有删除线

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### underline

是否有下划线

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### numberOfLines

显示的行数，超出部分将被截断

可能还需要配合父元素的布局，否则可能不会生效

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number | 否 |  |

### break

是否强制换行，当有很长的英文单词的情况下会截断这个单词的显示

RN不支持此属性

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### nowrap

是否禁止换行，防止文本因布局而换行

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### align

文本对齐方式

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| enum('left', 'center', 'right', 'justify') | 否 | left |

### children

子元素 子元素只能是 文本、Text组件、图标组件

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string \| ReactElement | 否 |  |

### grow

设置为true相当于 `flex: 1`

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### shrink

设置为true相当于 `flex-shrink: 0`

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### self

对 `align-self` 的封装

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| enum('start', 'end', 'center', 'baseline', 'stretch') | 否 |  |