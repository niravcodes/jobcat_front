<template>
  <div class="app" v-bar>
    <div>
      <div class="centerblock">
        <nav-bar/>
        <router-view/>
        <foot-bar/>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app {
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
import FootBar from "@/components/FootBar.vue";
export default {
  components: {
    NavBar,
    FootBar
  }
};
</script>

