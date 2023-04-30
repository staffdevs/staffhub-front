import { LoginPage, HomePage, ProfilePage, NotFoundPage } from '@/components/pages';
import { createRouter, createWebHistory } from 'vue-router';
import { beforeEachGuard } from './middlewares';

const routes = [
  { path: '/', component: LoginPage, name: 'login' },
  { path: '/home', component: HomePage, name: 'home' },
  { path: '/profile', component: ProfilePage, name: 'profile' },
  { path: '/:pathMatch(.*)*', component: NotFoundPage, name: 'notFound' },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(beforeEachGuard);
