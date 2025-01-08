import React from "react";
import { FaSearch, FaShoppingCart, FaUserCircle } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full border-b border-gray-300">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/" passHref>
          <h1 className="text-2xl font-semibold cursor-pointer mb-4 md:mb-0">
            Avion
          </h1>
        </Link>

        {/* Additional Links */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 text-gray-600">
          <Link href="/about" className="hover:text-black">
            About us
          </Link>
          <Link href="/contact" className="hover:text-black">
            Contact
          </Link>
          <Link href="/blog" className="hover:text-black">
            Blog
          </Link>
          <FaSearch className="text-xl cursor-pointer" />
          <FaShoppingCart className="text-xl cursor-pointer" />
          <FaUserCircle className="text-xl cursor-pointer" />
        </div>
      </div>

      {/* Main Navigation Links */}
      <nav className="flex flex-wrap justify-center space-x-2 md:space-x-6 py-2 text-gray-600">
        <Link href="/product_listing" className="hover:text-black">
          All products
        </Link>
        <Link href="#" className="hover:text-black">
          Plant pots
        </Link>
        <Link href="#" className="hover:text-black">
          Ceramics
        </Link>
        <Link href="#" className="hover:text-black">
          Tables
        </Link>
        <Link href="#" className="hover:text-black">
          Chairs
        </Link>
        <Link href="#" className="hover:text-black">
          Crockery
        </Link>
        <Link href="#" className="hover:text-black">
          Tableware
        </Link>
        <Link href="#" className="hover:text-black">
          Cutlery
        </Link>
      </nav>
    </header>
  );
};

export default Header;
