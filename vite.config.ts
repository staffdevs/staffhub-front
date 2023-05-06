import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    test: {
      globals: true,
      environment: 'jsdom',
      reporters: 'verbose',
      setupFiles: './tests/setup.ts',
      clearMocks: true,
    },
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    plugins: [vue()],
  };
});
