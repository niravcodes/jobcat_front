<template>
  <div class="quicksearch" ref="quicksearch">
    <div class="scrolling_div" v-bar>
      <div>
        <ul>
          <li v-for="(item,i) in items" :key="i" @click="gotoUser(item)">
            <div class="image">
              <img :src="userImage(item.avatar)">
            </div>
            <div class="name">{{ item.fullname }}</div>
          </li>
        </ul>
      </div>
    </div>

    <div class="search_further">
      <router-link to="/fullsearch">Search {{ search_text }}</router-link>
    </div>
  </div>
</template>
<script>
import axios from "@/helpers/axios";
import debounce from "debounce";
export default {
  data: function() {
    return {
      items: {}
    };
  },
  watch: {
    search_text: debounce(function(val) {
      console.log(val);
      axios
        .post("search", { requested: val })
        .then(usrs => {
          console.log(usrs);
          this.items = usrs.data.filter(dat => {
            return dat.name !== this.$store.getters.userInfo.username;
          });
        })
        .catch(err => console.log(err));
    }, 350)
  },
  props: ["search_text"],
  methods: {
    userImage: function(img) {
      return (
        window.location.protocol +
        "//" +
        window.location.hostname +
        ":" +
        "3000" +
        "/images/" +
        img +
        "?" +
        Date.now()
      );
    },
    gotoUser: function(item) {
      this.$router.push({ name: "user", params: { username: item.name } });
    }
  },
  computed: {}
};
</script>
<style lang="scss" scoped>
@import "variables";
@import "navbarGlobal";
.quicksearch {
  width: $search_bar_length;
  height: $search_bar_height;
  position: absolute;
  top: 50px;
  left: 0px;
  display: block;
  background: #fff;
  border: solid 1px #000;

  display: grid;
  grid-template-rows: 1fr auto;
}

.search_further {
  padding: 8px;
  color: #ddd;
}
</style>

