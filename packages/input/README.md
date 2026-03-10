# XiInput 输入框

## 使用方法

```vue
<template>
  <xi-input v-model="value" placeholder="请输入内容" />
</template>

<script>
export default {
  data() {
    return {
      value: ''
    }
  }
}
</script>
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| v-model | 绑定值 | String / Number | - |
| type | 输入框类型 | String | text |
| placeholder | 占位符 | String | - |
| disabled | 是否禁用 | Boolean | false |
| readonly | 是否只读 | Boolean | false |
| size | 尺寸 | String: small / medium / large | - |
| clearable | 是否可清空 | Boolean | false |
| prefix | 前置图标 | String | - |
| suffix | 后置图标 | String | - |

## Events

| 事件名 | 说明 | 参数 |
|--------|------|------|
| input | 输入时触发 | (value: String) |
| change | 值变化时触发 | (value: String) |
| focus | 获得焦点时触发 | (event: Event) |
| blur | 失去焦点时触发 | (event: Event) |
| clear | 点击清空按钮时触发 | - |

## 示例

### 基础用法

```vue
<xi-input v-model="input" placeholder="请输入内容" />
```

### 禁用状态

```vue
<xi-input v-model="input" disabled placeholder="禁用状态" />
```

### 不同尺寸

```vue
<xi-input v-model="input" size="small" placeholder="小号" />
<xi-input v-model="input" size="medium" placeholder="中号" />
<xi-input v-model="input" size="large" placeholder="大号" />
```

### 可清空

```vue
<xi-input v-model="input" clearable placeholder="可清空" />
```
