---
sidebar_position: 2
---

# 请求上传

如果你尚未了解如何使用，请先阅读[请求上传入门教程](/docs/course/started/net)，了解请求上传如何使用

## 使用

### createRqeust(option)

option参数

| 名称 | 类型 | 说明 |
| ---- | ---- | ------- |
| config | [RequestConfig](#requestconfig) | 请求配置 |
| middle | [RequestMiddles](#requestmiddles) | 默认中间件 |

返回值

| 名称 | 类型 | 说明 |
| ---- | ---- | ------- |
| request() | (option: string \| [RequestOption](#requestoption)) => [RequestTask](#requesttask) | 请求函数 |
| throttleRequest() | (option: [RequestOption](#requestoption), mark?: string) => ThrottleRequestTask | 发起一个节流请求函数 |
| middle() | [RequestMiddle](#requestmiddle) | 添加中间件 |

### createUpload(option)

option参数

| 名称 | 类型 | 说明 |
| ---- | ---- | ------- |
| config | [RequestConfig](#requestconfig) | 请求配置 |
| middle | [UploadMiddles](#uploadmiddles) | 默认中间件 |

返回值

| 名称 | 类型 | 说明 |
| ---- | ---- | ------- |
| upload() | (type: enum('image', 'video', 'all'), option: [UploadOption](#uploadoption)) => [UploadTask](#uploadtask) | 上传图片或者视频 |
| uploadTempFile() | (files: [Upload.File](#uploadfile)[], option: [UploadOption](#uploadoption)) => [UploadTask](#uploadtask) | 上传临时文件 |
| middle() | [UploadMiddle](#uploadmiddle) | 添加中间件 |

## hooks

请求hooks需要通过 `createRequestHooks(request)` 进行创建，创建后返回 `useRequest` 和 `usePageData`

### useRequest(option, config)

将request方法封装为hook进行网络请求

| 名称 | 类型 | 说明 |
| ---- | ---- | ------- |
| option | [RequestOption](#requestoption) | 请求参数 |
| config | [UseRequestOption](#userequestoption) | hook配置 |

返回值 [UseRequestResult](#userequestresult)

### usePageData(option, config)

当你有使用page分页请求的列表是就可以用这个hook进行请求，这个个hook一般是作为[List组件](/docs/duxui/base/List)的hook请求使用

| 名称 | 类型 | 说明 |
| ---- | ---- | ------- |
| option | [RequestOption](#requestoption) | 请求参数 |
| config | [UsePageDataOption](#usepagedataoption) | hook配置 |

返回值 [UsePageDataResult](#usepagedataresult)

## Types

### RequestConfig
- **request** (`object`): 请求相关配置
  - **origin** (`string`): 请求域名及端口号，请勿以 `/` 结尾
  - **path** (`string`): 公共请求路径
  - **contentType** (`string`): 请求媒体类型，有效值如 `application/json` 或 `application/x-www-form-urlencoded`
  - **header** (`object | ((option: object) => object)`): 公共请求 header，可以传入函数或对象，函数需返回一个对象
  - **data** (`object | (() => void)`): 要携带在请求上的参数，根据 `method` 请求类型自动设置在 GET 或 POST 中，可以传入函数或对象，函数需返回一个对象
  - **getData** (`object | (() => void)`): 要携带在请求 URL 上的参数，即使使用 POST 请求时，也在 GET 参数上，可以传入函数或对象，函数需返回一个对象

- **result** (`object`): 返回结果配置
  - **successCode** (`number`): 成功的 code，code 对不上，请求将会走 `catch` 方法
  - **errorCode** (`number`): 请求失败的标准 code，用于内部使用
  - **code** (`string | string[] | (() => void)`): 返回值获取 code 字段，多级请用数组表示，可以传入函数处理数据
  - **message** (`string | string[] | (() => void)`): 返回值获取提示信息的字段，多级请用数组表示，可以传入函数处理数据
  - **data** (`string | string[] | (() => void)`): 要返回到请求结果的字段，当 code 对比成功时返回此值，多级请用数组表示，可以传入函数处理数据

- **upload** (`object`): 上传配置
  - **api** (`string`): 上传 API，API 后可以携带参数
  - **requestField** (`string | string[] | (() => void)`): 上传文件时的字段名，因小程序限制，单次上传仅能上传一个文件，所以只能设置一个名称
  - **resultField** (`string | string[] | (() => void)`): 返回值的图片路径的 URL，如果有多级可以配置数组，如 `[0, url]` 或者函数

### RequestMiddles

- **before** (`(((requestParams: { url: string, contentType: string, query: object, body: object | null, header: object, method: keyof Request.method, timeout: number }, params: Request.RequestOption) => object | Promise<object>) => void)[]`) 请求参数中间件，在发起请求之前将处理过的请求参数传入

- **result** (`(((result: object, params: Request.RequestOption) => object | Promise<object>) => void)[]`) 处理请求结果的中间件

- **error** (`(((error: { code: number, message: string } | object, params: Request.RequestOption) => object | Promise<object>) => void)[]`) 处理请求错误的中间件

### RequestOption

- **url** (`string`): 请求链接，相对地址
- **header** (`object`): 附加的 header
- **data** (`object`): 请求数据，根据 `method` 会加在对应位置
- **method** (`keyof method`): 请求类型
- **timeout** (`number`): 请求超时时间（ms），默认 `30000`
- **repeatTime** (`number`): 防止重复请求的时间间隔，在此时间内相同参数的请求将被拦截触发 `catch`
  - `catch` 将返回以下数据，如果不想使用，可以将此值设置为 `0`
    ```javascript
    { code: 3, message: '重复请求' }
    ```
  - **默认值**: `500`
- **loading** (`boolean | string | (() => () => void)`): 是否在请求过程中显示 loading
  - 传入一个字符串，将在请求时显示此字符串
  - 传入一个 loading 函数，将执行该函数，并要求该函数返回停止 loading 的函数
- **toast** (`boolean`): 是否在请求至 `catch` 时显示错误提示
- **config** ([`RequestConfig`](#requestconfig)): 请求配置，用于覆盖默认配置
- **middle** (`middle`): 中间件，用于覆盖默认配置的中间件

### RequestTask

- **abort** (`() => void`): 取消请求

### RequestMiddle

- **before** (`(callback: Request.middle["before"], sort: boolean, common: boolean) => { remove: () => void }`): 请求前中间件
  - **callback**: 回调函数
  - **sort**: 排序，数字小的先执行，默认为 `0`
  - **common**: 是否用在全局
  - **返回值**: 包含 `remove` 方法，用于移除中间件

- **result** (`(callback: Request.middle["result"], sort: boolean, common: boolean) => { remove: () => void }`): 请求结果中间件
  - **callback**: 回调函数
  - **sort**: 排序，数字小的先执行，默认为 `0`
  - **common**: 是否用在全局
  - **返回值**: 包含 `remove` 方法，用于移除中间件

- **error** (`(callback: Request.middle["error"], sort: boolean, common: boolean) => { remove: () => void }`): 请求错误中间件
  - **callback**: 回调函数
  - **sort**: 排序，数字小的先执行，默认为 `0`
  - **common**: 是否用在全局
  - **返回值**: 包含 `remove` 方法，用于移除中间件

### UploadMiddles

- **before** (`(((requestParams: { url: string, contentType: string, query: object, body: object | null, header: object, method: keyof Request.method, timeout: number }, params: Request.RequestOption) => object | Promise<object>) => void)[]`) 请求参数中间件，在发起请求之前将处理过的请求参数传入

- **result** (`(((result: object, params: Request.RequestOption) => object | Promise<object>) => void)[]`) 处理请求结果的中间件

- **error** (`(((error: { code: number, message: string } | object, params: Request.RequestOption) => object | Promise<object>) => void)[]`) 处理请求错误的中间件

### UploadOption

- **count** (`number`): 最大数量，仅在类型为 `image` 时有效
  - **默认值**: `1`
- **api** (`string`): 用户替换默认设置的 API
- **requestField** (`string | string[] | (() => void)`): 用户替换默认的上传字段
- **resultField** (`string | string[] | (() => void)`): 用户替换默认的返回值字段
- **sourceType** (`keyof sourceType[]`): 选择图片的来源
- **sizeType** (`keyof sizeType[]`): 图片压缩类型
- **compressed** (`boolean`): 视频压缩
- **maxDuration** (`number`): 拍摄时的最大时长，单位为秒
- **camera** (`keyof camera`): 默认拉起的前置或后置摄像头。部分 Android 手机下由于系统 ROM 不支持可能无法生效
- **config** (`RequestConfig`): 请求配置
- **middle** (`middle`): 中间件
- **timeout** (`number`): 请求超时

### UploadTask

- **abort** (`() => void`): 取消请求
- **progress** (`(callback: (res: uploadTask.ProgressOption) => void) => UploadTask`): 监听上传进度
  - **callback**: 上传进度回调函数
- **start** (`(callback: () => void) => UploadTask`): 选择完成后开始上传通知
  - **callback**: 开始上传的回调函数

### UploadFile

- **path** (`string`): 文件路径
- **size** (`number`): 文件大小

### UploadMiddle

- **before** (`(callback: Upload.middle['before'], sort: boolean, common: boolean) => { remove: () => void }`): 开始上传前中间件
  - **callback**: 回调函数
  - **sort**: 排序，数字小的先执行，默认为 `0`
  - **common**: 是否用在全局
  - **返回值**: 包含 `remove` 方法，用于移除中间件

- **result** (`(callback: Upload.middle['result'], sort: boolean, common: boolean) => { remove: () => void }`): 上传结果中间件
  - **callback**: 回调函数
  - **sort**: 排序，数字小的先执行，默认为 `0`
  - **common**: 是否用在全局
  - **返回值**: 包含 `remove` 方法，用于移除中间件

- **error** (`(callback: Upload.middle['error'], sort: boolean, common: boolean) => { remove: () => void }`): 上传错误中间件
  - **callback**: 回调函数
  - **sort**: 排序，数字小的先执行，默认为 `0`
  - **common**: 是否用在全局
  - **返回值**: 包含 `remove` 方法，用于移除中间件

### UseRequestOption

- **detailCallback** (`(result: object) => object`): 返回数据的回调，函数中返回的数据将作为此 hook 的结果
- **defaultData** (`any`): 默认数据
- **field** (`string`): 在返回的数据中用这个 key 取值
- **onError** (`(err: any) => any | Promise<{}>`): 请求错误回调，在这里如果不抛出错误，的话需要返回正确的值，算是请求成功
- **reloadForShow** (`boolean`): 在页面显示的时候刷新数据
- **cache** (`boolean`): 启用缓存
- **ready** (`boolean`): 是否准备好，如果此参数为 `false`，将不会发起请求

### UseRequestResult

- **loading** (`boolean`): 是否正在请求数据
- **reload** (`() => Promise<{ }>`): 重新加载数据
- **setData** (`(value: any | ((old: any) => any)) => void`): 同 `useState()` 返回的第二个参数
  - **value**: 要设置的数据或更新数据的函数

### UsePageDataOption

- **field** (`string`): list 用的字段
- **listCallback** (`(list: any[], result: any) => any[]`): 列表回调
  - **list**: 列表
  - **result**: 请求返回值
- **cache** (`boolean`): 启用缓存，会缓存第一页的内容
- **ready** (`boolean`): 是否准备好，如果此参数为 `false`，将不会发起请求
- **defaultListData** (`any[]`): 默认列表数据
- **onRequestOption** 处理请求参数的回调函数

### UsePageDataResult

- **loading** (`boolean`): 是否正在请求数据
- **refresh** (`boolean`): 是否正在下拉刷新
- **next** (`() => void`): 获取下一页数据
- **reload** (`() => Promise<{}>`): 跳转到第一个页并重新加载数据
- **setList** (`(value: any[] | ((oldState: any[]) => any[])) => void`): 设置列表数据，`useState` 返回的第二个值
  - **value**: 要设置的列表数据或更新数据的函数