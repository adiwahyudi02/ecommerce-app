<template>
  <div class="nodata">
    <slot> No Data List </slot>
  </div>
</template>

<style lang="sass" scoped>
.nodata
  +flexbox(row, center,center)
  margin: $spacing-lg
  font-size: $font-size-lg
  font-weight: bold
  color: $black-300
</style>
