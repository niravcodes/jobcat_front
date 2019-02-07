<template>
  <div id="chatpeople">
    <div id="people_list">
      <people-display
        v-for="people in chat_people_filtered"
        :key="people.sort_id"
        :sort_id="people.sort_id"
      />
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
    },
    chat_people_filtered() {
      if (this.search_text === "") {
        return this.chat_people;
      } else {
        let users_match = [];
        this.chat_people.forEach(user => {
          let user_in_list = this.$store.getters.get_user_by_id(user.user_id);
          console.log(user_in_list.name.toLowerCase());
          if (
            user_in_list &&
            (user_in_list.name
              .toLowerCase()
              .includes(this.search_text.toLowerCase()) ||
              user_in_list.description
                .toLowerCase()
                .includes(this.search_text.toLowerCase()))
          ) {
            users_match.push(user);
          }
        });
        return users_match;
      }
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