# 开始

APP 端支付宝支付 / 授权能力（RN）。

:::caution
旧实现已弃用，本文档已调整为 `expo-alipay`（duxapp 模块）实现。
:::

## 安装

```bash
yarn duxapp app add expo-alipay
```

该模块会集成 `expo-alikit`（npm 包名）作为运行时 JS API，并自动合并 iOS 所需的 `URL Scheme` 与 `Associated Domains` 配置。

## 配置（iOS）

`expo-alipay` 会根据 `configs/duxapp.rn.js` 的配置写入：

- `CFBundleURLSchemes`: 默认为 `BundleId` 去掉 `.`（例如 `cn.duxapp.demo` -> `cnduxappdemo`）
- `associated-domains`: 读取 `option['expo-alipay'].applinks`，默认 `duxapp.com`

示例（`configs/duxapp.rn.js`）：

```js
export default {
  ios: {
    BundleId: 'cn.duxapp.demo',
  },
  option: {
    'expo-alipay': {
      // iOS Universal Link 域名（不带 https://）
      applinks: 'example.com',
    }
  }
}
```

如果你不使用 Universal Link，可以不配置 `applinks`（会使用默认值），但 iOS 回调仍需要 `scheme` 与你实际写入的 URL Scheme 保持一致。

## 支付

`orderInfo` 通常为服务端生成并签名后的订单字符串。

```js
import ExpoAlipay from 'expo-alikit'

// iOS: scheme 建议与 BundleId 去点后的值保持一致（cn.duxapp.demo -> cnduxappdemo）
await ExpoAlipay.pay({
  orderInfo: '...服务端返回的订单字符串...',
  scheme: 'cnduxappdemo',
  universalLink: undefined,
})

// 支付结果：
// - Android：`pay()` 可能直接返回结果，同时也会触发 onPayResult
// - iOS：请使用 onPayResult 事件获取结果
```

## 授权登录

```js
import ExpoAlipay from 'expo-alikit'

await ExpoAlipay.auth({
  authInfo: '...服务端返回的授权字符串...',
  scheme: 'cnduxappdemo',
  universalLink: undefined,
})
```

## 事件监听（结果回调）

`expo-alikit` 会发出事件：

- `onPayResult`
- `onAuthResult`

可以用 `addListener/removeListener` 监听（写法与 duxapp 内部使用一致）：

```js
import ExpoAlipay from 'expo-alikit'

const callback = payload => {
  console.log(payload)
  ExpoAlipay.removeListener('onPayResult', callback)
}

ExpoAlipay.addListener('onPayResult', callback)
```

## 注意事项

- iOS 的 `scheme/universalLink` 必须与应用实际配置一致，否则无法从支付宝回跳到你的 App。
