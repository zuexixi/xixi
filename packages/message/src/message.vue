<template>
  <transition name="xi-message-fade">
    <div
      v-if="visible"
      :class="['xi-message', `xi-message--${type}`]"
      :style="{ top: offset + 'px' }"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    >
      <i :class="iconClass" class="xi-message__icon"></i>
      <div class="xi-message__content">{{ message }}</div>
      <i
        v-if="showClose"
        class="xi-message__close xi-icon-close"
        @click="handleClose"
      ></i>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'XiMessage',
  props: {
    message: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'info',
      validator: value => ['success', 'warning', 'error', 'info'].includes(value)
    },
    duration: {
      type: Number,
      default: 3000
    },
    showClose: {
      type: Boolean,
      default: false
    },
    offset: {
      type: Number,
      default: 20
    },
    onClose: {
      type: Function,
      default: null
    }
  },
  data() {
    return {
      visible: false,
      closed: false,
      timer: null
    }
  },
  computed: {
    iconClass() {
      const iconMap = {
        success: 'fas fa-check-circle',
        warning: 'fas fa-exclamation-triangle',
        error: 'fas fa-times-circle',
        info: 'fas fa-info-circle'
      }
      return iconMap[this.type]
    }
  },
  mounted() {
    this.startTimer()
  },
  beforeDestroy() {
    this.stopTimer()
  },
  methods: {
    handleClose() {
      this.closed = true
      if (this.onClose) {
        this.onClose(this)
      }
    },
    handleMouseEnter() {
      this.stopTimer()
    },
    handleMouseLeave() {
      if (this.duration > 0) {
        this.startTimer()
      }
    },
    startTimer() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.handleClose()
          }
        }, this.duration)
      }
    },
    stopTimer() {
      if (this.timer) {
        clearTimeout(this.timer)
        this.timer = null
      }
    },
    close() {
      this.closed = true
    }
  }
}
</script>

<style scoped>
.xi-message {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 12px 16px;
  display: flex;
  align-items: center;
  min-width: 380px;
  max-width: 90vw;
  z-index: 2000;
  transition: opacity 0.3s, transform 0.3s;
}

.xi-message__icon {
  font-size: 16px;
  margin-right: 10px;
}

.xi-message__content {
  flex: 1;
  font-size: 14px;
  color: #303133;
  line-height: 1.5;
}

.xi-message__close {
  cursor: pointer;
  color: #c0c4cc;
  font-size: 14px;
  margin-left: 12px;
}

.xi-message__close:hover {
  color: #909399;
}

.xi-message--success {
  background-color: #f0f9eb;
  border: 1px solid #e1f3d8;
}

.xi-message--success .xi-message__icon {
  color: #67c23a;
}

.xi-message--warning {
  background-color: #fdf6ec;
  border: 1px solid #faecd8;
}

.xi-message--warning .xi-message__icon {
  color: #e6a23c;
}

.xi-message--error {
  background-color: #fef0f0;
  border: 1px solid #fde2e2;
}

.xi-message--error .xi-message__icon {
  color: #f56c6c;
}

.xi-message--info {
  background-color: #f4f4f5;
  border: 1px solid #e9e9eb;
}

.xi-message--info .xi-message__icon {
  color: #909399;
}

.xi-message-fade-enter,
.xi-message-fade-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-20px);
}

.xi-message-fade-enter-active,
.xi-message-fade-leave-active {
  transition: all 0.3s ease;
}
</style>
