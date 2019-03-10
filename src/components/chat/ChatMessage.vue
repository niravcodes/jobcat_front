<template>
  <div class="message">
    <div class="image">
      <img :src="getImage(user_data.avatar)">
    </div>
    <div class="text">{{ msg }}</div>
  </div>
</template>

<style lang="scss" scoped>
.message {
  display: grid;
  grid-template-columns: auto 1fr;
  margin-bottom: 10px;

  .text {
    padding: 0 14px;
    display: flex;
    align-items: center;
  }
}
.image {
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 10px;
  margin: 5px;
  img {
    width: 50px;
    min-height: 50px;
  }
}
</style>


<script>
export default {
  props: ["name", "msg"],
  computed: {
    user_data() {
      return this.$store.getters.getuserbyname(this.name);
    },
    user_image() {
      // return "img/" + this.user_data.image;
      return "";
    }
  },
  methods: {
    getImage: function(img) {
      return (
        window.location.protocol +
        "//" +
        window.location.hostname +
        ":" +
        "3000" +
        "/images/" +
        img +
        "?" +
        Date.now()
      );
    }
  }
};
</script>

