import { create } from "zustand";
import { gameQueryStore } from "../entities/gameQueryStore";

const useGameStore = create<gameQueryStore>((set) => ({
  gameQuery: {},
  setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
  setGenreId: (genre) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genre } })),
  setPlatformId: (platform) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platform } })),
  setSortOrder: (sortOrder) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
}));

export default useGameStore;
