import { LoginPage, ProfilePage, NotFoundPage, InfoPage, RequestPage, RequestStatusPage } from '@/components/pages';
import { MainTemplate } from '@/components/templates';
import { createRouter, createWebHistory } from 'vue-router';
import { guestGuard, authGuard } from './middlewares';

const routes = [
  { path: '/login', component: LoginPage, name: 'login', beforeEnter: [guestGuard] },
  {
    path: '/',
    name: 'home',
    component: MainTemplate,
    beforeEnter: [authGuard],
    redirect: { name: 'info' },
    children: [
      { path: '/info', component: InfoPage, name: 'info' },
      { path: '/request', component: RequestPage, name: 'request' },
      { path: '/request-status', component: RequestStatusPage, name: 'requestStatus' },
    ],
  },
  { path: '/profile', component: ProfilePage, name: 'profile', beforeEnter: [authGuard] },
  { path: '/:pathMatch(.*)*', component: NotFoundPage, name: 'notFound' },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
