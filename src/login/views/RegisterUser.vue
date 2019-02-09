<template>
  <div class="login_form_greeting">
    <div class="title">Register</div>
    <div class="label">Full Name:</div>
    <input type="text" @keyup.enter="setstorage" v-model="username">
    <div class="label">Username (@handle_you_like):</div>
    <input type="text">
    <div class="label">Email Address</div>
    <input type="text">
    <div class="label">A password to challenge the Boulder</div>
    <input type="password">
    <button class="button">Register</button>
  </div>
</template>
<style lang="sass" scoped>
@import "../../assets/resets"
@import "../assets/greeterform.scss";
</style>
