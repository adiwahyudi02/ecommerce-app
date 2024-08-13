<template>
  <div>
    <Loading v-if="isLoading" data-testid="loading" />
    <NoData v-else-if="!isLoading && !data.length" data-testid="no-data">
      There is no banner list
    </NoData>
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
        data-testid="swiper"
      >
        <SwiperSlide
          v-for="(item, index) in data"
          :key="index"
          data-testid="swiper-slide"
        >
          <NuxtImg
            format="webp"
            fit="cover"
            :src="item.src"
            :alt="item.alt"
            width="500"
            height="300"
            class="swiper__image"
          />
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
