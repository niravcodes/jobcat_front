import Vue from "vue";
import App from "./App.vue";
import Chat from "./Chat.vue";
import router from "./router";
import store from "./store";
import Vuebar from "vuebar";
import axios from '@/helpers/axios'
import "@/components/_scrollbar.scss";
Vue.config.productionTip = false;

Vue.use(Vuebar);
router.beforeEach((to, from, next) => {
  if (localStorage.getItem('credentials')) {
    axios.defaults.headers.common = {
      'Authorization': localStorage.getItem('credentials')
    }

    axios
      .post("users/auth")
      .then(usr => {
        // console.log(usr);
        next();
      })
      .catch(err => {
        window.location.href = window.location.protocol + "//" + window.location.hostname + ":" + window.location.port + "/greeting"
      });
  }
  else {
    window.location.href = window.location.protocol + "//" + window.location.hostname + ":" + window.location.port + "/greeting"
  }
  setInterval(function () { store.dispatch("downloadMessages") }, 1000)


})

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate() {
    this.$store.commit('getuserinfo')
  }
}).$mount("#app");

new Vue({
  store,
  render: h => h(Chat)
}).$mount("#chat");
