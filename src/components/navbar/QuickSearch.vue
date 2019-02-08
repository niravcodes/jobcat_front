<template>
  <div id="quicksearch" ref="quicksearch">
    <div class="scrolling_div" v-bar>
      <div>
        <ul>
          <li>
            <div class="image">
              <img src="img/testhead2.jpg">
            </div>
            <div class="name">Monkey Parsad</div>
          </li>
          <li>
            <div class="image">
              <img src="img/testhead2.jpg">
            </div>
            <div class="name">Monkey Parsad</div>
          </li>
          <li>
            <div class="image">
              <img src="img/testhead2.jpg">
            </div>
            <div class="name">Monkey Parsad</div>
          </li>
          <li>
            <div class="image">
              <img src="img/testhead2.jpg">
            </div>
            <div class="name">Monkey Parsad</div>
          </li>
          <li>
            <div class="image">
              <img src="img/testhead2.jpg">
            </div>
            <div class="name">Monkey Parsad</div>
          </li>
          <li>
            <div class="image">
              <img src="img/testhead2.jpg">
            </div>
            <div class="name">Monkey Parsad</div>
          </li>
        </ul>
      </div>
    </div>

    <div id="search_further">
      <router-link to="/fullsearch">Search {{ search_text }}</router-link>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {};
  },
  props: ["search_text"],
  methods: {}
};
</script>
<style lang="scss" scoped>
@import "variables";
@import "navbarGlobal";
#quicksearch {
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

#search_further {
  padding: 8px;
  color: #ddd;
}
</style>

