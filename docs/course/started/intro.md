---
sidebar_position: 1
---

# 开始

duxapp是一套基于Taro的模块化开发架构，每一个项目就是一个模块，且兼容多端开发，极大节省开发时间。

## 环境要求

- nodejs 18+
- git命令行工具

## 初始化项目

```bash
npx duxapp-cli create projectName
```

项目初始化后将会自动安装依赖，安装完成就可以打开项目进行开发了

## 运行

```bash
yarn dev:h5 --app=duxapp
```

## 模块安装

如果需要安装其他模块执行下面的命令添加，例如安装`duxui`模块，这个模块是新的商城模块，后端是模块化的php新框架。

```bash
yarn duxapp app add duxui
```

安装后执行命令启动`duxui`，命令仅做示例，duxui里面只导出组件，并不包含页面

```bash
yarn dev:h5 --app=duxui
```

## 注意

- 模块存在依赖关系，当你安装 `duxui` 时，会自动安装 `duxapp` `duxui` 这两个模块，已经存在的模块会被更新到最新版本