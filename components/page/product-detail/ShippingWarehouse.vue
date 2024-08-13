<template>
  <div class="shipment__wrapper">
    <p class="shipment__label">Shipping Warehouse</p>
    <Card class="shipment__card">
      <p class="shipment__warehouse" data-testid="warehouse-title">
        {{ title }}
      </p>
      <p class="shipment__address" data-testid="warehouse-address">
        {{ address }}
      </p>
    </Card>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  address: string;
}>();
</script>

<style lang="sass" scoped>
.shipment
  &__label
    color: $black-900
    font-weight: bold

  &__card
    margin-inline: 0
    padding: $spacing-sm
    box-shadow: $box-shadow-xs
    background: $black-50

    +responsive($breakpoint-md)
      width: 50%

  &__warehouse
    font-size: $font-size-xs
    font-weight: bold
    margin-block: $spacing-sm

  &__address
    font-size: $font-size-xs
    margin-block: $spacing-sm
</style>
