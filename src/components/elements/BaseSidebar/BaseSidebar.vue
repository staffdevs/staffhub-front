<script setup lang="ts">
import ItemButton from './ItemButton.vue';
import { ProfileButton } from '@/components/elements';
import { useAuth0 } from '@auth0/auth0-vue';
import { InformationCircleIcon, DocumentTextIcon, TicketIcon } from '@heroicons/vue/20/solid';

const { user } = useAuth0();
</script>

<template>
  <nav class="border-ra border-gray-300 p-2 shadow-sidebar">
    <div class="flex items-center justify-between px-4 py-2">
      <span class="font-bold text-gray-600">{{ user.email }}</span>
      <ProfileButton />
    </div>
    <hr />
    <div class="py-2">
      <ul class="space-y-2">
        <ItemButton :icon="InformationCircleIcon" text="Información sobre beneficios" to="/info" />
        <ItemButton :icon="DocumentTextIcon" text="Realizar solicitud" to="/request" />
        <ItemButton :icon="TicketIcon" text="Ver estado de solicitudes" to="/request-status" />
      </ul>
    </div>
  </nav>
</template>
