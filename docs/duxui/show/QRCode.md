---
sidebar_position: 11
---

# QRCode 二维码

用Svg渲染二维码，支持Logo等属性

## 示例

import { Preview } from '@site/src/components/Preview'

<Preview name='QRCode' />

```jsx
import { Header, ScrollView, TopView, GroupList, pxNum } from '@/duxuiExample'
import { QRCode } from '@/duxui/components/QRCode'

export default function QRCodeExample() {

  return <TopView>
    <Header title='QRCode' />
    <ScrollView>
      <GroupList>
        <GroupList.Item title='基础用法'>
          <QRCode
            value='http://duxapp.com'
          />
        </GroupList.Item>
        <GroupList.Item title='颜色'>
          <QRCode
            value='http://duxapp.com'
            color='darkblue'
            backgroundColor='lightblue'
          />
        </GroupList.Item>
        <GroupList.Item title='渐变'>
          <QRCode
            value='http://duxapp.com'
            enableLinearGradient
          />
        </GroupList.Item>
        <GroupList.Item title='Logo'>
          <QRCode
            value='http://duxapp.com'
            logo='https://duxapp.com/img/logo.jpg'
          />
        </GroupList.Item>
        <GroupList.Item title='尺寸、边距、Logo圆角' desc='组件需要从 @/duxui/components/QRCode 导入'>
          <QRCode
            value='http://duxapp.com'
            logo='https://duxapp.com/img/logo.jpg'
            size={pxNum(300)}
            logoSize={pxNum(100)}
            logoBorderRadius={pxNum(20)}
            logoMargin={pxNum(12)}
            logoBackgroundColor='red'
            quietZone={10}
          />
        </GroupList.Item>

      </GroupList>
    </ScrollView>
  </TopView>
}
```

## Props

### value

二维码内容

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 | duxui |

### size

二维码尺寸

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number | 否 | 100 |

### color

颜色

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 | white |

### backgroundColor

背景颜色

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 | white |

### logo

logo图片地址

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 |  |

### logoSize

Logo尺寸

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number | 否 | size * 0.2 |

### logoBackgroundColor

logo背景颜色，如果logo是png，有头部明部分才会生效

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 | transparent |

### logoMargin

logo外边距，和二维码之间的间隙

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number | 否 | 2 |

### logoBorderRadius

Logo圆角

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number | 否 | 0 |

### enableLinearGradient

是否开启渐变颜色

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 |  |

### gradientDirection

指定渐变方向 x1 y1 x2 y2

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| [number, number, number, number] | 否 | ['0%', '0%', '100%', '100%'] |

### linearGradient

指定渐变颜色

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| [string, string] | 否 | ['rgb(255,0,0)', 'rgb(0,255,255)'] |

### quietZone

周围空白区域大小

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number | 否 | 0 |

### ecl

纠错级别，使用文档

https://github.com/soldair/node-qrcode?tab=readme-ov-file#errorcorrectionlevel

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| 'L' \| 'M' \| 'Q' \| 'H' | 否 | M |

### onError

生成错误回调函数

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| (error: Error) => void | 否 |  |
