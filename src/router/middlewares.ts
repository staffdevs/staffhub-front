import { auth } from '@/helpers';
import { watch } from 'vue';
import { router } from './router';
import { RouteLocation } from 'vue-router';

const authGuard = (to: string, isAuth: boolean, next: () => void) => {
  const { push } = router;

  const goToNotFound = to === 'notFound';
  const goToLogin = to === 'login';

  if (!isAuth && !goToLogin && !goToNotFound) push({ name: 'login' });
  else if (isAuth && goToLogin) push({ name: 'home' });
  else next();
};

export const beforeEachGuard = (to: RouteLocation, from: RouteLocation, next: () => void) => {
  const { isAuthenticated, isLoading } = auth;
  const validation = () => authGuard(String(to.name), isAuthenticated.value, next);

  if (!isLoading.value) validation();

  watch(isLoading, (value) => {
    if (!value) validation();
  });
};
