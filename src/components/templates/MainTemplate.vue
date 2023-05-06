<script setup lang="ts">
import { BaseSidebar } from '@/components/elements';
</script>

<template>
  <div class="flex h-screen bg-gray-100">
    <BaseSidebar />
    <main>
      <router-view />
    </main>
  </div>
</template>
