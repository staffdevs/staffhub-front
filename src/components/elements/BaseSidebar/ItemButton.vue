<script setup lang="ts">
import { FunctionalComponent } from 'vue';
import { useLink } from 'vue-router';

const props = defineProps<{
  icon: FunctionalComponent;
  text: string;
  to: string;
}>();

const { isActive } = useLink(props);
</script>

<template>
  <li>
    <router-link
      class="group relative flex w-full cursor-pointer items-center gap-2 rounded bg-gray-200 px-4 py-2 text-gray-600 duration-100 hover:bg-gray-600 hover:text-gray-300"
      :to="to"
    >
      <component :is="icon" class="h-5" />
      <span>{{ text }}</span>
      <div v-if="isActive" class="absolute left-1 top-4 h-2 w-2 rounded-full bg-gray-600 group-hover:bg-gray-200" />
    </router-link>
  </li>
</template>
