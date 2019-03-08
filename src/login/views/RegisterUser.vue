<template>
  <div class="login_form_greeting" @keyup.enter="register">
    <div class="title">Register</div>
    <div class="label">Full Name:</div>
    <input type="text" v-model="user.fullname">
    <div class="label">Username (@handle_you_like):</div>
    <input type="text" v-model="user.name">
    <div class="label">Email Address</div>
    <input type="text" v-model="user.email">
    <div class="label">A password to challenge the Boulder</div>
    <input type="password" v-model="user.password">
    <div class="label error" v-if="showError">There are errors. Please verify, then resumbit.</div>
    <div class="label error" v-if="userExists">This user exists. Please retry.</div>
    <button class="button" @click="register">Register</button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data: function() {
    return {
      user: {
        name: "",
        fullname: "",
        email: "",
        password: ""
      },
      showError: false,
      userExists: false,
      success: false
    };
  },
  methods: {
    register() {
      //balidation
      //endbalidatin

      console.log(this.user);
      axios
        .post("http://localhost:3000/users/register", this.user)
        .then(usr => {
          this.showError = false;
          this.userExists = false;
          this.$router.push("login");
        })
        .catch(err => {
          console.log(err);
          if (err.response.status == 402) this.userExists = true;
          else this.showError = true;
        });
    }
  }
};
</script>

<style lang="sass" scoped>
@import "../../assets/resets"
@import "../assets/greeterform.scss";
</style>
