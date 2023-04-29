import { LoginPage, HomePage } from '@/components/pages';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: LoginPage, name: 'login' },
  { path: '/home', component: HomePage, name: 'home' },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
