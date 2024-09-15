---
sidebar_position: 2
---

# 页面

使用duxapp之后页面的编写会有一定的要求，主要是页面需要使用TopView组件进行嵌套，TopView是很多功能实现的基础，正确的页面编写示例

```jsx
import { View } from '@tarojs/components'
import { Header, ScrollView, TopView } from '@/duxapp'

import './index.scss'

export default TopView.HOC(function Page() {

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

一个页面中，请不要使用多个TopView组件实例，否则这会影响一些功能的实现  

写着功能的实现依赖于页面的TopView功能  

- 路由跳转 和 返回数据
- PullView 组件内容全局弹出
- Modal 组件内容全局弹出
- loading 加载中
- Absolute 渲染到全局
- wechat 分享功能
- Agreement RN启动用户协议

等等，依赖TopView组件可以实现很多功能