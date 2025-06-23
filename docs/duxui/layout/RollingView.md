---
sidebar_position: 6
---

# RollingView 自动滚动容器

将子元素滚动起来，像滚动的公告，就能用这个组件实现

使用这个组件时，组件需要具有高度和宽度，可以直接指定宽高，也可以是 Flex 布局获得的宽高

## 示例

import { Preview } from '@site/src/components/Preview'

<Preview name='RollingView' />

```jsx
import { Header, ScrollView, TopView, GroupList, RollingView, Text, px, Column, Row, Image } from '@/duxuiExample'

export default TopView.page(function RollingViewExample() {

  return <>
    <Header title='RollingView' />
    <ScrollView>
      <GroupList>
        <GroupList.Item title='基础用法' desc='组件需要有宽度和高度，否则将无法运行'>
          <RollingView className='bg-warning r-1' style={{ height: px(80) }}>
            <Column className='h-full ph-3' justify='center'>
              <Text style={{ whiteSpace: 'nowrap' }}>这是公告内容，这个公告将滚动</Text>
            </Column>
          </RollingView>
        </GroupList.Item>
        <GroupList.Item title='自定义用法'>
          <RollingView className='bg-white r-1' style={{ height: px(160) }}>
            <Row className='h-full ph-3 items-center gap-3'>
              <Image
                src='https://img0.baidu.com/it/u=1684532727,1424929765&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1681318800&t=50301360a9bd698d5f29da34ffb5cbb0'
                style={{ width: px(120) }}
                square
              />
              <Column className='gap-2'>
                <Text bold>这是商品标题</Text>
                <Text size={7} bold type='danger'>¥128</Text>
              </Column>
            </Row>
          </RollingView>
        </GroupList.Item>
        <GroupList.Item title='超宽的内容'>
          <RollingView
            className='bg-warning r-1'
            style={{ height: px(80) }}
            duration={8000}
          >
            <Column className='h-full ph-3' justify='center' style={{ width: px(1400) }}>
              <Text style={{ whiteSpace: 'nowrap' }}>这是公告内容，这个公告将滚动，如果文本的宽度超过一屏幕的宽度，需要自己指定一个宽度</Text>
            </Column>
          </RollingView>
        </GroupList.Item>
        <GroupList.Item title='滚动时间' desc='设置时间指的是滚动完一次需要的时间'>
          <RollingView
            className='bg-warning r-1'
            style={{ height: px(80) }}
            duration={8000}
          >
            <Column className='h-full ph-3' justify='center'>
              <Text style={{ whiteSpace: 'nowrap' }}>这是公告内容，这个公告将滚动</Text>
            </Column>
          </RollingView>
        </GroupList.Item>
        <GroupList.Item title='垂直滚动'>
          <RollingView className='bg-white r-1'
            style={{ height: px(200) }}
            vertical
            duration={2000}
          >
            <Row className='ph-3 items-center gap-3'>
              <Image
                src='https://img0.baidu.com/it/u=1684532727,1424929765&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1681318800&t=50301360a9bd698d5f29da34ffb5cbb0'
                style={{ width: px(160) }}
                square
              />
              <Column className='gap-2'>
                <Text bold>这是商品标题</Text>
                <Text size={7} bold type='danger'>¥128</Text>
              </Column>
            </Row>
          </RollingView>
        </GroupList.Item>
        <GroupList.Item title='垂直超过容器高度'>
          <RollingView className='bg-white r-1'
            style={{ height: px(200) }}
            vertical
          >
            <Column className='bg-primary items-center justify-center' style={{ height: px(150) }}>
              <Text size={5} bold color={4}>文本 1</Text>
            </Column>
            <Column className='bg-success items-center justify-center' style={{ height: px(150) }}>
              <Text size={5} bold color={4}>文本 2</Text>
            </Column>
            <Column className='bg-warning items-center justify-center' style={{ height: px(150) }}>
              <Text size={5} bold color={4}>文本 3</Text>
            </Column>
          </RollingView>
        </GroupList.Item>
      </GroupList>
    </ScrollView>
  </>
})
```

## Props

继承自Taro的[View Props](https://nervjs.github.io/taro-docs/docs/components/viewContainer/view#viewprops)

### duration

滚动一屏需要的时长

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number | 否 | 5000 |

### vertical

是否垂直方向滚动

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |
