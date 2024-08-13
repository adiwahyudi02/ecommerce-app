<template>
  <Swiper
    :modules="[
      SwiperAutoplay,
      SwiperController,
      SwiperPagination,
      SwiperNavigation,
      SwiperThumbs,
    ]"
    :slides-per-view="1"
    :loop="true"
    :autoplay="{
      delay: 5000,
      disableOnInteraction: true,
    }"
    navigation
    :pagination="{ clickable: true }"
    :thumbs="{ swiper: thumbsSwiper }"
    class="swiper__main"
  >
    <SwiperSlide v-for="(slide, index) in images" :key="index">
      <NuxtImg
        format="webp"
        fit="cover"
        width="300"
        height="300"
        :src="slide.src"
        :alt="slide.alt"
        class="swiper__main__image"
        data-testid="main-image"
      />
    </SwiperSlide>
  </Swiper>
  <Swiper
    :modules="[SwiperThumbs]"
    watch-slides-progress
    :slides-per-view="4"
    class="swiper__thumb"
    @swiper="setThumbsSwiper"
  >
    <SwiperSlide v-for="(slide, index) in images" :key="index">
      <NuxtImg
        format="webp"
        fit="cover"
        width="100"
        height="100"
        :src="slide.src"
        :alt="slide.alt"
        class="swiper__thumb__image"
        data-testid="thumb-image"
      />
    </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts">
interface IImages {
  src: string;
  alt: string;
}

defineProps<{
  images: IImages[];
}>();

const thumbsSwiper = ref(null);
const setThumbsSwiper = (swiper: any) => {
  thumbsSwiper.value = swiper;
};
</script>

<style lang="sass" scoped>
.swiper
  &__main
    border-radius: $border-radius-md

    &__image
      width: 100%
      height: 16rem
      object-fit: cover
      overflow: hidden
      border-radius: $border-radius-md

      +responsive($breakpoint-md)
        height: 100%
        width: 100%

  &__thumb
    margin-top: $spacing-lg

    &__image
      width: 90%
      height: 5rem
      object-fit: cover
      border: 1px solid $black-300
      border-radius: $border-radius-sm
      cursor: pointer
</style>
