<template>
  <div id="dropdown" ref="dropdown" @keydown.esc="active = false">
    <button @click="toggle_active">
      <i class="far fa-bell"></i>
    </button>
    <div id="dropdialog" v-if="active">
      <div class="scrolling_div" v-bar>
        <div>
          <ul>
            <notification-item
              v-for="notification in notifications"
              :key="notification.id"
              :notification_id="notification.id"
            />
          </ul>
        </div>
      </div>
      <div id="allnotifications">
        <router-link to="notifications">View all notifications</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import NotificationItem from "./NotificationItem.vue";
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
    notifications() {
      return this.$store.getters.notifications;
    }
  },
  created: function() {
    document.addEventListener("click", this.deactivate_on_nofocus);
  },
  destroyed: function() {
    document.removeEventListener("click", this.deactivate_on_nofocus);
  },
  components: {
    NotificationItem
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
.scrolling_div {
  overflow-y: auto;
}
#allnotifications {
  padding: 10px;
}
</style>

