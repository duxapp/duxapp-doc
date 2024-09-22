---
sidebar_position: 3
---

# AppUpgrade 版本更新

版本更新包含了组件和工具的组合

## 注册

下面这是 `duxcms` 入口文件检查更新的注册方法，注册的同事会检查更新

```js
import {
  request,
  updateApp,
  userConfig
} from './utils'

// 检查app更新
setTimeout(async () => {
  if (process.env.TARO_ENV === 'rn') {
    // eslint-disable-next-line no-undef
    if (__DEV__) {
      return console.log('调试模式不检查更新')
    }
    updateApp(async () => {
      const type = userConfig.option.duxcms?.appUpgrade?.type
      const { info } = await request({ url: 'upgrade/check', data: type ? { type } : {} })
      return info
    })
  }
}, 2000)
```

`updateApp` 这个方法同时是检查app更新的方法，你只需要在任何一个地方传入获取更新信息的函数，然后在其他地方使用的时候就可以不传入函数了

```js
import { updateApp, toest } from '@/duxappReactNative'

// 后续在其他地方调用，则不需要在传入函数
updateApp().then(res => {
  if (!res) {
    toest('已经是最新版本')
  }
})
```

如果有新版本，则会自动弹出提示，提示用户是否更新到新版本

注册的获取更新信息的函数，其返回值要包含这些内容

```js
{
  androidVersion: '1.0.2',
  androidUpdateInfo: '更新内容',
  androidDowloadUrl: 'https://xxx.xx/xxx.apk', // 如果存在，这必须要是一个直接下载apk的地址
  androidUrl: '', // 如果不存在 androidDowloadUrl 可以配置这个，让用户跳转到浏览器去下载apk

  iosVersion: '1.0.2',
  iosUpdateInfo: '更新内容',
  iosUrl: '', // ios跳转地址，一般是传入app store的app地址
}
```

## AppUpgrade 组件

这个组件是用来检查更新的，将一个可点击的子组件放在其中，像这样，他会自动处理更新，不需要你去使用更新方法

如果不是RN端，这个子内容不会显示出来

`<AppUpgrade.Version />` 用来显示当前APP的版本信息

```jsx
import { AppUpgrade } from '@/duxappReactNative'

<AppUpgrade>
  <Row items='center' justify='between' className='pv-3'>
    <Text bold grow>版本更新</Text>
    <Text color={3}><AppUpgrade.Version /></Text>
    <CmsIcon name='direction_right' size={32} color={duxappTheme.textColor3} />
  </Row>
</AppUpgrade>
```