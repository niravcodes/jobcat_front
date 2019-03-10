<template>
  <div id="chatpeople">
    <div id="people_list" v-bar>
      <div>
        <div v-if="loading">
          <people-display v-for="people in chat_people_filtered" :key="people" :user="people"/>
        </div>
      </div>
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
      search_text: "",
      loading: false
    };
  },
  components: {
    PeopleDisplay
  },
  mounted() {
    this.$store.dispatch(
      "downloadUserInfo",
      this.$store.getters.userInfo.username
    );
    this.$store.dispatch("downloadMessages").then(() => {
      this.loading = true;
    });
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
          let user_in_list = this.$store.getters.getuserbyname(user);
          if (
            (user_in_list &&
              user_in_list.resume &&
              user_in_list.fullname
                .toLowerCase()
                .includes(this.search_text.toLowerCase())) ||
            (user_in_list.resume.detail &&
              user_in_list.resume.detail
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