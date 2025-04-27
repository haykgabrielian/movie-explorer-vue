<template>
  <div
      class="sidebar-container"
      :class="{ 'sidebar-open': isSidebarOpen }"
  >
    <h2>Filter By</h2>
    <div v-if="isLoading" class="loading">Loading genres...</div>
    <div v-else class="section">
      <div v-if="error" class="error">Error loading genres</div>
      <div v-else>
        <div class="title">Genres</div>
        <div class="content">
          <div
              v-for="genre in data?.genres"
              :key="genre.id"
              class="genre-item"
              :class="{ 'selected': selectedGenres.includes(genre.id) }"
              @click="onToggleGenre(genre.id)"
          >
            {{ genre.name }}
          </div>
        </div>
      </div>
    </div>
    <div
        v-if="selectedGenres.length > 0"
        class="clear-button"
        @click="onGenreClear"
    >
      Clear Filters
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useGenres } from '@/composables/useGanres';

  const { isSidebarOpen, selectedGenres, onToggleGenre, onGenreClear } = defineProps<{
    isSidebarOpen: boolean;
    selectedGenres: number[];
    onToggleGenre: (genreId: number) => void;
    onGenreClear: () => void;
  }>();

  const { data, isLoading, error } = useGenres();
</script>

<style scoped>
  .sidebar-container {
    position: fixed;
    top: 70px;
    left: 0;
    height: 100%;
    width: 400px;
    padding: 20px;
    background-color: #333;
    color: #fff;
    z-index: 1000;
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
  }

  .sidebar-open {
    transform: translateX(0);
  }

  .section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 40px;
  }

  .title {
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: bold;
  }

  .content {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 10px;
  }

  .genre-item {
    padding: 10px;
    background: #444;
    color: #fff;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }

  .genre-item.selected {
    background: #777;
  }

  .genre-item:hover {
    background-color: #555;
  }

  .clear-button {
    width: 120px;
    margin-top: 20px;
    padding: 10px;
    color: #fff;
    background: #444;
    text-align: center;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }

  .clear-button:hover {
    background-color: #555;
  }

  .loading, .error {
    margin-top: 20px;
  }
</style>