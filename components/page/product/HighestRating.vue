<template>
  <div>
    <h2>Highest Rating</h2>
    <ProductSlider :data="data" :columns="columns" :is-loading="isLoading" />
  </div>
</template>

<script setup lang="ts">
import type { IProductList } from "~/types/products";

interface IHighesRatingnProps {
  columns?: number;
  data: IProductList;
  isLoading?: boolean;
}

withDefaults(defineProps<IHighesRatingnProps>(), {
  columns: 4,
  isLoading: false,
});
</script>

<style lang="sass" scoped></style>
