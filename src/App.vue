<template>
  <div id="app">
    <nav-bar/>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  width:80%;
  margin:0 auto;
}
</style>

<script>
import NavBar from '@/components/NavBar.vue'
export default {
  components:{
    NavBar
  }
}
</script>

