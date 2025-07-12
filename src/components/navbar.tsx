import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-xl font-bold text-blue-600">
        MyApp
      </div>

      {/* Button */}
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition">
        Sign In
      </button>
    </nav>
  );
};

export default Navbar;
