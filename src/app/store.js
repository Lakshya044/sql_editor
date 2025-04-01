import { create } from "zustand";
import { Data1, Data2 , Data3,Data4 ,Data5} from "../../public/data/data"; 

const useQueryStore = create((set) => ({
  searchQueries: [
    "SELECT * FROM internetData;",
    "SELECT id, first_name, last_name FROM internetData;",
    "SELECT * FROM personalDatabase;",
    "SELECT * FROM accountDatabase;",
    "SELECT account_id, username, password,phone_number FROM accountDatabase;",
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
      newHistory = [...newHistory, state.currentQuery]; 
    } else if (state.currentQuery.trim() === "SELECT id, first_name, last_name FROM internetData;") {
      mockResults = Data2;
      newHistory = [...newHistory, state.currentQuery]; 
    } 
    else if (state.currentQuery.trim() === "SELECT * FROM personalDatabase;") {
      mockResults = Data3;
      
      newHistory = [...newHistory, state.currentQuery]; 
    }else if (state.currentQuery.trim() === "SELECT * FROM accountDatabase;") {
      mockResults = Data4;
      
      newHistory = [...newHistory, state.currentQuery]; 
    }
    else if (state.currentQuery.trim() ===  "SELECT account_id, username, password,phone_number FROM accountDatabase;") {
      mockResults = Data5;
      
      newHistory = [...newHistory, state.currentQuery]; 
    }
    else if (state.currentQuery.trim() === "") {
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
