---
sidebar_position: 2
---

# 字体配置

用户的主题配置在 `option.duxapp.font`

这个配置是用来配置RN端本地字体的，就是可以把字体图标集成进APP中，而不需要通过网络下载

```js
{
  local: {
    // 两个端fontFamilyName字体都在本地
    fontFamilyName: true,
    // 可以 单独针对 安卓或者ios开启
    fontFamilyName: {
      android: true,
      ios: true
    }
  }
}
```