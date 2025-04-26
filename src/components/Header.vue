<template>
  <header class="header-wrapper">
    <Menu :open="isSidebarOpen" :onSidebarToggle="onSidebarToggle" />
    <Search :query="query" :onSearch="onSearch" :onClear="onClear" />
  </header>
</template>

<script setup lang="ts">
  import Search from '@/components/Search.vue';
  import Menu from '@/components/Menu.vue';

  const { isSidebarOpen, query, onSearch, onClear, onSidebarToggle } = defineProps<{
    isSidebarOpen: boolean;
    query: string;
    onSearch: (query: string) => void;
    onClear: () => void;
    onSidebarToggle: () => void;
  }>();
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
    background-color: #333;
    color: white;
    text-align: center;
    z-index: 1;
  }
</style>
