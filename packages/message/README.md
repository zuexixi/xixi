# XiMessage 消息提示

## 使用方法

```javascript
import { Message } from '@xixi/ui'

// 提示消息
Message.success('操作成功')
Message.error('操作失败')
Message.warning('警告信息')
Message.info('普通信息')
```

## 静态方法

| 方法 | 说明 |
|------|------|
| Message.success(options) | 成功提示 |
| Message.error(options) | 错误提示 |
| Message.warning(options) | 警告提示 |
| Message.info(options) | 普通提示 |
| Message.closeAll() | 关闭所有消息 |

## Options 参数

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| message | 消息内容 | String | - |
| type | 消息类型 | String: success / error / warning / info | info |
| duration | 显示时长(ms) | Number | 3000 |
| showClose | 显示关闭按钮 | Boolean | false |
| onClose | 关闭回调 | Function | - |
| offset | 距离顶部距离 | Number | 20 |

## 示例

### 基础用法

```javascript
Message.success('操作成功')
Message.error('操作失败')
Message.warning('警告信息')
Message.info('普通信息')
```

### 自定义时长

```javascript
Message.info10秒后消失({ message: '', duration: 10000 })
```

### 显示关闭按钮

```javascript
Message.info({ message: '可关闭', showClose: true })
```

### 手动关闭

```javascript
const msg = Message.success('手动关闭')
setTimeout(() => msg.close(), 3000)
```

### 关闭所有

```javascript
Message.closeAll()
```
