<template>
  <div>
    <input type="text" @keyup.enter="setstorage" v-model="username">
  </div>
</template>

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
    }
  }
};
</script>
