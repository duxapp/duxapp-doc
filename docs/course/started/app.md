---
sidebar_position: 2
---

# 模块介绍

模块作为本架构的基础，非常重要的内容，模块之间还有相互依赖关系，src目录下的每个文件夹即是一个模块

## 模块目录结构
|  路径   | 说明 |
|  ----  | ----  |
| src | 模块根目录 |
| --base  | 模块目录 |
| ---- components  | 模块组件目录 |
| ------ ......  | 导出模块的组件 |
| ---- config  | 配置 |
| ------ route.js  | 路由配置文件-模块必须的文件 |
| ------ ......  | 其他配置文件 |
| ---- utils  | 工具目录 |
| ------ ......  | 导出工具函数 |
| ---- app.json  | 模块配置文件 定义模块名称、版本、依赖关系 |
| ---- app.js  | 模块入口文件，模块初始化的时候将会执行此文件，参考base对应文件 |
| ---- index.js  | 模块出口文件，用于导入组件和方法给其他模块使用 |
| ---- ......  | 其他文件夹表示页面 |
| -- duxapp.js  | 全局配置文件 |
| -- app.js  | 全局入口文件 |
| -- app.scss  | 全局样式 |
| -- app.config.js  | taro配置 |
| -- duxappEntry.js  | 项目配置文件 由插件自动生成 请勿直接修改 |
| -- duxappTaroEntry.js  | 提供给Taro进行编译的配置文件  由插件自动生成 请勿直接修改 |
| -- index.html  | h5端首页文件 |
| -- init.js  | 初始化文件 由插件自动生成 请勿直接修改 |
| -- route.js  | 路由配置文件 由插件自动生成 请勿直接修改 |

## 模块注意事项
- 模块的依赖关系非常有用，可以在打包的时候自动寻找需要的模块，也可以在安装模块的时候自动寻找需要的模块
- 模块依赖请勿循环依赖 例如 A->B->A，或者A->B->C->A
- 如果A模块依赖于B模块，则可以在A模块中放心的导入B模块的组件和函数，反之没有依赖的模块不要导入他的任何东西，否则打包将会报错
- 一般来说新的模块至少需要依赖于base模块，因为base模块里面包含了很多基础工具和函数

## 模块命令

```bash
# 添加一个模块
yarn duxapp app add 模块名称
# 创建一个模块
yarn duxapp app create 模块名称
```

## 入口文件

app.js是每个模块的入口文件，这个文件将会被默认执行，此文件需要导出一个名为 `appLifecycle` 的对象，如下

```js
// 可以在此处执行一些要初始化的东西
import { app } from '@/base/utils'
app.register('duxshop')

export const appLifecycle = {
  // 启动配置 位于duxapp.js文件中的option配置
  option: option => {
    setAppConfig(option.app || {})
  },
  // useLaunch
  launch: () => {
    
  },
  // useShow
  show: () => { },
  // useHide
  hide: () => { },
  // useEffect
  effect: async () => {
    startHide()
  }
}
```