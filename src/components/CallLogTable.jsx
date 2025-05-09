// CallLogTable.jsx
import React from "react";

const CallLogTable = () => {
  const dummyCalls = [
    { date: "2025-05-01", duration: "3:15", accent: "British" },
    { date: "2025-05-02", duration: "5:22", accent: "American" },
  ];

  return (
    <table className="w-full bg-white shadow rounded-lg">
      <thead>
        <tr className="bg-purple-100 text-left">
          <th className="p-2">Date</th>
          <th className="p-2">Duration</th>
          <th className="p-2">Accent Used</th>
        </tr>
      </thead>
      <tbody>
        {dummyCalls.map((call, index) => (
          <tr key={index} className="border-t">
            <td className="p-2">{call.date}</td>
            <td className="p-2">{call.duration}</td>
            <td className="p-2">{call.accent}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CallLogTable;
