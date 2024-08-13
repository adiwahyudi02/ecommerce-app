<template>
  <div>
    <Loading v-if="isLoadingDetail" />
    <template v-else>
      <BackButton label="Back" @click="$router.back()" />
      <div class="product__layout">
        <div>
          <ProductDetailImage :images="imageList || []" />
        </div>
        <div>
          <div class="product__brand-rating__wrapper">
            <ProductBrandName :name="data?.brandName || ''" />
            <ProductRating :amount="data?.rating || 0" />
          </div>
          <ProductDetailTitle :title="data?.name || ''" />
          <Divider />
          <ProductDetailPrices
            :customer-price="data?.customerPriceLabel || 0"
            :reseller-price-min="data?.resellerPriceMinLabel || 0"
            :commission="data?.commissionLabel || 0"
            :retail-price="data?.retailPriceLabel || 0"
          />
          <Divider />
          <ProductDetailShareAndAdd
            :add-label="
              isProductAddedToShop ? 'Remove from shop' : 'Add to shop'
            "
            @on-share="handleShare"
            @on-add="handleAddOrRemoveToShop"
          />
          <Divider />
          <ProductDetailReceivedPoint :point="data?.point || 0" />
        </div>
      </div>
      <Divider />
      <ProductDetailVariants
        :label-variant="data?.labelVariant || ''"
        :label-sub-variant="data?.labelSubVariant || ''"
        :variant-button-list="variantButtonList || []"
        :sub-variant-button-list="subVariantButtonList || []"
        :selected-variant="selectedVariant.value"
        :selected-sub-variant="selectedSubVariant.value"
        @on-selected-variant="handleSelectVariant"
        @on-selected-sub-variant="handleSelectSubVariant"
      />
      <Divider />
      <ProductDetailDescription :description="data?.description || ''" />
      <Divider />

      <ProductDetailShippingWarehouse
        :title="data?.warehouseTitle || ''"
        :address="data?.warehouseAddress || ''"
      />
    </template>
  </div>
</template>

<script lang="ts" setup>
const nuxtApp = useNuxtApp();

nuxtApp.hook("page:finish", () => {
  window.scrollTo(0, 0);
});

definePageMeta({
  layout: "blank",
});

const route = useRoute();
// product detail store
const productDetailStore = useProductDetailStore();
const { product, isLoading: isLoadingDetail } = storeToRefs(productDetailStore);
const { fetchProduct } = productDetailStore;

// shop store
const shopStore = useShopStore();
const { addProductToShop, removeProductFromShop, checkIsProductAddedToShop } =
  shopStore;
const { isProductAddedToShop } = storeToRefs(shopStore);

// fetch product detail
await fetchProduct(route.params.id as string);

const data = product.value;

// handle variant
const initialVariant = data?.variants.at(0);

const selectedVariant = ref({
  label: initialVariant?.value,
  value: initialVariant?.code,
});

const initialSubVariant = initialVariant?.subVariants?.at(0);
const selectedSubVariant = ref({
  label: initialSubVariant?.value,
  value: initialSubVariant?.code,
});

const variantButtonList = computed(() => {
  return data?.variants.map((item) => ({
    label: item.value,
    value: item.code,
  }));
});

const subVariantButtonList = computed(() => {
  const selectedVariantValue = selectedVariant.value.value;
  const subVariants = data?.variants.find(
    // eslint-disable-next-line prettier/prettier
    (item) => item.code === selectedVariantValue
  )?.subVariants;

  return subVariants?.map((item) => ({
    label: item.value,
    value: item.code,
  }));
});

const handleSelectVariant = (variant: { label: string; value: string }) => {
  selectedVariant.value = variant;
};

const handleSelectSubVariant = (subVariant: {
  label: string;
  value: string;
}) => {
  selectedSubVariant.value = subVariant;
};

const imageList = computed(() => {
  return data?.images.map((item) => ({
    src: item,
    alt: `product image ${data.name}`,
  }));
});

const handleShare = () => {
  shareToWhatsApp(data?.shareableLinkWithoutPrice || "");
};

const handleAddOrRemoveToShop = () => {
  if (data) {
    if (isProductAddedToShop.value) {
      removeProductFromShop(data);
      return;
    }
    addProductToShop(data);
  }
};

onMounted(() => {
  if (data) {
    checkIsProductAddedToShop(data);
  }
});
</script>

<style lang="sass" scoped>
.product
  &__layout
    margin-top: $spacing-xl
    +responsive($breakpoint-md)
      +flexbox(row, flex-start, start, stretch, $spacing-xl)

      & > div
        width: 50%

  &__brand-rating
    &__wrapper
      +flexbox(row, space-between, center, wrap)
</style>
