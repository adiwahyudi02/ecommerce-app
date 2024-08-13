<template>
  <div class="variant__wrapper">
    <div>
      <p class="variant__label">{{ labelVariant }}</p>
      <ButtonList
        :buttons="variantButtonList"
        :selected="selectedVariant"
        size="sm"
        @on-selected="handleSelectedVariant"
      />
    </div>
    <div>
      <p class="variant__label">{{ labelSubVariant }}</p>
      <ButtonList
        :buttons="subVariantButtonList"
        :selected="selectedSubVariant"
        size="sm"
        @on-selected="handleSelectedSubVariant"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
interface IButtonList {
  label: string;
  value: any;
}

interface IVariantsProps {
  labelVariant: string;
  labelSubVariant: string;
  variantButtonList: IButtonList[];
  subVariantButtonList: IButtonList[];
  selectedVariant: any;
  selectedSubVariant: any;
}

defineProps<IVariantsProps>();

const emit = defineEmits<{
  (e: "onSelectedVariant", variant: IButtonList): void;
  (e: "onSelectedSubVariant", subVariant: IButtonList): void;
}>();

const handleSelectedVariant = (variant: IButtonList) => {
  emit("onSelectedVariant", variant);
};

const handleSelectedSubVariant = (subVariant: IButtonList) => {
  emit("onSelectedSubVariant", subVariant);
};
</script>

<style lang="sass" scoped>
.variant
  &__wrapper
    +flexbox(row, flex-start, start, wrap, $spacing-xl)
  &__label
    font-size: $font-size-xs
    margin-bottom: $spacing-xs
</style>
