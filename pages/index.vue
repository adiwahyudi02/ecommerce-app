<template>
  <div>
    <ProductHighestCommission
      :data="highestCommissionProducts"
      :is-loading="isLoading && !highestCommissionProducts.length"
    />
    <Divider />
    <ProductHighestRating
      :data="highestRatingProducts"
      :is-loading="isLoading && !highestRatingProducts.length"
    />
    <Divider />
    <div class="product-list">
      <h2>All Products</h2>
      <ProductList :data="productList" :is-loading="isLoading" />
    </div>
  </div>
</template>

<script setup lang="ts">
const store = useProductsStore();
const {
  fetchNextPageProducts,
  fetchHighestRatingProducts,
  fetchHighestCommissionProducts,
} = store;
const {
  products: productList,
  highestRatingProducts,
  highestCommissionProducts,
  hasMore,
  isLoading,
} = storeToRefs(store);

await fetchHighestRatingProducts();
await fetchHighestCommissionProducts();

useInfiniteScroll({
  fetchNextPage: fetchNextPageProducts,
  isShouldFetch: hasMore.value && !isLoading.value,
});
</script>

<style lang="sass" scoped>
.product-list
  margin-top: $spacing-xl
</style>
