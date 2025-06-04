---
sidebar_position: 6
---

# Card 卡片

卡片布局，带有外边距，内边距、圆角、阴影的组件

## 示例

import { Preview } from '@site/src/components/Preview'

<Preview name='Card' />

```jsx
import { Card, CardTitle, Divider, Image, Header, ScrollView, TopView, GroupList, Space, Button, px, Column, Text } from '@/duxuiExample'

export default function CardExample() {
  return <TopView>
    <Header title='Card' />
    <ScrollView>
      <GroupList>
        <GroupList.Item title='基础用法' desc='Card 组件是一个有背景颜色、阴影效果、内外边距的容器，其中的内容需要自己编写'>
          <Card>
            <Space>
              <CardTitle>【长沙-杜鹃万达广场店】</CardTitle>
              <Space row>
                <Image
                  style={{ width: px(200) }}
                  square
                  radiusType='round-min'
                  src='https://img0.baidu.com/it/u=1684532727,1424929765&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1681318800&t=50301360a9bd698d5f29da34ffb5cbb0'
                />
                <Column grow className='gap-2'>
                  <Text bold>杜鹃花盛开了，什么时候是最好的赏花季节</Text>
                  <Text size={1} color={2}>2024-05-04</Text>
                </Column>
              </Space>
              <Divider type='dashed' />
              <Space row justify='end'>
                <Button size='m' >立即开门</Button>
                <Button size='m' >查看详情</Button>
              </Space>
            </Space>
          </Card>
        </GroupList.Item>
      </GroupList>
    </ScrollView>
  </TopView>
}
```

## Props

如果设置 shadow 设置为 true，则继承自[BoxShadow Props](../base/BoxShadow)

否则继承自Taro的[View Props](https://nervjs.github.io/taro-docs/docs/components/viewContainer/view#viewprops)

### shadow

是否显示阴影

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | true |

### radius

圆角大小

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number | 否 | 24 |

### margin

是否使用外边距

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### disableMarginTop

启用外边距后，禁用上边的外边距

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### disableMarginBottom

启用外边距后，禁用下边的外边距

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### verticalPadding

是否显示垂直方向的内边距

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | true |

### row

是否横向排列

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### wrap

是否自动换行 相当于 `flex-wrap: wrap`

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### items

对 `align-items` 的封装

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| enum('start', 'end', 'center', 'baseline', 'stretch') | 否 | stretch |

### justify

对 `justify-content` 的封装

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| enum('start', 'end', 'center', 'between', 'around') | 否 | start |

## 主题配置

主题配置位于 `theme.card`

### shadow

用于配置默认是否开启阴影效果

### radius

用于配置默认的radius大小

### margin

用于配置开启margin后margin的大小