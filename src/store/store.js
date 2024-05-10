import create from "zustand";

//const baseUrl = "https://rickandmortyapi.com/api/";

export const useCharacterStore = create((set) => ({
  characters: [],
  fetchCharacters: async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      set({ characters: data.results });
    } catch (error) {
      console.error("Hata:", error);
    }
  },
  fetchCharacterById: async (id) => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      const character = await response.json();
      set({ characters: [character] });
    } catch (error) {
      console.error("Hata:", error);
    }
  },
}));

export const useLocationStore = create((set) => ({
  locations: [],
  fetchLocations: async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/location");
      const data = await response.json();
      set({ locations: data.results });
    } catch (error) {
      console.error("Hata:", error);
    }
  },
}));

export const useEpisodeStore = create((set) => ({
  episodes: [],
  fetchEpisodes: async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/episode");
      const data = await response.json();
      set({ episodes: data.results });
    } catch (error) {
      console.error("Hata:", error);
    }
  },
}));
