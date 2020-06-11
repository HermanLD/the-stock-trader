import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import Portfolio from "../views/Portfolio.vue";
import Market from "../views/Market.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: Portfolio
  },
  {
    path: "/market",
    name: "market",
    component: Market
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
