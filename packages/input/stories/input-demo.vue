<template>
  <div class="input-wrapper" style="padding: 10px">
    <div class="box">
      <p class="title">基础用法</p>
      <xi-input v-model="value1" placeholder="请输入内容" />
    </div>
    <div class="box">
      <p class="title">禁用状态</p>
      <xi-input v-model="value2" placeholder="禁用状态" disabled />
    </div>
    <div class="box">
      <p class="title">可清空</p>
      <xi-input v-model="value3" placeholder="可清空" clearable />
    </div>
    <div class="box">
      <p class="title">不同尺寸</p>
      <xi-input v-model="value4" size="small" placeholder="小号" style="margin-bottom: 10px" />
      <xi-input v-model="value5" size="medium" placeholder="中号" style="margin-bottom: 10px" />
      <xi-input v-model="value6" size="large" placeholder="大号" />
    </div>
    <div class="box">
      <p class="title">带图标</p>
      <xi-input v-model="value7" prefix="fas fa-user" placeholder="前置图标" style="margin-bottom: 10px" />
      <xi-input v-model="value8" suffix="fas fa-envelope" placeholder="后置图标" />
    </div>
  </div>
</template>

<script>
import XiInput from '..';
export default {
  components: {
    XiInput
  },
  data() {
    return {
      value1: '',
      value2: '禁用内容',
      value3: '清空内容',
      value4: '',
      value5: '',
      value6: '',
      value7: '',
      value8: ''
    }
  }
}
</script>

<style scoped>
.input-wrapper .box {
  margin-bottom: 20px;
}
.input-wrapper .title {
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: bold;
}
</style>
