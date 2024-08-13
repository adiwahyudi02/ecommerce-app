<template>
  <p class="brand-name">{{ name }}</p>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
}>();
</script>

<style lang="sass" scoped>
.brand-name
  font-size: $font-size-xs
  font-weight: lighter
  color: $primary
  border-radius: $border-radius-lg
  background: $teal-100
  border: 1px solid $primary
  width: fit-content
  padding: $spacing-xs $spacing-md
</style>
