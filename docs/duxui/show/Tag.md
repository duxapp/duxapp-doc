---
sidebar_position: 4
---

# Tag 标签

标签展示

## 示例

```jsx
import { Cell, Tag, Header, ScrollView, TopView, GroupList } from '@/duxuiExample'

export default function TagExample() {
  return <TopView>
    <Header title='Tag' />
    <ScrollView>
      <GroupList>
        <GroupList.Item title='基础用法'>
          <Cell.Group line={false}>
            <Cell title='default' desc={<Tag type='default'>标签</Tag>} />
            <Cell title='primary' desc={<Tag type='primary'>标签</Tag>} />
            <Cell title='success' desc={<Tag type='success'>标签</Tag>} />
            <Cell title='danger' desc={<Tag type='danger'>标签</Tag>} />
            <Cell title='warning' desc={<Tag type='warning'>标签</Tag>} />
          </Cell.Group>
        </GroupList.Item>
        <GroupList.Item title='圆角'>
          <Cell.Group line={false}>
            <Cell title='直角' desc={<Tag radiusType='square'>标签</Tag>} />
            <Cell title='小圆角' desc={<Tag radiusType='round-min'>标签</Tag>} />
            <Cell title='圆角' desc={<Tag radiusType='round'>标签</Tag>} />
          </Cell.Group>
        </GroupList.Item>
        <GroupList.Item title='尺寸'>
          <Cell.Group line={false}>
            <Cell title='s' desc={<Tag size='s'>标签</Tag>} />
            <Cell title='m' desc={<Tag size='m'>标签</Tag>} />
            <Cell title='l' desc={<Tag size='l'>标签</Tag>} />
          </Cell.Group>
        </GroupList.Item>
        <GroupList.Item title='其他'>
          <Cell.Group line={false}>
            <Cell title='default' desc={<Tag plain texColor='#666'>标签</Tag>} />
            <Cell title='primary' desc={<Tag plain>标签</Tag>} />
            <Cell title='success' desc={<Tag>标签</Tag>} />
          </Cell.Group>
        </GroupList.Item>
      </GroupList>
    </ScrollView>
  </TopView>
}
```

## Props

继承自[RowProps](../layout/Row#props)

### type

标签类型，类型用来指定主题颜色

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| enum('default', 'primary', 'secondary', 'success', 'danger', 'warning', 'custom1', 'custom2', 'custom3') | 否 | primary |

### color

标签颜色

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 |  |

### texColor

文字颜色

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 |  |

### radiusType

指定标签圆角类型

- square 直角
- round 圆角
- round-min 很小的圆角

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| enum('square', 'round', 'round-min') | 否 | round-min |

### size

标签尺寸

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| enum('s', 'm', 'l') | 否 | m |

### plain

是否镂空效果，这个效果有边框和文本

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |