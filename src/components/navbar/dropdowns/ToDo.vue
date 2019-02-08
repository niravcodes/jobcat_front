<template>
  <div id="dropdown" ref="dropdown" @keydown.esc="active = false">
    <button @click="toggle_active">
      <i class="far fa-check-circle"></i>
    </button>
    <div id="dropdialog" v-if="active">
      <div class="scrolling_div" v-bar>
        <div>
          <ul>
            <todo-item v-for="todo in todos" :key="todo.id" :todo_id="todo.id"/>
          </ul>
        </div>
      </div>
      <div id="alltodos">
        <router-link to="todos">View all Todos</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import TodoItem from "./TodoItem.vue";
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
  computed: {
    todos() {
      return this.$store.getters.todos;
    }
  },
  created: function() {
    document.addEventListener("click", this.deactivate_on_nofocus);
  },
  destroyed: function() {
    document.removeEventListener("click", this.deactivate_on_nofocus);
  },
  components: {
    TodoItem
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
#alltodos {
  padding: 10px;
}

ul {
  overflow-y: auto;
}
</style>