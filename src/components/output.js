'use client';
import useQueryStore from "@/app/store";
import "@/styles/QueryOutput.css"; // Import the CSS file

const QueryOutput = () => {
  const { queryResult } = useQueryStore();

  return (
    <div className="output-container">
      <h3 className="output-title">Query Output</h3>
      {queryResult.length > 0 ? (
        <div className="query-table-container">
          <table className="query-table">
            <thead>
              <tr>
                {Object.keys(queryResult[0]).map((key) => (
                  <th key={key}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {queryResult.map((row, index) => (
                <tr key={index}>
                  {Object.values(row).map((value, idx) => (
                    <td key={idx}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="no-data">No data available</p>
      )}
    </div>
  );
};

export default QueryOutput;
