<template>
  <Button variant="outline" is-full @click="$emit('onShare')">{{
    shareLabel
  }}</Button>
</template>

<script setup lang="ts">
interface IShareButtonProps {
  shareLabel?: string;
}

withDefaults(defineProps<IShareButtonProps>(), {
  shareLabel: "Share",
});

defineEmits<{
  (e: "onShare"): void;
}>();
</script>
