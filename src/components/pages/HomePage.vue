<script setup lang="ts">
import { ProfileButton } from '@/components/atoms';
</script>

<template>
  <div class="flex h-screen flex-col bg-gray-100">
    <nav class="bg-leaf">
      <div class="container mx-auto flex items-center justify-between px-8 py-1">
        <h1 class="rounded bg-gray-700 px-2 py-1 text-center text-xl font-bold text-white shadow">StaffHub</h1>
        <ProfileButton />
      </div>
    </nav>
  </div>
</template>
