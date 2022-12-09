import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="flex justify-between items-center h-16 bg-black text-gray-200 relative shadow-md text-black"
      role="navigation"
    >
      <Link to="/" className="pl-8 text-green-300 text-4xl italic font-medium ">
        KFB
      </Link>
      <div className="px-4 cursor-pointer md:hidden">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>

      <div className="pr-8 md:block hidden text-1xl   text-xl font-sans ">
        <Link className="p-4 hover:text-green-300 text-base" to="/">
          Home
        </Link>
        <Link className="p-4 hover:text-green-300 text-base" to="/fashion">
          Fashion
        </Link>
        <Link className="p-4 hover:text-green-300 text-base" to="/music">
          Music
        </Link>
        <Link className="p-4 hover:text-green-300 text-base" to="/about">
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
