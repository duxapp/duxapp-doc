# 图片上传

多图片上传和单图片上传相关组件

# 单图上传(UploadImage)

上传单张图片组件，继承自 UploadImages，但只能上传一张图片。

## Props

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| ---- | ---- | ------ | ---- | ---- |
| value | string | | 否 | 图片地址 |
| onChange | function | | 否 | 图片地址变化的回调函数 |

## 示例

```jsx
import { UploadImage } from '@/base'

<UploadImage value={imageUrl} onChange={handleChange} />
```

# 多图上传(UploadImages)

上传图片组件

## Props

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| ---- | ---- | ------ | ---- | ---- |
| value | Array&lt;string&gt; | [] | 否 | 图片列表 |
| onChange | function | | 否 | 图片列表变化的回调函数 |
| max | number | 9 | 否 | 最多可上传的图片数量 |

## 示例

```jsx
import { UploadImages } from '@/base'

<UploadImages value={imageUrls} onChange={handleChange} max={5} />
```
