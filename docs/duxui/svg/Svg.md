---
sidebar_position: 1
---

# 基础组件

Taro系列中一直没有跨端的绘图工具，小程序端支持canvas但是不支持svg，RN端有 react-native-svg 支持svg，但是没有很好原生的canvas插件，社区的canvas都是基于WebView实现的，或者skia，这个插件的书写方式和canvas有较大的差异

所以开发了这个兼容小程序、H5和React Native 的Svg组件，来实现跨端绘图

组件的功能及属性完全模拟 [react-native-svg](https://github.com/software-mansion/react-native-svg) 实现，你可以查看此文档获得更多开发实例
## 示例

import { Preview } from '@site/src/components/Preview'

<Preview name='Svg' />

```jsx
import { Header, ScrollView, TopView, GroupList, pxNum, duxappTheme, Button, confirm, Column } from '@/duxuiExample'
import {
  Svg, Rect, Circle, Ellipse, Line, Image, Text, TSpan,
  Polyline, Polygon, Path,
  Defs, Use, G,
  LinearGradient, Stop, SvgToImage, SvgComponent
} from '@/duxui/components/Svg'
import { useRef } from 'react'
import { saveImageToPhotosAlbum } from '@tarojs/taro'

export default TopView.HOC(function SvgExample() {

  const toImage = useRef()

  const primary = duxappTheme.primaryColor
  const secondary = duxappTheme.secondaryColor

  return <>
    <Header title='Svg' />
    <ScrollView>
      <GroupList>
        <GroupList.Item title='基础用法'>
          <SvgToImage ref={toImage}>
            <Svg width={pxNum(702)} height={pxNum(1080)}>
              <Defs>
                <G id='items' stroke={primary}>
                  <Rect width={50} height={50} />
                  <Circle cx={75} cy={25} r={25} />
                  <Image x={100} y={0} width={50} height={50} href={require('./static/logo.jpg')} />
                  <Line x1={150} y1={0} x2={200} y2={50} strokeWidth={5} />
                  <Polyline points='200,0 250,0 250,50' />
                  <Polygon points='250,0 300,0 300,50' />
                  <Ellipse cx={25} cy={85} rx={25} ry={15} />
                  <Path d={generateRoundedRectPath(50, 60, 50, 50, 12)} />
                  <Text x={150} y={80} fontSize={24}>文本效果</Text>
                  <Text x={150} y={100} fontSize={18}
                    textAnchor='middle'
                  >对齐方式</Text>
                  <Text x={200} y={100} fontSize={18} dx='0 5 5 5 5 5' dy='0 5 5'>
                    文本
                    <TSpan dx={5}>子元素1</TSpan>
                    <TSpan x={200} y={130} fontStyle='italic'>
                      子元
                      <TSpan dx='10 10' fontWeight='bold'>素2</TSpan>
                    </TSpan>
                  </Text>
                </G>
                <LinearGradient id='lg' x1={0} y1={0} x2={1} y2={0}>
                  <Stop offset={0} stopColor={primary} />
                  <Stop offset={1} stopColor={secondary} />
                </LinearGradient>
              </Defs>
              <Use href='#items' fill={secondary} />
              <Use href='#items' x={0} y={140} fill='url(#lg)' />
              <Use href='#items' x={0} y={300} fill='url(#lg)' opacity={0.5}
                origin={[pxNum(702) / 2, 300]}
                rotation={10}
                scale={0.9}
              />
              <CustomSvg />
            </Svg>
          </SvgToImage>
          <Button type='primary' size='l'
            onClick={async () => {
              const { tempFilePath } = await toImage.current.capture()
              if (process.env.TARO_ENV === 'h5') {
                confirm({
                  title: 'H5不支持保存',
                  content: '你可以将获取的截图临时文件用于上传等操作(在h5端返回base64格式的图片)',
                  cancel: false
                })
                return
              }
              await saveImageToPhotosAlbum({ filePath: tempFilePath })
              confirm({
                title: '保存成功'
              })
            }}
          >保存到相册</Button>
        </GroupList.Item>
      </GroupList>
      <Column className='p-2' />
    </ScrollView>
  </>
})

// 画圆角矩形路径
const generateRoundedRectPath = (x, y, w, h, radius) => {
  const r = Math.min(radius, w / 2, h / 2);

  return `M ${x + r},${y}
    H ${x + w - r}
    A ${r},${r} 0 0 1 ${x + w},${y + r}
    V ${y + h - r}
    A ${r},${r} 0 0 1 ${x + w - r},${y + h}
    H ${x + r}
    A ${r},${r} 0 0 1 ${x},${y + h - r}
    V ${y + r}
    A ${r},${r} 0 0 1 ${x + r},${y}
    Z`.trim()
}

/**
 * 支持自定义组件
 * 但是组件需要用 SvgComponent 进行包裹，否则自定义组件里面的内容不会渲染
 */
const CustomSvg = () => {

  const primary = duxappTheme.primaryColor
  const secondary = duxappTheme.secondaryColor

  return <SvgComponent>
    <Defs>
      <G id='shape'>
        <Circle cx={50} cy={50} r={50} style='fill: #000;' />
        <Rect x={50} y={50} width={50} height={50} style='fill: #000' />
        <Circle cx={50} cy={50} r={5} style='fill: blue;' />
      </G>
    </Defs>
    <Use href='#shape' x={0} y={420} />
    <Rect
      x={120} y={420}
      width='20%' height='20%'
      rx={10} ry={10}
      stroke={secondary} fill={primary}
      // 不支持百分比，位置从Svg原点开始计算
      origin='120, 420'
      // scale={[0.5, 0.6]}
      scale={0.5}
      rotation={45}
      // RN上斜切效果在组合rotation后和其他端不一致，应该避免组合rotation使用
      // skew={10}
      // translate 写法在RN上不生效，需要分别写两个属性
      // translate={[50, 50]}
      translateX={30}
      translateY={30}
    />
  </SvgComponent>
}
```

:::info
- React Native 端使用 [react-native-svg](https://github.com/software-mansion/react-native-svg)
- 其他端将使用Canvas开发一套组件来匹配Svg的功能
- 小程序端其实也不是完全无法支持svg，例如，可以使用 Image 来显示svg字符串，或者使用 background: url() 也能实现
但是这样会有一定的局限性，例如：这样无法将Svg内容转为本地图片、无法实现组件事件、无法很好的支持动画动能
- 使用这个Svg，你可以用来开发商品海报、分销海报等功能，可以开发图片编辑器、海报设计器、转盘抽奖、电路模拟器等功能，且开发的这些功能都是跨端兼容的
:::


## 组件

已支持：
- Svg  
`width` `height` `viewBox` `preserveAspectRatio`
- Rect  
`x` `y` `width` `height`
- Circle  
`cx` `cy` `r`
- Ellipse  
`cx` `cy` `rx` `ry`
- Line  
`x1` `y1` `x2` `y2`
- Image  
`x` `y` `width` `height` `preserveAspectRatio`
- Text  
`x` `y` `dx` `dy` `fontSize` `fontWeight` `fontFamily` `textAnchor` `fontStyle`
- TSpan  
`x` `y` `dx` `dy` `fontSize` `fontWeight` `fontFamily` `textAnchor` `fontStyle`
- Polyline  
`points`
- Polygon  
`points`
- Path  
`d`
- Defs  
- Use  
`href` `x` `y`
- G
- LinearGradient  
`x1` `y1` `x2` `y2`
- RadialGradient  
`cx` `cy` `rx` `ry` `fx` `fy`
- Stop  
`offset` `stopColor` `stopOpacity`
- ClipPath
- SvgToImage 非Svg组件，是将Svg转图片的组件

未支持：

- TextPath
- Symbol
- Mask
- Pattern
- Marker
- SvgXml
- SvgUri
- SvgCss
- SvgCssUri
- ForeignObject(无法支持)

## 公共属性

已支持：
- id
- style
- opacity
- fill
- fillOpacity
- stroke
- strokeWidth
- strokeOpacity
- strokeLinecap
- strokeLinejoin
- strokeDasharray
- strokeDashoffset
- clipPath
- origin
- originX
- originY
- translate (RN的svg组件测试无效)
- translateX
- translateY
- rotation
- scale
- scaleX
- scaleY
- skew (RN上斜切效果在组合rotation后和其他端不一致，应该避免组合rotation使用)
- skewX
- skewY
- transform (如果要使用变换动画，需要使用这个属性实现，其他变换属性RN端不支持动画)

其他未列出的属性都不支持

## 事件
- onPress
- onPressIn
- onPressOut
- onLongPress
- onLayout

这些事件只能用于Svg的一级子元素，如果被嵌套，将无法获得事件

关于触摸事件，请参考[事件结合](./SvgEvent.md)

## SvgToImage Props

这个组件是将 Svg 转换为图片，方便进行下一步的处理

### children

子元素必须是 `Svg`，就像上面的示例代码一样

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| ReactElement | 是 |  |

### option

截图参数（可选），一个对象，对应的内容如下

| 名称 | 类型 | 必填 | 默认值 |
| ---- | ---- | -------- | ------- |
| format | 'png' \| 'jpg' | 否 | png |
| quality | number | 否 | 1 |

## SvgToImage 实例方法

### capture()

对Svg进行截图，异步返回图片临时文件路径，参考上面的示例代码

:::info
- H5截图将返回 base64 格式的图片，需要自行处理
- H5里面如果使用了Image要使用同源图片，或者服务器允许跨域访问的图片，否则将无法加载成功
:::