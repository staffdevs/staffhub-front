<script setup lang="ts">
import { useUser } from '@/helpers/auth';
import { ArrowLeftCircleIcon } from '@heroicons/vue/24/solid';

const { user } = useUser();
</script>

<template>
  <div class="bg-leaf flex h-screen flex-col items-center justify-center">
    <router-link :to="{ name: 'home' }" class="flex items-center gap-2 rounded-t-xl bg-white px-8 py-1">
      <ArrowLeftCircleIcon class="h-7 text-gray-700" />
      <span>Regresar</span>
    </router-link>
    <main class="flex flex-col items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white p-8 shadow">
      <img class="mx-auto my-4 h-20 rounded-full bg-white p-[1px]" :src="user.picture" alt="profile" />
      <h1 class="m-x-auto text-xl font-bold">
        {{ user.name }}
      </h1>
      <h4>{{ user.email }}</h4>
      <span
        v-for="rol in user.roles"
        :key="rol"
        class="animate-pulse rounded bg-gray-600 px-3 py-0.5 text-white shadow-sm"
      >
        {{ rol }}
      </span>
    </main>
  </div>
</template>
