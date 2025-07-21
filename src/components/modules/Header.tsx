import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "1rem 2rem",
      borderBottom: "1px solid #eee",
      background: "#fff",
      position: "sticky",
      top: 0,
      zIndex: 1000,
    }}>
      <div style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
        <Link href="/">Product List</Link>
      </div>
      <nav>
        <ul style={{ display: "flex", gap: "1.5rem", listStyle: "none", margin: 0, padding: 0 }}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
