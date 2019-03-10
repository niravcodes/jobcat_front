import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import User from "./views/User.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/resume",
      name: "resume",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "resume" */ "./views/Resume.vue")
    },
    {
      path: "/user/:username",
      name: "user",
      component: User
    },
    {
      path: "/logout",
      name: "logout",
      component: () =>
        import(/* webpackChunkName: "logout" */ "./views/Logout.vue")
    },
    {
      path: "/fullsearch",
      name: "search",
      params: ["query"],
      component: () =>
        import(/* webpackChunkName: "search" */ "./views/Search.vue")
    },
  ]
});
