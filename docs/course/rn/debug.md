---
sidebar_position: 2
---

# 通用调试包

如果你不方便安装调试环境，可以用这个通用调试包进行调试，全部调试完成之后你再进行环境安装和编译正式版本

[下载调试包](https://app.share.dux.plus/com.duxapp.debug)

## 如何使用

- 将APP装在手机上
- 启动app，摇一摇弹出开发者菜单，点击 `Settings`
- 选择 `Debug server host & port for device`
- 输入 `电脑端ip:8081` 如 `192.168.1.10:8081` 确定，并返回
- 在项目目录，使用命令行启动项目 `yarn start --app=模块`
- APP摇一摇弹出开发者菜单，点击 `Reload`

## 常见问题

如果首次加载完成一直不显示页面，也未报错，需要关闭APP重启之后就会正常