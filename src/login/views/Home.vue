<template>
  <div>
    <div class="slide">
      Have you ever felt very very sad because you needed something done but didn't know
      anyone who could do it? Guess what, you piece of shit. You are not alone. You are so not alone,
      that even sane and splendid people like us (and by us I mean myself) want some service of that
      capacity to exist. Jobcat is such service. So eat dung, you servile, impotent idiot.
    </div>
    <div class="buttons">
      <router-link class="button" to="login">Sign In</router-link>
      <router-link class="button" to="register">Register</router-link>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.slide {
  padding-left: 30px;
  font-size: 20px;
  text-align: justify;
}
.buttons {
  margin-top: 30px;
  padding-left: 30px;
  display: flex;
  justify-content: space-between;

  .button {
    padding: 15px 40px;
    text-decoration: none;
    color: #fff;
    background: gray;
    &:hover {
      background: black !important;
    }
  }
}
</style>

