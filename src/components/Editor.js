'use client'
import Editor from "@monaco-editor/react";
import useQueryStore from "@/app/store";

const MonacoEditor = () => {
  const { currentQuery, setQuery } = useQueryStore();

  return (
    <Editor
      height="200px"
      defaultLanguage="sql"
      theme="vs-dark"
      value={currentQuery}
      onChange={(value) => setQuery(value)}
      options={{
        minimap: { enabled: false },
        fontSize: 14,
        automaticLayout: true,
      }}
    />
  );
};

export default MonacoEditor;
