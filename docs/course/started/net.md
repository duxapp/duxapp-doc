---
sidebar_position: 4
---

# 请求上传

程序对请求上传进行了封装，增加了更丰富的功能，封装实现了下面的特性

- 请求拦截器（中间件）
- 错误提醒
- 加载中
- 防止过快请求
- 请求hook封装
- hook缓存

## 创建
```js
// 定义一个请求配置，这个配置可以通用于请求和上传
const config = {
  config: {
    request: {
      origin: config.origin, // 从用户配置读取请求域名
      path: config.path, // 从用户配置读取请求二级路径
      contentType: 'application/json'
    },
    result: {
      code: 'statusCode',
      data: ['data', 'data'],
      succesCode: 200,
      message: res => {
        if (res.statusCode === 200) {
          return res.data.message
        }
        return res.data
      }
    },
    upload: {
      api: 'member/upload', // 上传文件接口
      requestField: 'file',
      resultField: ['data', 'data', 0, 'url']
    }
  },
  // 默认使用的中间件（请求拦截）
  middle: {

  }
}

const { request, throttleRequest, middle: requestMiddle } = createRequest(config)
const { upload, uploadTempFile, middle: uploadMiddle } = createRequest(config)

export {
  request,
  throttleRequest,
  requestMiddle,
  upload,
  uploadTempFile,
  uploadMiddle
}
```
## 使用

从上面导出的文件导入请求函数
```js
import { request, upload } from '@/modeName'

// get请求
const res = await request('mall/list')

// post请求
const res = await request({
  url: 'mall/list',
  method: 'POST'
})

// 上传单个图片
const [url] = await upload('image', { count: 1 })

// 上传多个图片
const urls = await upload('image', { count: 9 })

// 上传视频
const [url] = await upload('video', { count: 1 })
```

更多请查看duxapp文档

## 中间件

通常后端都有一套请求认证流程，通过请求拦截就能很好的处理这些问题,例如duxcms的认证认证签名过程如下

```js

const before = async params => {

  const timestamp = Math.round(new Date().getTime() / 1000)
  const [orign, query] = params.url.split('?')
  const paths = orign.split('/').slice(orign.startsWith('http') ? 3 : 1)
  const contentDate = timestamp.toString()

  const signData = []
  signData.push('/' + paths.join('/'))
  signData.push(qs.stringify({
    ...params.query,
    ...query ? qs.parse(query) : {}
  }, { encode: false }))
  // signData.push(contentMD5)
  signData.push(contentDate)

  const hash = hmacSha256(signData.join('\n'), config.secretKey)
  const sign = encHex.stringify(hash)

  params.header = {
    Accept: 'application/json',
    AccessKey: config.secretId,
    'Platform': getPlatform(),
    'Content-MD5': sign,
    'Content-Date': contentDate,
    ...params.header,

  }
  return params
}

// 上传和请求共用一个拦截器
requestMiddle.before(before, 10)
uploadMiddle.before(before, 10)

```
然后对返回的结果进行进一步的处理

```js
requestMiddle.result(async (res) => {
  if (res.statusCode === 200) {
    const data = res.data.data || {}
    data._meta = res.data.meta
    return data
  }
  throw {
    ...(res.data && typeof res.data === 'object' ? res.data : { data: res.data }),
    code: res.statusCode,
    message: res.data?.message || res.data
  }
}, 10)
```

:::info
拦截器的第二个参数是运行顺序，数字越大的约在后面运行
:::

## 使用hook

用hook来发起请求，是在组件或者hook中更有效的使用方式，通过下面的方式来封装，请求hook，和分页请求hook

```jsx
import { createRequestHooks } from '@/duxapp'

const { useRequest, usePageData } = createRequestHooks(request)

// 将他们和请求一起导出
export {
  request,
  throttleRequest,
  requestMiddle,
  upload,
  uploadTempFile,
  uploadMiddle,
  useRequest,
  usePageData
}
```

使用useRequest

```jsx
// res是请求结果，未获得结果时，默认是一个对象
const [res, action] = useRequest('mall/list')

// 重新加载数据
action.reload()

// 请求状态
action.loading

// 手动设置res的值
action.setData()

// 参数格式和request一致
const [res, action] = useRequest({
  url: 'mall/list',
  method: 'POST',
  // 当data参数发生变化时，会自动重新请求获取新的内容
  data: {
    keyword: '1'
  }
})

// 延迟请求 当ready变为true的时候才会开始请求
const [res, action] = useRequest('mall/list', {
  ready: false
})

// 请求缓存
const [res, action] = useRequest('mall/list', {
  cache: true
})

// 在上层页面关闭时，刷新数据
const [res, action] = useRequest('mall/list', {
  reloadForShow: true
})

// 默认值
const [res, action] = useRequest('mall/list', {
  defaultData: {
    info: {
      name: '张三'
    }
  }
})
```

usePageData是一个分页请求，传递 page 参数用于分页的情况下适用

```js
// res是请求结果，未获得结果时，默认是一个对象
const [list, action] = usePageData('mall/list')

// 重新加载数据
action.reload()

// 加载下一页
action.next()

// 手动设置list的值
action.setList()

// 请求状态
action.loading

// 是否请在下拉刷新
action.refresh

// 参数格式和request一致
const [list, action] = usePageData({
  url: 'mall/list',
  method: 'POST',
  // 当data参数发生变化时，会自动重新请求获取新的内容
  data: {
    keyword: '1'
  }
})

// 延迟请求 当ready变为true的时候才会开始请求
const [list, action] = usePageData('mall/list', {
  ready: false
})

// 请求缓存
const [list, action] = usePageData('mall/list', {
  cache: true
})

// 默认值
const [list, action] = usePageData('mall/list', {
  defaultListData: [
    { name: '张三' }
  ]
})
```

## 扩展

`useRequest` `usePageData`，可以用于进一步创建 `List` 和 `Detail` 组件