import Vue from "vue";
import Router from "vue-router";
import UrlHome from "./views/UrlHome/index.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Urlhome",
      component: UrlHome
    }
  ]
});
