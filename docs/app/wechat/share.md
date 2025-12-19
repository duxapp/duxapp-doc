---
sidebar_position: 2
---

# 分享

跨端微信分享封装（小程序 / H5 / APP）。

该模块基于：

- RN：`expo-wechat`（用于拉起微信分享/分享小程序等）
- H5：`wechat-jssdk`（仅微信浏览器内有效）
- 小程序：使用 Taro 的页面分享能力

## 安装

```bash
yarn duxapp app add duxappWechatShare
```

## 配置

推荐配置在 `configs/*.js` 的 `option.wechat.share`：

```js
export default {
  option: {
    wechat: {
      share: {
        open: true,
        // 开启未定义页面：分享自身
        pageSlef: {
          // include 优先级高于 exclude
          include: [],
          // exclude: []
        },
        // 开启未定义页面：统一分享到指定页面
        pageHome: {
          path: '',
          params: {},
          exclude: []
        },
        // 公共分享参数
        common: {
          title: '公共分享标题',
          desc: '功能分享描述',
          image: 'https://example.com/share.png',
        },
        platform: {
          app: {
            // 配置分享到小程序的原始 id（同时也是开关）
            weappUserName: '',
            // 配置分享到 H5 的 url（同时也是开关）
            h5Url: '',
          }
        }
      }
    }
  }
}
```

:::info
历史兼容：`option.duxappWechatShare` 仅用于读取 `open` 开关，其他分享配置仍以 `option.wechat.share` 为准。
:::

## H5 端初始化（微信浏览器）

H5 端要启用分享，需要注册一个函数返回 JSSDK 的 `config` 参数（后端签名接口通常会用到当前页面 URL）：

```jsx
import { WechatShare } from '@/duxappWechatShare'

WechatShare.h5ConfigPromise(async () => {
  const res = await request({
    url: 'wechat/sdk',
    method: 'POST',
    data: {
      url: window.location.href,
      api: [
        'updateAppMessageShareData',
        'updateTimelineShareData',
        'showAllNonBaseMenuItem',
        'hideAllNonBaseMenuItem',
        'openLocation'
      ]
    }
  })
  return res
})
```

## 在页面中使用

页面需要用 `TopView.page` 包装（否则分享参数可能不生效）：

```jsx
import { Header, TopView } from '@/duxapp'
import { WechatShare } from '@/duxappWechatShare'
import { View } from '@tarojs/components'
import { useCallback } from 'react'

export default TopView.page(function Page() {

  WechatShare.useSharePage({
    title: '分享标题',
    // 可选：不设置则默认当前页面路径与参数
    path: '',
    image: '',
    params: {}
  })

  // APP/H5 生效：弹出分享面板（H5 为引导层）
  const share = useCallback(() => {
    WechatShare.openShare()
  }, [])

  return <>
    <Header title='页面标题' />
    <View onClick={share}>点我分享</View>
  </>
})
```

也可以直接使用按钮组件：

```jsx
import { WechatShare } from '@/duxappWechatShare'

// 小程序端：渲染为 openType='share' 的 Button
// APP/H5：点击触发 WechatShare.openShare()
return <WechatShare.Button>分享</WechatShare.Button>
```

## 全局分享参数

```js
import { WechatShare } from '@/duxappWechatShare'

// 合并对象 / 或传入函数返回新对象
WechatShare.setGlobalParams(old => ({ ...old, sale_user_code: info.code }))
```

## 禁用全局参数

主要用于 H5：避免 URL 上的敏感参数被带入分享链接。

```js
import { WechatShare } from '@/duxappWechatShare'

WechatShare.setDisableGlobalParams('sale_user_code', 'sale_user_id', 'wechat_code', 'toPage')
```
