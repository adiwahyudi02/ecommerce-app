<template>
  <div>
    <div class="product-list">
      <ProductCard
        v-for="item in data"
        :id="item.id"
        :key="item.id"
        :name="item.name"
        :image="item.images[0]"
        :commision="
          calculatePercentage(item.commissionPrice, item.customerPrice)
        "
        :location="item.warehouseAddress"
        :reseller-price="item.resellerPriceMinLabel"
        :retail-price-label="item.retailPriceLabel"
        :rating="item.rating"
        :shareable-link="item.shareableLinkWithoutPrice"
      />
    </div>
    <Loading v-if="isLoading" />
    <NoData v-else-if="!isLoading && !data.length"
      >There is no product list</NoData
    >
  </div>
</template>

<script setup lang="ts">
import type { IProductList } from "~/types/products";

interface IProductListProps {
  columns?: number;
  data: IProductList;
  isLoading?: boolean;
}

withDefaults(defineProps<IProductListProps>(), {
  columns: 3,
  isLoading: true,
});
</script>

<style lang="sass" scoped>
.product-list
  +grid(v-bind(1), $gap: $spacing-sm)
  +responsive($breakpoint-xs)
    +grid(v-bind(2), $gap: $spacing-md)
  +responsive($breakpoint-sm)
    +grid(v-bind(columns), $gap: $spacing-md)
</style>
