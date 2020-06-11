//*MOCK DATA -Replace with CoinGecko API Data
import stockOptions from "../../data/marketData.js";

const state = {
  marketOptions: []
};

const mutations = {
  INIT_STOCK(state, stockOptions) {
    state.marketOptions = stockOptions;
  },
  //* Random stock price for 'End of Day'
  END_DAY(state) {
    state.marketOptions.forEach(el => {
      if (el.rate < 20) {
        el.rate = Math.floor(Math.random() * (20 - 1) + 1);
      } else if (el.rate >= 50 && el.rate < 200) {
        el.rate = Math.floor(Math.random() * (200 - 50) + 50);
      } else if (el.rate >= 300 && el.rate < 1000) {
        el.rate = Math.floor(Math.random() * (1000 - 300) + 300);
      } else if (el.rate >= 1200 && el.rate < 18000) {
        el.rate = Math.floor(Math.random() * (18000 - 1200) + 1200);
      }
    });
  }
};

const actions = {
  initOptions: ({ commit }) => {
    commit("INIT_STOCK", stockOptions);
  },
  buyStock: ({ commit }, order) => {
    commit("BUY_STOCK", order);
  },
  //*Random stock price for 'End of Day'
  //?Call endDay with button click & the App created() lifehook
  endDay: ({ commit }) => {
    commit("END_DAY");
  }
};

const getters = {
  stocks: state => {
    return state.marketOptions;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
