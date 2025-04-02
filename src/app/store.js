import { create } from "zustand";
import { Data1, Data2, Data3, Data4, Data5 } from "@/data/data";


const mockDataMap = Object.freeze({
  "SELECT * FROM internetData;": Data1,
  "SELECT id, first_name, last_name FROM internetData;": Data2,
  "SELECT * FROM personalDatabase;": Data3,
  "SELECT * FROM accountDatabase;": Data4,
  "SELECT account_id, username, password, phone_number FROM accountDatabase;": Data5,
});

const useQueryStore = create((set) => ({
  searchQueries: Object.keys(mockDataMap), 
  queryHistory: [], 
  currentQuery: "", 
  queryResult: [], 
  message: "",

  setQuery: (query) => set({ currentQuery: query.trim() }),

  executeQuery: () => set((state) => {
    const trimmedQuery = state.currentQuery.trim();

    if (!trimmedQuery) {
      return { message: "Please select predefined test queries." };
    }

    if (!(trimmedQuery in mockDataMap)) {
      return { message: "Please use only the predefined test queries." };
    }

    
    const newHistory = [trimmedQuery, ...state.queryHistory.filter((q) => q !== trimmedQuery)].slice(0, 10);

    return {
      queryHistory: newHistory,
      queryResult: mockDataMap[trimmedQuery],
      message: "",
    };
  }),

  saveQuery: () => set((state) => {
    const trimmedQuery = state.currentQuery.trim();
    if (!trimmedQuery || state.searchQueries.includes(trimmedQuery)) return {};

    return { searchQueries: [...state.searchQueries, trimmedQuery] };
  }),

  clearQuery: () => set({ currentQuery: "" }),
}));

export default useQueryStore;
