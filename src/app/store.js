import { create } from "zustand";
import { Data1,Data2 } from "../../public/data/data"; 

const useQueryStore = create((set) => ({
  searchQueries: [
    "SELECT * FROM internetData;",
    "SELECT id, first_name, last_name FROM internetData;",
  ], 

  queryHistory: [], 
  currentQuery: "", 
  queryResult: [], 

  setQuery: (query) => set({ currentQuery: query }),

  executeQuery: () => set((state) => {
    const newHistory = [...state.queryHistory, state.currentQuery];

    let mockResults = [];

    // Query matching logic
    if (state.currentQuery.trim() === "SELECT * FROM internetData;") {
      mockResults = Data1;
    } else if (state.currentQuery.trim() === "SELECT id, first_name, last_name FROM internetData;") {
      mockResults = Data2;
    }

    return {
      queryHistory: newHistory,
      queryResult: mockResults,
    };
  }),

  saveQuery: () => set((state) => ({
    queryHistory: state.queryHistory.includes(state.currentQuery)
      ? state.queryHistory
      : [...state.queryHistory, state.currentQuery],
  })),

  clearQuery: () => set({ currentQuery: "" }),
}));

export default useQueryStore;
