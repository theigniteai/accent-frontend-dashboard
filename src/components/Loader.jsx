import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center py-4">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-purple-600"></div>
    </div>
  );
};

export default Loader;
