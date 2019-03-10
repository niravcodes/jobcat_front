<template>
  <div id="postlist">
    <div v-if="downloaded">
      <post v-for="(post, index) in posts" :post_id="post._id" :key="index"/>
    </div>
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
    return {
      downloaded: false,
      posts: [{}]
    };
  },
  computed: {},
  components: {
    Post
  },
  mounted() {
    this.$store.dispatch("downloadPosts").then(() => {
      this.posts = this.$store.getters.posts;
      this.downloaded = true;
    });
  }
};
</script>

<style lang="scss" scoped>
#postlist {
  margin-top: 40px;
  margin-left: 50px;
}
</style>

