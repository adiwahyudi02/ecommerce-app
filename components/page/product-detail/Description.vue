<template>
  <div>
    <p class="description__label">Product Description</p>
    <p class="description">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  description: string;
}>();
</script>

<style lang="sass" scoped>
.description
  font-size: $font-size-sm
  white-space: pre-line
  line-height: $line-height-md
  color: $black-800
  font-weight: lighter

  &__label
    color: $black-900
    font-weight: bold
</style>
