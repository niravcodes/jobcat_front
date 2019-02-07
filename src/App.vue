<template>
  <div id="app">
    <div class="centerblock">
      <nav-bar/>
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  overflow-y: auto;
  overflow-x: hidden;
  height: 100vh;
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

