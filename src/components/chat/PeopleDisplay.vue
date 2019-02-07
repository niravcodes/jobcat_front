<template>
  <div class="ppldisplay">
    <div class="image">
      <img :src="img">
    </div>
    <div class="name">{{ people_data.name }}</div>
  </div>
</template>

<style lang="scss" scoped>
.ppldisplay {
  display: grid;
  grid-template-columns: 50px 1fr;
  padding: 10px;

  .name {
    padding: 0 20px;
    display: flex;
    align-items: center;

    font-size: 20px;
  }
  &:hover {
    background: black;
    color: white;
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
  props: ["people_id"],

  computed: {
    people_data() {
      return this.$store.getters.chat_people_by_id(this.people_id);
    },
    img() {
      return "img/" + this.people_data.image;
    }
  }
};
</script>
