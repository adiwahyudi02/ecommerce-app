<template>
  <button :class="classButton">
    <slot />
  </button>
</template>

<script setup lang="ts">
interface IButtonProps {
  variant?: "outline" | "primary" | "transparent";
  size?: "sm" | "md" | "lg" | "xl";
  isFull?: boolean;
}

const props = withDefaults(defineProps<IButtonProps>(), {
  variant: "primary",
  size: "md",
});

const classButton = computed(() => [
  "button",
  `button--${props.variant}`,
  `button--${props.size}`,
  ...(props.isFull ? [`button--isFull`] : []),
]);
</script>

<style lang="sass" scoped>
.button
  margin-block: $spacing-sm
  font-weight: bold
  box-shadow: none
  cursor: pointer

  &--outline
    background: white
    border: 1px solid $black-300

    &:hover
      transition: 0.3s
      background: $primary
      color: white
      border-color: $primary

  &--transparent
    background: none
    color: $primary
    border: 1px solid transparent

    &:hover
      transition: 0.3s
      border-color: $primary

  &--primary
    background: $primary
    color: white
    border: 1px solid $primary

    &:hover
      transition: 0.3s
      opacity: 0.8

  &--sm
    padding: $spacing-sm
    border-radius: $border-radius-sm

  &--md
    padding: $spacing-md
    border-radius: $border-radius-md

  &--lg
    padding: $spacing-lg
    border-radius: $border-radius-md

  &--xl
    padding: $spacing-xl
    border-radius: $border-radius-lg

  &--isFull
    width: 100%
</style>
