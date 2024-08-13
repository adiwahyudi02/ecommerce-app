<template>
  <div class="button-list">
    <Button
      v-for="(button, index) in buttons"
      :key="index"
      :variant="selected === button.value ? 'primary' : 'outline'"
      :size="size"
      data-testid="button"
      @click="$emit('onSelected', button)"
    >
      {{ button.label }}
    </Button>
  </div>
</template>

<script setup lang="ts">
interface IButton {
  label: string;
  value: any;
}

interface IButtonListProps {
  selected?: any;
  buttons: IButton[];
  size?: "sm" | "md" | "lg" | "xl";
}

withDefaults(defineProps<IButtonListProps>(), {
  selected: false,
  size: "md",
});

defineEmits<{
  (e: "onSelected", selected: any): void;
}>();
</script>

<style lang="sass" scoped>
.button-list
  +flexbox(row, flex-start, start, wrap, $spacing-sm)
</style>
