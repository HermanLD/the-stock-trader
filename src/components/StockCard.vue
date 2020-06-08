<template>
  <div>
    <b-card class="stock-card p-3 mt-3 ml-3">
      <h2 slot="stock-name" class="stock-name">{{ stock.name }}</h2>
      <div class="price my-5">
        <p class="money-value" slot="money">{{ stock.symbol }}{{ stock.rate }}</p>
      </div>
        <p class="stock-qty">Qty Owned: <span>{{ stock.owned }}</span></p>
        <form class="stock-input">
          <label class="label">sellsome stock</label>
          <input placeholder="Amount to sell" type="text" class="form-control" v-model="sellQty">
          <button @click="sellStock" class="btn btn-primary submit-button">Sell</button>
          <p>{{ sellQty }}</p>
        </form>
    </b-card>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {

    }
  },
  methods: {
    
  },
  props: ['stock'],
  ...mapActions([
    
  ])
}
</script>

<style lang="css" scoped>
.stock-card {
  text-align: center;
  background-color: hsl(228, 28%, 20%);
}

.stock-card:hover {
  background-color: hsl(228, 28%, 23%)
}

.money-value {
  font-size: 2rem;
}

.stock-qty {
  font-size: 1.2rem;
}

.stock-qty span {
  font-size: 1.6rem;
}
</style>