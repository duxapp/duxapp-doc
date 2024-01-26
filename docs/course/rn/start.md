---
sidebar_position: 1
---

# 快速开始

`duxapp` 通过框架和模块组合，大大降低了RN依赖安装、APP打包的难度，仅需创建简单的配置文件，就可以实现想要的依赖和打包。

## 开始之前

在开始之前，需要根据RN中文网搭建好需要的开发环境，即便我们的框架大大降低了RN的难度，但是打包的环境还是需要的
[搭建开发环境](https://reactnative.cn/docs/environment-setup)

## 准备

在新手教程中，你已经创建了一个全新模块，并且添加了 `duxui` 模块的依赖，要兼容RN，还需要添加 `duxappReactNative` 模块作为依赖，在添加依赖之前你需要安装他

```bash
# 安装duxappReactNative
yarn duxapp app add duxappReactNative
```
安装模块之后修改模块配置文件 `src/moduleName/app.json`, 在 `dependencies` 中添加 `duxappReactNative`

```json
{
  "name": "moduleName",
  "description": "模块介绍",
  "version": "1.0.0",
  "dependencies": [
    "duxapp",
    "duxui",
    "duxappReactNative"
  ]
}

```

修改文件后，执行下面的命令，完成一个初始化的过程，这会安装RN相关的依赖

```bash
yarn duxapp runtime enterFile --app=moduleName
```

## 添加配置文件