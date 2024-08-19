<script setup lang="ts">
import type { Character } from '@/models/Character';

const props = defineProps<{
    character: Character
}>()

const { character } = props

</script>

<template>
    <div class="character-card">
      <img :src="character.image" :alt="character.name" />
      <h2>{{ character.name }}</h2>
      <p>Estado: {{ character.status }}</p>
      <p>Especie: {{ character.species }}</p>
      <p>Género: {{ character.gender }}</p>
    </div>
</template>
  

<style scoped>
.character-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
  padding: 16px;
  max-width: 100%;
  box-sizing: border-box;
}

.character-card img {
  border-radius: 50%;
  width: 80px;
  height: 80px;
}

.character-card h2 {
  margin: 12px 0 8px;
  font-size: 1rem;
  color: #333;
}

.character-card p {
  margin: 4px 0;
  font-size: 0.875rem;
  color: #666;
}

@media (min-width: 768px) {
  .character-card {
    max-width: 200px;
  }

  .character-card img {
    width: 100px;
    height: 100px;
  }

  .character-card h2 {
    font-size: 1.25rem;
  }
}
</style>
  