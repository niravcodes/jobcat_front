<template>
  <div class="chattalk">
    <div v-if="chatting_person">
      <div class="message_list" v-bar>
        <div>
          <chat-message v-for="(msg, i) in messages" :key="i" :msg="msg.message" :name="msg.from"/>
        </div>
      </div>
    </div>
    <div v-if="!chatting_person" class="nouser">No user selected</div>
    <div class="input">
      <input type="text" @keyup.enter="sendmessage" v-model="message">
    </div>
  </div>
</template>
<style lang="scss" scoped>
.chattalk {
  display: grid;
  grid-template-rows: minmax(0, 1fr) auto;

  input {
    width: 100%;
    padding: 5px 20px;
  }
}
.message_list {
  overflow-y: auto;
  height: 100%;
}
.nouser {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>

<script>
import ChatMessage from "./ChatMessage.vue";
import axios from "@/helpers/axios";

export default {
  data: function() {
    return {
      message: ""
    };
  },
  components: {
    ChatMessage
  },
  methods: {
    sendmessage() {
      if (this.message) {
        axios
          .post("msg/sendmessage", {
            to: this.chatting_person,
            from: this.thisuser.username,
            message: this.message
          })
          .then(() => {
            this.message = "";
            this.$store.dispatch("downloadMessages");
          })
          .catch();
      }
    }
  },
  computed: {
    chatting_person() {
      return this.$store.getters.chatting_with;
    },
    messagesreceived() {
      return this.$store.getters.messages(this.chatting_person);
    },
    thisuser() {
      return this.$store.getters.userInfo;
    },
    messages() {
      let messarray = this.messagesreceived.slice().sort((a, b) => {
        a = new Date(a.createdAt);
        b = new Date(b.createdAt);
        return b - a;
      });
      console.log("Messarray:");
      console.log(messarray);
      return messarray;
    }
  }
};
</script>
