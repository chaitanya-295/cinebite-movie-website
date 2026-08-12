import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { IoReorderThreeOutline } from "react-icons/io5";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="relative sticky top-0 z-50 bg-[#020617] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 w-fit -ml-16"
        >
          <img
            src={logo}
            alt="CineBite Logo"
            className="w-10 h-10 object-contain"
          />

          <span className="text-2xl font-bold text-white">
            Cine<span className="text-cyan-400">Bite</span>
          </span>
        </Link>

        {/* Center Navigation */}
        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 items-center gap-10">

          <Link
            to="/"
            className="text-gray-400 hover:text-cyan-400 transition-colors"
          >
            Home
          </Link>

          <Link
            to="/movies"
            className="text-gray-400 hover:text-cyan-400 transition-colors"
          >
            Movies
          </Link>

          <Link
            to="/popular"
            className="text-gray-400 hover:text-cyan-400 transition-colors"
          >
            Popular
          </Link>

          <Link
            to="/top-rated"
            className="text-gray-400 hover:text-cyan-400 transition-colors"
          >
            Top Rated
          </Link>

          <Link
            to="/favorites"
            className="text-gray-400 hover:text-cyan-400 transition-colors"
          >
            Favorites
          </Link>
        </div>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-5 absolute right-24 md:right-28 top-1/2 -translate-y-1/2">

          <Link
            to="/login"
            className="text-gray-300 hover:text-cyan-400 transition-colors"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="px-5 py-2 rounded-full bg-cyan-400 text-slate-950 font-semibold hover:bg-cyan-300 transition-colors"
          >
            Sign Up
          </Link>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;