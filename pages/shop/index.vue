<template>
  <ProductList :data="data" :is-loading="isLoading" />
</template>

<script setup lang="ts">
import { SEO_META } from "~/constants/seoMeta";
const {
  public: { websiteName },
} = useRuntimeConfig();

const title = `Shop | ${websiteName}`;

useSeoMeta({
  ogTitle: () => title,
  title: () => title,
  description: () => SEO_META.description,
});

const shopStore = useShopStore();
const { fetchShopProducts } = shopStore;
const { products: data, isLoading } = storeToRefs(shopStore);

await fetchShopProducts();
</script>
