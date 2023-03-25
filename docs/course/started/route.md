---
sidebar_position: 2
---

# 模块路由

每个模块都有自己的路由配置，某些模块只提供组件或者api，可以不存在任何一个页面。

## 路由配置

路由配置文件路径位于模块下的 `config/route.js`，以base模块为例，其文件内容如下：

```js
/**
 * login:是否需要登录
 * platform:支持的平台(weapp, h5, rn)不配置支持所有
 * subPackage:是否将其设置为分包
 * home: 是否是主页 是主页的页面将会被排在前面
 */
const config = {
  pages: {
    'base/index': {
      pages: {
        index: {}
      }
    },
    'base/webview': {
      pages: {
        index: {}
      }
    },
    'base/location': {
      pages: {
        index: {
          // 此页面默认禁用,可以在配置里面开启，当你的app是需要默认就登录的则在配置里面开启
          disable: true
        },
      }
    }
  },
  /**
   * 路由转换，当跳转到左侧路由时，实际上跳转的是右侧的路由
   *
   * 右侧是字符串则全局匹配
   * {
   *  mode: 'start', // start匹配路由的开始部分
   *  page: ''
   * }
   */
  transfer: {

  }
}

module.exports = config

```

## 路由重定向

 `transfer` 配置用来做页面重定向 例如将 `main/goods/detail` 重定向到 `shop/goods/detail` 做这样的配置：

```js
transfer: {
  'main/goods/detail': 'shop/goods/detail'
}
```
这样配置之后，当使用路由跳转到前面的页面时，实际上跳转的将是后面的页面  
  
也可以通过前缀匹配，将一些路由全部重定向，将 `main/goods` 开头的页面重定向到 `shop/goods` 文件夹下对应的页面  

```js
transfer: {
  'main/goods': {
    mode: 'start'
    page: 'shop/goods'
  }
}
```

  
某些时候需要将某个页面指定带参数的情况才重定向，按照如下配置 将 `id=1` 的情况进重定向

```js
transfer: {
  'main/goods/detail?id=1': 'shop/goods/detail'
}
```