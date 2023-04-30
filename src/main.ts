import './css/main.css';
import App from './App.vue';
import { createApp } from 'vue';
import { auth } from '@/helpers';
import { router } from './router/router';

const app = createApp(App);

app.use(auth);
app.use(router);
app.mount('#app');
