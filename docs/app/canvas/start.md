# 开始

为了实现兼容多端的canvas，开发了这个组件，在RN端将用 `react-native-skia` 模拟canvas的api，实现跨端绘图功能

:::info
实验性的api，可能有不稳定或者不完善的地方
:::
## 安装
```
yarn duxapp app add duxappCanvas
```

## 示例

import { Preview } from '@site/src/components/Preview'

<Preview name='Canvas' />

```jsx
import { Header, TopView, GroupList, ScrollView, px } from '@/duxuiExample'
import { Canvas, defineCanvasRef } from '@/duxappCanvas'
import { useEffect, useRef } from 'react'

export default function CanvasExample() {

  const pictureRef = useRef(defineCanvasRef())
  const normalRef = useRef(defineCanvasRef())

  useEffect(() => {
    let cancelled = false
    let rafId = null
    let canvasInst = null

    pictureRef.current.getCanvas().then(({ canvas, size }) => {
      if (cancelled) {
        return
      }

      canvasInst = canvas
      const ctx = canvas.getContext('2d')

      const logo = canvas.createImage()
      let logoReady = false
      logo.src = require('./static/logo.jpg')
      logo.onload = () => {
        logoReady = true
      }

      const render = (t = 0) => {
        if (cancelled) {
          return
        }

        const { width = 0, height = 0 } = size
        if (!width || !height) {
          rafId = canvas.requestAnimationFrame(render)
          return
        }

        const time = t / 1000

        // picture 模式下 clearRect 不会清屏：每帧全量重绘背景
        ctx.setTransform(1, 0, 0, 1, 0, 0)
        ctx.globalCompositeOperation = 'source-over'
        ctx.fillStyle = '#f5f7fb'
        ctx.fillRect(0, 0, width, height)

        // 轻微动效：网格背景
        const grid = 24
        ctx.lineWidth = 1
        ctx.strokeStyle = 'rgba(0,0,0,0.05)'
        const offset = (time * 30) % grid
        for (let x = -grid; x < width + grid; x += grid) {
          ctx.beginPath()
          ctx.moveTo(x + offset, 0)
          ctx.lineTo(x + offset, height)
          ctx.stroke()
        }

        // 旋转方块
        ctx.save()
        ctx.translate(width / 2, height / 2)
        ctx.rotate(time)
        ctx.fillStyle = 'rgba(76, 175, 80, 0.9)'
        ctx.fillRect(-44, -44, 88, 88)
        ctx.restore()

        // 弹跳小球
        const cx = width / 2 + Math.cos(time * 1.6) * (width * 0.25)
        const cy = height / 2 + Math.sin(time * 2.2) * (height * 0.18)
        ctx.beginPath()
        ctx.arc(cx, cy, 18 + Math.sin(time * 3) * 3, 0, Math.PI * 2)
        ctx.fillStyle = '#2196f3'
        ctx.fill()

        // 文本
        ctx.font = 'bold 18px Arial'
        ctx.fillStyle = '#111827'
        ctx.textAlign = 'left'
        ctx.fillText('Canvas picture 模式（全量重绘）', 12, 28)

        // 图片：随时间轻微摆动
        if (logoReady) {
          const imgSize = 72
          const imgX = 12
          const imgY = Math.max(44, height - imgSize - 12)
          ctx.save()
          ctx.translate(imgX + imgSize / 2, imgY + imgSize / 2)
          ctx.rotate(Math.sin(time * 1.5) * 0.15)
          ctx.drawImage(logo, -imgSize / 2, -imgSize / 2, imgSize, imgSize)
          ctx.restore()
        }

        rafId = canvas.requestAnimationFrame(render)
      }

      rafId = canvas.requestAnimationFrame(render)
    }).catch(err => {
      console.error(err)
    })

    return () => {
      cancelled = true
      if (canvasInst?.cancelAnimationFrame && rafId !== null) {
        canvasInst.cancelAnimationFrame(rafId)
      }
    }
  }, [])

  useEffect(() => {
    normalRef.current.getCanvas().then(({ canvas, size }) => {
      const ctx = canvas.getContext('2d')
      // 1. 基本矩形绘制
      ctx.fillStyle = '#e1f5fe'
      ctx.fillRect(0, 0, size.width, size.height)

      // 2. 路径和描边
      ctx.beginPath()
      ctx.moveTo(50, 50)
      ctx.lineTo(150, 50)
      ctx.lineTo(100, 150)
      ctx.closePath()

      ctx.strokeStyle = '#0277bd'
      ctx.lineWidth = 5
      ctx.lineJoin = 'round'
      ctx.stroke()

      ctx.fillStyle = 'rgba(2, 119, 189, 0.3)'
      ctx.fill()

      // 3. 圆形和虚线
      ctx.beginPath()
      ctx.arc(200, 100, 50, 0, Math.PI * 2)
      ctx.setLineDash([10, 5])
      ctx.strokeStyle = '#d81b60'
      ctx.stroke()
      ctx.setLineDash([])

      // 4. 文本绘制
      ctx.font = 'bold 24px Arial'
      ctx.fillStyle = '#000'
      ctx.textAlign = 'center'
      ctx.fillText('Hello Skia!', size.width / 2, 50)

      ctx.strokeStyle = '#ff9800'
      ctx.lineWidth = 1
      ctx.strokeText('Stroke Text', size.width / 2, 80)

      // 5. 图像绘制
      const image = canvas.createImage()
      image.src = require('./static/logo.jpg')
      image.onload = () => {
        // 完整图片
        ctx.drawImage(image, 50, 200, 100, 100)

        // 裁剪后图片
        ctx.drawImage(
          image,
          50, 50, 100, 100,  // 源矩形
          180, 200, 150, 150  // 目标矩形
        )
      }

      // 6. 变换和旋转
      ctx.save()
      ctx.translate(size.width / 2, size.height / 2)
      ctx.rotate(Math.PI / 4)
      ctx.fillStyle = '#4caf50'
      ctx.fillRect(-50, -50, 100, 100)
      ctx.restore()

      // 7. 混合模式
      ctx.globalCompositeOperation = 'multiply'
      ctx.fillStyle = '#2196f3'
      ctx.beginPath()
      ctx.arc(300, 400, 40, 0, Math.PI * 2)
      ctx.fill()

      // 8. 重置混合模式
      ctx.globalCompositeOperation = 'source-over'
      ctx.fillStyle = '#ff5722'
      ctx.fillRect(280, 380, 40, 40)
    }).catch(err => {
      console.error(err)
    })
  }, [])

  return <TopView>
    <Header title='Canvas' />
    <ScrollView>
      <GroupList>
        <GroupList.Item title='画布（picture）' desc='开启后每次渲染都会使用新的绘制画布：变换状态会重置，需每帧/每次完整重绘；适合动画或全局重绘场景，使用这个模式大约能提升50%的性能'>
          <Canvas
            ref={pictureRef}
            className='w-full'
            style={{ height: px(720) }}
            picture
          />
        </GroupList.Item>
        <GroupList.Item title='画布（普通）' desc='默认模式会复用同一绘制画布并保留变换状态；适合静态或增量绘制（例如只更新局部内容）'>
          <Canvas
            ref={normalRef}
            className='w-full'
            style={{ height: px(720) }}
          />
        </GroupList.Item>
      </GroupList>
    </ScrollView>
  </TopView>
}
```

