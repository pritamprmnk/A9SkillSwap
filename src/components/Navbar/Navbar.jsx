// src/components/Navbar/Navbar.jsx

import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import "./Navbar.css";
import { AuthContext } from '../../Contexts/AuthContext/AuthContext';
import defaultAvatar from "../../assets/avatar.png";


const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);

    const handleSignOut = () => {
        signOutUser()
            .then(() => {})
            .catch(error => console.log(error));
    };

    return (
        <nav className="w-full bg-white shadow-sm py-3 px-6 flex items-center justify-between">

            {/* Logo */}
            <h1 className="text-2xl font-bold text-gray-800">
                Skill<span className="text-blue-600">Swap</span>
            </h1>

            {/* Middle Menu */}
            <div className="flex items-center gap-6">
                <NavLink to="/" className="text-gray-700 hover:text-blue-600 font-medium">
                    Home
                </NavLink>

                {/* My Profile only when logged in */}
                {user && (
                    <NavLink 
                        to="/profile" 
                        className="text-gray-700 hover:text-blue-600 font-medium"
                    >
                        My Profile
                    </NavLink>
                )}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4">

                {user ? (
                    <div className="flex items-center gap-4">

                        {/* Avatar with Tooltip */}
                        <div className="relative group cursor-pointer">
                            <img
        src={user.photoURL || defaultAvatar}
        alt="avatar"
        className="w-10 h-10 rounded-full border"
    />

                            {/* Tooltip */}
                            <div className="absolute hidden group-hover:block bg-black text-white text-sm rounded-md px-3 py-2 -left-10 top-12 w-40 shadow-lg z-50">
                                <p className="font-semibold">{user.name || "User"}</p>
                                <p className="text-xs opacity-80">{user.email}</p>
                            </div>
                        </div>

                        {/* Sign Out Button */}
                        <button
                            onClick={handleSignOut}
                            className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-xl hover:bg-blue-700"
                        >
                            Sign Out
                        </button>
                    </div>
                ) : (
                    <>
                        <Link to="/login" className="text-gray-700 font-semibold hover:text-blue-600">
                            Log In
                        </Link>
                        <Link
                            to="/signup"
                            className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-xl hover:bg-blue-700"
                        >
                            Sign Up
                        </Link>
                    </>
                )}

            </div>

        </nav>
    );
};

export default Navbar;
