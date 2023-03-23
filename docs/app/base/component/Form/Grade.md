# 评分(Grade)

`Grade` 是一个评分组件，可以显示 1 到 5 颗星，用户可以点击星星改变评分值。

## 属性

| 属性名 | 类型 | 默认值 | 必填 | 说明 |
| -------- | -------- | ------ | ---- | -------- |
| value | number | 0 | 否 | 当前评分 |
| onChange | function | | 否 | 评分变化时的回调函数，参数为新的评分值 |

## 示例

```jsx
import { Grade } from '@/components/Grade'

function Example() {
  const [grade, setGrade] = useState(0)

  const handleGradeChange = useCallback(newGrade => {
    setGrade(newGrade)
  }, [])

  return (
    <View>
      <Grade value={grade} onChange={handleGradeChange} />
    </View>
  )
}
```

## 注意事项

- 评分值为 1 到 5 的整数。
- 点击星星时，将评分值传递给 `onChange` 函数，如果不传递 `onChange`，则组件只能展示评分，无法交互。
- 支持自定义评分星星的图标，图标需要自己提供并引入，可以通过 `collection` 和 `collectionFill` 两个变量引用。