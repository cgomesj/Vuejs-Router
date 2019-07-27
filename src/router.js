import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

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
      path: "/user",
      component: () => import("./views/User.vue"),

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
