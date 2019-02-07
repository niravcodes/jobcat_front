<template>
  <div id="dropdown" ref="dropdown" @keydown.esc="active = false">
    <button @click="toggle_active">
      <i class="far fa-bell"></i>
    </button>
    <div id="dropdialog" v-if="active">
      <ul>
        <li>
          <div class="image">
            <img src="img/testhead2.jpg">
          </div>
          <div class="notification_text">
            <div class="title">New Comment:</div>
            <div class="text">Nirav commentted on your post</div>
          </div>
        </li>
        <li>
          <div class="image">
            <img src="img/testhead2.jpg">
          </div>
          <div class="notification_text">
            <div class="title">New Comment:</div>
            <div class="text">Nirav commentted on your post</div>
          </div>
        </li>
        <li>
          <div class="image">
            <img src="img/testhead2.jpg">
          </div>
          <div class="notification_text">
            <div class="title">New Comment:</div>
            <div class="text">Nirav commentted on your post</div>
          </div>
        </li>
        <li>
          <div class="image">
            <img src="img/testhead2.jpg">
          </div>
          <div class="notification_text">
            <div class="title">New Comment:</div>
            <div class="text">Nirav commentted on your post</div>
          </div>
        </li>
        <li>
          <div class="image">
            <img src="img/testhead2.jpg">
          </div>
          <div class="notification_text">
            <div class="title">New Comment:</div>
            <div class="text">Nirav commentted on your post</div>
          </div>
        </li>
      </ul>
      <div id="allnotifications">
        <router-link to="notifications">View all notifications</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["data_endpoint", "path_to_page", "name"],
  data: function() {
    return {
      active: false
    };
  },
  methods: {
    toggle_active: function() {
      this.active = !this.active;
    },
    deactivate_on_nofocus: function(e) {
      let el = this.$refs.dropdown;
      let target = e.target;
      if (el !== target && !el.contains(target)) {
        this.active = false;
      }
    }
  },
  created: function() {
    document.addEventListener("click", this.deactivate_on_nofocus);
  },
  destroyed: function() {
    document.removeEventListener("click", this.deactivate_on_nofocus);
  }
};
</script>
<style lang="scss" scoped>
@import "../../../assets/resets";
@import "../variables";
@import "../navbarGlobal";
#dropdown {
  position: relative;
  button {
    @extend %reset-Button;
  }
}
#dropdialog {
  position: absolute;
  top: 50px;
  left: -$notification_width/2 + 19px;
  overflow: hidden;
  width: $notification_width;
  max-height: $dropdown_height;
  background: white;
  border: solid 1px black;

  display: grid;
  grid-template-rows: 1fr auto;
}
.notification_text {
  padding-left: 15px;
  .title {
    font-weight: bold;
    display: inline;
    &::after {
      content: " ";
    }
  }
  .text {
    display: inline;
  }
}
#allnotifications {
  padding: 10px;
}
</style>

