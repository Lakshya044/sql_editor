// components/Sidebar.js
import React from "react";
import useQueryStore from "@/app/store";
import "@/styles/Sidebar.css"; 

const Sidebar = () => {
  const { searchQueries, queryHistory, setQuery } = useQueryStore();

  return (
    <div className="sidebar">
      <h2>Search Queries</h2>
      <ul>
        {searchQueries.map((query, index) => (
          <li key={index} onClick={() => setQuery(query)}>
            {query}
          </li>
        ))}
      </ul>

      <h2>Query History</h2>
      <ul>
        {queryHistory.map((query, index) => (
          <li key={index} onClick={() => setQuery(query)}>
            {query}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
