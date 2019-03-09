<template>
  <div class="big">Bye Bye dear friend</div>
</template>
<script>
export default {
  created() {
    localStorage.removeItem("credentials");
    this.$router.push("home");
  }
};
</script>
<style lang="scss" scoped>
.big {
  padding: 20px 0;
  font-size: 30px;
}
</style>

