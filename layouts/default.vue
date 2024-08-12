<template>
  <div class="default-layout">
    <div class="default-layout__main">
      <Navbar />
      <div class="default-layout__content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="sass" scoped>
.default-layout
  +flexbox(row, center)

  &__main
    width: 100%
    max-width: $breakpoint-md

  &__content
    margin-top: 5rem
    margin-inline: $spacing-sm
    +responsive($breakpoint-sm)
      margin-inline: $spacing-md
</style>
