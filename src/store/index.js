import Vue from "vue";
import Vuex from "vuex";
import network from "./network/network";
// import example from "./module-example";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    network
  }
});
