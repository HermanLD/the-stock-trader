<template>
  <div class="col-lg-4 col-md-6 col-sm-12">
    <transition name="slide" appear>
      <b-card class="stock-card p-3 mt-3 ml-3">
        <h2 class="stock-name">{{ stock.name }}</h2>
        <div class="price my-5">
          <p class="money-value">${{ stock.rate }}</p>
        </div>
        <p class="stock-qty">
          Qty Owned: <span>{{ stock.own }}</span>
        </p>
        <div class="stock-input">
          <label class="label">Sell some stock: ${{ saleTotal }}</label>
          <input
            v-model.number="sellQty"
            placeholder="Amount to sell"
            type="text"
            class="form-control"
          />
          <button class="btn btn-primary submit-button" @click="sellStock">
            Sell
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
      sellQty: null
    };
  },
  computed: {
    saleTotal() {
      return this.stock.rate * this.sellQty;
    }
  },
  methods: {
    ...mapActions({
      sale: "sellStock"
    }), //?Access this.sellStock & bind action to var
    sellStock() {
      const order = {
        id: this.stock.id,
        total: this.saleTotal,
        qty: this.sellQty
      };
      this.sale(order);
      this.sellQty = null;
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
