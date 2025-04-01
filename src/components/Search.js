'use client'
import useQueryStore from "@/app/store";

const QuerySearch = () => {
  const { searchQueries, setQuery } = useQueryStore();

  return (
    <div className="p-4 border rounded">
      <h3 className="text-lg font-bold">Query Search</h3>
      <ul>
        {searchQueries.map((query, index) => (
          <li key={index} className="cursor-pointer text-blue-500" onClick={() => setQuery(query)}>
            {query}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuerySearch;
