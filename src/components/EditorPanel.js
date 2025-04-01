'use client'
import useQueryStore from "@/app/store";

const EditorPanel = () => {
  const { executeQuery, saveQuery, clearQuery } = useQueryStore();

  return (
    <div className="flex gap-4 p-4 border rounded">
      <button onClick={executeQuery} className="bg-blue-500 text-white px-4 py-2 rounded">Run</button>
      <button onClick={saveQuery} className="bg-green-500 text-white px-4 py-2 rounded">Save</button>
      <button onClick={clearQuery} className="bg-red-500 text-white px-4 py-2 rounded">Clear</button>
    </div>
  );
};

export default EditorPanel;
