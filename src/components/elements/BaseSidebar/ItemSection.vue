<script setup lang="ts">
defineProps<{
  label: string;
}>();
</script>

<template>
  <section>
    <header class="relative mb-1 flex justify-center">
      <h2 class="relative z-10 bg-white px-1 text-xs font-medium text-gray-600">{{ label }}</h2>
      <hr class="absolute top-1/2 w-full border border-gray-200" />
    </header>
    <ul class="space-y-2">
      <slot />
    </ul>
  </section>
</template>
