<script setup lang="ts">
defineProps<{
  label: string;
  placeholder: string;
}>();
</script>

<template>
    <div>
        <label htmlFor="email" class="block text-sm font-medium leading-6 text-gray-900">
          {{label}}
        </label>
        <div>
          <input
            id="email"
            type="email"
            name="email"
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            :placeholder="placeholder"
          />
        </div>
      </div>
</template>
