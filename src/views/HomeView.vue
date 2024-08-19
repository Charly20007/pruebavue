<script setup lang="ts">
  import { onMounted } from 'vue';
  import { useFetchCharacters } from '@/composables/useFetchCharacters';
  import CharacterCard from '@/components/CharacterCard.vue';

  const { characters, loading, error, fetchCharacters } = useFetchCharacters();

  onMounted(() => {
    fetchCharacters();
  });
</script>

<template>
  <div class="home-view">
    <h1>Rick and Morty Characters</h1>
    <div v-if="loading" class="loading">Loading...</div>
    <div v-if="error" class="error">{{ error }}</div>
    <div v-else class="character-list">
      <CharacterCard
        v-for="character in characters"
        :key="character.id"
        :character="character"
      />
    </div>
  </div>
</template>

<style scoped>
.home-view {
  padding: 16px;
}

h1 {
  text-align: center;
  color: #333;
}

.loading {
  text-align: center;
  font-size: 1.5rem;
  color: #666;
}

.character-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 16px;
  justify-content: center;
}

.error {
  color: red;
  text-align: center;
}

@media (min-width: 768px) {
  .character-list {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
}
</style>

