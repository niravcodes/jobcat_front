<template>
  <div id="dropdown" ref="dropdown" @keydown.esc="active = false">
    <button @click="toggle_active">
      <i class="far fa-user-circle"></i>
    </button>
    <div id="dropdialog" v-if="active">
      <router-link
        class="routerlink"
        v-for="item in profile"
        :to="item.link"
        :key="item.key"
      >{{ item.name }}</router-link>
    </div>
  </div>
</template>
<script>
export default {
  props: ["data_endpoint", "path_to_page", "name"],
  data: function() {
    return {
      active: false,
      profile: [
        {
          name: "Resume",
          link: "resume"
        },
        {
          name: "Settings",
          link: "settings"
        },
        {
          name: "Logout",
          link: "logout"
        }
      ]
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
#dropdown {
  position: relative;
  button {
    @extend %reset-Button;
  }
}
.routerlink {
  display: block;
  padding: 10px;
  color: #333;
  text-decoration: none;
  &:hover {
    color: #fff;
    background: #333;
  }
}
#dropdialog {
  position: absolute;
  top: 50px;
  left: -$dropdown_width/2 + 19px;
  overflow: hidden;
  width: $dropdown_width;
  max-height: $dropdown_height;
  background: white;
  border: solid 1px black;
}
</style>

