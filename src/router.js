import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

const scrollBehavior = function(to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition;
  }
  if (to.hash) {
    return { selector: to.hash };
  }
  return { x: 0, y: 0 };
};

const routes = [
  { path: "*", redirect: { name: "error404" } },
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
        component: () => import("./components/User/UserDetail.vue"),
        beforeEnter: (to, from, next) => {
          console.log("inside user details route");
          next();
        }
      },
      {
        path: ":id/edit",
        name: "userEdit",
        component: () => import("./components/User/UserEdit.vue")
      }
    ]
  },
  {
    path: "/404",
    name: "error404",
    component: () => import("./components/Basic/Error404.vue")
  }
];

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior
});

router.beforeEach((to, from, next) => {
  console.log("Global before each");
  next();
});

export default router;
