<template>
  <div class="login_form_greeting" @keypress.enter="login">
    <div class="title">Sign In</div>
    <div class="label">Email Address</div>
    <input type="text" v-model="user.email">
    <div class="label">A password to challenge the Boulder</div>
    <input type="password" v-model="user.password">
    <div class="label error" v-if="wrongusername">Wrong Username</div>
    <div class="label error" v-if="wrongpass">Wrong Password</div>
    <button class="button" @click="login">Sign In</button>
  </div>
</template>
<style lang="scss" scoped>
@import "../../assets/resets";
@import "../assets/greeterform.scss";
</style>

<script>
import axios from "axios";
export default {
  data() {
    return {
      user: {
        email: "",
        password: ""
      },
      wrongusername: false,
      wrongpass: false
    };
  },
  methods: {
    login() {
      this.wrongusername = false;
      this.wrongpass = false;
      axios
        .post("http://localhost:3000/users/login", this.user)
        .then(usr => {
          localStorage.setItem("credentials", usr.data.token);
          console.log(localStorage.getItem("credentials"));
          window.location.href = "/";
        })
        .catch(err => {
          if (err.response.status == 401) this.wrongusername = true;
          else this.wrongpass = true;
        });
    }
  }
};
</script>
