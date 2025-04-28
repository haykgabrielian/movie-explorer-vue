<template>
  <button @click="toggleTheme" class="toggle-button">
    {{ theme.theme === 'dark' ? '🌞︎︎' : '🌙' }}
  </button>
</template>

<script setup lang="ts">
  import { useInjectTheme } from '@/composables/useTheme';

  const { theme, toggleTheme } = useInjectTheme();
</script>

<style scoped>
  .toggle-button {
    margin-left: 20px;
    margin-right: auto;
    font-size: 24px;
    background: none;
    border: none;
    cursor: pointer;
  }
</style>
