import Vue from "vue";
import Vuex from "vuex";

import Market from "./modules/market.js";
import Portfolio from "./modules/portfolio.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Market,
    Portfolio
  }
});
