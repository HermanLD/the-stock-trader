// import axios from "axios";

import Axios from "axios";

const state = {
  user: {
    name: "Herman",
    funds: 10000,
    portfolio: []
  }
};

const mutations = {
  //*Order from MarketStock {id, name, total, qty}
  BUY_STOCK(state, order) {
    const record = state.user.portfolio.find(el => el.id === order.id);
    if (state.user.funds > order.total) {
      if (record) {
        record.own += order.qty;
      } else {
        state.user.portfolio.push({
          id: order.id,
          name: order.name,
          own: order.qty
        });
      }
      state.user.funds -= order.total;
    } else {
      alert("Lack of Funds");
    }
  },
  //*Order from stockCard {id, name, total, qty}
  SELL_STOCK(state, order) {
    const record = state.user.portfolio.find(el => el.id === order.id);
    if (order.qty > record.own) {
      alert("You don't even have that much!");
    } else {
      state.user.funds += order.total;
      record.own -= order.qty;
      if (record.own === 0) {
        state.user.portfolio.splice(state.user.portfolio.indexOf(record), 1);
      }
    }
  },
  SAVE_USER(state) {
    Axios.post(
      "https://vuejs-http-6cd1d.firebaseio.com/stock-users.json",
      state.user
    )
      .then(res => {
        if (res.status === 200) {
          alert("Your Portfolio is saved!");
        }
      })
      .catch(error => console.log(error));
  },
  LOAD_USER() {
    Axios.get("https://vuejs-http-6cd1d.firebaseio.com/stock-users.json")
      .then(res => {
        const data = res.data;
        const users = [];
        for (let key in data) {
          const user = data[key];
          user.id = key;
          users.push(user);
        }
        state.user = users[0];
      })
      .catch(error => console.log(error));
  }
};

const actions = {
  //?The Buy stock Action is already in market.js module
  sellStock: ({ commit }, order) => {
    commit("SELL_STOCK", order);
  },
  saveUser: ({ commit }) => {
    commit("SAVE_USER");
  },
  loadUser: ({ commit }) => {
    commit("LOAD_USER");
  }
};

const getters = {
  //*Get complete stock data for the owned stock
  stockPortfolio(state, getters) {
    return state.user.portfolio.map(ps => {
      const record = getters.stocks.find(ms => ms.id === ps.id);
      return {
        id: ps.id,
        name: ps.name,
        rate: record.rate,
        own: ps.own
      };
    });
  },
  funds: state => {
    return "$" + state.user.funds;
  }
  //?Connect to Market and construct an object with Portfolio stock data
  //?Getters from market.js
};

export default {
  state,
  mutations,
  actions,
  getters
};