## 属性

### onLayout

尺寸改变事件

需要监听这个事件，在回调里面需要重绘你的内容

在RN端可以适应任何尺寸变化

小程序 H5 端监听的是整个窗口resize事件，一般是在PC端拖动窗口大小或者全屏

首次布局不会触发，会在布局更新的时候触发

### picture

RN 端开启 picture 模式后会使用新的绘制画布，适合全量重绘或动画场景

开启后每次渲染都需要重新设置变换和样式，`clearRect` 将不会生效

### ref

获取组件实例，通过上面的示例获取详情

## 方法

### defineCanvasRef()

定义 `Canvas` 组件的ref，用来获取编写提示

```js
const ref = useRef(defineCanvasRef())

ref.current.getCanvas().then(({ canvas }) => {
  const ctx = canvas.getContext('2d')
})
```

### defineCanvas(canvas)

定义 `cavans` 用于获取编写提示

```js
const canvas = defineCanvas()

const ctx = canvas.getContext('2d')
```

### defineCanvasContext()

定义 canvas 的上下文，用于获取编写提示

```js
const ctx = defineCanvasContext()

ctx.fillRect(0, 0, 100, 100)
```

## 支持的 API

目前仅支持 `2d` 上下文（`canvas.getContext('2d')`），并实现了常用的绘图能力（更多能力会持续补齐）。

### CanvasElement（canvas）

