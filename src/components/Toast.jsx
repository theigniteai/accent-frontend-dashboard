import React from "react";

const Toast = ({ message, type = "success" }) => {
  return (
    <div
      className={`fixed top-4 right-4 px-4 py-2 rounded shadow text-white ${
        type === "error" ? "bg-red-600" : "bg-green-600"
      }`}
    >
      {message}
    </div>
  );
};

export default Toast;
