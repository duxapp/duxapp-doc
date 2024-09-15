---
sidebar_position: 3
---

# 模块管理

这里将介绍，如果快速创建模块，如何安装更新模块，如何发布模块到应用商店

## 快速创建模块

`yarn duxapp app create modeName 模块介绍`  

使用这个命令就能快速创建一个模块模板，创建之后需要继续开发请查看 [路由](route) [结构](directory) [主题](theme) 等文档继续开发后续功能

## 模块安装、更新

`yarn duxapp app add duxui`  

使用命令将会安装duxui，并他还会按照模块的依赖关系安装 duxui 依赖的模块  

如果你的项目中没有duxui，他将会创建，如果你的项目中存在duxui，他将会更新模块 

:::info
- 使用更新命令需要先前往 [https://www.dux.cn/](https://www.dux.cn/) 注册账号，更新时会要求登录账号
- 注册账号当前仅支持手机号注册，请勿使用邮箱注册
- 查看有哪些模块发布请前往 [dux 应用商店](https://www.dux.cn/page/apps?type=2)
:::

## 发布模块

发布模块之前，请确保 `readme.md` `changelog.md` 文件已经创建，并编写内容，然后使用  

`yarn duxapp app publish modeName`  

使用这个命令就可以发布模块，发布模块后，你的模块并不会直接发布上架，如果你是第一次发布模块，请前往
[https://www.dux.cn/page/package/push](https://www.dux.cn/page/package/push)发布模块  

模块和上架的应用并不是同一个概念，应用商店中你可以将多个模块打包为一个应用上架，具体可以在发布流程中查看，可以根据自己需求确认是否收费，未收费的应用所版本的模块，将会开放安装  

如果仅上传未发布的模块，那么这个模块就是私有的，只有你一个人可用

:::info
- 使用更新命令需要先前往 [https://www.dux.cn/](https://www.dux.cn/) 注册账号，发布时会要求登录账号
- 注册账号当前仅支持手机号注册，请勿使用邮箱注册
:::