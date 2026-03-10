<template>
  <div class="control" :class="{ 'has-icons': !!prefix || !!suffix || clearable }">
    <input
      :class="inputClass"
      :type="type"
      :value="currentValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      @input="handleInput"
      @change="handleChange"
      @focus="handleFocus"
      @blur="handleBlur"
    />
    <span v-if="prefix" class="icon is-small is-left">
      <i :class="prefix"></i>
    </span>
    <span v-if="suffix || clearable" class="icon is-small is-right">
      <i v-if="clearable && currentValue" class="xi-icon-close" @click="handleClear"></i>
      <i v-else-if="suffix" :class="suffix"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'XiInput',
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    },
    prefix: {
      type: String,
      default: ''
    },
    suffix: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      currentValue: this.value
    }
  },
  computed: {
    inputClass() {
      return [
        'input',
        {
          [`is-${this.size}`]: !!this.size,
          'is-disabled': this.disabled,
          'is-readonly': this.readonly
        }
      ]
    }
  },
  watch: {
    value(val) {
      this.currentValue = val
    }
  },
  methods: {
    handleInput(event) {
      const value = event.target.value
      this.currentValue = value
      this.$emit('input', value)
    },
    handleChange(event) {
      this.$emit('change', event.target.value)
    },
    handleFocus(event) {
      this.$emit('focus', event)
    },
    handleBlur(event) {
      this.$emit('blur', event)
    },
    handleClear() {
      if (this.disabled || this.readonly) return
      this.currentValue = ''
      this.$emit('input', '')
      this.$emit('change', '')
      this.$emit('clear')
    }
  }
}
</script>

<style scoped>
@import '../../style/button.scss';
</style>
