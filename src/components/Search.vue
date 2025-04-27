<template>
  <div class="input-container">
    <input
        class="search-input"
        :value="query"
        @input="onSearch"
        type="text"
        placeholder="Search movies..."
    />
    <div v-if="query" class="clear" @click="onClear" />
  </div>
</template>

<script setup lang="ts">
  const emit = defineEmits<{
    (event: 'search', query: string): void;
    (event: 'clear'): void;
  }>();

  const { query } = defineProps<{
    query: string;
  }>();

  const onSearch = (event: Event) => {
    const inputElement = event.target as HTMLInputElement;
    emit('search', inputElement.value);
  };

  const onClear = () => {
    emit('clear');
  };
</script>

<style scoped>
  .input-container {
    position: relative;
    display: flex;
    flex-direction: row;
    margin-right: 20px;
  }

  .search-input {
    padding: 10px 45px 10px 15px;
    width: 400px;
    font-size: 16px;
    border-radius: 4px;
    border: none;
  }

  .search-input::placeholder {
    color: #aaa;
  }

  .clear {
    position: absolute;
    right: 15px;
    top: 10px;
    width: 20px;
    height: 20px;
    cursor: pointer;

    &::before,
    &::after {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      width: 2px;
      height: 30px;
      background-color: #000000;
      transform-origin: center;
    }

    &::before {
      transform: translate(-50%, -50%) rotate(45deg);
    }

    &::after {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }
</style>
