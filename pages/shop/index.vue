<template>
  <ProductList :data="data" :is-loading="isLoading" />
</template>

<script setup lang="ts">
const shopStore = useShopStore();
const { fetchShopProducts } = shopStore;
const { products: data, isLoading } = storeToRefs(shopStore);

await fetchShopProducts();
</script>
