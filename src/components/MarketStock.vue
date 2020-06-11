<template>
  <div class="col-lg-4 col-md-6 col-sm-12">
    <transition name="slide" appear>
      <b-card class="stock-card p-3 mt-3 ml-3">
        <h2 class="stock-name">{{ stock.name }}</h2>
        <div class="price my-5">
          <p class="money-value">${{ stock.rate }}</p>
        </div>
        <p class="stock-qty">Total: ${{ orderTotal }}</p>
        <div class="stock-input">
          <label class="label">Buy some stock</label>
          <input
            v-model.number="purchaseQty"
            placeholder="Amount to Buy"
            type="text"
            class="form-control"
          />
          <button class="btn btn-primary submit-button" @click="buyStock">
            Buy
          </button>
        </div>
      </b-card>
    </transition>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    stock: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      purchaseQty: null
    };
  },
  computed: {
    //*Grab the total value of order
    orderTotal() {
      return this.stock.rate * this.purchaseQty;
    }
  },
  methods: {
    ...mapActions({
      purchase: "buyStock"
    }),
    buyStock() {
      const order = {
        id: this.stock.id,
        name: this.stock.name,
        total: this.orderTotal,
        qty: this.purchaseQty
      };
      this.purchase(order);
      this.purchaseQty = null;
    }
  }
};
</script>

<style lang="css" scoped>
.stock-card {
  text-align: center;
  background-color: hsl(228, 28%, 20%);
}

.stock-card:hover {
  background-color: hsl(228, 28%, 23%);
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
