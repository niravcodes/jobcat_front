<template>
  <div id="chattalk">
    <div id="message_list" v-bar>
      <div>
        <chat-message msg="hello" user_id="0"/>
        <chat-message msg="hello" user_id="1"/>
      </div>
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
#message_list {
  overflow-y: auto;
}
</style>

<script>
//don't need to have messages in vuex store. Put them here
let messages = [{}, {}];

import ChatMessage from "./ChatMessage.vue";

export default {
  components: {
    ChatMessage
  }
};
</script>
