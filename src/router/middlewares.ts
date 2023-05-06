import { auth } from '@/helpers';
import { watch } from 'vue';
import { RouteLocation } from 'vue-router';

export const removeQueryParams = (to: RouteLocation) => {
  if (Object.keys(to.query).length) return { path: to.path, query: {}, hash: to.hash };
};

export const authGuard = () => {
  const { isAuthenticated, isLoading } = auth;

  const validation = () => (isAuthenticated.value ? true : { name: 'login' });

  return new Promise<
    | boolean
    | {
        name: string;
      }
  >((resolve) => {
    if (!isLoading.value) resolve(validation());

    watch(isLoading, (value) => {
      if (!value) resolve(validation());
    });
  });
};

export const guestGuard = () => {
  const { isAuthenticated, isLoading } = auth;

  const validation = () => (!isAuthenticated.value ? true : { name: 'home' });

  return new Promise<
    | boolean
    | {
        name: string;
      }
  >((resolve) => {
    if (!isLoading.value) resolve(validation());

    watch(isLoading, (value) => {
      if (!value) resolve(validation());
    });
  });
};
