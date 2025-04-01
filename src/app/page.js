'use client';
import React from "react";
import Sidebar from "@/components/Sidebar";
import MonacoEditor from "@/components/MonacoEditor";
import EditorPanel from "@/components/EditorPanel";
import QueryOutput from "@/components/QueryOutput";
import useQueryStore from "@/app/store";
import "@/styles/EditorPage.css";

const EditorPage = () => {
  const { currentQuery, queryHistory, queryResult, setQuery, executeQuery, saveQuery, clearQuery } = useQueryStore();

  const predefinedQueries = [
    "SELECT * FROM internetData;",
    "SELECT id, first_name, last_name FROM internetData;",
  ];

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
