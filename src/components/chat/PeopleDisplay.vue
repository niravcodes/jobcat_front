<template>
  <div class="ppldisplay">
    <div class="image">
      <img :src="img">
    </div>
    <div class="name">{{ user_data.name }}</div>
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
  props: ["sort_id"],

  computed: {
    people_data() {
      return this.$store.getters.chat_people_by_sort(this.sort_id);
    },
    user_data() {
      return this.$store.getters.get_user_by_id(this.people_data.user_id);
    },
    img() {
      return "img/" + this.user_data.image;
    }
  }
};
</script>
