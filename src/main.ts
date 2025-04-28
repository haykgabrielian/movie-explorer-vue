import { createApp } from 'vue';
import { VueQueryPlugin } from '@tanstack/vue-query';
import router from './router';

import App from './App.vue';
import { themeState, toggleTheme } from '@/composables/useTheme';

import './style.css';

const app = createApp(App);

app.provide('theme', themeState);
app.provide('toggleTheme', toggleTheme);

app.use(router);
app.use(VueQueryPlugin);

app.mount('#app');
