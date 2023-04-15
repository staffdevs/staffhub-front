<script setup lang="ts">
import { BaseButton, BaseInput } from '@/components/atoms';
</script>

<template>
  <div class="flex h-screen justify-center">
    <div class="hidden w-full max-w-4xl flex-1 flex-col justify-center bg-yellowgreen px-8 py-12 lg:flex">
      <h1 class="text-center text-3xl font-bold text-white">StaffHub</h1>
      <img class="mx-auto max-h-96" src="/src/assets/illustrations/community_group.svg" alt="community group" />
      <div>
        <h1 class="text-center text-3xl font-thin tracking-tighter text-white">
          Diseñada para simplificar y mejorar la gestión del talento humano en su empresa
        </h1>
      </div>
    </div>
    <div class="flex w-full flex-col justify-center space-y-4 bg-gray-200 p-8 lg:max-w-xl">
      <h2 class="mx-auto text-xl">Inicio de sesión</h2>
      <BaseInput label="Correo electrónico" placeholder="tu@ejemplo.com"/>
      <BaseInput label="Contraseña" placeholder="••••••••"/>
      <BaseButton text="Ingresar"/>
      <BaseButton text="Registrarse"/>
    </div>
    <div class="absolute -z-50 flex h-screen w-full">
      <div class="w-full bg-yellowgreen" />
      <div class="w-full bg-gray-200" />
    </div>
  </div>
</template>
