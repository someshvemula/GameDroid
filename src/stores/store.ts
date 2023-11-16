import { create } from "zustand";

export interface GameQuery {
  genre?: number | null;
  platform?: number | null;
  sortOrder?: string;
  searchText?: string;
}

interface gameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
}

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
