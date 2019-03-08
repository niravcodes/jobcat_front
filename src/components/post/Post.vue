<template>
  <div class="post" v-bind:class="{ expandedPost: postExpanded }">
    <div class="image">
      <img :src="img_location">
    </div>
    <div class="title">
      <div class="name">{{ user_data.name }}</div>
      <div class="nameinfo">{{ user_data.description }}</div>
    </div>

    <div class="text">{{ post_data.post_text }}</div>

    <proposal v-if="viewProposal"/>

    <div class="buttons">
      <button @click="toggleProposal">Submit Proposal</button>
      <button>Inquire Further</button>
      <button>View Details</button>
    </div>
  </div>
</template>
<script>
import Proposal from "./Proposal";
export default {
  props: ["post_id"],
  data: function() {
    return {
      viewProposal: false,
      postExpanded: false
    };
  },
  methods: {
    toggleProposal() {
      this.viewProposal = !this.viewProposal;
      this.postExpanded = !this.postExpanded;
    }
  },
  computed: {
    post_data() {
      return this.$store.getters.post_by_id(this.post_id);
    },
    user_data() {
      return this.$store.getters.get_user_by_id(this.post_data.user_id);
    },
    img_location: function() {
      return "img/" + this.user_data.image;
    }
  },
  components: {
    Proposal
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/resets";
.expandedPost {
  grid-template-rows: auto 1fr 1fr;
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
