import React from "react";

// Always render children, no login check
const PrivateRoute = ({ children }) => {
  return children;
};

export default PrivateRoute;
