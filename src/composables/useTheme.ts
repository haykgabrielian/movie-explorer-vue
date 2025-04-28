import { reactive, watch, inject } from 'vue';

export interface ThemeState {
    theme: 'light' | 'dark';
}

const savedTheme = localStorage.getItem('theme');
export const themeState = reactive<ThemeState>({
    theme: savedTheme === 'dark' ? 'dark' : 'light',
});

watch(() => themeState.theme, (newTheme) => {
    localStorage.setItem('theme', newTheme);
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(newTheme);
});

export const toggleTheme = () => {
    themeState.theme = themeState.theme === 'light' ? 'dark' : 'light';
};

export const useInjectTheme = () => {
    const theme = inject<ThemeState>('theme');
    const toggleTheme = inject<() => void>('toggleTheme');

    if (!theme || !toggleTheme) {
        throw new Error('Theme context is not provided');
    }

    return { theme, toggleTheme };
};
