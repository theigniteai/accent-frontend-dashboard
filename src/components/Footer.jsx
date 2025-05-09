// Footer with links and branding
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-purple-800 text-white py-6 text-center mt-20">
      <p className="text-sm">© {new Date().getFullYear()} AccentShift. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
