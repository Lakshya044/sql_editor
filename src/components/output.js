'use client'
import useQueryStore from "@/app/store";

const QueryOutput = () => {
  const { queryResult } = useQueryStore();

  return (
    <div className="p-4 border rounded">
      <h3 className="text-lg font-bold">Query Output</h3>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            {queryResult.length > 0 &&
              Object.keys(queryResult[0]).map((key) => <th key={key} className="border p-2">{key}</th>)}
          </tr>
        </thead>
        <tbody>
          {queryResult.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((value, idx) => <td key={idx} className="border p-2">{value}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QueryOutput;
