import { ref } from 'vue';
import type { Character } from '@/models/Character';

export function useFetchCharacters() {
  const characters = ref<Character[]>([]);
  const loading = ref<boolean>(true);
  const error = ref<string | null>(null);

  const fetchCharacters = async () => {
    try {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();
      characters.value = data.results;
    } catch (err) {
      error.value = 'No se pudieron obtener datos';
    } finally {
        loading.value = false;
    }
  };

  return {
    characters,
    loading,
    error,
    fetchCharacters,
  };
}
