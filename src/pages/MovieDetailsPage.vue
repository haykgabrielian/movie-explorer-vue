<template>
  <div class="container">
    <button @click="goBack" class="back-link">Back</button>

    <div v-if="isError">Error loading movie</div>
    <div v-else-if="isLoading">Loading movie details...</div>
    <div v-else>
      <div class="details">
        <div class="image-container">
          <img :src="getPosterUrl(movie.poster_path)" :alt="movie.title" />
        </div>

        <div class="details-container">
          <h1 class="movie-title">{{ movie.title }}</h1>

          <div class="section">
            <h3>Description:</h3>
            <p class="description">{{ movie.overview }}</p>
          </div>

          <div class="section">
            <h3>Genres:</h3>
            <div class="genres">
              <div v-for="genre in movie.genres" :key="genre.id" class="genre-item">
                {{ genre.name }}
              </div>
            </div>
          </div>

          <div class="section">
            <h3>Release Date:</h3>
            <p class="description">{{ movie.release_date }}</p>
          </div>

          <div class="section" v-if="credits?.cast?.length">
            <h3>Top Cast:</h3>
            <div class="cast-list">
              <div v-for="actor in credits.cast.slice(0, 10)" :key="actor.id" class="cast-card">
                <p class="actor-name">{{ actor.name }}</p>
                <p class="character-name">{{ actor.character }}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useRoute, useRouter } from 'vue-router';
  import { useMovieDetails } from '@/composables/useMovieDetails';
  import { getPosterUrl } from '@/helpers/imageHelpers';

  const route = useRoute();
  const movieId = Number(route.params.id);

  const router = useRouter();

  const { movie, credits, isLoading, isError } = useMovieDetails(movieId);

  const goBack = () => {
    router.push('/');
  };
</script>

<style scoped>
  .container {
    padding-top: 70px;
  }

  .details {
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }

  .image-container {
    display: flex;
    width: 300px;
    height: auto;
    margin-right: 60px;
  }

  .details-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 60%;
    max-width: 800px;
  }

  .movie-title {
    color: #fff;
  }

  .genres {
    display: flex;
    gap: 10px;
  }

  .genre-item {
    padding: 10px;
    background: #777;
    color: #ccc;
    border-radius: 5px;
  }

  .section {
    margin-top: 30px;
  }

  .description {
    color: #ccc;
  }

  h3 {
    margin-bottom: 7px;
    color: #fff;
  }

  .cast-list {
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
  }

  .cast-card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .actor-name {
    font-weight: bold;
    font-size: 14px;
    color: #ccc;
  }

  .character-name {
    margin-top: 5px;
    font-size: 14px;
    color: #9c9c9c;
  }

  .back-link {
    position: absolute;
    top: 20px;
    left: 20px;
    color: #ccc;
  }
</style>
