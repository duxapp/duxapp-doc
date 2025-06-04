---
sidebar_position: 1
---

# 入门教程

`duxapp` 通过框架和模块组合，实现了鸿蒙端的支持，现在 duxui 这个 ui 库已经基本兼容了鸿蒙端。

:::info
- 2026-05-29 的更新中，鸿蒙已经支持新的C-API方案，大幅降低了入门门槛 [更新日志](/docs/update/2025-05-29)
- 在 windows 未测试是否能调试，后续跟进完善（目前是基于Mac开发环境进行调试的）
:::

## 开始之前

- 下载并安装 最新版 DevEco Studio
https://developer.huawei.com/consumer/cn/download

- 安装模拟器

打开 DevEco Studio，找到 Device Mange 下载并创建一个模拟器，详情可以参考下面的文档

https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/ide-emulator-create-V5

- 启动模拟器

每次调试的时候需要先手动启动模拟器

## 快速体验

你可以快速初始化一个 UI 库的示例项目，你可以通过这个示例项目快速的查看到 UI 库在鸿蒙端以及其他端的效果

```bash
npx duxapp-cli create projectExample duxuiExample
```

创建项目后，进入项目运行以下命令

```bash
yarn dev:harmony --app=duxuiExample
```

编译完成后，使用 DevEco Studio 打开 dist/harmony 目录，这个目录就是一个原生鸿蒙项目

打开项目后，右上角工具栏区域，选择已经开启的虚拟机，并且点击右侧的运行按钮（三角符号），开始编译，编译后，会自动在虚拟机上启动这个 app

## 准备开发

在[新手教程](/docs/course/started/intro)中，你已经创建了一个全新模块，并且添加了 `duxui` 模块的依赖，要兼容鸿蒙，还需要添加 `duxappHarmony` 模块作为依赖，在添加依赖之前你需要安装

```bash
# 安装duxappHarmony
yarn duxapp app add duxappHarmony
```
安装模块之后修改模块配置文件 `src/moduleName/app.json`, 在 `dependencies` 中添加 `duxappHarmony`

```json
{
  "name": "moduleName",
  "description": "模块介绍",
  "version": "1.0.0",
  "dependencies": [
    "duxapp",
    "duxui",
    "duxappHarmony"
  ]
}

```

修改文件后，执行下面的命令，完成一个初始化的过程，这会安装编译鸿蒙需要的依赖和命令行

```bash
yarn app --app=moduleName
```

## 添加配置文件

在之前的[入门教程](/docs/course/started/intro)中我们已经创建了 `index.js` 配置文件, RN配置需要在同一个目录下创建 `duxapp.harmony.js` 文件，内容如下，

`configs/modeName/duxapp.harmony.js`

```js
const config = {
  appid: 'cn.duxapp.modulename',
  appName: 'APP名称',
  versionCode: 1,
  versionName: '1.0.0',
}

module.exports = config

```

由于包名限制条件，你的包名只能由小写字母组成，并不能像模块名称那样，使用驼峰命名  

## 开始打包

接下来就能执行打包命令了

```bash
yarn dev:harmony --app=moduleName
```

编译完成后，使用 DevEco Studio 打开 `dist/harmony` 目录，这个目录就是一个原生鸿蒙项目

打开项目后，右上角工具栏区域，选择已经开启的虚拟机，并且点击右侧的运行按钮（三角符号），开始编译，编译后，会自动在虚拟机上启动这个 app

:::info
每次修改完文件编译完成后，需要再点一次运行，鸿蒙没有热重载这个功能
:::

## 开发进度

鸿蒙端的 duxui 组件库，仍然有一些功能是不完善的，例如 Pikcer 选择器，你可以去查看开发进度

查看 [开发进度](/docs/course/harmony/start) 章节了解细节
