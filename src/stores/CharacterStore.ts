import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Character } from '@/models/Character';

export const useCharacterStore = defineStore('character', () => {
  const characters = ref<Character[]>([]);

  const setCharacters = (newCharacters: Character[]) => {
    characters.value = newCharacters;
  };

  return {
    characters,
    setCharacters,
  };
});
