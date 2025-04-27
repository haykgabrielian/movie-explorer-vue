<template>
  <div class="container">
    <Header
        :query="query"
        :onClear="handleSearchClear"
        :onSearch="handleSearchChange"
        :isSidebarOpen="isSidebarOpen"
        :onSidebarToggle="handleSidebarToggle"
    />
    <Sidebar
        :isSidebarOpen="isSidebarOpen"
        :selectedGenres="selectedGenres"
        :onGenreClear="handleGenreClear"
        :onToggleGenre="handleGenreToggle"
    />
    <div v-if="isLoading">Loading movies...</div>
    <div v-else-if="isError">Error loading movies</div>
    <div class="movies" v-else>
      <MovieCard
          v-for="movie in movies?.results"
          :key="movie.id"
          :movie="movie"
          :isFavorite="favoriteIds.includes(movie.id)"
          @toggle-favorite="handleToggleFavorite"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref, watch } from 'vue';
  import { useMovies } from '@/composables/useMovies';
  import Header from '@/components/Header.vue';
  import MovieCard from '@/components/MovieCard.vue';
  import Sidebar from '@/components/Sidebar.vue';

  const query = ref<string>('');
  const debouncedQuery = ref<string>('');
  const favoriteIds = ref<number[]>([]);
  const isSidebarOpen = ref<boolean>(false);
  const selectedGenres = ref<number[]>([]);

  const { data: movies, isLoading, isError } = useMovies(debouncedQuery, 1, selectedGenres);

  onMounted(() => {
    const storedIds = localStorage.getItem('favoriteMovies');
    if (storedIds) {
      favoriteIds.value = JSON.parse(storedIds);
    }
  });

  watch(query, (newQuery, _oldQuery, onInvalidate) => {
    const handler = setTimeout(() => {
      debouncedQuery.value = newQuery;
    }, 800);

    onInvalidate(() => {
      clearTimeout(handler);
    });
  });

  watch(favoriteIds, (newFavorites) => {
    localStorage.setItem('favoriteMovies', JSON.stringify(newFavorites));
  });

  const handleSidebarToggle = () => {
    isSidebarOpen.value = !isSidebarOpen.value;
  };

  const handleGenreClear = () => {
    selectedGenres.value = [];
  };

  const handleGenreToggle = (genreId: number) => {
    if (selectedGenres.value.includes(genreId)) {
      selectedGenres.value = selectedGenres.value.filter(id => id !== genreId);
    } else {
      selectedGenres.value = [...selectedGenres.value, genreId];
    }
  };

  const handleToggleFavorite = (movieId: number) => {
    favoriteIds.value = favoriteIds.value.includes(movieId)
        ? favoriteIds.value.filter(id => id !== movieId)
        : [...favoriteIds.value, movieId];
  };

  const handleSearchChange = (newQuery: string) => {
    query.value = newQuery;
  };

  const handleSearchClear = () => {
    query.value = '';
  };
</script>

<style scoped>
  .container {
    padding: 70px 0;
  }

  .movies {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 50px;
  }
</style>
