import Vue from "vue";
import App from "./App.vue";
import Chat from "./Chat.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

new Vue({
  store,
  render: h => h(Chat)
}).$mount("#chat");
