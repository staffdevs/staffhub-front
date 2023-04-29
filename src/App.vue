<script setup lang="ts">
import { initialize } from '@/helpers';
import { LoaderPage } from './components/pages';

const { loading } = initialize();
</script>

<template>
  <LoaderPage v-if="loading" />
  <router-view v-else />
</template>
