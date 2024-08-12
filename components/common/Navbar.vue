<template>
  <nav class="navbar">
    <div class="navbar__wrapper">
      <NuxtLink href="/" class="navbar__link__wrapper">
        <div class="navbar__link">
          <div>
            <Icon
              name="material-symbols:list-alt-outline"
              class="navbar__link__icon"
            />
          </div>
          <p>Catalog</p>
        </div>
      </NuxtLink>
      <NuxtLink href="/shop" class="navbar__link__wrapper">
        <div class="navbar__link">
          <div>
            <Icon
              name="material-symbols:storefront-outline"
              class="navbar__link__icon"
            />
          </div>
          <p>Your Shop</p>
        </div>
      </NuxtLink>
    </div>
  </nav>
</template>

<style lang="sass" scoped>
.navbar
  position: fixed
  width: 100%
  max-width: $breakpoint-md
  z-index: $z-index-navbar

  &__wrapper
    +flexbox(row, space-around, center, wrap, 0)
    height: 4rem
    background: white
    border-bottom: 3px solid $black-100

  &__link
    +flexbox(column, center, center, wrap, 0)

    & > p
      margin-block: $spacing-sm
      font-size: $font-size-sm

    &__icon
      font-size: $font-size-lg

    &__wrapper
      +flexbox(row, center, center, wrap, 0)
      height: 100%
      flex: 1
      color: $black-500

      &:hover
        background: $black-50

.router-link-active
  border-top: 4px solid $primary
  color: $primary
</style>
