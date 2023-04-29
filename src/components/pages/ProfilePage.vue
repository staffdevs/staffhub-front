<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue';

const { user } = useAuth0();
</script>

<template>
  <div class="bg-leaf flex h-screen items-center justify-center">
    <div
      class="flex flex-col items-center justify-center rounded-lg border-4 border-gray-700 bg-yellowgreen bg-opacity-70 p-8 drop-shadow-2xl"
    >
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
