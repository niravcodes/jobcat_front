import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuebar from "vuebar";
import axios from "@/helpers/axios"
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
                window.location.href = window.location.protocol + "//" + window.location.hostname + ":" + window.location.port
            })
            .catch(err => {
                window.location.href = window.location.protocol + "//" + window.location.hostname + ":" + window.location.port
            });
        next();
    }
    else {
        next();
    }
})
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
