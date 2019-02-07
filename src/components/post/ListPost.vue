<template>
  <div id="postlist">
    <post v-for="post in posts" :post_id="post.id" :key="post.id"/>
  </div>
</template>

<script>
import Post from "./Post.vue";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data: function() {
    return {};
  },
  computed: {
    posts() {
      return this.$store.getters.posts;
    }
  },
  components: {
    Post
  }
};
</script>

<style lang="scss" scoped>
#postlist {
  margin-top: 40px;
  margin-left: 50px;
}
</style>

