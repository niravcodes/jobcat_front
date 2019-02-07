<template>
  <div id="navcontainer">
    <div id="logo">
      <router-link to="/">
        <img src="@/assets/jobcat-navbar-logo.png">
      </router-link>
    </div>
    <div id="search" class="vertical-horizontal-center"></div>
    <div id="icons" class="vertical-horizontal-center">
      <search-bar/>
      <to-do/>
      <notification/>
      <drop-down/>
    </div>
  </div>
</template>
<script>
import SearchBar from "./SearchBar.vue";
import DropDown from "./dropdowns/DropDown.vue";
import Notification from "./dropdowns/Notification.vue";
import ToDo from "./dropdowns/ToDo.vue";
export default {
  components: {
    SearchBar,
    DropDown,
    Notification,
    ToDo
  }
};
</script>
<style lang = "scss" scoped>
.vertical-horizontal-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
#navcontainer {
  display: grid;
  grid-template-columns: 1fr auto auto;
  margin-top: 50px;
}
#logo img {
  width: 80px;
}
#search {
  position: relative;
}
#icons {
  justify-content: flex-end;
}
</style>

<style lang="scss">
#icons {
  i {
    padding: 10px;
    font-size: 20px;
  }
}
</style>


