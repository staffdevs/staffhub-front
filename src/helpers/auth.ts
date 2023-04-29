import { createAuth0 } from '@auth0/auth0-vue';

export const auth = createAuth0({
  domain: 'staffhub.us.auth0.com',
  clientId: 'TvXZneI5qt4aeT9inrytbudJ6JZFcuYz',
  authorizationParams: {
    redirect_uri: window.location.origin,
  },
});
