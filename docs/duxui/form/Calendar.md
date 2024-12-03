---
sidebar_position: 9
---

# Calendar 日历

为兼容多端，所以编写的日历组件，支持日、周、范围选择，支持多种自定义日历的方式

## 示例

import { Preview } from '@site/src/components/Preview'

<Preview name='Calendar' />

```jsx
import { Header, ScrollView, TopView, GroupList } from '@/duxuiExample'
import { Calendar, Checkbox, dayjs, Radio, Row, Text, toast } from '@/duxui'
import { useMemo, useState } from 'react'

export default function ButtonExample() {

  const [mode, setMode] = useState()

  const [checkbox, setCheckbox] = useState(false)

  const [onlyCurrentWeek, setOnlyCurrentWeek] = useState(false)

  const [maxmin, setMaxmin] = useState(false)

  const customDate = useMemo(() => {
    return [
      {
        date: [dayjs().format('YYYY-MM-DD')],
        bottom: ({ select }) => <Text size={1} type='primary' {...select ? { color: 4 } : {}}>今天</Text>,
        top: ({ select }) => <Text size={1} color={select ? 4 : 1}>顶部</Text>
      },
      {
        date: [dayjs().add(-1, 'day').format('YYYY-MM-DD')],
        bottom: ({ select }) => <Text size={1} type='secondary' {...select ? { color: 4 } : {}}>昨天</Text>
      },
      {
        date: [dayjs().add(1, 'day').format('YYYY-MM-DD')],
        bottom: ({ select }) => <Text size={1} type='secondary' {...select ? { color: 4 } : {}}>明天</Text>
      }
    ]
  }, [])

  const customSelect = useMemo(() => {
    return {
      top: ({ select, selectType }) => {
        if (selectType === 'start') {
          return <Text size={1} color={4}>开始</Text>
        } else if (selectType === 'end') {
          return <Text size={1} color={4}>结束</Text>
        } else if (selectType === 'select') {
          return <Text size={1} color={4}>选中</Text>
        }
      }
    }
  }, [])

  return <TopView>
    <Header title='Calendar' />
    <ScrollView>
      <GroupList>
        <GroupList.Item title='天选择'>
          <Radio.Group value={mode} onChange={setMode}>
            <Radio value={undefined} label='不选择' />
            <Radio value='day' label='天选择' />
            <Radio value='scope' label='范围选择' />
            <Radio value='week' label='周选择' />
          </Radio.Group>
          <Row className='gap-3 items-center'>
            <Checkbox label='多选' checked={checkbox} onClick={() => setCheckbox(!checkbox)} />
            <Checkbox label='仅显示当前周' checked={onlyCurrentWeek} onClick={() => setOnlyCurrentWeek(!onlyCurrentWeek)} />
            <Checkbox label='限制最大最小日期' checked={maxmin} onClick={() => setMaxmin(!maxmin)} />
          </Row>
          <Calendar mode={mode}
            key={mode + '' + checkbox}
            checkbox={checkbox}
            onlyCurrentWeek={onlyCurrentWeek}
            {
            ...maxmin ? {
              min: dayjs().format('YYYY-MM-DD'),
              max: dayjs().add(15, 'day').format('YYYY-MM-DD'),
            } : {}
            }
          />
        </GroupList.Item>
        <GroupList.Item title='事件'>
          <Calendar
            mode='day'
            onMonthChange={e => toast('onMonthChange:' + e)}
            onDayClick={e => toast('onDayClick:' + e.day)}
          />
        </GroupList.Item>
        <GroupList.Item title='自定义日历'>
          <Calendar
            mode='scope'
            customDate={customDate}
            customSelect={customSelect}
          />
        </GroupList.Item>
      </GroupList>
    </ScrollView>
  </TopView>
}
```

## Props

### mode

日历功能类型 默认不支持选择

- day 天选择
- week 周选择
- scope 日期范围选择

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| enum('day', 'week', 'scope') | 否 |  |

### checkbox

多选模式

开启后如果选择天，则可以选择多个天，如果选择周，则可以选择多个周、范围选择多个范围

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### value

选中的值

当为日期选择时需要传入字符串 格式为 2020-01-01

当为周或者范围选择时需要传入数组，数字第一项为开始日期，第二项为结束日期 如 ['2020-01-01', '2020-01-05']

多选模式时，将会在以上基础上再套一层数组

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string \| string[] \| string[][] | 否 |  |

### navStyle

导航部分的样式

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| CSSProperties | 否 |  |

### headStyle

头部的容器样式

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| CSSProperties | 否 |  |

### onChange

当选择发生改变时触发的事件

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| (value: string \| string[] \| string[][]) => void | 否 |  |

### onMonthChange

月份切换的时候触发

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| (value: string) => void | 否 |  |

### onDayClick

日期天点击事件 如果返回true将会阻止默认操作 如选中日期

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| `(option: { day: string, scopeStart: string }) => boolean` | 否 |  |

### max

允许选择的最大日期 如2030-01-01

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 |  |

### min

允许选择的最小日期 如2020-01-01

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| string | 否 |  |

### onlyCurrentWeek

是否仅显示当前日期所在的周 为true只会显示一周的数据

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| boolean | 否 | false |

### disabledDate

禁用的日期 日期或者日期范围组成的数组

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| (string \| [string, string])[] | 否 |  |

### enabledDate

可用的日期 除了传入的日期或者范围，其他的日期将被禁用，当 enabledDate 的日期在 disabledDate 里面时 此日期将不可用

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| (string \| [string, string])[] | 否 |  |

### customDate

自定义日期日历数据

参照上面的示例完成编写

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| CalendarCustom[] | 否 |  |

### customSelect

自定义选中的部分的日历数据

参照上面的示例完成编写

| 类型 | 必填 | 默认值 |
| ---- | -------- | ------- |
| CalendarSelect | 否 |  |
