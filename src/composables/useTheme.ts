import { reactive, provide, inject, watch } from 'vue';

interface ThemeState { theme: 'light' | 'dark' }

const savedTheme = localStorage.getItem('theme');
const themeState = reactive<ThemeState>({
    theme: savedTheme === 'dark' ? 'dark' : 'light',
});

watch(() => themeState.theme, (newTheme) => {
    localStorage.setItem('theme', newTheme);
});

export const useProvideTheme = () => {
    const toggleTheme = () => {
        themeState.theme = themeState.theme === 'light' ? 'dark' : 'light';
    };

    provide('theme', themeState);
    provide('toggleTheme', toggleTheme);
};

export const useInjectTheme = () => {
    const theme = inject('theme');
    const toggleTheme = inject('toggleTheme');

    if (!theme || !toggleTheme) {
        throw new Error('Theme context is not provided');
    }

    return { theme, toggleTheme };
};