<template>
  <div class="notificationitem">
    <li>
      <div class="image">
        <img src="img/testhead2.jpg">
      </div>
      <div class="notification_text">
        <div class="title">{{ notification_data.title }}</div>
        <div class="text">{{ notification_data.fulltext }}</div>
      </div>
    </li>
  </div>
</template>

<script>
export default {
  props: ["notification_id"],
  computed: {
    notification_data() {
      return this.$store.getters.notification(this.notification_id);
    }
  }
};
</script>


<style lang="scss" scoped>
@import "../navbarGlobal";
.notification_text {
  padding-left: 15px;
  .title {
    font-weight: bold;
    display: inline;
    &::after {
      content: " ";
    }
  }
  .text {
    display: inline;
  }
}
</style>