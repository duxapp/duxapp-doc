---
sidebar_position: 1
---

# 开始

duxapp是一套基于Taro的模块化开发架构，每一个项目就是一个模块，且兼容多端开发，极大节省开发时间。

## 安装

```bash
npx duxapp-cli app init 
```

运行命令后将会提示输入下面三个参数

|  选项   | 说明 |
|  ----  | ----  |
| 标识  | 项目唯一标识，由纯小写英文字母组成，不能和之前的项目有冲突，此标识将用于app端的包名、git仓库地址、codepush热更新标识 |
| 名称  | 项目名称 |
| 简介  | 项目简介 |

项目初始化后将会自动安装依赖，安装完成就可以打开项目进行开发了

## 运行

```bash
yarn dev:h5 --apps=base
```

## 模块安装

如果需要安装其他模块执行下面的命令添加，例如安装`shopv2`模块，这个模块是新的商城模块，后端是模块化的php新框架。

```bash
yarn duxapp app add shopv2
```

安装后执行命令启动`shopv2`

```bash
yarn dev:h5 --apps=shopv2
```

## 注意

- 模块存在依赖关系，当你安装 `shopv2` 时会自动安装 `user` `duxslim` `duxslimBase` 这三个模块 以及已经存在的 `base` 基础模块
- 初始化过程中会针对 `React Native` 做一些处理，这需要你安装 `jdk`, 将 `appcenter-cli` 模块安装到npm的全局模块，否则某些流程不会自动处理 