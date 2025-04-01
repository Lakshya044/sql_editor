import { create } from "zustand";
import { Data1, Data2 } from "../../public/data/data"; 

const useQueryStore = create((set) => ({
  searchQueries: [
    "SELECT * FROM internetData;",
    "SELECT id, first_name, last_name FROM internetData;",
  ], 

  queryHistory: [], 
  currentQuery: "", 
  queryResult: [], 
  message: "",

  setQuery: (query) => set({ currentQuery: query }),

  executeQuery: () => set((state) => {
    let mockResults = [];
    let message = "";
    let newHistory = state.queryHistory;

    if (state.currentQuery.trim() === "SELECT * FROM internetData;") {
      mockResults = Data1;
      newHistory = [...newHistory, state.currentQuery]; // Save query to history
    } else if (state.currentQuery.trim() === "SELECT id, first_name, last_name FROM internetData;") {
      mockResults = Data2;
      newHistory = [...newHistory, state.currentQuery]; // Save query to history
    } else if (state.currentQuery.trim() === "") {
      message = "Please select predefined test queries.";
    } else {
      message = "Please use only the predefined test queries.";
    }

    return {
      queryHistory: newHistory,
      queryResult: mockResults,
      message,
    };
  }),

  saveQuery: () => set((state) => ({
    searchQueries: state.searchQueries.includes(state.currentQuery)
      ? state.searchQueries
      : [...state.searchQueries, state.currentQuery],
  })),

  clearQuery: () => set({ currentQuery: "" }),
}));

export default useQueryStore;
