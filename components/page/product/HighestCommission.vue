<template>
  <div>
    <h2 data-testid="highest-commission-header">Highest Commission</h2>
    <ProductSlider
      :data="data"
      :columns="columns"
      :is-loading="isLoading"
      data-testid="highest-commission-slider"
    />
  </div>
</template>

<script setup lang="ts">
import type { IProductList } from "~/types/products";

interface IHighesCommissionProps {
  columns?: number;
  data: IProductList;
  isLoading?: boolean;
}

withDefaults(defineProps<IHighesCommissionProps>(), {
  columns: 4,
  isLoading: false,
});
</script>

<style lang="sass" scoped></style>
