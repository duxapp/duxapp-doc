# 开始
集成微软热更新插件

:::info
组件不可用，微软热更新服务端已经停止服务
:::

## 安装

```bash
yarn duxapp app add react-native-code-push
```

## 使用

配置 `index.js` 的 `option['react-native-code-push']`, 分别为安卓端和ios端的热更新 key

```jsx
{
  androidKey: '',
  iosKey: '',
}
```
