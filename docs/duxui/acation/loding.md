---
sidebar_position: 5
---

# loading 显示加载动画

`loading(text, mask)`

## 示例

import { Preview } from '@site/src/components/Preview'

<Preview name='loadingUtil' />

```jsx
import { Header, ScrollView, TopView, GroupList, loading, Button, Space } from '@/duxuiExample'
import { useRef } from 'react'

export default function LoadingExample() {

  const loadingRef = useRef(null)

  return <TopView>
    <Header title='loading' />
    <ScrollView>
      <GroupList>
        <GroupList.Item title='显示加载动画'>
          <Space>
            <Button
              type='primary'
              onClick={() => {
                loadingRef.current = loading()
              }}
            >显示</Button>
            <Button
              type='danger'
              onClick={() => {
                loadingRef.current?.()
              }}
            >隐藏</Button>
          </Space>
        </GroupList.Item>
        <GroupList.Item title='自定义文本'>
          <Button
            type='primary'
            onClick={() => {
              const stop = loading('加载中')
              setTimeout(stop, 3000)
            }}
          >显示</Button>
        </GroupList.Item>
        <GroupList.Item title='遮住页面'>
          <Button
            type='primary'
            onClick={() => {
              const stop = loading('加载中', true)
              setTimeout(stop, 3000)
            }}
          >显示</Button>
        </GroupList.Item>
      </GroupList>
    </ScrollView>
  </TopView>
}
```

## 参数说明

### text

loading文本

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 | 请稍候 |

### mask

是否使用遮罩，使用遮罩后可以防止用户点击页面上的内容

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

## 返回值

返回一个函数，用于停止loding动画

