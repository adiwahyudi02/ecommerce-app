<template>
  <div class="loading">
    <slot> Loading... </slot>
  </div>
</template>

<style lang="sass" scoped>
.loading
  +flexbox(row, center,center)
  margin: $spacing-lg
  font-size: $font-size-lg
  font-weight: bold
  color: $black-300
</style>
