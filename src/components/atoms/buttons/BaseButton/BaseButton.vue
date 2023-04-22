<script setup lang="ts">
defineProps<{
  text: string;
}>();
</script>

<template>
  <button type="button" class="btn">
    {{ text }}
  </button>
</template>
