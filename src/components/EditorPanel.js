'use client';
import useQueryStore from "@/app/store";
import "@/styles/EditorPanel.css";
import { FaPlay, FaSave, FaTimes } from "react-icons/fa"; 

const EditorPanel = () => {
  const { executeQuery, saveQuery, clearQuery, message } = useQueryStore(); 

  return (
    <div className="editor-panel">
     
      {message && (
        <div className="error-message">
          <div className="alert alert-danger">{message}</div>
        </div>
      )}

      <button onClick={executeQuery} className="panel-button run" title="Run (Ctrl + R)">
        <FaPlay className="icon" /> Run
      </button>
      <button onClick={saveQuery} className="panel-button save "title="Save (Ctrl + S)">
        <FaSave className="icon" /> Save
      </button>
      <button onClick={clearQuery} className="panel-button clear " title="Clear (Ctrl + L)">
        <FaTimes className="icon" /> Clear
      </button>
    </div>
  );
};

export default EditorPanel;
