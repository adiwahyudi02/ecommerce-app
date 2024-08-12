<template>
  <div>
    <h2>Highest Commision</h2>
    <ProductSlider :data="data" :columns="columns" :is-loading="isLoading" />
  </div>
</template>

<script setup lang="ts">
import type { IProductList } from "~/types/products";

interface IHighesCommisionProps {
  columns?: number;
  data: IProductList;
  isLoading?: boolean;
}

withDefaults(defineProps<IHighesCommisionProps>(), {
  columns: 4,
  isLoading: false,
});
</script>

<style lang="sass" scoped></style>
