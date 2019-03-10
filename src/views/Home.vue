<template>
  <div class="home">
    <div class="dopost">
      <textarea class="post" v-model="postdata"/>
      <button class="buttonpost" @click="post">Post</button>
    </div>
    <list-posts/>
  </div>
</template>

<script>
import ListPosts from "@/components/post/ListPost.vue";
import axios from "@/helpers/axios";
export default {
  name: "home",
  data: function() {
    return {
      postdata: ""
    };
  },
  components: {
    ListPosts
  },
  methods: {
    post() {
      axios
        .post("posts/newpost", { post: this.postdata })
        .then(data => {
          console.log(data);
          this.$store.dispatch("downloadPosts");
          location.reload();
        })
        .catch(err => consle.log(err));
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.dopost {
  margin-top: 50px;
  margin-left: 50px !important;
  .post {
    width: 100%;
    resize: vertical;
    min-height: 100px;
    max-height: 500px;
    padding: 10px;
    font-family: serif;
    font-size: 20px;
  }
  .buttonpost {
    float: right;
    margin-top: -46px;
    margin-right: 10px;
    position: relative;
    z-index: 9999999999;

    padding: 8px 20px;
    background: #333;
    color: #fff;
    border: 0;

    &:hover {
      background: #999;
    }
    &:active {
      background: #aaa;
    }
  }
}
</style>

