<template>
  <div class="settings">
    <div class="title">Settings</div>
    <div class="settings_form">
      <div class="label">Change Username</div>
      <input type="text">
      <button class="button changeuser">Change Username</button>

      <hr>

      <div class="label">Change Password</div>
      <div class="subform">
        <div class="label">Old password</div>
        <input type="password">
        <div class="label">New Password</div>
        <input type="password">
        <div class="label">New Password (Again, because we like being assholes)</div>
        <input type="password">
        <button class="button changepassword">Change Password</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/resets";
.settings {
  margin-top: 40px;
  margin-left: 50px;
}
.title {
  font-size: 30px;
  font-weight: bold;
}
.settings_form {
  hr {
    border: 0;
    padding: 15px;
  }
  .label {
    font-size: 20px;
    margin-bottom: 4px;
  }
  .button {
    @extend %reset-Button;
    padding: 10px 20px;
    background: gray;
    color: #fff;
    font-family: sans-serif;
    font-size: 18px;
    display: block;
    width: 300px;
    &:hover {
      background: black;
    }
  }
  & .changepassword {
    width: 279px;
  }
  input {
    width: 300px;
    padding: 8px 20px;
    font-size: 18px;
    margin-bottom: 10px;
  }
  .subform {
    padding-left: 20px;
    .label {
      font-size: 18px;
    }
    input {
      font-size: 15px;
      padding: 6px 20px;
      width: 279px;
    }
  }
}
</style>

