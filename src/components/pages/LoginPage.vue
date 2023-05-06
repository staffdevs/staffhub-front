<script setup lang="ts">
import { BaseButton } from '@/components/elements';
import { useAuth0 } from '@auth0/auth0-vue';

const { loginWithRedirect } = useAuth0();
</script>

<template>
  <div class="bg-leaf flex h-screen items-center justify-center">
    <div class="rounded border border-gray-300 bg-gray-50 p-4 shadow-lg">
      <h1 class="text-center text-xl font-bold text-gray-700">StaffHub</h1>
      <hr />
      <div>
        <h2 class="w-80 text-center text-lg font-thin tracking-tighter text-gray-700">
          Diseñada para simplificar y mejorar la gestión del talento humano en su empresa
        </h2>
        <div class="mt-4 flex flex-col gap-4">
          <div class="flex w-full justify-center gap-4">
            <BaseButton
              class="bg-green-600 text-white hover:bg-green-500 focus-visible:outline-green-600"
              text="Ingresar"
              @click="loginWithRedirect"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
