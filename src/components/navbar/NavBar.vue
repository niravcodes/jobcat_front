<template>
  <div id="navcontainer">
    <div id="logo">
      <img src="@/assets/jobcat-navbar-logo.png">
    </div>
    <div id="search" class="vertical-horizontal-center"></div>
    <div id="icons" class="vertical-horizontal-center">
      <search-bar/>
      <drop-down icon="far fa-check-circle"/>
      <drop-down icon="far fa-bell"/>
      <drop-down icon="far fa-user-circle"/>
    </div>
  </div>
</template>
<script>
import SearchBar from "./SearchBar.vue";
import DropDown from "./DropDown.vue";
export default {
  components: {
    SearchBar,
    DropDown
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


