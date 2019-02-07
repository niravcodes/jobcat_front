<template>
  <li>
    <div class="title">{{ todo_data.title }}</div>
    <div class="text">{{ todo_data.fulltext }}</div>
  </li>
</template>
<style lang="scss" scoped>
li {
  display: block;
  padding: 20px;
  div {
    display: inline;
  }
  .title {
    font-weight: bold;
    &::after {
      content: " ";
    }
  }
}
</style>
<script>
export default {
  props: ["todo_id"],
  computed: {
    todo_data() {
      return this.$store.getters.todo(this.todo_id);
    }
  }
};
</script>

