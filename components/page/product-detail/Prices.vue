<template>
  <div class="price">
    <div>
      <p class="price__label">Customer Price</p>
      <p class="price__value" data-testid="customer-price">
        {{ rupiahPrefix(customerPrice) }}
      </p>
    </div>
    <div>
      <p class="price__label">Reseller Price</p>
      <p class="price__value--reseller" data-testid="reseller-price">
        {{ rupiahPrefix(resellerPriceMin) }}
      </p>
      <p class="price__value--retail" data-testid="retail-price">
        {{ rupiahPrefix(retailPrice) }}
      </p>
    </div>
    <div>
      <p class="price__label">Commission</p>
      <p class="price__value--commision" data-testid="commission">
        {{ rupiahPrefix(commission) }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  customerPrice: string | number;
  resellerPriceMin: string | number;
  retailPrice: string | number;
  commission: string | number;
}>();
</script>

<style lang="sass" scoped>
.price
  +flexbox(row, space-between, start, wrap, $spacing-sm)

  &__value
    font-weight: bold

    &--reseller
      font-weight: bold
      color: $red-800
      margin-bottom: 0

    &--retail
      font-size: $font-size-xs
      color: $black-300
      text-decoration-line: line-through
      margin-top: $spacing-xs
      margin-left: $spacing-xs

    &--commision
      color: $yellow-900

  &__label
    font-size: $font-size-sm
    color: $black-400
</style>
