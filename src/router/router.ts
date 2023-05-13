import {
  LoginPage,
  ProfilePage,
  NotFoundPage,
  InfoPage,
  RequestPage,
  RequestStatusPage,
  ComingSoonPage,
} from '@/components/pages';
import { MainTemplate } from '@/components/templates';
import { createRouter, createWebHistory } from 'vue-router';
import { guestGuard, authGuard, removeQueryParams } from './middlewares';

const routes = [
  { path: '/login', component: LoginPage, name: 'login', beforeEnter: [guestGuard] },
  {
    path: '/',
    name: 'home',
    component: MainTemplate,
    beforeEnter: [authGuard, removeQueryParams],
    children: [
      { path: '/info', component: InfoPage, name: 'info' },
      { path: '/request', component: RequestPage, name: 'request' },
      { path: '/request-status', component: RequestStatusPage, name: 'requestStatus' },
      { path: '/users', component: ComingSoonPage, name: 'users' },
      { path: '/roles', component: ComingSoonPage, name: 'roles' },
      { path: '/permissions', component: ComingSoonPage, name: 'permissions' },
      { path: '/holydays', component: ComingSoonPage, name: 'holydays' },
      { path: '/certificates', component: ComingSoonPage, name: 'certificates' },
      { path: '/user-tracing', component: ComingSoonPage, name: 'userTracing' },
      { path: '/metrics', component: ComingSoonPage, name: 'metrics' },
    ],
  },
  { path: '/profile', component: ProfilePage, name: 'profile', beforeEnter: [authGuard] },
  { path: '/:pathMatch(.*)*', component: NotFoundPage, name: 'notFound' },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
