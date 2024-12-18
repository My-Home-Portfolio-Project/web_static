import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">myhome</div>

        {/* Search Bar */}
        <div className="flex-1 mx-4">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Links */}
        <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-600 hover:text-blue-600">
            Realtors Corner
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600">
            Help Center
          </a>
          {/* Country Dropdown */}
          <select className="border rounded-md px-3 py-2">
            <option>Country</option>
            <option>Kenya</option>
            <option>USA</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;