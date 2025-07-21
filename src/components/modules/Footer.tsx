import React from "react";

const Footer = () => {
  return (
    <footer style={{
      marginTop: "auto",
      padding: "1rem 2rem",
      borderTop: "1px solid #eee",
      background: "#fafafa",
      textAlign: "center",
      fontSize: "0.95rem",
      color: "#888",
    }}>
      © {new Date().getFullYear()} Product List. All rights reserved.
    </footer>
  );
};

export default Footer;
