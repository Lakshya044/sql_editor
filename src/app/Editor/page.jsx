'use client'
import React, { useState } from "react";
import Sidebar from "@/components/sidebar";
import MonacoEditor from "@/components/Editor";
import EditorPanel from "@/components/EditorPanel";
import "@/styles/EditorPage.css";

const EditorPage = () => {
  const [query, setQuery] = useState("");
  const [history, setHistory] = useState([]);

  const predefinedQueries = [
    "SELECT * FROM users;",
    "SELECT name, age FROM employees;",
    "SELECT * FROM orders WHERE status = 'delivered';",
  ];

  const executeQuery = () => {
    setHistory([...history, query]);
  };

  const saveQuery = () => {
    alert("Query saved!");
  };

  const clearQuery = () => {
    setQuery("");
  };

  return (
    <div className="editor-page">
      <Sidebar queries={predefinedQueries} history={history} onSelectQuery={setQuery} />
      <div className="editor-wrapper">
        <MonacoEditor query={query} setQuery={setQuery} />
        <EditorPanel executeQuery={executeQuery} saveQuery={saveQuery} clearQuery={clearQuery} />
      </div>
    </div>
  );
};

export default EditorPage;
