---
sidebar_position: 4
---

# 路由配置

路由配置位于模块的 `config/route.js`，用来配置当前模块的页面路由  

当你创建一个新模块后，这个文件的默认内容是这样的

```js
/**
 * login:是否需要登录
 * platform:支持的平台(weapp, h5, rn)不配置支持所有
 * subPackage:是否将其设置为分包
 * home: 是否是主页 是主页的页面将会被排在前面
 */
export default {
  path: 'pages',
  pages: {
    'modeName/index': {
      pages: {
        index: {},
      },
    },
  }
}
```

:::info
这是一个node模块，需要用 `module.exports` 导出一个默认对象
:::

下面来详细介绍，这些配置的用途

## path

用于指定页面所在的目录，默认 `pages`，也就是页面文件放在模块的 `pages` 文件夹下，你可以修改这个字段，放在其他文文件夹，或者删除这个配置，可以将页面放在模块的根目录下  

为什么会出现这个配置？  

- 配置一个`path`后，你可以将页面放在同一个文件夹内，防止页面和其他功能放在一起造成混乱
- 配置 `path` 后，也不需要在路径中填写这个 `path`
- 使用 `route` 导航路由时，也可以省略这个 `path`, `route.push('modename/index/index')`

## alias

配置路由别名，配置后在跳转路由的时候可以使用别名跳转，在H5端真实跳转的地址会变成别名地址

有三个层级可以配置别名

- 1、最里层
```js
export default {
  path: 'pages',
  pages: {
    'modeName/index': {
      pages: {
        index: {
          alias: 'home'
        },
      },
    },
  }
}
```
这个配置是字符串，直接指定当前页面的别名

跳转示例：

```js
route.nav('home')
```

- 2、在分组层

```js
export default {
  path: 'pages',
  pages: {
    'modeName/index': {
      alias: name => `modeName/${name}`,
      pages: {
        index: {},
        page2: {},
      },
    },
  }
}
```
这里配置需要是个函数，接收这个分组里面的每个页面的名称作为参数，返回一个别名

跳转示例：

```js
route.nav('modeName/index')
route.nav('modeName/page2')
```

- 3、在最外层

```js
export default {
  path: 'pages',
  alias: page => {
    // modeName/pages/index/index
    // 传入完整页面路径，自行处理返回别名
    return page.replace('pages/index', '')
  },
  pages: {
    'modeName/index': {
      pages: {
        index: {},
        page2: {},
      },
    },
  }
}
```
这里配置需要是个函数，传入完整页面路径，自行处理返回别名

跳转示例：

```js
route.nav('modeName/index')
route.nav('modeName/page2')
```

## pages

页面路由配置，这个配置与原生的Taro路由配置不一样，经过了一层封装，将一个文件夹作为一个对象进行处理，文件夹中的页面就是这个对象`pages`中的键名

```js
{
  // 文件夹
  'modeName/index': {
    // 页面列表
    pages: {
      // index 页面
      index: {},
      // log 页面
      log: {}
    },
    // 其他配置
  }
}
```

这样做是为了方便对路由进行一些配置，下面介绍这些配置的用法

### platform

用于平台筛选，例如某个文件夹或者页面仅用于h5端，可以这样配置

```js
{
  // 文件夹
  'modeName/index': {
    pages: {
      index: {
        // 如果是这个页面用于h5
        platform: ['h5']
      },
      log: {}
    },
    // 如果是这个文件夹用于h5
    platform: ['h5']
  }
},
```

### subPackage
将某个文件夹用于分包，仅能配置在文件夹上

```js
{
  // 文件夹
  'modeName/index': {
    pages: {
      index: {},
      log: {}
    },
    // 将这个文件夹分包
    subPackage: true
  }
},
```

### home

将某个页面设置为主页，最终这个页面会配排序到页面列表中的第一个，请勿在分包中设置主页

```js
{
  // 文件夹
  'modeName/index': {
    pages: {
      index: {
        // 将这个页面设置为首页
        home: true
      },
      log: {}
    }
  }
},
```

这个配置很有用，通常在你作为入口模块的模块中，入口页面中需要配置

### login

这个配置是user模块用的，指定当前的文件夹或者页面是否需要登录，如果需要登录，使用 `route` 跳转页面时，如果未登录，先跳转到登录流程，登录成功后继续跳转到该页面

```js
{
  // 文件夹
  'modeName/index': {
    pages: {
      index: {
        // 如果文件夹为设置登录，则可以单个页面开启登录
        login: true
      },
      log: {
        // 设置文件夹登录后，可以设置单个页面关闭登录
        login: false
      }
    },
    // 整个文件夹需要登录
    login: true
  }
},
```
:::info
这个配置是user模块定制的，因为比较常用，顾写在此处
:::

## disablePages

因为系统是模块化设计的，在你依赖的模块中可能有的页面你根本就没有使用到，但是默认它们会被编译到你的项目中，这样就会增大你的项目体积，甚至可能导致小程序无法上传，所以这个配置的目的就是配置一些没用到的页面禁用  

一个数组 要禁用的页面列表，这个项目采用`includes`进行匹配,也就是说，你可以只配置页面路径的一部分

```js
[
  'duxapp/pages/index/index',
  'modename/pages/'
]
```

:::info
此处的页面路径需要包含path
:::

## transfer

路由转移配置，可以将跳转到A页面重定向调转到B页面  

情景：duxcmsMall的商品详情不符合我项目的页面设计，则可以在当前模块重新写一个商品详情页面，使用配置让他跳转到我新写的商品详情，这个配置将会同时起到禁用duxcmsMall的商品详情页面的功能

```js
{
  'duxcmsMall/goods/detail': 'modeName/pages/goods/detail'
}
```
这样配置将会把key页面跳转到value页面,使用下面的两个跳转方法，都会跳转到 `modeName/goods/detail` 页面

```js
route.push('duxcmsMall/goods/detail')
route.push('modeName/goods/detail')
```

也可以通过前缀匹配，将一些路由全部重定向，将 main/goods 开头的页面重定向到 shop/goods 文件夹下对应的页面

```js
{
  'main/goods': {
    mode: 'start'
    page: 'shop/goods'
  }
}
```

某些时候需要将某个页面指定带参数的情况才重定向，按照如下配置 将 id=1 的情况进重定向

```js
{
  'main/goods/detail?id=1': 'shop/goods/detail'
}
```