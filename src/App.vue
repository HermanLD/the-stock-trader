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
html,
body {
  color: hsl(0, 0%, 100%);
  font-family: 'Inter', sans-serif;
  background-color: hsl(230, 17%, 14%);
}
</style>
