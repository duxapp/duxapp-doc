---
sidebar_position: 2
---

# Agreement 用户协议

在多个应用市场中，他们通常会要求你在首次启动app时，需要弹出用户协议，用户同意后才能使用app，否则他们不会让你上架，使用这个组件就能解决这个问题

## 使用

在你项目的入口模块的入口文件中初始化，请根据你的项目填写适当的用户须知

```jsx
import { Agreement } from '@/duxappReactNative'

Agreement.init({
  content: `1、为了提供更完整的服务，我们将获取您的位置信息，用于完善用户表单。
2、我们将在适当的时机获取相册以及相机权限，用来上传评价等功能。
3、我们会启动您设上的一些应用程序，已完成如地图导航、支付等功能。`,
  links: [
    { name: '《用户协议》', url: 'duxcms/common/richtext?url=member/agreement&title=用户协议' },
    { name: '《隐私政策》', url: 'duxcms/common/richtext?url=member/privacy&title=隐私政策' }
  ]
})
```

## 用户配置

配置位于 `option.duxappReactNative.agreement`

这个配置用来配置用户协议上的 名称 和 logo

```js
duxappReactNative: {
  agreement: {
    name: 'app名称',
    logo: 'https://cdn.chian.moupu.com/2024-05-22/7dbcc9c0878729215b6d.png',
  }
}
```

这是必须的，不然会显示不全

