<template>
  <div>
    <h1>Movie Details Page</h1>
    <p>Details for movie ID: {{ movieId }}</p>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
const movieId = route.params.id;
</script>

<style scoped>
  h1 {
    margin-bottom: 10px;
  }
</style>