# 签名(Sign)

Sign 组件用于在屏幕上书写签名，支持保存签名并上传到服务器。

## 引入

```jsx
import { Sign } from '@/components/Sign';
```

## 使用

```jsx
<Sign
  style={{ width: '100%', height: '500rpx' }}
  onChange={(url) => console.log(url)}
  tip='请在屏幕范围内书写签名'
  color='#333'
/>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| ------- | --------------------------------------- | ------------- | ------ |
| style | canvas 样式 | object | - |
| onChange | 保存签名后的回调函数，参数为上传后的 URL | function(url) | - |
| tip | 提示文本 | string | - |
| color | 线条颜色 | string | #333 |

### Method

| 方法 | 说明 | 参数 | 返回值 |
| ---- | ---------------- | ---- | ------ |
| save | 保存签名并上传 | - | Promise |
| clear | 清空签名 | - | void |