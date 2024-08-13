<template>
  <div class="blank-layout">
    <div class="blank-layout__main">
      <div class="blank-layout__content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="sass" scoped>
.blank-layout
  +flexbox(row, center)

  &__main
    width: 100%
    max-width: $breakpoint-md

  &__content
    margin-inline: $spacing-sm
    +responsive($breakpoint-sm)
      margin-inline: $spacing-md
</style>
