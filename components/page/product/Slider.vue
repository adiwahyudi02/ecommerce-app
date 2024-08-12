<template>
  <div>
    <Loading v-if="isLoading" />
    <NoData v-else-if="!isLoading && !data.length"
      >There is no product list</NoData
    >
    <div v-else>
      <Swiper
        :modules="[SwiperNavigation]"
        :slides-per-view="columns"
        :breakpoints="swiperBreakpoint"
        space-between="16px"
        navigation
      >
        <SwiperSlide v-for="item in data" :key="item.id">
          <ProductCard
            :id="item.id"
            :key="item.id"
            :name="item.name"
            :image="item.images[0]"
            :commision="
              calculatePercentage(item.commissionPrice, item.customerPrice)
            "
            :location="item.warehouseAddress"
            :reseller-price="item.resellerPriceMinLabel"
            :retail-price-label="item.retailPriceLabel"
            :rating="item.rating"
            :show-share-button="false"
            style="width: auto"
          />
        </SwiperSlide>
        <SwiperSlide key="see-all" />
      </Swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IProductList } from "~/types/products";

interface IProductSliderProps {
  columns?: number;
  data: IProductList;
  isLoading?: boolean;
}

withDefaults(defineProps<IProductSliderProps>(), {
  columns: 4,
  isLoading: false,
});

const swiperBreakpoint = {
  0: {
    slidesPerView: 1,
  },
  400: {
    slidesPerView: 2,
  },
  639: {
    slidesPerView: 3,
  },
  865: {
    slidesPerView: 4,
  },
  1500: {
    slidesPerView: 5,
  },
  1700: {
    slidesPerView: 7,
  },
};
</script>
