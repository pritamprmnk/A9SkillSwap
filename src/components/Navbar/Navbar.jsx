import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {

    return (
    <div className="w-full bg-white shadow-sm py-3 px-6 flex items-center justify-between">
        {/* Left Logo */}
    <div className="flex items-center gap-2">
        <h1 className="text-2xl font-bold text-gray-800">Skill<span className="text-blue-600">Swap</span></h1>
    </div>


        {/* Middle Menu */}
    <div className="flex items-center gap-6">
        <NavLink to="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</NavLink>
        <NavLink to="/profile" className="text-gray-700 hover:text-blue-600 font-medium">My Profile</NavLink>
    </div>


        {/* Right Buttons */}
    <div className="flex items-center gap-4">
        <Link to="/login" className="text-gray-700 font-semibold hover:text-blue-600">Log In</Link>
        <Link to="/signup"className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-xl hover:bg-blue-700">Sign Up</Link>
    </div>
    </div>
    );
};

export default Navbar;