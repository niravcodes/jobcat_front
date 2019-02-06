<template>
  <div class="home">
    <list-posts/>
  </div>
</template>

<script>
// @ is an alias to /src
import ListPosts from "@/components/post/ListPost.vue";
export default {
  name: "home",
  components: {
    ListPosts
  }
};
</script>
