---
sidebar_position: 7
---

# npm依赖布丁

在一些第三方依赖中，可能存在 bug 或者无符合要求的功能，通常需要直接修改 node_modules 里面的模块内容，duxapp 中使用 patch 补丁的形式进行这些操作

当你修改了一个 node_mouses 里面模块的内容之后使用命令 `yarn patch-package 模块名称`，执行完成后这个文件会放在项目目录下的`patches`文件夹内

创建将补丁文件后，将对应的补丁文件复制到安装了依赖的当前模块中的 `update/copy/patches` 文件夹下面，每次安装依赖，使用到这个模块的时候，会自动使用这个补丁文件
