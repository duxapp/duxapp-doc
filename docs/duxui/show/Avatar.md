---
sidebar_position: 5
---

# Avatar 头像

显示一个头像或者头像组

## 示例

import { Preview } from '@site/src/components/Preview'

<Preview name='Avatar' />

```jsx
import { Avatar, TestIcon, Header, ScrollView, TopView, GroupList, Space } from '@/duxuiExample'

export default function AvatarExample() {
  return <TopView>
    <Header title='Avatar' />
    <ScrollView>
      <GroupList>
        <GroupList.Item title='尺寸'>
          <Space row>
            <Avatar size='s' />
            <Avatar size='m' />
            <Avatar size='l' />
          </Space>
        </GroupList.Item>
        <GroupList.Item title='圆角类型'>
          <Space row>
            <Avatar size='m' radiusType='square' />
            <Avatar size='m' radiusType='round-min' />
            <Avatar size='m' radiusType='round' />
          </Space>
        </GroupList.Item>
        <GroupList.Item title='图标和图片'>
          <Space row>
            <Avatar size='m' icon={<TestIcon name='nav-mine-fill' />} />
            <Avatar size='m' url='https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png' />
          </Space>
        </GroupList.Item>
        <GroupList.Item title='头像组'>
          <Avatar.Group max={5} maxProps={{ color: '#666' }}>
            <Avatar>头像1</Avatar>
            <Avatar>头像2</Avatar>
            <Avatar>头像3</Avatar>
            <Avatar>头像4</Avatar>
            <Avatar>头像5</Avatar>
            <Avatar>头像6</Avatar>
            <Avatar>头像7</Avatar>
          </Avatar.Group>
        </GroupList.Item>
      </GroupList>
    </ScrollView>
  </TopView>
}
```

## Props

继承自Taro的[View Props](https://nervjs.github.io/taro-docs/docs/components/viewContainer/view#viewprops)

### size

头像尺寸

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| enum('s', 'm', 'l') | 否 | m |

### radiusType

头像圆角类型

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| enum('square', 'round', 'round-min') | 否 | round |

### color

头像颜色，当设置的图标或者文本时可用

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 | primaryColor |

### bgColor

头像背景颜色

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 | #eee |

### url

头像图片地址

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 |  |

### icon

头像图标，请传入一个图标组件实例

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| ReactElement | 否 |  |

### iconSize

头像图标尺寸

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number | 否 |  |

### children

传入文本作为头像内容

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 |  |

## Avatar.Group Props

将多个头像组成一个组，子元素只能放 `Avatar`

继承自Taro的[View Props](https://nervjs.github.io/taro-docs/docs/components/viewContainer/view#viewprops)

### size

头像尺寸

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| enum('s', 'm', 'l') | 否 | m |

### radiusType

头像圆角类型

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| enum('square', 'round', 'round-min') | 否 | round |

### color

头像颜色，当设置的图标或者文本时可用

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 | primaryColor |

### bgColor

头像背景颜色

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 | #eee |

### iconSize

头像图标尺寸

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number | 否 |  |

### children

子元素，放入多个Avatar

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number | 否 |  |

### span

头像之间的距离

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number | 否 | -16 |

### max

最大头像数量，超出部分用 "+" 显示

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number | 否 |  |

### maxProps

当头像数量超出时，用于替代超出部分的头像，这个属性传递给Avatar

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| AvatarProps | 否 |  |






