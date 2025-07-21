import React from "react";

const Footer = () => {
  return (
    <footer className="mt-auto p-4 border-t border-gray-200 bg-gray-50 text-center text-sm text-gray-500">
      © {new Date().getFullYear()} Product List. All rights reserved.
    </footer>
  );
};

export default Footer;
