<template>
  <h1 class="title" data-testid="title">
    {{ title }}
  </h1>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<style lang="sass" scoped>
.title
  font-size: $font-size-xl
  font-weight: lighter
  margin-top: $spacing-sm
</style>
