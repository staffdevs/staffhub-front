<script setup lang="ts">
import { BaseSidebar } from '@/components/elements';
</script>

<template>
  <div class="flex h-screen bg-gray-100">
    <BaseSidebar />
    <main class="p-8">
      <router-view />
    </main>
  </div>
</template>
