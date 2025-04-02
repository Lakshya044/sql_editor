
'use client';
import React, { useState, useEffect } from "react";
import { FaCloud, FaRedo } from "react-icons/fa";
import useQueryStore from "@/app/store";
import "@/styles/Sidebar.css";

const Sidebar = () => {
  const { searchQueries, queryHistory, setQuery } = useQueryStore();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchHistory, setSearchHistory] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };
    
    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredQueries = searchQueries.filter(query =>
    query.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredHistory = queryHistory.filter(query =>
    query.toLowerCase().includes(searchHistory.toLowerCase())
  );

  return (
    <div className={`sidebar ${isMobile ? "sidebar-mobile" : "sidebar-desktop"}`}>
      <div className="sections-wrapper">
        <div className="section">
          <h2><FaCloud className="icon" /> Queries Available</h2>
          <input 
            type="text" 
            placeholder="Search queries..." 
            className="search-bar"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <ul>
            {filteredQueries.map((query, index) => (
              <li key={index} onClick={() => setQuery(query)} className="query-item">
                {query}
              </li>
            ))}
          </ul>
        </div>

        <div className="section">
          <h2><FaRedo className="icon" /> Query History</h2>
          <input 
            type="text" 
            placeholder="Search history..." 
            className="search-bar"
            value={searchHistory}
            onChange={(e) => setSearchHistory(e.target.value)}
          />
          <ul>
            {filteredHistory.map((query, index) => (
              <li key={index} onClick={() => setQuery(query)} className="query-item">
                {query}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
