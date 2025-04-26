<template>
  <div class="not-found">
    <h1>Not Found</h1>
    <p>Sorry, the page you are looking for does not exist.</p>
  </div>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue';

  onMounted(() => {
    console.log('NotFoundPage mounted');
  });
</script>

<style scoped>
  .not-found {
    text-align: center;
    padding: 50px;
    font-size: 24px;
  }
</style>