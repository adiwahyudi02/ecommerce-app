<template>
  <Button variant="transparent" class="back-button">
    <Icon name="material-symbols:arrow-back" class="back-button__icon" />
    <p class="back-button__label">{{ label }}</p>
  </Button>
</template>

<script setup lang="ts">
interface IBackButtonProps {
  label?: any;
}

withDefaults(defineProps<IBackButtonProps>(), {
  label: "Back",
});
</script>

<style lang="sass" scoped>
.back-button
  +flexbox(row, center, center, nowrap, $spacing-sm)

  &__label
    padding: 0
    margin: 0

  &__icon
    font-size: $font-size-xl
    font-weight: bold
</style>