- `getContext(type: '2d'): CanvasContext`
- `createImage(): CanvasImage`
- `requestAnimationFrame(callback): number`
- `cancelAnimationFrame(handle): void`
- `width: number` / `height: number`

### CanvasImage（图片对象）

通过 `canvas.createImage()` 创建：

- `src: string`（在不同端可能支持本地资源/网络地址；示例里可直接赋值 `require(...)`）
- `onload(): void` / `onerror(): void`
- `width: number` / `height: number`

### Path2D

支持 `new Path2D()` 与 `addPath`，可用于 `ctx.fill` / `ctx.stroke` 等路径绘制

### CanvasContext（2d 上下文）

#### 状态管理

- `save()` / `restore()`

#### 变换

- `translate(x, y)`
- `scale(x, y?)`
- `rotate(angle)`
- `transform(a, b, c, d, e, f)`
- `setTransform(a, b, c, d, e, f)`
- `resetTransform()`
- `getTransform(): { a,b,c,d,e,f }`

#### 路径

- `beginPath()` / `closePath()`
- `moveTo(x, y)` / `lineTo(x, y)`
- `arc(x, y, radius, startAngle, endAngle, anticlockwise?)`
- `arcTo(x1, y1, x2, y2, radius)`
- `bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)`
- `quadraticCurveTo(cpx, cpy, x, y)`
- `rect(x, y, width, height)`
- `roundRect(x, y, width, height, radii)`
- `ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise?)`

#### 绘制

- `fill(fillRule?)`
- `stroke()`
- `clip(fillRule?)`
- `isPointInPath(x, y, fillRule?): boolean`

#### 矩形

- `fillRect(x, y, width, height)`
- `strokeRect(x, y, width, height)`
- `clearRect(x, y, width, height)`

#### 文本

- `fillText(text, x, y, maxWidth?)`
- `strokeText(text, x, y, maxWidth?)`
- `measureText(text): { width, actualBoundingBoxLeft, actualBoundingBoxRight, fontBoundingBoxAscent, fontBoundingBoxDescent }`

#### 图像绘制

- `drawImage(image, dx, dy)`
- `drawImage(image, dx, dy, dWidth, dHeight)`
- `drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)`

#### 线条样式

- `lineWidth: number`
- `lineCap: 'butt' | 'round' | 'square'`
- `lineJoin: 'miter' | 'round' | 'bevel'`
- `miterLimit: number`
- `setLineDash(segments: number[])` / `getLineDash(): number[]`
- `lineDashOffset: number`

#### 填充 / 描边 / 透明度

- `fillStyle: string | CanvasGradient | CanvasPattern`
- `strokeStyle: string | CanvasGradient | CanvasPattern`
- `globalAlpha: number`

#### 文本样式

- `font: string`
- `textAlign: 'left' | 'right' | 'center' | 'start' | 'end'`
- `textBaseline: 'top' | 'hanging' | 'middle' | 'alphabetic' | 'ideographic' | 'bottom'`
- `direction: 'ltr' | 'rtl' | 'inherit'`

#### 合成（混合模式）

- `globalCompositeOperation: GlobalCompositeOperation`

可用值（含扩展混合模式）：

```txt
source-over, source-in, source-out, source-atop,
destination-over, destination-in, destination-out, destination-atop,
lighter, copy, xor,
multiply, screen, overlay, darken, lighten, color-dodge, color-burn,
hard-light, soft-light, difference, exclusion, hue, saturation, color, luminosity
```

#### 渐变 / 图案

- `createLinearGradient(x0, y0, x1, y1): CanvasGradient`
- `createRadialGradient(x0, y0, r0, x1, y1, r1): CanvasGradient`
- `createPattern(image: OffscreenCanvas, repetition?): CanvasPattern`
- `CanvasGradient.addColorStop(offset, color)`

#### 像素操作

- `getImageData(sx, sy, sw, sh): { width, height, data: Uint8ClampedArray }`
- `putImageData({ width, height, data }, dx, dy)`

### OffscreenCanvas（离屏画布）

用于离屏绘制、生成图案等：

```js
import { OffscreenCanvas } from '@/duxappCanvas'

const offscreen = new OffscreenCanvas(200, 200)
const offctx = offscreen.getContext('2d')

offctx.fillStyle = '#000'
offctx.fillRect(0, 0, 200, 200)

// 示例：用离屏画布创建图案（pattern）
// const pattern = ctx.createPattern(offscreen, 'repeat')
// ctx.fillStyle = pattern
// ctx.fillRect(0, 0, size.width, size.height)
```
