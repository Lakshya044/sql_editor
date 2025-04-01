'use client';
import React, { useEffect } from "react";
import MonacoEditor from "@/components/MonacoEditor";
import EditorPanel from "@/components/EditorPanel";
import QueryOutput from "@/components/QueryOutput";
import useQueryStore from "@/app/store";
import "@/styles/EditorPage.css";
import Sidebar from "@/components/Sidebar";

const EditorPage = () => {
  const { currentQuery, queryHistory, queryResult, setQuery, executeQuery, saveQuery, clearQuery } = useQueryStore();

  const predefinedQueries = [
    "SELECT * FROM internetData;",
    "SELECT id, first_name, last_name FROM internetData;",
    "SELECT * FROM personalDatabase;",
    "SELECT * FROM accountDatabase;",
    "SELECT account_id, username, password,phone_number FROM accountDatabase;",
  ];
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey) {
        switch (event.key.toLowerCase()) {
          case "r": // Ctrl + R → Run query
            event.preventDefault();
            executeQuery();
            break;
          case "s": // Ctrl + S → Save query
            event.preventDefault();
            saveQuery();
            break;
          case "l": // Ctrl + L → Clear query
            event.preventDefault();
            clearQuery();
            break;
          default:
            break;
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [executeQuery, saveQuery, clearQuery]);
  return (
    <div className="editor-page">
     
      <Sidebar queries={predefinedQueries} history={queryHistory} onSelectQuery={setQuery} />

      
      <div className="editor-container">
        <div className="editor-output-wrapper">
        
          <div className="editor-section">
            <MonacoEditor query={currentQuery} setQuery={setQuery} />
            <div className="editor-panel-wrapper">
              <EditorPanel executeQuery={executeQuery} saveQuery={saveQuery} clearQuery={clearQuery} />
            </div>
          </div>

         
          <div className="query-output-section">
            <QueryOutput queryResult={queryResult} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorPage;
