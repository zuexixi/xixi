<template>
  <transition name="dialog-fade">
    <div v-if="visible" class="dialog-overlay" @click="handleOverlayClick">
      <div 
        class="dialog" 
        :class="[size ? `is-${size}` : '']" 
        :style="customStyle"
        @click.stop
      >
        <div v-if="title || $slots.header" class="dialog-header">
          <slot name="header">
            <span class="dialog-title">{{ title }}</span>
          </slot>
          <button v-if="showClose" class="delete" @click="handleClose"></button>
        </div>
        <div class="dialog-body" :style="{ maxHeight: maxBodyHeight }">
          <slot></slot>
        </div>
        <div v-if="$slots.footer" class="dialog-footer">
          <slot name>
        </div="footer"></slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'XiDialog',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: '',
      validator: value => ['', 'small', 'large', 'full'].includes(value)
    },
    top: {
      type: String,
      default: '15vh'
    },
    showClose: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    closeOnPressEscape: {
      type: Boolean,
      default: true
    },
    bodyMaxHeight: {
      type: String,
      default: ''
    }
  },
  computed: {
    customStyle() {
      const style = {}
      if (this.width) {
        style.width = this.width
      }
      if (this.size !== 'full') {
        style.marginTop = this.top
      }
      return style
    },
    maxBodyHeight() {
      return this.bodyMaxHeight || '60vh'
    }
  },
  watch: {
    visible(val) {
      if (val) {
        this.$emit('open')
      } else {
        this.$emit('close')
      }
    }
  },
  mounted() {
    if (this.closeOnPressEscape) {
      document.addEventListener('keydown', this.handleKeydown)
    }
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.handleKeydown)
  },
  methods: {
    handleClose() {
      this.$emit('update:visible', false)
      this.$emit('close')
    },
    handleOverlayClick() {
      if (this.closeOnClickOverlay) {
        this.handleClose()
      }
    },
    handleKeydown(e) {
      if (e.key === 'Escape' && this.visible) {
        this.handleClose()
      }
    }
  }
}
</script>

<style scoped>
@import '../../style/dialog.scss';
</style>
