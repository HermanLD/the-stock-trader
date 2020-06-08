import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      funds: 10000,
      userPortfolio: [
        { name: "Bitcoin", rate: 200, owned: 5 },
        { name: "Dogecoin", rate: 200, owned: 5 },
        { name: "XRP", rate: 200, owned: 5 },
        { name: "Etherum", rate: 200, owned: 5 },
      ],
    },
    marketOptions: [
      { name: "Bitcoin", rate: 6000 },
      { name: "Litecoin", rate: 300 },
      { name: "Etherum", rate: 20 },
      { name: "XRP", rate: 200 },
      { name: "Dogecoin", rate: 350 },
      { name: "Monero", rate: 400 }
    ],
  },
  mutations: {
    sellStock: (state, payload) => {
      
    }
  },
  actions: {
    sellStock: ({ commit }, payload) => {
      commit('sellStock', payload)
    }
  },
  modules: {},
});
