<template>
  <div id="search" @keydown.esc="activated = false" ref="quicksearch">
    <input
      type="text"
      v-if="activated"
      class="search_input"
      v-model="search_text"
      @input="lookup_search"
    >
    <quick-search v-if="quick_search_activated && activated"/>
    <button @click="toggle_search">
      <i class="fas fa-search"></i>
    </button>
  </div>
</template>
<script>
import QuickSearch from "./QuickSearch.vue";
export default {
  data: function() {
    return {
      search_text: "",
      activated: false,
      quick_search_activated: false
    };
  },
  methods: {
    toggle_search() {
      this.activated = !this.activated;
    },
    lookup_search() {
      if (this.search_text !== "") {
        this.quick_search_activated = true;
      } else {
        this.quick_search_activated = false;
      }
    },
    deactivate_on_nofocus: function(e) {
      let el = this.$refs.quicksearch;
      let target = e.target;
      if (el !== target && !el.contains(target)) {
        this.quick_search_activated = false;
      }
    }
  },
  components: {
    QuickSearch
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
@import "variables";
@import "../../assets/resets";

#search {
  position: relative;
  button {
    @extend %reset-Button;
  }
}

.search_input {
  margin-right: 5px;
  padding: 6px 20px;
  width: $search_bar_length;
  border-radius: 5px;
  border: solid 1px black;
}
</style>