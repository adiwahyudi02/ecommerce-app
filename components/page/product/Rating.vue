<template>
  <div class="rating__wrapper">
    <div class="rating__icon__wrapper" data-testid="rating-wrapper">
      <Icon
        v-for="star in 5"
        :key="star"
        class="rating__icon"
        :class="{
          'rating__icon--yellow': star <= amount,
        }"
        name="material-symbols:kid-star-sharp"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  amount: number;
}>();
</script>

<style lang="sass" scoped>
.rating
  font-size: $font-size-md

  &__wrapper
    +flexbox(row, end, center)

  &__icon
    color: $black-200

    &--yellow
      color: $yellow-700

    &__wrapper
      +flexbox(row, center, center, $gap: $spacing-sm)
      margin-right: $spacing-sm
</style>
