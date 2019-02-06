<template>
  <div class="home">
    <list-posts/>
  </div>
</template>

<script>
import ListPosts from "@/components/post/ListPost.vue";
export default {
  name: "home",
  components: {
    ListPosts
  }
};
</script>
