---
sidebar_position: 20
---

# 常见问题

## 运行命令提示没有 `package.json`

这通常出现在从git拉取项目之后，因为`package.json`是动态生成的，这个文件被 `.gitignore` 排除，不会同步到仓库中

因此你需要复制一个份 `package.back.json` 文件修改为 `package.json` 然就后能正常操作了

## 用过 `yarn add ` 添加的模块不生效

因为模块化的设计，不能直接yarn add，需要把依赖添加到模块内的 `pageage.json` 文件中，然后再执行命令，第三方依赖才会生效

## 更新模块后命令、依赖等不见了

因为 cli 功能的更新，再更新了 duxapp 基础模块后，cli 的依赖还有没有更新到最新版本，就会出现一些奇怪的问题

可以先直接修改 pagkage.json 中的 duxapp-cli 依赖版本，将其修改为新版本，通过`yarn`命令安装依赖后，再去执行其他命令