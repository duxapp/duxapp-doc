---
sidebar_position: 2
---

# 动画

为了兼容多端，动画方案将按照RN端的标准实现，参考RN端的 `Animated` `Easing` 这两个API

## 示例

import { Preview } from '@site/src/components/Preview'

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
    <Header title='Svg 动画' />
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
            useNativeDriver: true
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

  return <GroupList.Item title='变换动画' desc='要支持变换动画，需要使用transform属性，且不支持transformOrigin属性，需要用translate属性模拟实现变换原点功能'>
    <Svg width={width} height={height}>
      <AnimatedRect
        x={(width - size) / 2}
        y={(height - size) / 2}
        width={size}
        height={size}
        rx={10} ry={10}
        stroke={secondary}
        fill={primary}
        transform={[
          {
            translate: [width / 2, height / 2]
          },
          {
            scale: transformAnim.interpolate({
              inputRange: [0, 1, 2],
              outputRange: [1, 2, 1]
            })
          },
          {
            rotate: transformAnim.interpolate({
              inputRange: [0, 1, 2],
              outputRange: [0, Math.PI, Math.PI * 2]
            })
          },
          {
            translate: [-width / 2, -height / 2]
          }
        ]}
      />
    </Svg>
  </GroupList.Item>
}
```

## Animated

已经支持的功能属性

- new Value()
- new ValueXY()
- timing()
- createAnimatedComponent()
- delay()
- parallel()
- sequence()
- stagger()
- loop()

其他暂不支持，如果有需要会酌情增加，增加太多的功能会导致小程序端代码体积增大

[RN Animated 文档](https://reactnative.cn/docs/animated)

## Easing

支持全部缓动动画

[RN Easing 文档](https://reactnative.cn/docs/easing)