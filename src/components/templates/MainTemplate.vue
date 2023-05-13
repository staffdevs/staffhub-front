<script setup lang="ts">
import { HomePage } from '@/components/pages';
import { BaseSidebar } from '@/components/elements';
</script>

<template>
  <div class="flex h-screen bg-gray-100">
    <BaseSidebar />
    <main class="p-8">
      <HomePage v-if="$route.name === 'home'" />
      <router-view />
    </main>
  </div>
</template>
