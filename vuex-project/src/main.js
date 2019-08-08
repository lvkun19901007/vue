import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import store from "./store";
import Vuex from "./min-vuex";

// Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  }
});

Vue.config.productionTip = false;
Vue.prototype.$store = store;
new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount("#app");
