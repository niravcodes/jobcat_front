<template>
  <div class="proposal">
    <textarea v-model="text"></textarea>
    <button @click="submit">Submit Proposal</button>
  </div>
</template>

<script>
import axios from "@/helpers/axios";
export default {
  props: ["to"],
  data: function() {
    return {
      text: ""
    };
  },
  methods: {
    submit: function() {
      console.log({ message: this.text, to: this.to });
      axios
        .post("msg/sendmessage", { message: this.text, to: this.to })
        .then(() => {
          //update sidebar
          console.log("update sidebar");
        })
        .catch(err => {
          console.log("error in sendmessage");
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss">
.proposal {
  width: 100%;
  grid-column: 2/3;

  margin-top: 20px;

  textarea {
    height: 100px;
    resize: vertical;
    display: block;
    width: 100%;

    padding: 10px;
    font-family: serif;
  }
  button {
    padding: 5px 50px;
    width: 100%;
  }
}
</style>
