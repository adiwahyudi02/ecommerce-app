<template>
  <div>
    <Loading v-if="isLoading" />
    <NoData v-else-if="!isLoading && !data.length"
      >There is no banner list</NoData
    >
    <div v-else>
      <Swiper
        :modules="[SwiperPagination, SwiperAutoplay]"
        :slides-per-view="1"
        :loop="true"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: true,
        }"
        :pagination="{ clickable: true }"
        space-between="8px"
      >
        <SwiperSlide v-for="(item, index) in data" :key="index">
          <NuxtImg :src="item.src" :alt="item.alt" class="swiper__image" />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
interface IImages {
  src: string;
  alt: string;
}

interface IBannerSliderProps {
  data: IImages[];
  isLoading?: boolean;
}

withDefaults(defineProps<IBannerSliderProps>(), {
  isLoading: false,
});
</script>

<style lang="sass" scoped>
.swiper
  &__image
    width: 99%
    height: 14rem
    object-fit: cover
    border: 3px solid $black-300
    border-radius: $border-radius-lg
    +responsive($breakpoint-md)
      height: 32rem
</style>
