<template>
  <div class="message-wrapper" style="padding: 10px">
    <div class="box">
      <p class="title">不同类型</p>
      <xi-message :visible="true" type="success" message="成功消息" style="margin-bottom: 10px" />
      <xi-message :visible="true" type="warning" message="警告消息" style="margin-bottom: 10px" />
      <xi-message :visible="true" type="error" message="错误消息" style="margin-bottom: 10px" />
      <xi-message :visible="true" type="info" message="普通消息" />
    </div>
    <div class="box">
      <p class="title">可关闭</p>
      <xi-message :visible="true" message="可关闭的消息" :show-close="true" />
    </div>
  </div>
</template>

<script>
import XiMessage from '..';
export default {
  components: {
    XiMessage
  }
}
</script>

<style scoped>
.message-wrapper .box {
  margin-bottom: 20px;
}
.message-wrapper .title {
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: bold;
}
</style>
