import Link from "next/link";
import React from "react";
import CartBadge from "./CartBadge";

const Header = () => {
  return (
    <header className="flex items-center gap-16 p-4 border-b border-gray-200 bg-white sticky top-0 z-10">
      <div className="font-bold text-2xl">
        <Link href="/">Product List</Link>
      </div>
      <nav>
        <ul className="flex gap-6 list-none m-0 p-0">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
        </ul>
      </nav>
      <div className="ml-auto">
        <CartBadge />
      </div>
    </header>
  );
};

export default Header;
