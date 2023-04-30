import { auth } from '@/helpers';
import { watch } from 'vue';
import { router } from './router';
import { RouteLocation } from 'vue-router';

const authGuard = (to: string, isAuth: boolean, next: () => void) => {
  const { push } = router;

  const goToNotFound = to === 'notFound';
  const goToLogin = to === 'login';

  //   if (x || (!x && y !== z)) next();
  //   if (!x && !y && !z) push({ name: 'login' });
  //   if (!x && y && z) push({ name: 'home' });

  if (goToNotFound || isAuth !== (to === 'login')) next();
  else if (!isAuth && !(to === 'login')) push({ name: 'login' });
  if (isAuth && to === 'login') push({ name: 'home' });
};

export const beforeEachGuard = (to: RouteLocation, from: RouteLocation, next: () => void) => {
  console.log('beforeEachGuard');
  const { isAuthenticated, isLoading } = auth;
  const validation = () => authGuard(String(to.name), isAuthenticated.value, next);

  if (!isLoading.value) validation();

  watch(isLoading, (value) => {
    if (!value) validation();
  });
};
