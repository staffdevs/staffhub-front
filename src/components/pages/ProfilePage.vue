<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue';
import { ArrowLeftCircleIcon } from '@heroicons/vue/24/solid';

const { user } = useAuth0();
</script>

<template>
  <div class="bg-leaf flex h-screen flex-col items-center justify-center">
    <router-link :to="{ name: 'home' }" class="flex items-center gap-2 rounded-t-xl bg-white px-8 py-1">
      <ArrowLeftCircleIcon class="h-7 text-gray-700" />
      <span>Regresar</span>
    </router-link>
    <div class="flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-8 drop-shadow">
      <img class="mx-auto my-4 h-40 rounded-full bg-white p-[1px]" :src="user.picture" alt="profile" />
      <h1 class="m-x-auto text-xl font-bold">
        {{ user.name }}
      </h1>
      <h3 class="my-2 text-lg">Gestión Humana</h3>
      <h3>StaffHub S.A.S</h3>
      <h4 class="mt-8">
        {{ user.email }}
      </h4>
    </div>
  </div>
</template>
