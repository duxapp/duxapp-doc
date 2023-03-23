# 键盘安全区域(KeyboardAvoiding)

## 组件描述

KeyboardAvoiding 组件是一个用于 React Native 应用的组件，用于避免键盘遮挡输入框的问题。

当 `isForm` 为 true 时，组件将渲染一个 `KeyboardAvoidingView` 包裹传入的 `children`，以便在键盘弹出时自动调整页面布局。当 `isForm` 为 false 时，组件只会简单地渲染传入的 `children`。

## 属性

| 属性名 | 类型 | 必填 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| children | ReactNode | 是 | 无 | 需要渲染的子组件 |
| isForm | boolean | 否 | false | 是否需要键盘避免遮挡 |

## 使用示例

```jsx
import { KeyboardAvoiding } from '@/components/KeyboardAvoiding'

function MyForm() {
  return (
    <KeyboardAvoiding isForm>
      {/* 表单内容 */}
    </KeyboardAvoiding>
  )
}
```