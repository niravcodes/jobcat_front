<template>
  <div class="login_form_greeting">
    <div class="title">Sign In</div>
    <div class="label">Email Address</div>
    <input type="text">
    <div class="label">A password to challenge the Boulder</div>
    <input type="password">
    <button class="button">Sign In</button>
  </div>
</template>
<style lang="scss" scoped>
@import "../../assets/resets";
@import "../assets/greeterform.scss";
</style>

<script>
export default {
  data() {
    return {
      username: ""
    };
  },
  methods: {
    setstorage() {
      localStorage.setItem("username", this.username);
      alert("done");
    }
  }
};
</script>
