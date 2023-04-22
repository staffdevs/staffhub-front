<script setup lang="ts">
import { BaseButton, BaseInput } from '@/components/atoms';

const inputEmailProps = { placeholder: 'tu@ejemplo.com', type: 'email' };
const inputPasswordProps = { placeholder: '••••••••', type: 'password' };
</script>

<template>
  <div class="bg-leaf flex h-screen items-center justify-center">
    <div class="shadow-lg5 rounded-lg border border-gray-300 bg-gray-50 p-4">
      <h1 class="text-xl font-bold text-gray-700">StaffHub</h1>
      <hr />
      <div>
        <h2 class="text-center text-lg font-thin tracking-tighter text-gray-700">
          Diseñada para simplificar y mejorar la gestión del talento humano en su empresa
        </h2>
        <div class="mt-4 flex flex-col gap-4">
          <div class="flex gap-4">
            <BaseInput class="w-full" :input-props="inputEmailProps" label="Correo electrónico" />
            <BaseInput class="w-full" :input-props="inputPasswordProps" label="Contraseña" />
          </div>
          <div class="flex w-full justify-end gap-4">
            <BaseButton
              class="bg-green-600 text-white hover:bg-green-500 focus-visible:outline-green-600"
              text="Ingresar"
            />
            <BaseButton
              class="bg-gray-700 text-white hover:bg-gray-500 focus-visible:outline-gray-600"
              text="Registrarse"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
