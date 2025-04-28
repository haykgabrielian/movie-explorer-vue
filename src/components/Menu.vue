<template>
  <div
      class="container"
      :class="{ 'open': open }"
      @click="onSidebarToggle"
  >
    <div class="menu-item" :class="theme.theme"></div>
    <div class="menu-item" :class="theme.theme"></div>
    <div class="menu-item" :class="theme.theme"></div>
  </div>
</template>

<script setup lang="ts">
  import { useInjectTheme } from '@/composables/useTheme';
  const { open, onSidebarToggle } = defineProps<{
    open: boolean;
    onSidebarToggle: () => void
  }>();

  const { theme } = useInjectTheme();
</script>

<style scoped>
  .container {
    position: relative;
    width: 40px;
    height: 23px;
    cursor: pointer;
    overflow: hidden;
    z-index: 9999;
  }

  .menu-item {
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    transition-duration: 0.3s, 0.3s;
  }

  .menu-item.light {
    background-color: #424242;
  }
  .menu-item.dark {
    background-color: #cccccc;
  }

  .menu-item:nth-child(1) {
    top: 0;
    transition-property: top, transform;
    transition-delay: 0.3s, 0s;
  }

  .menu-item:nth-child(2) {
    top: 10px;
    transition-property: transform;
    transition-delay: 0s;
  }

  .menu-item:nth-child(3) {
    bottom: 0;
    transition-property: bottom, transform;
    transition-delay: 0.3s, 0s;
  }

  .container.open .menu-item:nth-child(1) {
    top: 10px;
    transform: rotate(45deg);
    transition-delay: 0s, 0.3s;
  }

  .container.open .menu-item:nth-child(2) {
    transform: translateX(-100px);
    transition-delay: 0.3s;
  }

  .container.open .menu-item:nth-child(3) {
    bottom: 10px;
    transform: rotate(-45deg);
    transition-delay: 0s, 0.3s;
  }
</style>
