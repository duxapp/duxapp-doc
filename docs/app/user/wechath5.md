---
sidebar_position: 3
---

# 公众号登录逻辑

在开始文档中通过 `register` 方法添加了两个方法 `getH5WechatLoginUrl` 和 `h5WechatLogin`，这个两个方法就是用来处理公众号登录逻辑的

这个登录流程需要后端配合才能完成，整个登录流程是这样的

- 前端在需要的使用调用了 `user.login()`
- 通过注册的 `getH5WechatLoginUrl` 方法返回的url 使用 `window.location.replace()` 跳转到这个地址，并且会把当前页面携带的一些参数带上，这地址是后端用来执行登录获取code的地址
- 后端通过这个地址执行公众号登录流程，获取到微信的 `code`
- 将这个 `code` 以参数名 `wechat_code` 重定向回前端地址，并且需要写到上跳转过去的参数
- 前端接收到 `wechat_code` 参数，通过注册的 `h5WechatLogin` 函数，操作后续登录过程
- `h5WechatLogin` 函数把这个code请后给后端接口，后端解析code获取到 用户 `openid`，如果绑定了开放平台还能获取到 `uniid`，通过这些参数让用户登录，并返回用户信息
- `h5WechatLogin` 方法处理成功后，异步返回用户信息
- 登录成功

登录逻辑稍微有些复杂，可以参考 `duxcmsUser` 模块是如何实现这些功能的