<template>
  <div id="chatpeople">
    <div id="people_list">
      <people-display img="testhead.png"/>
      <people-display img="testhead2.jpg"/>
      <people-display img="testhead2.jpg"/>
      <people-display img="testhead2.jpg"/>
      <people-display img="testhead2.jpg"/>
      <people-display img="testhead2.jpg"/>
      <people-display img="testhead2.jpg"/>
      <people-display img="testhead3.jpg"/>
    </div>
    <div id="search">
      <input type="text" v-model="search_text">
    </div>
  </div>
</template>

<script>
import PeopleDisplay from "./PeopleDisplay.vue";
export default {
  data: function() {
    return {
      search_text: ""
    };
  },
  components: {
    PeopleDisplay
  }
};
</script>


<style lang = "scss" scoped>
#chatpeople {
  display: grid;
  grid-template-rows: 1fr auto;

  #people_list {
    overflow-x: auto;
  }

  #search {
    input {
      width: 100%;
      padding: 5px 20px;
    }
  }
}
</style>