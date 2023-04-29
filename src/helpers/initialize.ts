import { useAuth0 } from '@auth0/auth0-vue';
import { watch } from 'vue';
import { useRouter } from 'vue-router';

export const initialize = () => {
  const router = useRouter();
  const { isLoading, isAuthenticated } = useAuth0();

  console.log('starting...');

  watch(isLoading, (value) => {
    if (!value) {
      if (isAuthenticated.value) router.push({ name: 'home' });
      else router.push({ name: 'login' });
    }
  });

  return { loading: isLoading };
};
