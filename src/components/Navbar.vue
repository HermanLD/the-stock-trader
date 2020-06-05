<template>
<div>
  <b-navbar type="dark">
    <b-navbar-brand to="/">The Stock Trader</b-navbar-brand>

    <b-navbar-nav>
      <b-nav-item to="/portfolio">Portfolio</b-nav-item>
      <b-nav-item to="/market">Market</b-nav-item>
    </b-navbar-nav>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">
      <b-nav-item class="mr-3">End of Day</b-nav-item>
      <b-nav-item-dropdown class="mr-3" text="Save & Load" right>
        <b-dropdown-item href="#">Load</b-dropdown-item>
        <b-dropdown-item href="#">Save</b-dropdown-item>
      </b-nav-item-dropdown>
      <b-nav-text>Funds: $10000</b-nav-text>
    </b-navbar-nav>

  </b-navbar>
</div>
</template>

<script>
export default {
  
}
</script>
