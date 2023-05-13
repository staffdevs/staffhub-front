<script setup lang="ts">
import ItemButton from './ItemButton.vue';
import { ProfileButton } from '@/components/elements';
import { useUser } from '@/helpers';
import {
  UserGroupIcon,
  IdentificationIcon,
  KeyIcon,
  PaperAirplaneIcon,
  CheckBadgeIcon,
  ChartBarIcon,
  ChartPieIcon,
  InformationCircleIcon,
  DocumentTextIcon,
  TicketIcon,
} from '@heroicons/vue/20/solid';
import ItemSection from './ItemSection.vue';

const { user } = useUser();
</script>

<template>
  <nav class="border-r border-gray-300 bg-white p-2 shadow-sidebar">
    <div class="flex justify-center py-2">
      <router-link
        class="rounded border border-gray-900 bg-gray-900 px-4 font-medium text-gray-50 shadow duration-150 hover:bg-white hover:text-gray-900"
        :to="{ name: 'home' }"
      >
        Staffhub
      </router-link>
    </div>
    <div class="flex items-center justify-between px-4">
      <span class="font-bold text-gray-600">{{ user.email }}</span>
      <ProfileButton />
    </div>
    <div class="space-y-4 py-2">
      <ItemSection v-if="user.isAdmin" label="Administración">
        <ItemButton :icon="UserGroupIcon" text="Usuarios" to="/users" />
        <ItemButton :icon="IdentificationIcon" text="Roles" to="/roles" />
        <ItemButton :icon="KeyIcon" text="Permisos" to="/permissions" />
      </ItemSection>
      <ItemSection v-if="user.isAdmin || user.isOperator" label="Gestión">
        <ItemButton :icon="PaperAirplaneIcon" text="Gestionar vacaciones" to="/holydays" />
        <ItemButton :icon="CheckBadgeIcon" text="Expedir certificados" to="/certificates" />
        <ItemButton :icon="ChartBarIcon" text="Seguimiento a usuarios" to="/user-tracing" />
        <ItemButton :icon="ChartPieIcon" text="Metricas" to="/metrics" />
      </ItemSection>
      <ItemSection v-if="user.isAdmin || user.isUser" label="General">
        <ItemButton :icon="InformationCircleIcon" text="Información sobre beneficios" to="/info" />
        <ItemButton :icon="DocumentTextIcon" text="Realizar solicitud" to="/request" />
        <ItemButton :icon="TicketIcon" text="Ver estado de solicitudes" to="/request-status" />
      </ItemSection>
    </div>
  </nav>
</template>
