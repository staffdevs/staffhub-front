<script setup lang="ts">
import { ArrowLeftCircleIcon } from '@heroicons/vue/24/solid';
</script>

<template>
  <div class="bg-leaf flex h-screen flex-col items-center justify-center">
    <router-link :to="{ name: 'login' }" class="flex items-center gap-2 rounded-t-xl bg-white px-8 py-1">
      <ArrowLeftCircleIcon class="h-7 text-gray-700" />
      <span>Recargar</span>
    </router-link>
    <div class="rounded border border-gray-300 bg-gray-50 p-4 shadow-lg">
      <h1 class="text-center text-xl font-bold text-gray-700">404 | Not Found</h1>
    </div>
  </div>
</template>
