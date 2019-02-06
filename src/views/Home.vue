<template>
  <div class="home">
    <new-post/>
    <list-posts/>
  </div>
</template>

<script>
import ListPosts from "@/components/post/ListPost.vue";
import NewPost from "@/components/post/NewPost.vue";
export default {
  name: "home",
  components: {
    ListPosts,
    NewPost
  }
};
</script>
