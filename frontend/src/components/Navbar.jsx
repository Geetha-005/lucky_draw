import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">My Contest</Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/about" className="hover:text-gray-300">About</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact Us</Link>
          <Link to="/events" className="hover:text-gray-300">Events</Link>
          {/* <Link to="/register" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Participate</Link> */}
          {/* <Link to="/admin-login" className="hover:text-gray-300 ml-4">Admin Login</Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;