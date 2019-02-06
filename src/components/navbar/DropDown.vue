<template>
  <div id="dropdown" ref="dropdown" @keydown.esc="active = false">
    <button @click="toggle_active">
      <i :class="icon"></i>
    </button>
    <div id="dropdialog" v-if="active"></div>
  </div>
</template>
<script>
export default {
  props: ["icon", "data_endpoint", "path_to_page", "name"],
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
@import "../../assets/resets";
@import "variables";
#dropdown {
  position: relative;
  button {
    @extend %reset-Button;
  }
}

#dropdialog {
  position: absolute;
  top: 50px;
  left: -$dropdown_width/2 + 19px;
  overflow: hidden;
  width: $dropdown_width;
  height: $dropdown_height;
  background: red;
}
</style>


