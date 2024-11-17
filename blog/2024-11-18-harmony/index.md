---
slug: harmony
title: Taro首个支持鸿蒙的 UI 库，同时还兼容 React Native、小程序、H5
description: Taro4 支持了鸿蒙开发，duxapp 也跟进了鸿蒙端的兼容
authors: [duxapp]
tags: [duxapp, harmony, UI库, 鸿蒙]
---

Taro 4.0 已经推出一段时间了，4.0 版本主要是支持了鸿蒙端的开发以及 Vite 编译工具的支持。duxapp 在这段时间也跟随 Taro 的脚步，实现的对鸿蒙端的支持，并且也将之前的 duxui 这个多端的 UI 库，对鸿蒙端实现了兼容。

duxui 组件库提供了 60+ 的组件支持，能快速帮助你完成业务。

现在使用这个 UI 库，不仅能开发鸿蒙，还能实现同时开发 React Native、小程序和 H5，也是目前唯一一个能兼容这么多端的 UI 库。

## 组件展示

![效果图](./img/duxui.jpg)

## 如何使用

使用下面的命令，可以快速初始化一个 UI 库的示例项目，你可以通过这个示例项目快速的查看到 UI 库在鸿蒙端以及其他端的效果

```bash
npx duxapp-cli create projectExample duxuiExample
```

- 提示：在这之前需要安装好基本的环境 `nodejs 20+` `yarn` `git`

创建项目后，进入项目目录 `projectExample` 运行以下命令

```bash
yarn dev:harmony --app=duxuiExample
```

编译完成后，使用 DevEco Studio 打开 `dist/harmony` 目录，这个目录就是一个原生鸿蒙项目

- 如果你还不了解鸿蒙开发基础知识，或者想继续深入了解如何开发，可以查看这篇[入门教程](https://duxapp.cn/docs/course/harmony/start/)

## duxapp 做了些什么

###  自动化

在 duxapp 中，我们把鸿蒙工程模板做了封装，就像 `React Native` 端那样，你不需要自行创建项目工程文件，在你运行鸿蒙相关的命令的时候，会自动创建鸿蒙工程项目，你需要做的就是使用 DevEco Studio 来继续编译 duxapp 生成的鸿蒙工程文件

### 配置化

包名、版本等信息就和 `React Native` 端那样，通过配置文件来实现

### 模块化

我们将鸿蒙端的支持封装到了 `duxapp` 的一个模块 `duxappHarmony` 中，只要你依赖了这个模块，就能实现对鸿蒙端的兼容

如果你还不是很了解 duxapp 的模块化，可以[模块化介绍](https://duxapp.cn/docs/course/app/intro)

### UI组件库 

在过去这一段时间的兼容过程中，主要做的工作就是对 UI 库的兼容，因为鸿蒙的 `arkui` 和 Web 标准对比，存在不小的差异，每个组件都需要进行适配，并且还需要对一些底层代码进行修改。总得来说，现阶段虽然还存在一些小问题，但是95%的功能已经实现兼容

## 继续

如果你对这个项目有兴趣，可以查看文档，继续了解详情

开发文档：[http://duxapp.cn](http://duxapp.cn)

GitHub：[https://github.com/duxapp](https://github.com/duxapp)
