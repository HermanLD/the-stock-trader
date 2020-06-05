<template>
  <div class="home-hero">
    <div class="main-header">
      <h1>Keep Track of the<br>Crypto Stockmarket</h1>
      <p>Buy and sell with full confidence<br>that you will have the most accurate data.</p>
    </div>
  </div>
</template>

<script>

export default {

}
</script>

<style scoped>
  .home-hero {
    background-image: url('../assets/home-pg-bull.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 75vh;
    position: relative;
  }

  .main-header {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .main-header h1 {
    font-weight: 700;
  }

  .main-header p {
    font-weight: 400;
    font-size: 1.2rem;
  }
</style>