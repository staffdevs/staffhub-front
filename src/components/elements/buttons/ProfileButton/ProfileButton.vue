<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';
import { UserCircleIcon, ArrowLeftOnRectangleIcon } from '@heroicons/vue/24/solid';
import { useAuth0 } from '@auth0/auth0-vue';
import { useRouter } from 'vue-router';

const { push } = useRouter();
const { logout: logoutWithRedirect, user } = useAuth0();
const logout = () => logoutWithRedirect({ logoutParams: { returnTo: window.location.origin } });
</script>

<template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton>
        <img class="h-10 rounded-full bg-white p-[1px]" :src="user.picture" alt="profile" />
      </MenuButton>
    </div>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems
        class="absolute left-12 top-0 w-max divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <div class="p-1">
          <MenuItem v-slot="{ active }">
            <button
              :class="[
                active ? 'bg-gray-700 text-white' : 'text-gray-900',
                'group flex w-full items-center rounded-md p-2 pr-6 text-sm',
              ]"
              @click="push({ name: 'profile' })"
            >
              <UserCircleIcon :class="['mr-2 h-5 w-5', active ? 'text-white' : 'text-gray-700']" aria-hidden="true" />
              Perfil
            </button>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <button
              :class="[
                active ? 'bg-red-500 text-white' : 'text-gray-900',
                'group flex w-full items-center rounded-md p-2 pr-6 text-sm',
              ]"
              @click="logout"
            >
              <ArrowLeftOnRectangleIcon
                :class="['mr-2 h-5 w-5', active ? 'text-white' : 'text-gray-700']"
                aria-hidden="true"
              />
              Cerrar sesión
            </button>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>
