<template>
  <div class="card" :class="{ 'is-shadow': shadow }">
    <div v-if="$slots.header || header" class="card-header">
      <slot name="header">
        <div class="card-header-title">
          {{ header }}
        </div>
      </slot>
    </div>
    <div 
      v-if="$slots.image || cover" 
      class="card-image"
    >
      <slot name="image">
        <figure class="image is-16by9">
          <img :src="cover" :alt="alt" />
        </figure>
      </slot>
    </div>
    <div class="card-content">
      <slot></slot>
    </div>
    <div v-if="$slots.footer" class="card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'XiCard',
  props: {
    header: {
      type: String,
      default: ''
    },
    cover: {
      type: String,
      default: ''
    },
    alt: {
      type: String,
      default: ''
    },
    shadow: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>
@import '../../style/card.scss';
</style>
