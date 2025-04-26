<template>
  <div class="movie-item">
    <img class="poster" :src="getPosterUrl(movie.poster_path)" :alt="movie.title" />

    <div class="movie-info">
      <div class="movie-title">
        <h2 class="title">
          {{ movie.title }} ({{ movie.release_date.slice(0, 4) }})
        </h2>
        <p class="vote-average">★ {{ movie.vote_average.toFixed(1) }}</p>
      </div>

      <RouterLink :to="{ name: 'MovieDetails', params: { id: movie.id } }">
        More Details
      </RouterLink>

      <button class="favorite-button" @click="handleToggleFavorite">
        {{ isFavorite ? "★ Remove Favorite" : "☆ Add Favorite" }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { RouterLink } from 'vue-router';
  import { getPosterUrl } from '@/helpers/imageHelpers';
  import type { Movie } from '@/types/movie';

  const { movie, isFavorite, onToggleFavorite } = defineProps<{
    movie: Movie;
    isFavorite: boolean;
    onToggleFavorite: (movieId: number) => void;
  }>();

  const handleToggleFavorite = () => {
    onToggleFavorite(movie.id);
  };
</script>

<style scoped>
  .movie-item {
    position: relative;
    width: 300px;
    text-align: left;
  }

  .poster {
    width: 100%;
    min-height: 430px;
  }

  .movie-info {
    display: flex;
    flex-direction: column;
    width: 100%;
    color: #000;
  }

  .movie-title {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    margin: 10px 0;
  }

  .title {
    font-size: 20px;
    width: 80%;
    overflow: hidden;
    text-decoration: none;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .vote-average {
    min-width: 65px;
    margin-left: 10px;
    color: #f0de24;
  }

  .favorite-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: rgba(255, 255, 255, 0.1);
    color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 5px 10px;
    cursor: pointer;

    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }
</style>
