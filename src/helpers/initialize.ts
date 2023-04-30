import { useAuth0 } from '@auth0/auth0-vue';

export const initialize = () => {
  const { isLoading } = useAuth0();

  console.log('starting...');

  return { loading: isLoading };
};
