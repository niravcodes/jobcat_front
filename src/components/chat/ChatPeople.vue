<template>
  <div id="chatpeople">
    <div id="people_list">
      <people-display v-for="people in chat_people" :key="people.id" :people_id="people.id"/>
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
  },
  computed: {
    chat_people() {
      return this.$store.getters.chat_people;
    }
  }
};
</script>


<style lang = "scss" scoped>
#chatpeople {
  display: grid;
  grid-template-rows: 1fr auto;

  #people_list {
    overflow-y: scroll;
  }

  #search {
    input {
      width: 100%;
      padding: 5px 20px;
    }
  }
}
</style>