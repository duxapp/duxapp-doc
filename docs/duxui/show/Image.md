---
sidebar_position: 2
---

# Image 图片

推图片的封装，实现了预览，多图预览，在RN端使用 `expo-image` 实现，提供更好的性能

## 示例

```jsx
import { Image, Header, ScrollView, TopView, GroupList, Space, px, Text } from '@/duxuiExample'

export default function ImagedExample() {
  return <TopView>
    <Header title='Image' />
    <ScrollView>
      <GroupList>
        <GroupList.Item title='基础用法'>
          <Space row>
            <Image style={{ width: px(200), height: px(160) }}
              src='https://img0.baidu.com/it/u=1684532727,1424929765&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1681318800&t=50301360a9bd698d5f29da34ffb5cbb0'
            />
            <Image style={{ width: px(200), height: px(160) }}
              radiusType='round-min'
              src='https://img1.baidu.com/it/u=3007048469,3759326707&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1681318800&t=be56dabb266748e4ab260d11a100b46f'
            />
          </Space>
        </GroupList.Item>
        <GroupList.Item title='预览'>
          <Image style={{ width: px(200), height: px(160) }} preview
            src='https://img0.baidu.com/it/u=1684532727,1424929765&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1681318800&t=50301360a9bd698d5f29da34ffb5cbb0'
          />
        </GroupList.Item>
        <GroupList.Item title='多图预览'>
          <Image.Group>
            <Space row>
              <Image style={{ width: px(200), height: px(160) }}
                src='https://img0.baidu.com/it/u=1684532727,1424929765&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1681318800&t=50301360a9bd698d5f29da34ffb5cbb0'
              />
              <Image style={{ width: px(200), height: px(160) }}
                src='https://img1.baidu.com/it/u=3007048469,3759326707&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1681318800&t=be56dabb266748e4ab260d11a100b46f'
              />
              <Image style={{ width: px(200), height: px(160) }}
                src='https://img1.baidu.com/it/u=4049022245,514596079&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1681318800&t=2b375ed6d93d638d1be405d04eb8c7f2'
              />
            </Space>
          </Image.Group>
        </GroupList.Item>
        <GroupList.Item title='SVG' desc='当使用svg时，请勿使用widthFix或者heightFix'>
          <Image mode='aspectFit' style={{ width: px(200), height: px(100) }}
            src={require('./static/image.svg')}
          />
        </GroupList.Item>
        <GroupList.Item title='模式'>
          <Space>
            <Text>aspectFill</Text>
            <Image style={{ width: px(400), height: px(400) }}
              mode='aspectFill'
              src='https://img0.baidu.com/it/u=1684532727,1424929765&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1681318800&t=50301360a9bd698d5f29da34ffb5cbb0'
            />
            <Text>aspectFit</Text>
            <Image style={{ width: px(400), height: px(400) }}
              mode='aspectFit'
              src='https://img0.baidu.com/it/u=1684532727,1424929765&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1681318800&t=50301360a9bd698d5f29da34ffb5cbb0'
            />
            <Text>scaleToFill</Text>
            <Image style={{ width: px(400), height: px(400) }}
              mode='scaleToFill'
              src='https://img0.baidu.com/it/u=1684532727,1424929765&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1681318800&t=50301360a9bd698d5f29da34ffb5cbb0'
            />
            <Text>center</Text>
            <Image style={{ width: px(400), height: px(400) }}
              mode='center'
              src='https://img0.baidu.com/it/u=1684532727,1424929765&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1681318800&t=50301360a9bd698d5f29da34ffb5cbb0'
            />
            <Text>widthFix</Text>
            <Image style={{ width: px(400) }}
              mode='widthFix'
              src='https://img0.baidu.com/it/u=1684532727,1424929765&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1681318800&t=50301360a9bd698d5f29da34ffb5cbb0'
            />
            <Text>heightFix</Text>
            <Image style={{ height: px(400) }}
              mode='heightFix'
              src='https://img0.baidu.com/it/u=1684532727,1424929765&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1681318800&t=50301360a9bd698d5f29da34ffb5cbb0'
            />
          </Space>
        </GroupList.Item>
        <GroupList.Item title='超长图' desc='RN的Image显示超长图会模糊，此处替换为expo-image后解决了这个问题'>
          <Image mode='widthFix' style={{ width: px(600) }}
            src='https://cdn.mifi.top/2024-09-09/5f655a3e0bfa6f4de8bd.jpg'
          />
        </GroupList.Item>
      </GroupList>
    </ScrollView>
  </TopView>
}
```

## Props

继承自Taro的[Text Props](https://nervjs.github.io/taro-docs/docs/components/media/image#imageprops)

### preview

是否点击图片进行预览

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### images

单图预览时的多图片

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string[] | 否 |  |

### radiusType

圆角类型

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| enum('square', 'round-min') | 否 | square |

### square

将图片显示为正方形，需要指定 width 属性

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

## Image.Group Props

在这个组件内部的 Image，将会被用于预览

