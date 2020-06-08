<template>
  <div>
    <h1 class="ml-3 mt-4">Your Portfolio</h1>
    <div class="row no-gutters mr-3">
      <div class="col-lg-4 col-md-6 col-sm-12" v-for="stock in user.userPortfolio" :key="stock">
        <stock-card :stock="stock.name">
        </stock-card>
      </div>
    </div>
  </div>
</template>

<script>
import StockCard from '../components/StockCard.vue'
import { mapState } from 'vuex'

export default {
  components: {
    StockCard: StockCard
  },
  computed: {
    ...mapState([
      'user'
    ])
  }
}
</script>