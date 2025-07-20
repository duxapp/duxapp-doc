---
sidebar_position: 22
---

# SvgImageCropper 图片裁剪

用Svg编写的图片裁剪组件，也可以用用API的形式调用图片裁剪

## 示例

import { Preview } from '@site/src/components/Preview'

<Preview name='SvgImageCropper' />

```jsx
import { Header, ScrollView, TopView, GroupList, SvgImageCropper, svgImageCropper, pxNum, Button, chooseMedia, Column, Row, Text, Image, px, toast } from '@/duxuiExample'
import { useRef, useState } from 'react'

export default function SvgImageCropperExample() {

  const [img, setImg] = useState()

  const [result, setResult] = useState()

  const [apiResult, setApiResult] = useState()

  const save = useRef()

  return <TopView>
    <Header title='SvgImageCropper' />
    <ScrollView>
      <GroupList>
        <GroupList.Item title='使用组件裁剪'>
          <Column className='gap-2 bg-white r-2 p-2'>
            <Column className='bg-white border-w1 border-primary'>
              <SvgImageCropper quality={0.8} ref={save} src={img} width={pxNum(702)} height={pxNum(300)} />
            </Column>
            <Row className='gap-3'>
              <Button type='primary'
                onClick={async () => {
                  const [file] = await chooseMedia('image')
                  setImg(file.path)
                }}
              >选择图片</Button>
              <Button type='primary'
                onClick={async () => {
                  if (!img) {
                    return toast('请选择图片')
                  }
                  // 在选择图片之前调用裁剪方法会报错
                  const { tempFilePath } = await save.current.capture()
                  setResult(tempFilePath)
                }}
              >裁剪并保存</Button>
            </Row>
            <Text size={1} color={3}>裁剪结果</Text>
            <Image src={result} style={{ width: px(702), height: px(300) }} />
          </Column>
        </GroupList.Item>
        <GroupList.Item title='API使用'>
          <Column className='gap-2 bg-white r-2 p-2'>
            <Button type='primary'
              onClick={async () => {
                const [file] = await chooseMedia('image')
                const { tempFilePath } = await svgImageCropper({
                  src: file.path,
                  cropScale: '4:3',
                  quality: 0.8
                })
                setApiResult(tempFilePath)
              }}
            >选择图片并裁剪</Button>
            <Text size={1} color={3}>裁剪结果</Text>
            <Image src={apiResult} style={{ width: px(702), height: px(702 / 4 * 3) }} />
          </Column>
        </GroupList.Item>
      </GroupList>
    </ScrollView>
  </TopView>
}
```

## Props

### src

一个本地图片路径，请勿使用网络图片路径

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 是 |  |

### width

组件宽度

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number | 否 | 300 |

### format

图片格式

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| jpg \| png | 否 | png |

### quality

图片质量 0-1

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| number | 否 | 1 |

## 实例方法

### capture()

异步获取当前图片，参考上面的示例

返回值

| 名称 | 类型 | 说明 |
| ---- | ---- | ------- |
| tempFilePath | string | 临时文件位置 |

## 方法

### svgImageCropper(option)

直接通过函数的形式，使用官方封装的界面进行图片裁剪

这种裁剪与直接使用组件不同的是，需要指定宽高比，而不是宽度和高度

| 名称 | 类型 | 必填 | 默认值 | 说明 |
| ---- | ---- | ------- | ------- | ------- |
| src | string | 是 |  | 本地文件路径 |
| cropScale | string | 否 | '1:1' | 裁剪宽高比 |
| format | jpg \| png | 否 | png | 返回图片格式 |
| quality | number | 否 | 1 | 返回图片质量 0-1 |

返回值：函数异步返回一个临时文件路径

| 名称 | 类型 | 说明 |
| ---- | ---- | ------- |
| tempFilePath | string | 临时文件位置 |