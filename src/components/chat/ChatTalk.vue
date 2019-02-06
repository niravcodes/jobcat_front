<template>
  <div id="chattalk">
    <div id="message_list">
      <chat-message msg="hello"/>
    </div>
    <div id="input">
      <input type="text">
    </div>
  </div>
</template>
<style lang="scss" scoped>
#chattalk {
  display: grid;
  grid-template-rows: minmax(0, 1fr) auto;

  input {
    width: 100%;
    padding: 5px 20px;
  }
}
</style>

<script>
import ChatMessage from "./ChatMessage.vue";
export default {
  components: {
    ChatMessage
  }
};
</script>
