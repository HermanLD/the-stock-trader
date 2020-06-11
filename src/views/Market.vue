<template>
  <div>
    <h1 class="ml-3 mt-4">The Market</h1>
    <div class="row no-gutters mr-3">
      <market-stock
        v-for="stock in stocks"
        :key="stock.id"
        :stock="stock"
      ></market-stock>
    </div>
  </div>
</template>

<script>
import MarketStock from "../components/MarketStock.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    MarketStock
  },
  computed: {
    ...mapGetters(["stocks"])
  }
};
</script>
