<template>
  <div class="ppldisplay" @click="chattingwith">
    <div class="image">
      <img :src="getImage(user_data.avatar)">
    </div>
    <div class="name">{{ user_data.fullname }}</div>
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
  props: ["user"],
  data: function() {
    return {
      user_data: {}
    };
  },
  computed: {},
  methods: {
    getuserdata: function() {
      let name = this.user;
      let user = this.$store.getters.getuserbyname(name);
      if (user == undefined) {
        this.$store
          .dispatch("downloadUserInfo", name)
          .then(() => {
            user = this.$store.getters.getuserbyname(name);
            if (user == undefined) {
              console.log("errornirav");
            } else {
              this.user_data = user;
            }
          })
          .catch(err => console.log(err));
      } else {
        this.user_data = user;
      }
    },
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
    },
    chattingwith: function() {
      this.$store.commit("updatechattingwith", this.user_data.username);
    }
  },
  mounted() {
    this.getuserdata();
  }
};
</script>
