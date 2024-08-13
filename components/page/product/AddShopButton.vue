<template>
  <Button is-full @click="$emit('onAdd')">{{ addLabel }}</Button>
</template>

<script setup lang="ts">
interface IAddShopButtonProps {
  addLabel?: string;
}

withDefaults(defineProps<IAddShopButtonProps>(), {
  addLabel: "Add to shop",
});

defineEmits<{
  (e: "onAdd"): void;
}>();
</script>
