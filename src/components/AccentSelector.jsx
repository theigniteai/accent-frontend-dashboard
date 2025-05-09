// Dropdown to select accent
import React, { useState } from "react";

const AccentSelector = () => {
  const [selectedAccent, setSelectedAccent] = useState("US");

  const accents = ["US", "UK", "Australian", "Indian", "Neutral"];

  const handleChange = (e) => {
    setSelectedAccent(e.target.value);
    console.log("Accent selected:", e.target.value);
  };

  return (
    <div className="w-full max-w-sm">
      <label className="block font-semibold text-gray-700 mb-2">Choose Accent:</label>
      <select
        className="w-full border px-4 py-2 rounded text-gray-800"
        value={selectedAccent}
        onChange={handleChange}
      >
        {accents.map((accent) => (
          <option key={accent} value={accent}>
            {accent}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AccentSelector;
