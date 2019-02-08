import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Register from "./views/RegisterUser.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/greeting",
            name: "home",
            component: Home
        },
        {
            path: "/greeting/login",
            name: "login",
            component: Login
        },
        {
            path: "/greeting/register",
            name: "register",
            component: Register
        }
    ]
});
