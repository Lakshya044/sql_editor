
"use client";
import { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";
import useQueryStore from "@/app/store";
import "@/styles/MonacoEditor.css";

const MonacoEditor = () => {
  const { currentQuery, setQuery } = useQueryStore();
  const [fontSize, setFontSize] = useState(18); 

 
  const updateFontSize = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth > 1200) {
      setFontSize(18);
    } else if (screenWidth > 900) {
      setFontSize(16);
    } else if (screenWidth > 600) {
      setFontSize(14);
    } else {
      setFontSize(12);
    }
  };

  
  useEffect(() => {
    updateFontSize(); 
    window.addEventListener("resize", updateFontSize);
    return () => window.removeEventListener("resize", updateFontSize);
  }, []);

  return (
    <div className="monaco-editor-container">
      <Editor
        defaultLanguage="sql"
        theme="vs-light"
        value={currentQuery}
        onChange={(value) => setQuery(value)}
        options={{
          minimap: { enabled: false },
          fontSize: fontSize, 
          automaticLayout: true,
        }}
      />
    </div>
  );
};

export default MonacoEditor;
