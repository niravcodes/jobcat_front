<template>
  <div id="post">
    <div class="image">
      <img :src="img_location">
    </div>
    <div class="title">
      <div class="name">{{ post_creator }}</div>
      <div class="nameinfo">{{ creator_info }}</div>
    </div>
    <div></div>
    <div class="text">{{ post_data }}</div>
    <div></div>
    <div class="buttons">
      <button>Submit Proposal</button>
      <button>Inquire Further</button>
      <button>View Details</button>
    </div>
  </div>
</template>
<script>
export default {
  props: ["post_id", "post_creator", "creator_info", "post_data", "img"],
  data: function() {
    return {};
  },
  methods: {},
  computed: {
    img_location: function() {
      return "img/" + this.img;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/resets";
#post {
  margin: 20px 0;
  padding: 20px 0;
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 60px 1fr;

  .image {
    overflow: hidden;
    width: 60px;
    height: 60px;
    border-radius: 20px;

    img {
      width: 60px;
    }
  }

  .title {
    padding: 4px 0 0 20px;
    .name {
      font-size: 25px;
    }
    .nameinfo {
      font-size: 18px;
    }
  }
  .text {
    padding: 0 20px;
    font-size: 18px;
    font-family: sans-serif;
  }
}

.buttons {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  button {
    @extend %reset-Button;
    width: 100%;
    padding: 15px;
  }
}
</style>
