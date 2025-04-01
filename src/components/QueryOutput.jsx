

'use client';
import { useState } from "react";
import useQueryStore from "@/app/store";
import "@/styles/QueryOutput.css"; 

const QueryOutput = () => {
  const { queryResult } = useQueryStore();

  // const exportToCSV = () => {
  //   if (!queryResult || queryResult.length === 0) {
  //     alert("No data available to export.");
  //     return;
  //   }

  //   const headers = Object.keys(queryResult[0]).join(",");
  //   const rows = queryResult.map(row => Object.values(row).join(",")).join("\n");
  //   const csvContent = `data:text/csv;charset=utf-8,${headers}\n${rows}`;

  //   const encodedUri = encodeURI(csvContent);
  //   const link = document.createElement("a");
  //   link.setAttribute("href", encodedUri);
  //   link.setAttribute("download", "query_results.csv");
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };
  const exportToCSV = () => {
    if (!queryResult || queryResult.length === 0) {
      alert("No data available to export.");
      return;
    }
  
    const headers = Object.keys(queryResult[0]).join(",");
    const rows = queryResult.flat().map(row => 
      Object.values(row).map(value => `"${value}"`).join(",")
    ).join("\n");
  
    const csvContent = `${headers}\n${rows}`;
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.setAttribute("download", "query_results.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  return (
    <div className="output-container">
     
      <div className="output-header">
        <h3 className="output-title">Query Output</h3>
        <button onClick={exportToCSV} className="export-btn">
          Export CSV
        </button>
      </div>

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
        <p className="no-data">No data available. Run a Predefined query to see the output.</p>

      )}
    </div>
  );
};

export default QueryOutput;