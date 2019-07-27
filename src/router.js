import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { path: "/redirect-me", redirect: { name: "home" } },
    {
      path: "/",
      name: "home",
      components: {
        default: Home,
        "header-top": () => import("./components/Basic/NavBar.vue")
      }
    },
    {
      path: "/user",
      components: {
        default: () => import("./views/User.vue"),
        "header-bottom": () => import("./components/Basic/NavBar.vue")
      },
      children: [
        {
          path: "",
          name: "userStart",
          component: () => import("./components/User/UserStart.vue")
        },
        {
          path: ":id",
          name: "userDetail",
          props: true,
          component: () => import("./components/User/UserDetail.vue")
        },
        {
          path: ":id/edit",
          name: "userEdit",
          component: () => import("./components/User/UserEdit.vue")
        }
      ]
    }
  ]
});
