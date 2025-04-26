import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '@/pages/HomePage.vue';
import MovieDetailsPage from '@/pages/MovieDetailsPage.vue';
import AboutPage from '@/pages/AboutPage.vue';
import NotFoundPage from '@/pages/NotFoundPage.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
    },
    {
        path: '/:id(\\d+)',
        name: 'MovieDetails',
        component: MovieDetailsPage,
    },
    {
        path: '/about',
        name: 'About',
        component: AboutPage,
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFoundPage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;