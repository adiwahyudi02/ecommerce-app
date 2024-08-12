<template>
  <div class="card">
    <slot />
  </div>
</template>

<style lang="sass" scoped>
.card
  background: white
  padding: $spacing-md
  border-radius: $border-radius-md
  border: 1px solid $black-200
  box-shadow: $box-shadow-sm
  margin: $spacing-md
</style>
