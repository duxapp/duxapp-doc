---
sidebar_position: 10
---

# 常见问题

## 切换项目、新增路由不生效

因为缓存问题，请参考 [启动metro服务命令](/docs/course/rn/exec#%E5%90%AF%E5%8A%A8metro)

## Error: spawn EINVAL

```
ATTEHNTION: Package.json has been modified automatically, please submit it by yourself.
Error: spawn EINVAL
```

这在windows上启动metro服务的时候可能会出现，请参考这个文章解决

https://github.com/midwayjs/midway/discussions/3903

## 首次调试APP，加载成功什么都不显示

显示 Bridgeless mode is enabled 但是未显示时任何内容，需要结束app进程，后启动app

## Could not resolve all dependencies for configuration

编译安卓常见错误，通常需要翻墙