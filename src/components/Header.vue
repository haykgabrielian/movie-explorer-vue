<template>
  <header class="header-wrapper" :class="theme.theme">
    <Menu :open="isSidebarOpen" :onSidebarToggle="onSidebarToggle" />
    <ThemeSwitch />
    <Search :query="query" @search="onSearch" @clear="onClear" />
  </header>
</template>

<script setup lang="ts">
  import Search from '@/components/Search.vue';
  import Menu from '@/components/Menu.vue';
  import ThemeSwitch from '@/components/ThemeSwitch.vue';
  import { useInjectTheme } from '@/composables/useTheme';

  const { isSidebarOpen, query, onSearch, onClear, onSidebarToggle } = defineProps<{
    isSidebarOpen: boolean;
    query: string;
    onSearch: (query: string) => void;
    onClear: () => void;
    onSidebarToggle: () => void;
  }>();

  const { theme } = useInjectTheme();
</script>

<style scoped>
  .header-wrapper {
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    width: 100%;
    padding: 0 15px;
    color: white;
    text-align: center;
    z-index: 1;
  }

  .header-wrapper.light {
    background-color: #afafaf;
  }
  .header-wrapper.dark {
    background-color: #333;
  }
</style>
