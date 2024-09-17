---
sidebar_position: 10
---

# 日期函数

duxapp集成的是[`dayjs`](https://dayjs.fenxianglu.cn/)  

duxapp中默认给dayjs设置中文

## 示例

```js
import { dayjs } from '@/duxapp'

// 格式化
dayjs().format('YYYY-MM-DD HH:mm:ss')

// 加一天的时间
dayjs().add(1, 'day').format('YYYY-MM-DD HH:mm:ss')

// 解析字符串
dayjs('2024-01-01')
```

更多操作需前往官网查看
