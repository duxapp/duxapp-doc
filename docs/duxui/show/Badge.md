---
sidebar_position: 3
---

# Badge 徽标

用于展示未读消息数量，红点

## 示例

import { Preview } from '@site/src/components/Preview'

<Preview name='Badge' />

```jsx
import { Badge, Card, Avatar, Header, ScrollView, TopView, GroupList, Space } from '@/duxuiExample'

export default function BadgeExample() {
  return <TopView>
    <Header title='Badge' />
    <ScrollView>
      <GroupList>
        <GroupList.Item title='基础用法'>
          <Card>
            <Space row>
              <Badge count={5}>
                <Avatar radiusType='round-min'>头像</Avatar>
              </Badge>
              <Badge count={100}>
                <Avatar radiusType='round-min'>头像</Avatar>
              </Badge>
              <Badge count={20} color='blue'>
                <Avatar radiusType='round-min'>头像</Avatar>
              </Badge>
              <Badge color='orange' text='自定义'>
                <Avatar radiusType='round-min'>头像</Avatar>
              </Badge>
            </Space>
          </Card>
        </GroupList.Item>
        <GroupList.Item title='最大数量10'>
          <Card>
            <Space row>
              <Badge count={15} maxCount={10}>
                <Avatar radiusType='round-min'>头像</Avatar>
              </Badge>
              <Badge count={9} maxCount={10}>
                <Avatar radiusType='round-min'>头像</Avatar>
              </Badge>
              <Badge count={10} maxCount={10} color='blue'>
                <Avatar radiusType='round-min'>头像</Avatar>
              </Badge>
            </Space>
          </Card>
        </GroupList.Item>
        <GroupList.Item title='点状'>
          <Card>
            <Space row>
              <Badge dot>
                <Avatar radiusType='round-min'>头像</Avatar>
              </Badge>
              <Badge dot color='#666'>
                <Avatar radiusType='round-min'>头像</Avatar>
              </Badge>
              <Badge dot color='blue'>
                <Avatar radiusType='round-min'>头像</Avatar>
              </Badge>
            </Space>
          </Card>
        </GroupList.Item>
        <GroupList.Item title='单独使用红点'>
          <Card>
            <Space row>
              <Badge count={20} />
              <Badge count={20} color='#666' />
              <Badge count={20} color='blue' />
              <Badge count={20} color='green' />
              <Badge count={20} text='自定义' color='orange' />
            </Space>
          </Card>
        </GroupList.Item>
        <GroupList.Item title='单独使用点状'>
          <Card>
            <Space row>
              <Badge dot />
              <Badge dot color='#666' />
              <Badge dot color='blue' />
              <Badge dot color='green' />
              <Badge dot color='orange' />
            </Space>
          </Card>
        </GroupList.Item>
      </GroupList>
    </ScrollView>
  </TopView>
}
```

## Props

继承自Taro的[View Props](https://nervjs.github.io/taro-docs/docs/components/viewContainer/view#viewprops)

### count

数量，数量大于0时才会显示

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number | 否 |  |

### dot

是否只显示圆点

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### color

颜色

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 | #F24844 |

### outside

是否显示在元素的外侧

在有子元素并且不是点状的时候生效

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### text

手动填写文本内容

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 |  |

### maxCount

最大数量，超过此值时将显示

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number | 否 | 99 |

### children

组件的子元素，会被包含在徽标元素中

如果没有子元素，可以用来单独显示

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| ReactElement | 否 |  |