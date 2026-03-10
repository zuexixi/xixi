import Vue from 'vue'
import XiMessage from './src/message.vue'

const MessageConstructor = Vue.extend(XiMessage)

const defaultOptions = {
  type: 'info',
  duration: 3000,
  showClose: false,
  offset: 20
}

let seed = 1

const Message = function(options = {}) {
  if (typeof options === 'string') {
    options = { message: options }
  }

  const props = { ...defaultOptions, ...options }
  const id = `xi-message-${seed++}`

  const instance = new MessageConstructor({
    propsData: {
      ...props,
      id
    }
  })

  instance.$mount()
  document.body.appendChild(instance.$el)

  Vue.nextTick(() => {
    instance.visible = true
  })

  return {
    close: () => {
      instance.close()
    }
  }
}

Message.success = function(options) {
  if (typeof options === 'string') {
    options = { message: options }
  }
  return Message({ ...options, type: 'success' })
}

Message.warning = function(options) {
  if (typeof options === 'string') {
    options = { message: options }
  }
  return Message({ ...options, type: 'warning' })
}

Message.error = function(options) {
  if (typeof options === 'string') {
    options = { message: options }
  }
  return Message({ ...options, type: 'error' })
}

Message.info = function(options) {
  if (typeof options === 'string') {
    options = { message: options }
  }
  return Message({ ...options, type: 'info' })
}

Message.closeAll = function() {
  const instances = document.querySelectorAll('.xi-message')
  instances.forEach(instance => {
    instance.remove()
  })
}

export default Message
