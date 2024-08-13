<template>
  <div class="blank-layout" data-testid="blank-layout">
    <div class="blank-layout__main" data-testid="blank-layout-main">
      <div class="blank-layout__content" data-testid="blank-layout-content">
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
