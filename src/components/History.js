'use client'
import useQueryStore from "@/app/store";

const QueryHistory = () => {
  const { queryHistory, setQuery } = useQueryStore();

  return (
    <div className="p-4 border rounded">
      <h3 className="text-lg font-bold">Query History</h3>
      <ul>
        {queryHistory.map((query, index) => (
          <li key={index} className="cursor-pointer text-green-500" onClick={() => setQuery(query)}>
            {query}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QueryHistory;
