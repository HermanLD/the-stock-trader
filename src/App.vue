<template>
  <div class="container">
    <app-navbar></app-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
components: {
    AppNavbar: Navbar
}
}
</script>

<style>
* {
  margin: 0;
}

html,
body {
  color: hsl(0, 0%, 100%);
  font-family: 'Inter', sans-serif;
  background-color: hsl(230, 17%, 14%);
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
</style>
