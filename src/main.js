import Vue from "vue";
import App from "./App.vue";
import Chat from "./Chat.vue";
import router from "./router";
import store from "./store";
import Vuebar from "vuebar";
import axios from 'axios'
import "@/components/_scrollbar.scss";
Vue.config.productionTip = false;

Vue.use(Vuebar);
router.beforeEach((to, from, next) => {
  if (localStorage.getItem('credentials')) {
    axios.defaults.headers.common = {
      'Authorization': localStorage.getItem('credentials')
    }

    axios
      .post("http://localhost:3000/users/auth")
      .then(usr => {
        console.log(usr);
      })
      .catch(err => {
        alert('error')
        window.location.href = "/greeting"
      });
    next();
  }
  else {
    window.location.href = "/greeting"
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate() {
    alert("hello");
  }
}).$mount("#app");

new Vue({
  store,
  render: h => h(Chat)
}).$mount("#chat");
