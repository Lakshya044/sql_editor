'use client';
import Editor from "@monaco-editor/react";
import useQueryStore from "@/app/store";
import '@/styles/MonacoEditor.css'

const MonacoEditor = () => {
  const { currentQuery, setQuery } = useQueryStore();

  return (
    <div className="monaco-editor-container">
      <Editor
        defaultLanguage="sql"
        theme="vs-light"
        value={currentQuery}
        onChange={(value) => setQuery(value)}
        options={{
          minimap: { enabled: false },
          fontSize: 18,
          automaticLayout: true,
        }}
      />
    </div>
  );
};

export default MonacoEditor;
