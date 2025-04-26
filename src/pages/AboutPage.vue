<template>
  <h1>Movie Explorer 🎬</h1>
  <p>
    A movie discovery app built with <strong>Vue + TypeScript + Vite</strong>, powered
    by the TMDb API (https://www.themoviedb.org/). Browse popular films,
    search by title, filter by genre, and save favorites.
  </p>
</template>

<script setup lang="ts">
  import {onMounted} from "vue";

  onMounted(() => {
    console.log("AboutPage mounted");
  });
</script>

<style scoped>
  h1 {
    margin-bottom: 1rem;
  }
</style>