<template>
  <div id="chat">
    <chat-people/>
    <chat-talk/>
  </div>
</template>
<script>
import ChatPeople from "@/components/chat/ChatPeople.vue";
import ChatTalk from "@/components/chat/ChatTalk.vue";
export default {
  components: {
    ChatPeople,
    ChatTalk
  }
};
</script>

<style lang="scss" scoped>
#chat {
  height: 100vh;
  width: 25%;
  display: inline-block;
  position: fixed;
  right: 0px;

  display: grid;
  grid-template-rows: minmax(0, 0.75fr) minmax(0, 1.25fr);
}
</style>
