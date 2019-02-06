<template>
  <div id="ppldisplay">
    <div class="image">
      <img :src="img_location">
    </div>
    <div class="name">Hello there</div>
  </div>
</template>

<style lang="scss" scoped>
#ppldisplay {
  display: grid;
  grid-template-columns: 50px 1fr;

  margin: 10px 0;

  .name {
    padding: 0 20px;
    display: flex;
    align-items: center;

    font-size: 20px;
  }
}
.image {
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 10px;

  img {
    width: 50px;
    height: 50px;
  }
}
</style>


<script>
export default {
  props: ["img", "name"],
  computed: {
    img_location: function() {
      return "img/" + this.img;
    }
  }
};
</script>
