<template>
  <Card class="point__wrapper">
    <p class="point__label">Point yang diraih</p>
    <Divider border-width="2px" />
    <p class="point__description">
      Earn more points to take advantage of other benefits
    </p>
    <p class="point__amount">Amount: {{ point }}</p>
  </Card>
</template>

<script setup lang="ts">
defineProps<{
  point: string | number;
}>();
</script>

<style lang="sass" scoped>
.point
  &__wrapper
    margin-inline: 0
    padding: $spacing-md
    box-shadow: $box-shadow-xs
    border: none
    background: $amber-100

  &__label
    margin-block: $spacing-xs
    font-weight: bold
    font-size: $font-size-sm

  &__description
    font-size: $font-size-xs
    font-weight: lighter

  &__amount
    font-size: $font-size-xs
    font-weight: bold
    color: $primary
</style>
