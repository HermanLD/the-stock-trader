<template>
  <div>
    <h1 class="ml-3 mt-4">Your Portfolio</h1>
    <div class="row no-gutters mr-3">
      <stock-card
        v-for="stock in stockPortfolio"
        :key="stock.id"
        :stock="stock"
      ></stock-card>
    </div>
  </div>
</template>

<script>
import StockCard from "../components/StockCard.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    StockCard: StockCard
  },
  computed: {
    ...mapGetters(["stockPortfolio"])
  }
};
</script>
