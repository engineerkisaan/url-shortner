import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import anime from "animejs/lib/anime.es.js"; //library not plugin

Vue.config.productionTip = false;
Vue.prototype.$anime = anime; // cleanest and most robust way to use a Javascript library in a Vue project

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
