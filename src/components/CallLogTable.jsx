// Table showing past calls
import React from "react";

const CallLogTable = () => {
  const logs = [
    { date: "2025-05-01", duration: "12 min", accent: "US" },
    { date: "2025-05-03", duration: "7 min", accent: "UK" },
    { date: "2025-05-05", duration: "15 min", accent: "Australian" },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded shadow">
        <thead>
          <tr className="bg-purple-700 text-white text-left">
            <th className="py-3 px-4">Date</th>
            <th className="py-3 px-4">Duration</th>
            <th className="py-3 px-4">Accent Used</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, index) => (
            <tr key={index} className="border-b hover:bg-gray-100">
              <td className="py-2 px-4">{log.date}</td>
              <td className="py-2 px-4">{log.duration}</td>
              <td className="py-2 px-4">{log.accent}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CallLogTable;
