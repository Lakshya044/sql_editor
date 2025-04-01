
import React from "react";
import { FaCloud, FaRedo } from "react-icons/fa"; 
import useQueryStore from "@/app/store";
import "@/styles/Sidebar.css"; 

const Sidebar = () => {
  const { searchQueries, queryHistory, setQuery } = useQueryStore();

  return (
    <div className="sidebar">
      {/* Queries Available */}
      <div className="section">
        <h2><FaCloud className="icon" /> Queries Available</h2>
        <input type="text" placeholder="Search..." className="search-bar" />
        <ul>
          {searchQueries.map((query, index) => (
            <li key={index} onClick={() => setQuery(query)} className="query-item">
              {query}
            </li>
          ))}
        </ul>
      </div>

    
      <div className="section">
        <h2><FaRedo className="icon" /> Query History</h2>
        <input type="text" placeholder="Search..." className="search-bar" />
        <ul>
          {queryHistory.map((query, index) => (
            <li key={index} onClick={() => setQuery(query)} className="query-item">
              {query}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
