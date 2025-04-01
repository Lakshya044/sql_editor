'use client';
import React from "react";
import Sidebar from "@/components/sidebar";
import MonacoEditor from "@/components/Editor";
import EditorPanel from "@/components/EditorPanel";
import QueryOutput from "@/components/output";
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
      {/* Sidebar on the left */}
      <Sidebar queries={predefinedQueries} history={queryHistory} onSelectQuery={setQuery} />

      {/* Main content: Editor + Output */}
      <div className="editor-container">
        <div className="editor-output-wrapper">
          {/* Editor and Panel */}
          <div className="editor-section">
            <MonacoEditor query={currentQuery} setQuery={setQuery} />
            <div className="editor-panel-wrapper">
              <EditorPanel executeQuery={executeQuery} saveQuery={saveQuery} clearQuery={clearQuery} />
            </div>
          </div>

          {/* Query Output below */}
          <div className="query-output-section">
            <QueryOutput queryResult={queryResult} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorPage;
