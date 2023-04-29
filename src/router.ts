import { LoginPage, HomePage, ProfilePage } from '@/components/pages';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: LoginPage, name: 'login' },
  { path: '/home', component: HomePage, name: 'home' },
  { path: '/profile', component: ProfilePage, name: 'profile' },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
