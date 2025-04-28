<template>
  <div>
    <router-view />
  </div>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue';
  import { useInjectTheme } from './composables/useTheme';

  const { theme } = useInjectTheme();

  onMounted(() => {
    document.body.classList.add(theme.theme);
  });
</script>