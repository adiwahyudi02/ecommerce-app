<template>
  <div>
    <h2 data-testid="highest-rating-header">Highest Rating</h2>
    <ProductSlider
      :data="data"
      :columns="columns"
      :is-loading="isLoading"
      data-testid="highest-rating-slider"
    />
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
