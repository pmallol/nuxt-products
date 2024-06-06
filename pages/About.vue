<template>
  <div>
    <h2>About</h2>
    <p>
      Welcome to our products ecommerce! Here you can find a wide range of products to choose from. Whether you're looking for electronics, clothing, home goods, or more, we've got you covered. Browse through our extensive collection and find the perfect items to meet your needs. Happy shopping!
    </p>
    <p>
      Our products are sourced from the Fake Store API. This API provides a variety of products to choose from, so you're sure to find something you love. Check out our selection today and start shopping! </p>
      <p>{{data}}</p>
  </div>
</template>

<script setup>
const {data } = await useFetch('/api/currency/GBP')
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}

p {
  margin: 20px 0;
}
</style>