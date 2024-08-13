<template>
  <div>
    <Banner :data="banners" />
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
import { SEO_META } from "~/constants/seoMeta";

const {
  public: { urlBase, websiteName },
} = useRuntimeConfig();

const title = `Catalog | ${websiteName}`;

useServerSeoMeta({
  ogTitle: () => title,
  title: () => title,
  description: () => SEO_META.description,
  ogDescription: () => SEO_META.description,
  ogUrl: () => urlBase,
  ogLocale: () => SEO_META.ogLocale,
  ogType: () => SEO_META.ogType as "website",
});

// product store
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

const banners = [
  {
    src: "/images/banner-1.jpg",
    alt: "banner image 1",
  },
  {
    src: "/images/banner-2.jpg",
    alt: "banner image 2",
  },
  {
    src: "/images/banner-3.jpg",
    alt: "banner image 3",
  },
];
</script>

<style lang="sass" scoped>
.product-list
  margin-top: $spacing-xl
</style>
