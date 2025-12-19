---
sidebar_position: 4
---

# 使用原生模块

## 基本模块

在开发 RN 时不可避免会用到原生模块，而大多数原生模块集成进来都比较简单：只需要在模块的 `package.json` 中添加依赖，然后重新编译即可。

- Android：`yarn android --app=模块`
- iOS：`yarn ios --app=模块`

```json
{
  "dependencies": {
    "b-validate": "^1.5.3",
    "react-native-view-shot": "~3.8.0",
    "react-native-fast-shadow": "~0.1.1",
    "array-tree-filter": "^2.1.0"
  }
}
```

:::info
内容会完整的和 `package.json` 进行合并
:::

## 复杂模块

有的模块除了添加依赖项之外，还需要对原生工程进行修改（例如增加 Proguard、修改 `Info.plist`、修改 `AndroidManifest.xml`、创建原生文件等）。

优先推荐使用已经被 duxapp 封装成“模块”的插件（例如 `expo-wechat`、`expo-alipay`、`expo-gaode-map` 等）：这些模块会在自身的 `update/rn.js` 中完成原生合并，你只需要安装模块并在 `configs/*.js` 中配置对应的 `option`。

如果你需要自行集成一个“复杂原生模块”，可以在你的模块内新增 `update/rn.js`，通过导出函数返回以下能力来自动修改原生工程：

- `insert`：向指定文件插入/追加内容（例如 Proguard、Podfile、AppDelegate 等）
- `create`：创建文件（例如新增原生 Activity/Service 等）
- `android.xml`：以 DOM 方式修改 `AndroidManifest.xml`
- `ios.plist`：修改 `Info.plist` 与 entitlements

示例（仅展示常见结构）：

```js
// update/rn.js
export default ({ config }) => {
  return {
    insert: {
      'android/app/proguard-rules.pro': {
        content: '\n# keep rules...\n'
      }
    },
    ios: {
      plist: {
        'duxapp/Info.plist': {
          // ...
        }
      }
    }
  }
}
```
