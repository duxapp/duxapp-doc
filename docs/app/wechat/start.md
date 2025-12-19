---
sidebar_position: 1
---

# 开始

APP 端微信基础能力（RN），用于支付/登录/分享/打开小程序等。

:::info
本文档仅介绍基础插件（`expo-wechat`）。跨端分享封装请看 `/docs/app/wechat/share`。
:::

## 安装

```bash
yarn duxapp app add expo-wechat
```

## 配置

`expo-wechat` 在 RN 打包阶段会合并：

- iOS `CFBundleURLSchemes`：使用 `appid`（例如 `wx123...`）
- iOS `associated-domains`：使用 `applinks`（例如 `applinks:example.com`）
- Android Proguard：自动插入微信混淆 keep 规则

推荐在 `configs/duxapp.rn.js` 中配置 `option['expo-wechat']`：

```js
export default {
  option: {
    'expo-wechat': {
      // 微信开放平台 AppID
      appid: 'wx1234567890',
      // iOS Universal Link（用于微信回跳，建议配置）
      universalLink: 'https://example.com/app/',
      // iOS associated domains 域名（不带 https://）
      applinks: 'example.com',
    }
  }
}
```

兼容读取（不推荐新项目继续使用）：`option.wechat`、`option.wechat.app`。

## 使用

模块导出的是 `WechatLib`（底层为 `expo-wechat`）：

```js
import { WechatLib } from '@/expo-wechat'
```

### 检测与初始化

`expo-wechat` 模块会在 App 启动后自动尝试 `registerApp`（在用户同意隐私协议后执行）。你也可以手动调用：

```js
import { WechatLib } from '@/expo-wechat'

await WechatLib.registerApp('wx1234567890', 'https://example.com/app/')
const installed = await WechatLib.isWXAppInstalled()
```

### 微信支付（示例）

```js
import { WechatLib } from '@/expo-wechat'

await WechatLib.pay({
  partnerId: '...',
  prepayId: '...',
  nonceStr: '...',
  timeStamp: 0,
  package: 'Sign=WXPay',
  sign: '...',
  extraData: '',
})

const payResult = await new Promise(resolve => {
  const callback = e => {
    WechatLib.removeListener('onPayResult', callback)
    resolve(e)
  }
  WechatLib.addListener('onPayResult', callback)
})

// payResult.errorCode === 0 表示成功，其余可结合 payResult.errorMessage 处理
```

### 登录（示例）

```js
import { WechatLib } from '@/expo-wechat'

await WechatLib.sendAuthRequest('snsapi_userinfo', 'state')

const auth = await new Promise(resolve => {
  const callback = e => {
    WechatLib.removeListener('onAuthResult', callback)
    resolve(e)
  }
  WechatLib.addListener('onAuthResult', callback)
})
```

### 打开小程序（示例）

```js
import { WechatLib } from '@/expo-wechat'

await WechatLib.launchMiniProgram({
  id: 'gh_xxxxxxxx',
  path: 'pages/index/index',
  type: 'release',
})
```
