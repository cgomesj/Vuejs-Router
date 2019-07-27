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
      name: "user",
      props: true,

      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/User.vue"),

      children: [
        {
          path: "",
          component: () => import("./components/User/UserStart.vue")
        },
        {
          path: ":id",
          props: true,
          component: () => import("./components/User/UserDetail.vue")
        },
        {
          path: ":id/edit",
          component: () => import("./components/User/UserEdit.vue")
        }
      ]
    }
  ]
});
