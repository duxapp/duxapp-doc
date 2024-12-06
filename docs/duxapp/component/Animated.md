---
sidebar_position: 11
---

# Animated 动画

这是对 `createAnimation` 方法的完善，用来兼容 React Native 端，封装这个动画之后能更简单的实现跨端动画效果

## 示例

import { Preview } from '@site/src/components/Preview'

<Preview name='Animated' />

```jsx
import { Header, ScrollView, TopView, GroupList, Animated, px, Button, transformStyle, duxappTheme, pxNum } from '@/duxuiExample'
import { useEffect, useRef, useState } from 'react'

export default function AnimatedExample() {

  // 动画默认值要使用 Animated.defaultState 否则小程序端动画无效
  const [an1, setAn1] = useState(Animated.defaultState)

  const [an2, setAn2] = useState(Animated.defaultState)

  const [an3, setAn3] = useState(Animated.defaultState)

  const [an4, setAn4] = useState(Animated.defaultState)

  const an = useRef()

  useEffect(() => {
    an.current = Animated.create({
      duration: 500,
      timingFunction: 'ease-in-out'
    })
  }, [])

  return <TopView>
    <Header title='Animated' />
    <ScrollView>
      <GroupList>
        <GroupList.Item title='基础'>
          <Animated.View
            animation={an1}
            className='bg-primary p-3'
            style={{
              width: px(100),
              height: px(100)
            }}
          />
          <Button onClick={() => {
            setAn1(an.current
              .translate(50, 50).scale(2).rotateZ(90).step()
              .translate(100, 0).scale(1).rotateZ(0).step()
              .translate(50, -50).scale(2).rotateZ(90).step()
              .translate(0, 0).scale(1).rotateZ(0).step()
              .export()
            )
          }}
          >分步组合</Button>
        </GroupList.Item>
        <GroupList.Item title='背景颜色'>
          <Animated.View
            animation={an2}
            className='bg-primary p-3'
            style={{
              width: px(100),
              height: px(100)
            }}
          />
          <Button onClick={() => {
            setAn2(an.current
              .backgroundColor(duxappTheme.successColor).step()
              .backgroundColor(duxappTheme.warningColor).step()
              .backgroundColor(duxappTheme.textColor2).step()
              .backgroundColor(duxappTheme.primaryColor).step()
              .export()
            )
          }}
          >变换颜色</Button>
        </GroupList.Item>
        <GroupList.Item title='默认样式' desc='transform样式需要用 transformStyle 转换，且里面只能写基础样式，请不要写组合样式'>
          <Animated.View
            animation={an3}
            className='bg-primary'
            // onClick={() => {
            //   console.log('click')
            // }}
            style={{
              width: px(100),
              height: px(100),
              transform: transformStyle({
                // translateX: px(50),
                // translateY: px(50),
                // translate: '' // 请不要写这种简写的样式
              }),
              // transformOrigin: '50% 50% 0'
            }}
          />
          <Button onClick={() => {
            setAn3(
              an.current
                .translate(pxNum(50), pxNum(50))
                .rotate(180)
                .step()
                .translate(0, 0)
                .rotate(0)
                .step()
                .export()
            )
          }}
          >测试</Button>
        </GroupList.Item>
        <GroupList.Item title='变换原点和延迟' desc=''>
          <Animated.View
            animation={an4}
            className='bg-primary'
            // onClick={() => {
            //   console.log('click')
            // }}
            style={{
              width: px(100),
              height: px(100)
            }}
          />
          <Button onClick={() => {
            setAn4(
              an.current
                .rotate(180)
                .step({
                  transformOrigin: '100% 100% 0'
                })
                .rotate(0)
                .step({
                  transformOrigin: '100% 100% 0',
                  delay: 400
                })
                .export()
            )
          }}
          >测试</Button>
        </GroupList.Item>
      </GroupList>
    </ScrollView>
  </TopView>
}
```

## 属性

### defaultState

用户动画的默认state，使用这个作为默认值，小程序端动画才会生效

## 方法

### create(option)

方法同 [`createAnimation`](https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/wx.createAnimation.html)

## Animated.View Props

继承自Taro的[View Props](https://nervjs.github.io/taro-docs/docs/components/viewContainer/view#viewprops)

这是用来放动画的组件，必须使用这个组件放动画，否则 RN 端将没有动画

这在RN端没有继承自这个属性，所以一般你只能传入 `style` `className` `animation` 这三个属性

目前小程序端不支持 `onClick` 和 `animation` 同时使用，这应该是 Taro 编译的 bug

## 已知问题

- onClick 和 animation 属性不能同时存在，这是目前小程序端的 bug
- 小程序端 如果同时使用不透明度 加上其他的属性，并且有多个 step，有可能导致其中一个 step 不执行
- 如果要在css或者 style 里面，设置初始值，需要使用详细的单个值设置，例如 `translate(100, 100)` 需要写成 `translateX(100) translateY(100)` 这种形式
- 应该避免使用 `skew` 这个在 APP 端的效果与其他端不一致
- 目前仅支持 `Animated.View` 组件传入动画属性，请勿使用其他组件
- 在 style 里面编写 `transform` 时，需要用 `transformStyle` 函数进行转换
- 动画属性中的尺寸可以用 `pxNum` 函数转换
