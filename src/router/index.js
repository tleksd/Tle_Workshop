import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: () => import("../components/HelloWorld.vue"),
      props: (route) => ({ msg: route.query.msg })
    },
    {
      path: "/contact",
      component: () => import("../components/contact.vue")
    },
    {
      path: "/project",
      component: () => import("../components/project.vue")
    }
  ]
});
