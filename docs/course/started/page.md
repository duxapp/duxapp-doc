---
sidebar_position: 2
---

# 页面

使用duxapp之后页面的编写会有一定的要求，主要是页面需要使用TopView组件作为顶层容器，TopView是很多功能实现的基础，正确的页面编写示例

```jsx
import { View } from '@tarojs/components'
import { Header, ScrollView, TopView } from '@/duxapp'

import './index.scss'

export default TopView.page(function Page() {

  return <>
    <Header title='duxapp' titleCenter />
    <ScrollView>
      <View className='duxapp-demo__title'>欢迎使用duxapp</View>
      <View className='duxapp-demo__p'>添加模块: yarn duxapp app add app名称</View>
      <View className='duxapp-demo__p'>创建模块: yarn duxapp app create app名称</View>
    </ScrollView>
  </>
})
```

也可以是下面这种写法

```jsx
import { View } from '@tarojs/components'
import { Header, ScrollView, TopView } from '@/duxapp'

import './index.scss'

export default function Page() {

  return <TopView>
    <Header title='duxapp' titleCenter />
    <ScrollView>
      <View className='duxapp-demo__title'>欢迎使用duxapp</View>
      <View className='duxapp-demo__p'>添加模块: yarn duxapp app add app名称</View>
      <View className='duxapp-demo__p'>创建模块: yarn duxapp app create app名称</View>
    </ScrollView>
  </TopView>
}
```

:::info
某些功能必须要使用 `TopView.page` 包装才能实现，例如微信模块的分享功能
:::

一个页面中，请不要使用多个TopView组件实例，否则这会影响一些功能的实现  

很多功能的实现依赖于页面的TopView组件

- 路由跳转 和 返回数据
- PullView 组件内容全局弹出
- Modal 组件内容全局弹出
- loading 加载中
- Absolute 渲染到全局
- wechat 分享功能
- Agreement RN启动用户协议

等等，依赖TopView组件可以实现很多功能，详情请查看[TopView](/docs/duxapp/component/TopView)

## Header

除了 `TopView` 之外，一个页面上至少还应该包含一个 `Header` 组件，用来展示头部内容，duxapp默认是开启了自定义头部功能的，所以需要使用这个Heder组件填充，组件中还包含了对状态栏的控制逻辑，详情请查看[Header](/docs/duxapp/component/Header)

## ScrollView

duxapp禁用了页面的整体刷新功能，如果需要刷新功能，需要使用 duxapp 导出的 `ScrollView` 组件  

请注意，这个组件拥有 `flex: 1` 的样式，也就是说你把他放在TopView中，他会自动使用除去Haeader之外的所有高度，详情请查看[ScrollView](/docs/duxapp/component/ScrollView)

## TabBar

大多数的项目都会在首页使用TabBar进行导航，在duxapp中推荐使用duxui中提供的TabBar进行导航，请前往[TabBar](/docs/duxui/nav/TabBar)查看

当然你也可以通过模块的全局配置[app.config.js](/docs/course/app/directory#appconfigjs)，配置导航来实现TabBar