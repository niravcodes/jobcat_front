<template>
  <div id="app">
    <div class="centerblock">
      <nav-bar/>
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
#app {
  margin-top: 50px;
}
.centerblock {
  width: 70%;
  margin: 0 auto;
}
</style>

<script>
import NavBar from "@/components/navbar/NavBar.vue";
export default {
  components: {
    NavBar
  }
};
</script>

