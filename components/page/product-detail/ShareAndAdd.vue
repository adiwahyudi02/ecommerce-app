<template>
  <div class="buttons__wrapper">
    <ProductShareButton
      :share-label="shareLabel"
      data-testid="share-button"
      @on-share="$emit('onShare')"
    />
    <ProductAddShopButton
      :add-label="addLabel"
      data-testid="add-button"
      @on-add="$emit('onAdd')"
    />
  </div>
</template>

<script setup lang="ts">
interface IShareAndAddProps {
  shareLabel?: string;
  addLabel?: string;
}

withDefaults(defineProps<IShareAndAddProps>(), {
  shareLabel: "Share",
  addLabel: "Add to shop",
});

defineEmits<{
  (e: "onShare"): void;
  (e: "onAdd"): void;
}>();
</script>

<style lang="sass" scoped>
.buttons
  &__wrapper
    +flexbox(row, flex-start, center, stretch, $spacing-sm)
</style>
