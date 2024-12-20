---
sidebar_position: 1
---

# Svg 跨端Svg功能

Taro系列中一直没有跨端的绘图工具，小程序端支持canvas但是不支持svg，RN端有 react-native-svg 支持svg，但是没有很好原生的canvas插件，社区的canvas都是基于WebView实现的，或者skia，这个插件的书写方式和canvas有较大的差异

所以开发了这个兼容小程序、H5和React Native 的Svg组件，来实现跨端绘图

组件的功能极其属性完全模拟 [react-native-svg](https://github.com/software-mansion/react-native-svg) 实现，你可以查看此文档获得更多开发实例

:::info
- React Native 端使用 [react-native-svg](https://github.com/software-mansion/react-native-svg)
- 其他端将使用Canvas开发一套组件来匹配Svg的功能
- 小程序端其实也不是完全无法支持svg，例如，可以使用 Image 来显示svg字符串，或者使用 background: url() 也能实现
但是这样会有一定的局限性，例如：这样无法将Svg内容转为本地图片、无法实现组件事件、无法很好的支持动画动能，当然后面这两个功能暂时还未实现
- 使用这个Svg，你可以用来开发商品海报、分销海报等功能，可以开发图片编辑器、海报设计器、转盘抽奖、电路模拟器等功能（后期实现），且开发的这些功能都是跨端兼容的
:::

## 基本示例

import { Preview } from '@site/src/components/Preview'

<Preview name='Svg' />

```jsx
import { Header, ScrollView, TopView, GroupList, pxNum, duxappTheme, Button, confirm } from '@/duxuiExample'
import {
  Svg, Rect, Circle, Ellipse, Line, Image, Text, TSpan,
  Polyline, Polygon, Path,
  Defs, Use, G,
  LinearGradient, Stop, SvgToImage
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
                <Rect id='rect' width='20%' height='20%' rx={10} ry={10} stroke={secondary} fill={primary} />
                <G id='shape'>
                  <Circle cx={50} cy={50} r={50} style='fill: #000;' />
                  <Rect x={50} y={50} width={50} height={50} style='fill: #000' />
                  <Circle cx={50} cy={50} r={5} style='fill: blue;' />
                </G>
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
              <Use href='#shape' x={0} y={420} />
              <Use href='#rect' x={120} y={420}
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
```

## 动画示例

<Preview name='SvgAnimated' />

```jsx
import { Header, ScrollView, TopView, GroupList, pxNum, duxappTheme, Row, Button } from '@/duxuiExample'
import {
  Svg, Rect,
  Animated, Easing
} from '@/duxui/components/Svg'
import { useEffect, useRef } from 'react'

const AnimatedRect = Animated.createAnimatedComponent(Rect)

export default TopView.HOC(function SvgAnimatedExample() {

  return <>
    <Header title='Svg动画' />
    <ScrollView>
      <GroupList>
        <Fade />
        <Color />
        <Loop />
        <Transform />
      </GroupList>
    </ScrollView>
  </>
})

const Fade = () => {

  const primary = duxappTheme.primaryColor
  const secondary = duxappTheme.secondaryColor

  const fadeAnim = useRef(new Animated.Value(1)).current

  const width = pxNum(702)
  const height = pxNum(180)

  return <GroupList.Item title='淡入淡出'>
    <Svg width={width} height={height}>
      <AnimatedRect
        x={(width - height) / 2}
        opacity={fadeAnim}
        width={height}
        height={height}
        rx={10} ry={10} stroke={secondary} fill={primary}
      />
    </Svg>
    <Row className='mt-2 gap-3 justify-center'>
      <Button type='primary'
        onClick={() => {
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
          }).start()
        }}
      >淡入</Button>
      <Button type='primary'
        onClick={() => {
          Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true
          }).start()
        }}
      >淡出</Button>
    </Row>
  </GroupList.Item>
}

const Color = () => {

  const primary = duxappTheme.primaryColor
  const secondary = duxappTheme.secondaryColor

  const colorAnim = useRef(new Animated.Value(0)).current

  const width = pxNum(702)
  const height = pxNum(180)

  useEffect(() => {
    setTimeout(() => {
      Animated.loop(
        Animated.timing(colorAnim, {
          toValue: 3,
          duration: 3000,
          useNativeDriver: false
        })
      ).start()
    }, 500)
  }, [colorAnim])

  return <GroupList.Item title='颜色'>
    <Svg width={width} height={height}>
      <AnimatedRect
        x={(width - height) / 2}
        width={height}
        height={height}
        rx={10} ry={10}
        stroke={secondary}
        fill={colorAnim.interpolate({
          inputRange: [0, 1, 2, 3],
          outputRange: [primary, secondary, duxappTheme.successColor, primary]
        })}
      />
    </Svg>
  </GroupList.Item>
}

const Loop = () => {

  const primary = duxappTheme.primaryColor
  const secondary = duxappTheme.secondaryColor

  const x = useRef(new Animated.Value(0)).current

  const size = 50

  useEffect(() => {
    setTimeout(() => {
      Animated.loop(
        Animated.timing(x, {
          toValue: 4,
          duration: 3000,
          easing: Easing.bounce,
          useNativeDriver: false
        })
      ).start()
    }, 500)
  }, [x])

  const width = pxNum(702)
  const height = pxNum(360)
  return <GroupList.Item title='循环动画' desc='利用 interpolate 将动画值映射到任意范围'>
    <Svg width={width} height={height}>
      <AnimatedRect
        x={x.interpolate({
          inputRange: [0, 1, 2, 3, 4],
          outputRange: [0, width - size, width - size, 0, 0]
        })}
        y={x.interpolate({
          inputRange: [0, 1, 2, 3, 4],
          outputRange: [0, 0, height - size, height - size, 0]
        })}
        width={size}
        height={size}
        rx={10} ry={10} stroke={secondary} fill={primary}
      />
    </Svg>
  </GroupList.Item>
}

const Transform = () => {

  const primary = duxappTheme.primaryColor
  const secondary = duxappTheme.secondaryColor

  const transformAnim = useRef(new Animated.Value(0)).current

  const width = pxNum(702)
  const height = pxNum(180)

  const size = pxNum(100)

  useEffect(() => {
    setTimeout(() => {
      Animated.loop(
        Animated.timing(transformAnim, {
          toValue: 2,
          duration: 2000,
          easing: Easing.circle,
          useNativeDriver: true
        })
      ).start()
    }, 500)
  }, [transformAnim])

  return <GroupList.Item title='变换动画' desc='在RN上似乎不生效'>
    <Svg width={width} height={height}>
      <AnimatedRect
        x={(width - size) / 2}
        y={(height - size) / 2}
        width={size}
        height={size}
        rx={10} ry={10}
        stroke={secondary}
        fill={primary}
        origin={[width / 2, height / 2]}
        rotation={transformAnim.interpolate({
          inputRange: [0, 1, 2],
          outputRange: [0, 180, 360]
        })}
        scale={transformAnim.interpolate({
          inputRange: [0, 1, 2],
          outputRange: [1, 2, 1]
        })}
      />
    </Svg>
  </GroupList.Item>
}
```

## 组件

已支持：
- Svg  
`width` `height`
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
- SvgToImage 非Svg组件，是将Svg转图片的组件

未支持：

- TextPath
- Symbol
- ClipPath
- Mask
- Pattern
- Marker
- Pattern
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

未支持：
- transform

以及其他未列出的属性

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