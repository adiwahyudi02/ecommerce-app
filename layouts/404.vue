<template>
  <div class="notfound">
    <div>
      <h1>Oops! Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <div class="notfound__error__wrapper">
        <slot />
      </div>
    </div>
  </div>
</template>
<style lang="sass" scoped>
.notfound
  width: 100%
  height: 100vh
  +flexbox(column, center, center, wrap, $spacing-xl)

  &__error__wrapper
    +flexbox(column, end, end, wrap, $spacing-xl)
</style>
