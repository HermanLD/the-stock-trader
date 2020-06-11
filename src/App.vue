<template>
  <div class="container">
    <app-navbar></app-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    AppNavbar: Navbar
  },
  created() {
    this.$store.dispatch("initOptions"); //?Initiate Stock data
    this.$store.dispatch("endDay"); //*Random Number Not Needed after attached api
  }
};
</script>

<style>
* {
  margin: 0;
}

html,
body {
  color: hsl(0, 0%, 100%);
  font-family: "Inter", sans-serif;
  background-color: #ff7700;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%23cc0000' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%23aa0000' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%23d6002b' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%23b10022' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%23d9004b' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%23b2003d' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%23d3006c' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%23ac0057' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%23c4008c' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%239e0071' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%23aa00aa' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%23880088' points='943 900 1210 900 971 687'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
}

/* Positioning Button on stock card */
.stock-input {
  position: relative;
}

.submit-button {
  position: absolute;
  top: 32px;
  right: 0px;
}

/* Animations and transitions */
.slide-enter {
  opacity: 0;
}

.slide-enter-active {
  transition: opacity 0.75s;
  animation: slide-in 0.75s;
}

.slide-leave-active {
  animation: slide-out 0.75s;
  opacity: 0;
}

@keyframes slide-in {
  from {
    transform: translateY(50px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(50px);
  }
}
</style>
