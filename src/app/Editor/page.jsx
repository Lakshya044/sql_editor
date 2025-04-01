"use client";
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
      <Sidebar queries={predefinedQueries} history={queryHistory} onSelectQuery={setQuery} />
      <div className="editor-wrapper">
        <MonacoEditor query={currentQuery} setQuery={setQuery} />
        <EditorPanel executeQuery={executeQuery} saveQuery={saveQuery} clearQuery={clearQuery} />
        <QueryOutput queryResult={queryResult} />
      </div>
    </div>
  );
};

export default EditorPage;
