<template>
  <div class="message">
    <div class="image">
      <img :src="user_image">
    </div>
    <div class="text">{{ msg }} HHello There the angel from my nightmare the shadow in the</div>
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
  }
}
</style>


<script>
export default {
  props: ["user_id", "msg"],
  computed: {
    user_data() {
      console.log(this.user_id);
      return this.$store.getters.get_user_by_id(parseInt(this.user_id));
    },
    user_image() {
      return "img/" + this.user_data.image;
    }
  }
};
</script>

