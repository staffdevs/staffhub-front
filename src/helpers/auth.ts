import { createAuth0 } from '@auth0/auth0-vue';
import { computed } from 'vue';
import { AuthNamespace } from '@/constants';
import { UserRole } from '@/types';

export const auth = createAuth0({
  domain: 'staffhub.us.auth0.com',
  clientId: 'TvXZneI5qt4aeT9inrytbudJ6JZFcuYz',
  authorizationParams: {
    redirect_uri: window.location.origin,
    audience: 'https://staffhub.us.auth0.com/api/v2/',
  },
});

export function useUser() {
  const user = computed(() => ({
    id: auth.user.value.sub,
    name: auth.user.value.name,
    nickname: auth.user.value.nickname,
    email: auth.user.value.email,
    email_verified: auth.user.value.email_verified,
    updated_at: auth.user.value.updated_at,
    picture: auth.user.value.picture,
    roles: auth.user.value[`${AuthNamespace}/roles`] as UserRole[],
  }));

  return { user };
}
