<template>
  <Card class="card">
    <NuxtLink :to="`/products/${id}`">
      <div class="card__image__wrapper">
        <NuxtImg
          format="webp"
          fit="cover"
          width="100"
          height="100"
          :src="image"
          :alt="`product image ${name}`"
          class="card__image"
        />
        <div class="card__image__shipping">Free Shipping</div>
        <div class="card__image__commission">{{ commision }} Commision</div>
      </div>
    </NuxtLink>
    <div class="card__description__wrapper">
      <div>
        <p class="card__location">{{ location }}</p>
        <nuxt-link :to="`/products/${id}`" class="card__title">{{
          name
        }}</nuxt-link>
      </div>
      <div>
        <div class="card__rating-price__wrapper">
          <div>
            <p class="card__price__label">Start From</p>
            <div class="card__price__wrapper">
              <p class="card__price">{{ rupiahPrefix(resellerPrice) }}</p>
              <p class="card__price--discount">
                {{ rupiahPrefix(retailPriceLabel) }}
              </p>
            </div>
          </div>
          <ProductRating :amount="rating" />
        </div>
        <ProductShareButton v-if="showShareButton" @on-share="handleShare" />
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
interface IProductCardProps {
  id: string;
  name: string;
  image: string;
  commision: string;
  location: string;
  resellerPrice: string;
  retailPriceLabel: string;
  rating: number;
  showShareButton?: boolean;
  shareableLink?: string;
}

const props = withDefaults(defineProps<IProductCardProps>(), {
  showShareButton: true,
  shareableLink: "",
});

const handleShare = () => {
  shareToWhatsApp(props.shareableLink);
};
</script>

<style lang="sass" scoped>
.card
  padding: 0 0 $spacing-sm 0
  margin: 0

  &__image
    width: 100%
    height: 15rem
    object-fit: cover

    &__wrapper
      position: relative
      border-radius: 8px 0 0 8px
      overflow: hidden

    &__commission
      +flexbox(column, center)
      position: absolute
      top: $spacing-sm
      right: 0
      background: $primary
      color: white
      border-radius: 1em 0 0 1em
      height: 3em
      padding-inline: $spacing-sm
      font-size: $font-size-xs

    &__shipping
      +flexbox(column, center)
      position: absolute
      left: 0
      bottom: 0
      background: $primary
      color: white
      height: 2em
      padding-inline: $spacing-sm
      font-size: $font-size-xs

  &__description__wrapper
    +flexbox(column, space-between)
    padding-inline: $spacing-md

  &__location
    font-size: $font-size-xs
    color: $black-500
    font-weight: lighter
    margin-block: $spacing-md

  &__title
    cursor: pointer
    font-size: $font-size-md
    color: $black-900
    font-weight: bold
    height: 2.5rem
    overflow: hidden
    text-overflow: ellipsis
    display: -webkit-box
    +vendor-prefix(line-clamp, 2)
    +vendor-prefix(box-orient, vertical)

  &__price
    font-size: $font-size-lg
    color: $black-900
    margin-block: $spacing-xs
    color: $red-800
    font-weight: bold

    &--discount
      font-size: $font-size-xs
      margin-block: $spacing-xs
      color: $black-300
      text-decoration-line: line-through
      margin-left: $spacing-xs

    &__label
      font-size: $font-size-xs
      color: $black-500
      font-weight: lighter
      margin-block: $spacing-xs
      margin-top: $spacing-md

  &__rating-price
    &__wrapper
      +flexbox(row, space-between, center, wrap, 0.5rem)
</style>
