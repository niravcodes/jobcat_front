<template>
  <div class="post" v-bind:class="{ expandedPost: postExpanded }">
    <div class="image">
      <img :src="img_location">
    </div>
    <div class="title">
      <div class="name">{{ user_data.fullname }}</div>
      <div class="nameinfo">{{ user_data.resume.detail }}</div>
    </div>

    <div class="text">
      {{ post_data.post }}
      <button class="inlinebutton" @click="toggleProposal">{{ InquireFurther }}</button>
    </div>

    <proposal v-if="viewProposal" :to="user_data.username"/>
  </div>
</template>
<script>
import Proposal from "./Proposal";
export default {
  props: ["post_id"],
  data: function() {
    return {
      viewProposal: false,
      postExpanded: false,
      InquireFurther: " Inquire Further.",
      user_data: { avatar: "generic.png", resume: {} },
      post_data: {}
    };
  },
  methods: {
    toggleProposal() {
      this.viewProposal = !this.viewProposal;
      this.postExpanded = !this.postExpanded;
      if (this.viewProposal) {
        this.InquireFurther = " Close Inquiry Form.";
      } else this.InquireFurther = " Inquire Further.";
    },
    userImage: function(img) {
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
    getuserdata() {
      let name = this.post_data.name;
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
    }
  },
  computed: {
    img_location: function() {
      return this.userImage(this.user_data.avatar);
    }
  },
  components: {
    Proposal
  },
  mounted() {
    this.post_data = this.$store.getters.post_by_id(this.post_id);
    this.getuserdata();
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/resets";
.expandedPost {
  grid-template-rows: auto 1fr 1fr;
}
.inlinebutton {
  background: none;
  border: 0;
  display: inline;
  color: #00f;
  text-decoration: underline;
  font-family: serif;
  font-size: 20px;
  outline: none;
  &:hover {
    color: #0af;
  }
  &:active {
    color: #77e;
  }
}
.post {
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
      min-height: 60px;
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
    grid-column: 2/3;
  }
}

.buttons {
  display: grid;
  grid-column: 2/3;
  grid-template-columns: 1fr 1fr 1fr;

  button {
    @extend %reset-Button;
    width: 100%;
    padding: 15px;
    text-align: left;
  }
}
</style>
