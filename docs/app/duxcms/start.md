# 开始
对接后端 [Dux Next](https://next.dux.cn/guide/start) 框架的模块，提供了请求方法

## 安装

```bash
yarn duxapp app add duxcms
```

## 使用

```js
import { request, upload } from '@/duxcms'

// 请求方法
request('content/artile') // 文章列表
```